import { Code2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { PRACTICE_TOPICS } from '../../data/courseData';
import { ROUTES } from '../../utils/constants';
import ModulePage from '../../components/common/ModulePage';

export default function PracticePage() {
  const { user } = useAuth();
  console.log('PracticePage render, baseUrl:', ROUTES.PRACTICE_TOPIC);

  return (
    <ModulePage
      title="Practice & Implementation"
      description="Apply your knowledge by solving C programming practice problems."
      icon={Code2}
      topics={PRACTICE_TOPICS}
      completedIds={user?.completedPracticeTopics || []}
      lastVisitedId={user?.lastVisitedPractice}
      baseUrl={ROUTES.PRACTICE_TOPIC}
      emptyMessage="No practice lessons found"
      emptySubMessage="Try adjusting your search or filters."
    />
  );
}
