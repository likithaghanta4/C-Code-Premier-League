import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageWrapper } from '../../components/common';
import PageHeader from '../../components/common/PageHeader';
import { GlassCard } from '../../components/ui';
import { useAuth } from '../../contexts/AuthContext';
import { getGreeting, formatNumber } from '../../utils/helpers';
import { ROUTES } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { COURSE_TOPICS, PRACTICE_TOPICS } from '../../data/courseData';
import ContinueCard from '../../components/dashboard/ContinueCard';
import StreakCard from '../../components/dashboard/StreakCard';
import { leaderboardService } from '../../services/leaderboard.service';
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  Trophy,
  Flame,
  Star,
  Coins,
  User,
  Hash,
  Building2,
  GraduationCap,
  Target,
  Clock,
  ChevronRight,
  Terminal,
  HelpCircle,
  Award,
  Briefcase,
  Swords,
  MonitorPlay,
  Users2
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const [globalRank, setGlobalRank] = useState('--');

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const res = await leaderboardService.getLeaderboard({ limit: 1 });
        if (res.success && res.currentUser) {
          setGlobalRank(res.currentUser.globalRank);
        }
      } catch (error) {
        console.error("Failed to fetch rank:", error);
      }
    };
    fetchRank();
  }, []);

  // Dynamic stats from MongoDB user data
  const stats = [
    { icon: BookOpen, label: 'Lessons', value: formatNumber(user?.completedTopics?.length || 0), color: 'text-primary-400' },
    { icon: Code2, label: 'Problems', value: formatNumber(user?.solvedProblems?.length || 0), color: 'text-secondary-400' },
    { icon: Trophy, label: 'Rank', value: globalRank, color: 'text-warning-400' },
    { icon: Flame, label: 'Streak', value: formatNumber(user?.streak?.current || 0), color: 'text-error-400' },
    { icon: Star, label: 'XP', value: formatNumber(user?.xp || 0), color: 'text-accent-400' },
    { icon: Coins, label: 'Coins', value: formatNumber(user?.coins || 0), color: 'text-warning-400' },
  ];



  // Recent Activity
  const recentActivity = [
    { icon: BookOpen, text: 'Welcome to CPL! Start by exploring the Learn C section.', time: 'Just now', color: 'text-primary-400' },
    { icon: Award, text: `Account created for ${user?.department || 'CSD'} department.`, time: new Date(user?.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }), color: 'text-warning-400' },
  ];

  // Learn C Data
  const learnTopicsCount = COURSE_TOPICS.length;
  const learnCompletedCount = user?.completedTopics?.length || 0;
  const continueLearnTopic = useMemo(() => {
    if (user?.lastVisitedTopic && !user?.completedTopics?.includes(user.lastVisitedTopic)) {
      const topic = COURSE_TOPICS.find((t) => t.id === user.lastVisitedTopic);
      if (topic) return topic;
    }
    const firstIncomplete = COURSE_TOPICS.find((t) => !user?.completedTopics?.includes(t.id));
    return firstIncomplete || COURSE_TOPICS[COURSE_TOPICS.length - 1];
  }, [user?.lastVisitedTopic, user?.completedTopics]);

  // Practice Data
  const practiceTopicsCount = PRACTICE_TOPICS.length;
  const practiceCompletedCount = user?.completedPracticeTopics?.length || 0;
  const continuePracticeTopic = useMemo(() => {
    if (user?.lastVisitedPractice && !user?.completedPracticeTopics?.includes(user.lastVisitedPractice)) {
      const topic = PRACTICE_TOPICS.find((t) => t.id === user.lastVisitedPractice);
      if (topic) return topic;
    }
    const firstIncomplete = PRACTICE_TOPICS.find((t) => !user?.completedPracticeTopics?.includes(t.id));
    return firstIncomplete || PRACTICE_TOPICS[PRACTICE_TOPICS.length - 1];
  }, [user?.lastVisitedPractice, user?.completedPracticeTopics]);

  return (
    <PageWrapper>
      <PageHeader
        title={`${getGreeting()}, ${user?.fullName?.split(' ')[0] || 'Student'} 👋`}
        description="Ready to continue your C programming journey?"
        icon={LayoutDashboard}
      />

      {/* Student Info Card */}
      <GlassCard padding="p-5" className="mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-xl font-bold text-white">
              {user?.fullName ? user.fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : '?'}
            </span>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <div className="flex items-center gap-2">
              <User size={14} className="text-dark-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-dark-500 uppercase tracking-wider">Full Name</p>
                <p className="text-sm font-medium text-dark-200 truncate">{user?.fullName || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Hash size={14} className="text-dark-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-dark-500 uppercase tracking-wider">Roll Number</p>
                <p className="text-sm font-medium text-dark-200">{user?.rollNumber || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={14} className="text-dark-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-dark-500 uppercase tracking-wider">Department</p>
                <p className="text-sm font-medium text-dark-200">{user?.department || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-dark-500 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-dark-500 uppercase tracking-wider">Year</p>
                <p className="text-sm font-medium text-dark-200">{user?.year ? `Year ${user.year}` : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, i) => (
          <GlassCard key={stat.label} padding="p-4" className="text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
              <stat.icon size={24} className={`mx-auto mb-2 ${stat.color}`} />
              <p className="text-xl font-bold text-dark-100">{stat.value}</p>
              <p className="text-xs text-dark-500 mt-1">{stat.label}</p>
            </motion.div>
          </GlassCard>
        ))}
      </div>

      {/* Independent Progress Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ContinueCard 
          title="Continue Learning"
          completedCount={learnCompletedCount}
          totalCount={learnTopicsCount}
          continueTopic={continueLearnTopic}
          roadmapUrl={ROUTES.LEARN}
          topicUrlBase={ROUTES.TOPIC}
          emptyMessage="No theory lessons completed yet"
        />
        <StreakCard streak={user?.streak} />
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <div className="space-y-6">

          <GlassCard padding="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Clock size={18} className="text-secondary-400" />
              <h3 className="text-base font-semibold text-dark-200">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-dark-800/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <activity.icon size={14} className={activity.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-dark-300 leading-relaxed">{activity.text}</p>
                    <p className="text-[10px] text-dark-600 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </PageWrapper>
  );
}
