import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Code2, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react';
import { lesson24Assessment } from '../../data/assessment/lesson24';

export default function AssessmentProgrammingPage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [assessmentState, setAssessmentState] = useState(null);

  useEffect(() => {
    const stateStr = localStorage.getItem('cpl_assessment_state');
    if (!stateStr) {
      navigate('/assessment/24');
      return;
    }
    
    const state = JSON.parse(stateStr);
    setAssessmentState(state);

    // If programming is fully completed, auto navigate to project? 
    // The instructions say "When all four programming questions are submitted Automatically open the Practical Mini Project."
    const allDone = lesson24Assessment.programming.questions.every(q => state.programmingStatus[q.id]);
    if (allDone && !state.completedSections.includes('programming')) {
      // Mark as completed
      state.completedSections.push('programming');
      localStorage.setItem('cpl_assessment_state', JSON.stringify(state));
      navigate('/assessment/24/project');
      return;
    }
    if (state.completedSections.includes('programming')) {
      navigate('/assessment/24/project');
      return;
    }

    // Timer logic
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, state.endTime - now);
      setTimeLeft(remaining);
      if (remaining === 0) {
        navigate('/assessment/24/result');
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  if (!assessmentState) return null;

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const allDone = lesson24Assessment.programming.questions.every(q => assessmentState.programmingStatus[q.id]);

  const handleStartCoding = (question) => {
    // Navigate to Compiler and pass question data via state
    navigate('/compiler', {
      state: {
        isAssessment: true,
        question: question
      }
    });
  };

  const handleProceedToProject = () => {
    const state = { ...assessmentState };
    if (!state.completedSections.includes('programming')) {
      state.completedSections.push('programming');
      localStorage.setItem('cpl_assessment_state', JSON.stringify(state));
    }
    navigate('/assessment/24/project');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col font-sans">
      {/* Sticky Header with Timer */}
      <div className="sticky top-0 z-50 h-16 bg-dark-800 border-b border-dark-700 flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-900/30 text-primary-500 flex items-center justify-center font-bold text-xl">
            C
          </div>
          <div>
            <h1 className="text-white font-bold tracking-wide">Final Assessment</h1>
            <p className="text-xs text-dark-400">Section B: Programming</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-dark-400 font-semibold uppercase tracking-wider">Time Remaining</span>
            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${
              timeLeft < 300000 ? 'text-error-500 animate-pulse' : 'text-primary-400'
            }`}>
              <Clock size={20} />
              {timeString}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-dark-50 mb-2">Programming Assessment</h2>
            <p className="text-dark-300">Solve the 4 problems below using the CPL Online Compiler.</p>
          </div>
          <div className="bg-dark-800 px-4 py-2 rounded-lg border border-dark-700 text-dark-200 font-semibold">
            Total Marks: {lesson24Assessment.programming.totalMarks}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {lesson24Assessment.programming.questions.map((q, idx) => {
            const isCompleted = assessmentState.programmingStatus[q.id];
            
            return (
              <div key={q.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col md:flex-row gap-6 md:items-center justify-between transition-all hover:border-dark-500">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-dark-400 font-bold font-mono">Q{idx + 1}</span>
                    <h3 className="text-xl font-bold text-dark-100">{q.title}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                      q.difficulty === 'Easy' ? 'bg-success-900/20 border-success-500/30 text-success-400' :
                      q.difficulty === 'Medium' ? 'bg-warning-900/20 border-warning-500/30 text-warning-400' :
                      'bg-error-900/20 border-error-500/30 text-error-400'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="text-dark-300 text-sm line-clamp-2">{q.description}</p>
                </div>
                
                <div className="shrink-0">
                  {isCompleted ? (
                    <div className="flex items-center gap-2 text-success-500 font-bold px-6 py-3 bg-success-900/20 border border-success-500/30 rounded-lg">
                      <CheckCircle size={20} /> Submitted Successfully
                    </div>
                  ) : (
                    <button
                      onClick={() => handleStartCoding(q)}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-primary-600 text-white hover:bg-primary-500 transition-all shadow-[0_0_15px_rgba(var(--primary-500),0.3)]"
                    >
                      <Code2 size={20} /> Start Coding
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {allDone && (
          <div className="bg-success-900/20 border border-success-500/30 rounded-xl p-6 flex items-center justify-between mt-8">
            <div className="flex items-center gap-3 text-success-400 font-bold">
              <CheckCircle size={24} />
              <span>All programming questions submitted! Proceed to the Mini Project.</span>
            </div>
            <button
              onClick={handleProceedToProject}
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-success-600 text-white hover:bg-success-500 transition-all shadow-[0_0_15px_rgba(var(--success-500),0.3)]"
            >
              Next Section <ChevronRight size={20} />
            </button>
          </div>
        )}
        
        {!allDone && (
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-4 flex items-center gap-3 text-dark-300 text-sm mt-8">
            <AlertCircle size={18} className="text-warning-500" />
            <span>You must successfully submit all 4 programming questions to unlock the next section.</span>
          </div>
        )}
      </div>
    </div>
  );
}
