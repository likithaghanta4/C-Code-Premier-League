import { BookOpen } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { COURSE_TOPICS } from '../../data/courseData';
import { ROUTES } from '../../utils/constants';
import ModulePage from '../../components/common/ModulePage';

export default function LearnPage() {
  const { user } = useAuth();
  
  return (
    <ModulePage
      title="Complete C Programming Course"
      description="Master C from basics to advanced data structures."
      icon={BookOpen}
      topics={COURSE_TOPICS}
      completedIds={user?.completedTopics || []}
      lastVisitedId={user?.lastVisitedTopic}
      baseUrl={ROUTES.TOPIC}
      emptyMessage="No theory lessons found"
      emptySubMessage="Try adjusting your search or filters."
    />
  );
}
