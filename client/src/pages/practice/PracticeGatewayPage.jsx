import { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { practiceQuestionsMap } from '../../data/practice';
import { PageLoader } from '../../components/common';

export default function PracticeGatewayPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    
    if (!user) {
      navigate('/');
      return;
    }

    const questions = practiceQuestionsMap[topicId];
    if (!questions || questions.length === 0) {
      navigate('/practice');
      return;
    }

    // Find progress for this specific lesson
    const progress = user?.practiceProgress?.find(p => p.lessonId === topicId);
    
    if (!progress) {
      // User hasn't started this lesson yet. Send to Q1.
      navigate(`/practice/${topicId}/${questions[0].id}`, { replace: true });
      return;
    }

    if (progress.lessonCompleted) {
      navigate(`/practice/${topicId}/completed`, { replace: true });
      return;
    }

    // Find the current question or the last unlocked question
    const currentQ = progress.currentQuestion || questions[0].id;
    navigate(`/practice/${topicId}/${currentQ}`, { replace: true });

  }, [topicId, user, loading, navigate]);

  return <PageLoader />;
}
