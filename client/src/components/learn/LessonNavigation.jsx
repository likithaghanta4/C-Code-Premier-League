import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, LayoutGrid } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

export default function LessonNavigation({ prevTopic, nextTopic, isCompleted, onMarkComplete, baseUrl = ROUTES.TOPIC, roadmapUrl = ROUTES.LEARN }) {
  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-700/50">
      <div className="flex gap-3 w-full sm:w-auto">
        {prevTopic ? (
          <Link
            to={baseUrl.replace(':topicId', prevTopic.id)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-dark-300 bg-dark-800 hover:bg-dark-700 hover:text-white transition-all border border-dark-700/50"
          >
            <ArrowLeft size={16} />
            Previous
          </Link>
        ) : (
          <div className="flex-1 sm:flex-none" />
        )}
        
        <Link
          to={roadmapUrl}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-dark-300 bg-dark-800 hover:bg-dark-700 hover:text-white transition-all border border-dark-700/50"
        >
          <LayoutGrid size={16} />
          Roadmap
        </Link>
      </div>
      
      <div className="flex gap-3 w-full sm:w-auto">
        {!isCompleted ? (
          <button
            onClick={onMarkComplete}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-primary-500 to-cyan-500 hover:opacity-90 shadow-lg shadow-primary-500/25 transition-all"
          >
            <CheckCircle size={16} />
            Mark as Complete
          </button>
        ) : nextTopic ? (
          <Link
            to={baseUrl.replace(':topicId', nextTopic.id)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:opacity-90 shadow-lg shadow-accent-500/25 transition-all"
          >
            Next Lesson
            <ArrowRight size={16} />
          </Link>
        ) : (
          <button
            disabled
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-dark-400 bg-dark-800 cursor-not-allowed border border-dark-700/50"
          >
            Course Completed! 🎉
          </button>
        )}
      </div>
    </div>
  );
}
