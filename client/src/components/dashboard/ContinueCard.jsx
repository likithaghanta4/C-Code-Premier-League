import { Link, useNavigate } from 'react-router-dom';
import { GlassCard } from '../../components/ui';
import { Play, ChevronRight, Zap, Trophy, Target, BookOpen } from 'lucide-react';

export default function ContinueCard({ 
  title, 
  completedCount, 
  totalCount, 
  continueTopic, 
  roadmapUrl, 
  topicUrlBase,
  emptyMessage = "No lessons completed yet",
  emptySubMessage = "Start your journey now!"
}) {
  const navigate = useNavigate();
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleContinue = () => {
    if (continueTopic) {
      navigate(topicUrlBase.replace(':topicId', continueTopic.id));
    }
  };

  return (
    <GlassCard padding="p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Play size={18} className="text-primary-400" />
          <h3 className="text-base font-semibold text-dark-200">{title}</h3>
        </div>
        <Link to={roadmapUrl} className="text-xs text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
          View All <ChevronRight size={12} />
        </Link>
      </div>

      {completedCount === 0 ? (
        <div className="text-center py-8">
          <Zap size={36} className="mx-auto mb-3 text-dark-600" />
          <p className="text-sm text-dark-400 mb-1">{emptyMessage}</p>
          <p className="text-xs text-dark-600 mb-4">{emptySubMessage}</p>
          <button
            onClick={handleContinue}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            <BookOpen size={16} />
            Start
          </button>
        </div>
      ) : progressPercent === 100 ? (
        <div className="text-center py-8">
          <Trophy size={36} className="mx-auto mb-3 text-warning-400" />
          <p className="text-sm text-dark-200 mb-1">Completed!</p>
          <p className="text-xs text-dark-400 mb-4">You have mastered this roadmap.</p>
          <Link
            to={roadmapUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-800 text-dark-300 border border-dark-700 text-sm font-medium rounded-xl hover:bg-dark-700 transition-all"
          >
            View Roadmap
          </Link>
        </div>
      ) : (
        <div className="text-center py-8">
          <Target size={36} className="mx-auto mb-3 text-primary-400" />
          <p className="text-sm text-dark-300 mb-1">Keep going! You&apos;re making progress.</p>
          <p className="text-xs text-dark-500 mb-4">{completedCount} topic{completedCount !== 1 ? 's' : ''} completed so far.</p>
          <button
            onClick={handleContinue}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            <Play size={16} className="fill-current" />
            Continue: {continueTopic?.title}
          </button>
        </div>
      )}
    </GlassCard>
  );
}
