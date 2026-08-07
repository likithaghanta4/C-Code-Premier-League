import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Search, ArrowUpDown, ArrowUp, Coins, Info
} from 'lucide-react';
import { toast } from 'react-toastify';
import { PageWrapper } from '../../components/common';
import { leaderboardService } from '../../services/leaderboard.service';
import { getInitials } from '../../utils/helpers';
import { useAuth } from '../../contexts/AuthContext';

const glassClasses = "bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-gray-200 dark:border-dark-700 shadow-sm rounded-2xl";

const TOTAL_LEARN_TOPICS = 24;
const TOTAL_PRACTICE_PROBLEMS = 51;

export default function LeaderboardPage() {
  const { user: authUser } = useAuth();
  
  // State
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  const [sortBy, setSortBy] = useState('rank'); // rank, name, xp, coins, score
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset page on search
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Data
  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    try {
      const res = await leaderboardService.getLeaderboard({
        search: debouncedSearch,
        sortBy,
        page,
        limit
      });
      if (res.success) {
        setData(res.data);
        setTopThree(res.topThree);
        setCurrentUser(res.currentUser);
        setPagination(res.pagination);
      }
    } catch (error) {
      toast.error('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, sortBy, page, limit]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const handleSort = (column) => {
    if (sortBy === column) return;
    setSortBy(column);
    setPage(1);
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return <span className="text-2xl" title="Rank 1">🥇</span>;
    if (rank === 2) return <span className="text-2xl" title="Rank 2">🥈</span>;
    if (rank === 3) return <span className="text-2xl" title="Rank 3">🥉</span>;
    return <span className="font-bold text-gray-500 dark:text-gray-400">#{rank}</span>;
  };

  const TopUserCard = ({ user, index }) => {
    if (!user) return <div className="w-full md:w-1/3 h-48 rounded-2xl border border-dashed border-gray-300 dark:border-dark-700 opacity-50" />;
    
    // index 0 = rank 2 (left), index 1 = rank 1 (center, larger), index 2 = rank 3 (right)
    const isRank1 = index === 1;
    const height = isRank1 ? 'h-64' : 'h-56';
    const bgClass = isRank1 ? 'bg-gradient-to-b from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-dark-800' : 
                    index === 0 ? 'bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800/30 dark:to-dark-800' :
                    'bg-gradient-to-b from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-dark-800';

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`w-full md:w-1/3 ${height} ${bgClass} rounded-2xl border border-gray-200 dark:border-dark-700 shadow-md flex flex-col items-center justify-center p-6 relative`}
      >
        <div className="absolute top-4">{getRankBadge(user.globalRank)}</div>
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt={user.fullName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-primary-100 dark:bg-primary-900 text-primary-600 flex items-center justify-center font-bold">
              {getInitials(user.fullName)}
            </div>
          )}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white text-center truncate w-full">{user.fullName}</h3>
        
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-gray-500 font-semibold uppercase">XP</span>
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{user.xp || 0}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Score</span>
            <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{user.sortScore || 0}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Coins</span>
            <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
              {user.coins || 0}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  const SortableHeader = ({ column, label, hiddenClass = '' }) => (
    <th 
      className={`px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors ${hiddenClass}`}
      onClick={() => handleSort(column)}
    >
      <div className="flex items-center gap-1">
        {label}
        {sortBy === column ? <ArrowUp size={14} className="text-primary-500" /> : <ArrowUpDown size={14} className="text-gray-300" />}
      </div>
    </th>
  );

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto space-y-6 pb-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Trophy className="text-amber-500" size={32} />
              Global Leaderboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Your ranking is calculated dynamically across Learn, Practice, and Final Assessment modules.
            </p>
          </div>
        </div>

        {/* Formula Explanation Alert */}
        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 p-4 rounded-xl flex gap-3 text-sm text-primary-900 dark:text-primary-200 shadow-sm">
          <Info className="shrink-0 text-primary-500 mt-0.5" size={18} />
          <div>
            <strong>How is the Overall Score calculated?</strong> It's a dynamic weighted average of your entire journey:<br/>
            Learn Progress (25%) + Practice Progress (35%) + Final Assessment (30%) + Normalized XP (5%) + Normalized Coins (5%).
          </div>
        </div>

        {/* Top 3 Showcase */}
        {!loading && topThree.length > 0 && (
          <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 pt-4 pb-8">
            <TopUserCard user={topThree[1]} index={0} />
            <TopUserCard user={topThree[0]} index={1} />
            <TopUserCard user={topThree[2]} index={2} />
          </div>
        )}

        {/* Current User Fixed Card */}
        {currentUser && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className={`p-4 ${glassClasses} border-primary-200 dark:border-primary-900/30 flex flex-wrap items-center justify-between gap-4`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 w-12 h-12 flex items-center justify-center rounded-xl">
                {getRankBadge(currentUser.globalRank)}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Your Rank</p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{currentUser.fullName}</h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-500">Overall Score</p>
                <p className="font-bold text-amber-600 dark:text-amber-400">{currentUser.sortScore || 0}</p>
              </div>
              <div className="text-center hidden sm:block">
                <p className="text-xs text-gray-500">Learn Progress</p>
                <p className="font-bold text-gray-900 dark:text-white">{currentUser.completedTopicsCount || 0} / {TOTAL_LEARN_TOPICS}</p>
              </div>
              <div className="text-center hidden lg:block">
                <p className="text-xs text-gray-500">Practice Progress</p>
                <p className="font-bold text-gray-900 dark:text-white">{currentUser.solvedProblemsCount || 0} / {TOTAL_PRACTICE_PROBLEMS}</p>
              </div>
              <div className="text-center hidden sm:block">
                <p className="text-xs text-gray-500">Total XP</p>
                <p className="font-bold text-primary-600 dark:text-primary-400">{currentUser.xp || 0}</p>
              </div>
              <div className="text-center hidden md:block">
                <p className="text-xs text-gray-500">Coins</p>
                <p className="font-bold text-yellow-600 dark:text-yellow-400">{currentUser.coins || 0}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Table Container */}
        <div className={`${glassClasses} overflow-hidden`}>
          
          {/* Controls */}
          <div className="p-4 border-b border-gray-100 dark:border-dark-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Students</h2>
            <div className="relative w-full sm:w-80">
              <input 
                type="text" 
                placeholder="Search students by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 dark:bg-dark-800/50 whitespace-nowrap">
                <tr>
                  <SortableHeader column="rank" label="Rank" />
                  <SortableHeader column="name" label="Student" />
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Learn Progress</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Practice Progress</th>
                  <SortableHeader column="xp" label="XP" />
                  <SortableHeader column="coins" label="Coins" />
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden xl:table-cell">Assessment</th>
                  <SortableHeader column="score" label="Overall Score" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-dark-700">
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-4 py-4"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-8"></div></td>
                      <td className="px-4 py-4 flex gap-3 items-center">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-dark-700 rounded-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-32"></div>
                      </td>
                      <td className="px-4 py-4 hidden lg:table-cell"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-16"></div></td>
                      <td className="px-4 py-4 hidden lg:table-cell"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-16"></div></td>
                      <td className="px-4 py-4"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div></td>
                      <td className="px-4 py-4"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div></td>
                      <td className="px-4 py-4 hidden xl:table-cell"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-12"></div></td>
                      <td className="px-4 py-4"><div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-16"></div></td>
                    </tr>
                  ))
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center text-gray-500">
                      No leaderboard data available.
                    </td>
                  </tr>
                ) : (
                  data.map((user) => {
                    const isCurrentUser = user._id === authUser?._id;
                    const learnProgress = ((user.completedTopicsCount || 0) / TOTAL_LEARN_TOPICS * 100).toFixed(0);
                    const practiceProgress = ((user.solvedProblemsCount || 0) / TOTAL_PRACTICE_PROBLEMS * 100).toFixed(0);
                    
                    return (
                      <tr key={user._id} className={`hover:bg-gray-50/50 dark:hover:bg-dark-700/50 transition-colors whitespace-nowrap ${isCurrentUser ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''}`}>
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-300">
                          {user.globalRank}
                        </td>
                        <td className="px-4 py-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-800 flex items-center justify-center shrink-0 border border-gray-200 dark:border-dark-600">
                            {user.profilePicture ? (
                              <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-xs font-bold text-gray-500">{getInitials(user.fullName)}</span>
                            )}
                          </div>
                          <span className={`font-medium ${isCurrentUser ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-white'}`}>
                            {user.fullName} {isCurrentUser && '(You)'}
                          </span>
                        </td>
                        
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden lg:table-cell">
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 dark:text-gray-200">{user.completedTopicsCount || 0} / {TOTAL_LEARN_TOPICS}</span>
                            <span className="text-[10px] text-gray-400">{learnProgress}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden lg:table-cell">
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 dark:text-gray-200">{user.solvedProblemsCount || 0} / {TOTAL_PRACTICE_PROBLEMS}</span>
                            <span className="text-[10px] text-gray-400">{practiceProgress}%</span>
                          </div>
                        </td>
                        
                        <td className="px-4 py-3 text-primary-600 dark:text-primary-400 font-medium">
                          {user.xp || 0}
                        </td>
                        <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400 font-medium">
                          <div className="flex items-center gap-1">
                            <Coins size={14} />
                            {user.coins || 0}
                          </div>
                        </td>
                        
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden xl:table-cell">
                          {user.assessmentScore || 0} / 100
                        </td>
                        
                        <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-bold">
                          {user.sortScore || 0}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && pagination.pages > 1 && (
            <div className="p-4 border-t border-gray-100 dark:border-dark-700 flex justify-center gap-2">
              {Array.from({ length: pagination.pages }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    page === i + 1 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </PageWrapper>
  );
}
