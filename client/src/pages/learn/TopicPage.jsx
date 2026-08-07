import { useAuth } from '../../contexts/AuthContext';
import { COURSE_TOPICS } from '../../data/courseData';
import { ROUTES } from '../../utils/constants';
import ModuleTopicPage from '../../components/common/ModuleTopicPage';

export default function TopicPage() {
  const { user, updateUserProgress } = useAuth();

  const handleMarkComplete = async (completedId, nextTopicId) => {
    // Find the difficulty of the completed topic to award coins
    const topic = COURSE_TOPICS.find(t => t.id === completedId);
    
    await updateUserProgress({ 
      completedTopicId: completedId, 
      lastVisitedTopic: nextTopicId,
      difficulty: topic?.difficulty
    });
  };

  const handleUpdateLastVisited = (topicId) => {
    updateUserProgress({ lastVisitedTopic: topicId });
  };

  return (
    <ModuleTopicPage 
      topics={COURSE_TOPICS}
      completedIds={user?.completedTopics || []}
      lastVisitedId={user?.lastVisitedTopic}
      baseUrl={ROUTES.TOPIC}
      roadmapUrl={ROUTES.LEARN}
      breadcrumbRoot="Learn C"
      onMarkComplete={handleMarkComplete}
      onUpdateLastVisited={handleUpdateLastVisited}
    />
  );
}
