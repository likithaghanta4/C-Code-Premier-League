const mongoose = require('mongoose');
const User = require('./src/models/User');

mongoose.connect('mongodb://127.0.0.1:27017/cpl')
  .then(async () => {
    console.log("Connected to MongoDB.");
    
    // Determine sort fields based on category
    let categorySort = { xp: -1 };
    
    // Base Pipeline to calculate Global Rank
    const basePipeline = [
      {
        $addFields: {
          completedTopicsCount: { $size: { $ifNull: ['$completedTopics', []] } },
          completedPracticeCount: { $size: { $ifNull: ['$completedPracticeTopics', []] } }
        }
      },
      {
        $addFields: {
          sortScore: {
            $add: [
              { $multiply: [{ $ifNull: ['$xp', 0] }, 1000] },
              { $ifNull: ['$assessmentScore', 0] }
            ]
          }
        }
      },
      { $sort: { sortScore: -1, fullName: 1 } },
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

    try {
      const result = await User.aggregate(basePipeline).limit(1);
      console.log("Success! Document:", result);
    } catch(err) {
      console.error("Aggregation Error:", err.message);
    }
    
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
