import { useAuth } from '../../contexts/AuthContext';
import { PRACTICE_TOPICS } from '../../data/courseData';
import { ROUTES } from '../../utils/constants';
import ModuleTopicPage from '../../components/common/ModuleTopicPage';

export default function PracticeTopicPage() {
  const { user, updateUserProgress } = useAuth();

  const handleMarkComplete = async (completedId, nextTopicId) => {
    await updateUserProgress({ 
      completedPracticeId: completedId, 
      lastVisitedPractice: nextTopicId 
    });
  };

  const handleUpdateLastVisited = (topicId) => {
    updateUserProgress({ lastVisitedPractice: topicId });
  };

  return (
    <ModuleTopicPage 
      topics={PRACTICE_TOPICS}
      completedIds={user?.completedPracticeTopics || []}
      lastVisitedId={user?.lastVisitedPractice}
      baseUrl={ROUTES.PRACTICE_TOPIC}
      roadmapUrl={ROUTES.PRACTICE}
      breadcrumbRoot="Practice"
      onMarkComplete={handleMarkComplete}
      onUpdateLastVisited={handleUpdateLastVisited}
    />
  );
}
