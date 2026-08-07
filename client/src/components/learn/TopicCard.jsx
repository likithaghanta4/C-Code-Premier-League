import { Link } from 'react-router-dom';
import { CheckCircle2, Lock, Clock, PlayCircle } from 'lucide-react';
import { DIFFICULTY_COLORS, ROUTES } from '../../utils/constants';

export default function TopicCard({ topic, isLocked, isCompleted, isCurrent, baseUrl = ROUTES.TOPIC }) {
  console.log('TopicCard render:', { title: topic.title, baseUrl });
  const Icon = topic.icon;

  let statusStyles = '';
  let statusText = '';
  let StatusIcon = null;

  if (isLocked) {
    statusStyles = 'opacity-60 grayscale-[0.5]';
    statusText = 'Locked';
    StatusIcon = Lock;
  } else if (isCompleted) {
    statusStyles = 'border-primary-500/30 bg-primary-900/10';
    statusText = 'Completed';
    StatusIcon = CheckCircle2;
  } else if (isCurrent) {
    statusStyles = 'border-accent-500/50 bg-accent-900/10 shadow-[0_0_15px_rgba(var(--accent-500),0.1)]';
    statusText = 'In Progress';
    StatusIcon = PlayCircle;
  } else {
    statusStyles = 'hover:border-dark-500 hover:bg-dark-800/50';
    statusText = 'Unlocked';
    StatusIcon = PlayCircle;
  }

  const CardWrapper = isLocked ? 'div' : Link;
  const to = isLocked ? undefined : baseUrl.replace(':topicId', topic.id);

  return (
    <CardWrapper
      to={to}
      className={`block relative overflow-hidden rounded-2xl border border-dark-700/50 glass-card p-5 transition-all duration-300 ${statusStyles}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon Box */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isLocked ? 'bg-dark-800 text-dark-500' : 
          isCompleted ? 'bg-primary-500/20 text-primary-400' :
          isCurrent ? 'bg-accent-500/20 text-accent-400' :
          'bg-dark-800 text-dark-300'
        }`}>
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold tracking-wider uppercase text-dark-500">
              Lesson {topic.number}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isLocked ? 'bg-dark-800 text-dark-500' : isCompleted ? 'bg-primary-500/10 text-primary-400' : 'bg-dark-800 text-dark-300'}`}>
              {statusText}
            </span>
          </div>

          <h3 className={`text-base font-semibold mb-2 truncate ${isLocked ? 'text-dark-400' : 'text-dark-100'}`}>
            {topic.title}
          </h3>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className={isLocked ? 'text-dark-600' : DIFFICULTY_COLORS[topic.difficulty]}>
              {topic.difficulty}
            </span>
            <span className={`flex items-center gap-1 ${isLocked ? 'text-dark-600' : 'text-dark-400'}`}>
              <Clock size={12} />
              {topic.duration}
            </span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar (if completed or current) */}
      {(isCompleted || isCurrent) && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-800">
          <div 
            className={`h-full ${isCompleted ? 'bg-primary-500' : 'bg-accent-500 w-1/2'}`} 
            style={{ width: isCompleted ? '100%' : undefined }}
          />
        </div>
      )}
    </CardWrapper>
  );
}
