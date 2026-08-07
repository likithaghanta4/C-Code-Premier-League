const User = require('../models/User');
const mongoose = require('mongoose');

// Constants for total metrics
const TOTAL_LEARN_TOPICS = 24;
const TOTAL_PRACTICE_PROBLEMS = 51;

/**
 * @desc    Get Unified Global Leaderboard Data with Dynamic Weighting
 * @route   GET /api/leaderboard
 * @access  Private
 */
exports.getLeaderboard = async (req, res) => {
  try {
    const { search = '', sortBy = 'rank', page = 1, limit = 20 } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const currentUserId = req.user.id;

    // 1. Get Global Max XP and Coins for Normalization
    const maxStats = await User.aggregate([
      {
        $group: {
          _id: null,
          maxXp: { $max: "$xp" },
          maxCoins: { $max: "$coins" }
        }
      }
    ]);
    
    // Ensure we don't divide by zero if database is empty or max is 0
    const maxXp = (maxStats.length > 0 && maxStats[0].maxXp > 0) ? maxStats[0].maxXp : 1;
    const maxCoins = (maxStats.length > 0 && maxStats[0].maxCoins > 0) ? maxStats[0].maxCoins : 1;

    // 2. Base Pipeline to extract counts and calculate the unified Global Rank
    const basePipeline = [
      {
        $addFields: {
          completedTopicsCount: { $size: { $ifNull: ['$completedTopics', []] } },
          completedPracticeCount: { $size: { $ifNull: ['$completedPracticeTopics', []] } },
          solvedProblemsCount: { $size: { $ifNull: ['$solvedProblems', []] } },
          // Total Learn Topics progress (out of 100)
          learnProgressPercent: { 
            $multiply: [
              { $divide: [ { $size: { $ifNull: ['$completedTopics', []] } }, TOTAL_LEARN_TOPICS ] }, 
              100 
            ] 
          },
          // Total Practice Problems progress (out of 100)
          practiceProgressPercent: { 
            $multiply: [
              { $divide: [ { $size: { $ifNull: ['$solvedProblems', []] } }, TOTAL_PRACTICE_PROBLEMS ] }, 
              100 
            ] 
          },
          // Normalized XP (out of 100)
          xpPercent: {
            $multiply: [ { $divide: [ { $ifNull: ['$xp', 0] }, maxXp ] }, 100 ]
          },
          // Normalized Coins (out of 100)
          coinsPercent: {
            $multiply: [ { $divide: [ { $ifNull: ['$coins', 0] }, maxCoins ] }, 100 ]
          }
        }
      },
      {
        $addFields: {
          // Flexible ranking formula calculating a master sort score
          // Learn Progress = 25%
          // Practice Progress = 35%
          // Final Assessment = 30%
          // XP = 5%
          // Coins = 5%
          sortScore: {
            $round: [
              {
                $add: [
                  { $multiply: ['$learnProgressPercent', 0.25] },
                  { $multiply: ['$practiceProgressPercent', 0.35] },
                  { $multiply: [{ $ifNull: ['$assessmentScore', 0] }, 0.30] },
                  { $multiply: ['$xpPercent', 0.05] },
                  { $multiply: ['$coinsPercent', 0.05] }
                ]
              }, 
              1 // Round to 1 decimal place
            ]
          }
        }
      },
      // Sort by the master score to determine rank
      { $sort: { sortScore: -1, fullName: 1 } },
      // Assign mathematically accurate rank across the entire database
      {
        $setWindowFields: {
          sortBy: { sortScore: -1 },
          output: {
            globalRank: {
              $documentNumber: {}
            }
          }
        }
      }
    ];

    // 3. Handle Search Match
    const searchMatch = search 
      ? { fullName: { $regex: search, $options: 'i' } } 
      : {};

    // 4. Handle Custom Sorting (if user clicks table headers)
    let finalSort = { globalRank: 1 }; // default is by rank
    if (sortBy === 'name') {
      finalSort = { fullName: 1 };
    } else if (sortBy === 'xp') {
      finalSort = { xp: -1 };
    } else if (sortBy === 'coins') {
      finalSort = { coins: -1 };
    } else if (sortBy === 'score') {
      finalSort = { sortScore: -1 };
    }

    // 5. Facet for Top3, Paginated Data, and Metadata
    const facetPipeline = [
      ...basePipeline,
      {
        $facet: {
          // Top 3 globally (regardless of search or pagination)
          topThree: [
            { $limit: 3 },
            { $project: { fullName: 1, profilePicture: 1, xp: 1, coins: 1, sortScore: 1, badges: 1, globalRank: 1 } }
          ],
          // Pagination Metadata
          metadata: [
            { $match: searchMatch },
            { $count: 'total' }
          ],
          // Paginated User Data
          data: [
            { $match: searchMatch },
            { $sort: finalSort },
            { $skip: (pageNum - 1) * limitNum },
            { $limit: limitNum },
            { 
              $project: { 
                password: 0, rollNumber: 0, email: 0 
              } 
            }
          ]
        }
      }
    ];

    const result = await User.aggregate(facetPipeline);
    const topThree = result[0].topThree;
    const data = result[0].data;
    const total = result[0].metadata.length > 0 ? result[0].metadata[0].total : 0;

    // 6. Find current user's global rank
    // We run a small pipeline just to extract the current user with their mathematically accurate rank
    const currentUserPipeline = [
      ...basePipeline,
      { $match: { _id: new mongoose.Types.ObjectId(currentUserId) } },
      { $project: { password: 0, rollNumber: 0, email: 0 } }
    ];
    
    const currentUserResult = await User.aggregate(currentUserPipeline);
    const currentUser = currentUserResult.length > 0 ? currentUserResult[0] : null;

    res.status(200).json({
      success: true,
      topThree,
      data,
      currentUser,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum)
      }
    });

  } catch (error) {
    console.error(`❌ Get Leaderboard Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error fetching leaderboard', error: error.message });
  }
};
