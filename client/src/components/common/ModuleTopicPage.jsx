import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { DIFFICULTY_COLORS } from '../../utils/constants';

import { PageWrapper } from './index';
import Breadcrumb from './Breadcrumb';
import LessonNavigation from '../learn/LessonNavigation';
import CompletionModal from '../learn/CompletionModal';
import LessonRenderer from '../learn/content/LessonRenderer';
import ReadingProgress from '../learn/content/ReadingProgress';
import { lessonService } from '../../services/lesson.service';

export default function ModuleTopicPage({ 
  topics, 
  completedIds, 
  lastVisitedId, 
  baseUrl, 
  roadmapUrl,
  breadcrumbRoot,
  onMarkComplete,
  onUpdateLastVisited
}) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [lessonContent, setLessonContent] = useState(null);

  const topicIndex = topics.findIndex((t) => t.id === topicId);
  const topic = topics[topicIndex];
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  const isCompleted = completedIds.includes(topicId);
  const isFirst = topicIndex === 0;
  const isUnlocked = isFirst || (prevTopic && completedIds.includes(prevTopic.id));

  // Handle Route Protection & Auto-save
  useEffect(() => {
    if (!topic) {
      navigate(roadmapUrl);
      return;
    }

    if (!isUnlocked) {
      navigate(roadmapUrl);
      return;
    }

    // Auto-save last visited lesson
    if (lastVisitedId !== topicId) {
      onUpdateLastVisited(topicId);
    }
    
    // Fetch structured content
    lessonService.getLessonContent(topicId).then(data => {
      setLessonContent(data);
      setIsInitializing(false);
    });

  }, [topicId, topic, isUnlocked, navigate, lastVisitedId, roadmapUrl, onUpdateLastVisited]);

  const handleMarkComplete = async () => {
    if (!isCompleted) {
      await onMarkComplete(topicId, nextTopic?.id || topicId);
      setShowCompletionModal(true);
    }
  };

  const handleNextLesson = () => {
    setShowCompletionModal(false);
    if (nextTopic) {
      navigate(baseUrl.replace(':topicId', nextTopic.id));
    }
  };

  if (isInitializing || !topic) {
    return (
      <PageWrapper>
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" />
        </div>
      </PageWrapper>
    );
  }

  const Icon = topic.icon;

  return (
    <PageWrapper>
      <ReadingProgress />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: breadcrumbRoot, to: roadmapUrl },
          { label: `Lesson ${topic.number}: ${topic.title}` },
        ]}
      />

      {/* Lesson Header */}
      <div className="glass-card rounded-3xl p-6 md:p-10 mb-8 border border-dark-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isCompleted ? 'bg-primary-500/20 text-primary-400' : 'bg-accent-500/20 text-accent-400'}`}>
              {isCompleted ? 'Completed' : 'In Progress'}
            </div>
            <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${DIFFICULTY_COLORS[topic.difficulty].replace('text-', 'bg-').replace('-400', '-500/10')} ${DIFFICULTY_COLORS[topic.difficulty]}`}>
              {topic.difficulty}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-dark-800 rounded-xl border border-dark-700 shadow-inner flex-shrink-0">
              <Icon size={24} className={isCompleted ? 'text-primary-400' : 'text-dark-300'} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-100">
              {topic.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-dark-400 mt-4 ml-2">
            <Clock size={16} className="text-dark-500" />
            Estimated Duration: {topic.duration}
          </div>
        </div>
      </div>

      {/* Lesson Content Rendering */}
      <div className="bg-dark-900/50 rounded-3xl p-6 md:p-12 border border-dark-700/50 shadow-2xl">
        <LessonRenderer blocks={lessonContent?.blocks} />
      </div>

      {/* Navigation Controls */}
      <LessonNavigation
        prevTopic={prevTopic}
        nextTopic={nextTopic}
        isCompleted={isCompleted}
        onMarkComplete={handleMarkComplete}
        baseUrl={baseUrl}
        roadmapUrl={roadmapUrl}
      />

      {/* Completion Modal */}
      <CompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onNext={handleNextLesson}
        nextTopic={nextTopic}
      />
    </PageWrapper>
  );
}
