import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { practiceQuestionsMap } from '../../data/practice';
import { PageWrapper } from '../../components/common';
import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import { PRACTICE_TOPICS } from '../../data/courseData';

export default function PracticeLessonCompletePage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const questions = practiceQuestionsMap[topicId];
  const progress = user?.practiceProgress?.find(p => p.lessonId === topicId);
  const topicData = PRACTICE_TOPICS.find(t => t.id === topicId);
  
  if (!progress || !progress.lessonCompleted) {
    // Navigate back to gateway if they haven't finished
    navigate(`/practice/${topicId}`);
    return null;
  }
  
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-2xl mx-auto px-4">
        <div className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <Award size={48} className="text-primary-400" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-4">
          🎉 Lesson Completed!
        </h1>
        
        <p className="text-xl text-dark-300 mb-8">
          You successfully solved all practice problems for <br />
          <span className="text-primary-400 font-semibold">{topicData?.title || 'this lesson'}</span>.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-10">
          <div className="glass-card p-4 rounded-2xl border border-dark-700/50">
            <p className="text-xs text-dark-500 font-bold uppercase mb-1">Questions</p>
            <p className="text-2xl font-bold text-dark-100">{questions?.length} / {questions?.length}</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-dark-700/50">
            <p className="text-xs text-dark-500 font-bold uppercase mb-1">Accuracy</p>
            <p className="text-2xl font-bold text-success-400">{Math.round(progress.accuracy)}%</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-dark-700/50">
            <p className="text-xs text-dark-500 font-bold uppercase mb-1">XP Earned</p>
            <p className="text-2xl font-bold text-accent-400">+{progress.xpEarned}</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-dark-700/50">
            <p className="text-xs text-dark-500 font-bold uppercase mb-1">Status</p>
            <p className="text-2xl font-bold text-primary-400 flex items-center justify-center gap-1">
              <CheckCircle2 size={24} /> Done
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button 
            onClick={() => navigate(ROUTES.PRACTICE)}
            className="flex-1 py-4 rounded-xl font-semibold bg-dark-800 border border-dark-700 text-dark-100 hover:bg-dark-700 transition-colors"
          >
            Return to Dashboard
          </button>
          
          <button 
            onClick={() => navigate(ROUTES.PRACTICE)} // Could navigate to next lesson logic
            className="flex-1 py-4 rounded-xl font-semibold bg-primary-600 text-white hover:bg-primary-500 shadow-[0_0_15px_rgba(var(--primary-500),0.3)] transition-all flex items-center justify-center gap-2"
          >
            Start Next Lesson <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
