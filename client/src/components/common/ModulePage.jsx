import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import FilterTabs from './FilterTabs';
import TopicCard from '../learn/TopicCard';
import { PageWrapper } from './index';

const FILTER_TABS = [
  { id: 'all', label: 'All Lessons' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'completed', label: 'Completed' },
  { id: 'locked', label: 'Locked' },
];

export default function ModulePage({ 
  title, 
  description, 
  icon: Icon, 
  topics, 
  completedIds, 
  lastVisitedId, 
  baseUrl,
  emptyMessage,
  emptySubMessage
}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Derive Progress Data
  const totalLessons = topics.length;
  const completedLessonsCount = topics.filter(t => completedIds.includes(t.id)).length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;
  const remainingLessonsCount = totalLessons - completedLessonsCount;

  // Determine Continue Topic
  const continueTopic = useMemo(() => {
    if (lastVisitedId && !completedIds.includes(lastVisitedId)) {
      const topic = topics.find((t) => t.id === lastVisitedId);
      if (topic) return topic;
    }
    const firstIncomplete = topics.find((t) => !completedIds.includes(t.id));
    return firstIncomplete || topics[topics.length - 1]; 
  }, [lastVisitedId, completedIds, topics]);

  const handleContinue = () => {
    if (continueTopic) {
      navigate(baseUrl.replace(':topicId', continueTopic.id));
    }
  };

  // Filter & Search Logic
  const filteredTopics = useMemo(() => {
    let filtered = topics.filter((topic) => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (activeFilter === 'completed') {
      filtered = filtered.filter((t) => completedIds.includes(t.id));
    } else if (activeFilter === 'in-progress') {
      filtered = filtered.filter((t) => {
        const isCompleted = completedIds.includes(t.id);
        const currentIndex = topics.findIndex(pt => pt.id === t.id);
        const isFirst = currentIndex === 0;
        const previousId = currentIndex > 0 ? topics[currentIndex - 1].id : null;
        const isUnlocked = isFirst || (previousId && completedIds.includes(previousId));
        return isUnlocked && !isCompleted;
      });
    } else if (activeFilter === 'locked') {
      filtered = filtered.filter((t) => {
        const currentIndex = topics.findIndex(pt => pt.id === t.id);
        const isFirst = currentIndex === 0;
        const previousId = currentIndex > 0 ? topics[currentIndex - 1].id : null;
        const isUnlocked = isFirst || (previousId && completedIds.includes(previousId));
        return !isUnlocked;
      });
    }

    return filtered;
  }, [searchQuery, activeFilter, completedIds, topics]);

  return (
    <PageWrapper>
      {/* Course Overview Header */}
      <div className="glass-card rounded-3xl p-6 md:p-8 mb-8 border border-dark-700/50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-dark-800 rounded-xl border border-dark-700 shadow-inner">
                {Icon && <Icon size={24} className="text-primary-400" />}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-dark-100">
                  {title}
                </h1>
                <p className="text-dark-400 mt-1">{description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
                <p className="text-xs text-dark-500 font-bold uppercase tracking-wider mb-1">Total</p>
                <p className="text-2xl font-bold text-dark-100">{totalLessons}</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
                <p className="text-xs text-dark-500 font-bold uppercase tracking-wider mb-1">Completed</p>
                <p className="text-2xl font-bold text-primary-400">{completedLessonsCount}</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
                <p className="text-xs text-dark-500 font-bold uppercase tracking-wider mb-1">Remaining</p>
                <p className="text-2xl font-bold text-accent-400">{remainingLessonsCount}</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
                <p className="text-xs text-dark-500 font-bold uppercase tracking-wider mb-1">Status</p>
                <p className="text-lg font-bold text-dark-100 flex items-center h-full">
                  {progressPercentage === 100 ? 'Done' : 'Active'}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[320px] bg-dark-900/50 rounded-2xl p-6 border border-dark-700/50">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-medium text-dark-300">Progress</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                {progressPercentage}%
              </span>
            </div>
            <div className="h-2 w-full bg-dark-800 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <button
              onClick={handleContinue}
              className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-[0_0_20px_rgba(var(--primary-500),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary-500),0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              {completedLessonsCount === 0 ? (
                <>
                  <Play size={18} className="fill-current" /> Start
                </>
              ) : progressPercentage === 100 ? (
                <>
                  <CheckCircle2 size={18} /> Completed
                </>
              ) : (
                <>
                  Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <FilterTabs tabs={FILTER_TABS} activeTab={activeFilter} onChange={setActiveFilter} />
        
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-dark-800 border border-dark-700 text-dark-100 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-dark-500"
          />
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-500" />
        </div>
      </div>

      {/* Roadmap Grid */}
      {filteredTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => {
            const isCompleted = completedIds.includes(topic.id);
            const currentIndex = topics.findIndex(pt => pt.id === topic.id);
            const isFirst = currentIndex === 0;
            const previousId = currentIndex > 0 ? topics[currentIndex - 1].id : null;
            const isUnlocked = isFirst || (previousId && completedIds.includes(previousId));
            const isCurrent = isUnlocked && !isCompleted && continueTopic?.id === topic.id;

            return (
              <TopicCard
                key={topic.id}
                topic={topic}
                isLocked={!isUnlocked}
                isCompleted={isCompleted}
                isCurrent={isCurrent}
                baseUrl={baseUrl}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-dark-800/20 border border-dark-700/30 rounded-2xl border-dashed">
          {Icon && <Icon size={40} className="mx-auto text-dark-600 mb-4" />}
          <h3 className="text-lg font-medium text-dark-300 mb-1">{emptyMessage || 'No topics found'}</h3>
          <p className="text-sm text-dark-500">{emptySubMessage || 'Try adjusting your search or filters.'}</p>
        </div>
      )}
    </PageWrapper>
  );
}
