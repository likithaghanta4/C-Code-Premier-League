import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Play } from 'lucide-react';
import { PageWrapper } from '../../components/common';
import { lesson24Assessment } from '../../data/assessment/lesson24';

export default function AssessmentObjectivePage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [assessmentState, setAssessmentState] = useState(null);
  
  const [currentSection, setCurrentSection] = useState('mcqs'); // 'mcqs', 'fillInBlanks', 'trueFalse'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    const stateStr = localStorage.getItem('cpl_assessment_state');
    if (!stateStr) {
      navigate('/assessment/24');
      return;
    }
    
    const state = JSON.parse(stateStr);
    setAssessmentState(state);
    
    // Check if sections are already completed
    if (state.completedSections.includes('mcqs') && state.completedSections.includes('fillInBlanks') && state.completedSections.includes('trueFalse')) {
      navigate('/assessment/24/programming');
      return;
    }
    
    if (state.completedSections.includes('mcqs')) {
      if (state.completedSections.includes('fillInBlanks')) {
        setCurrentSection('trueFalse');
      } else {
        setCurrentSection('fillInBlanks');
      }
    }

    // Timer logic
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, state.endTime - now);
      setTimeLeft(remaining);
      if (remaining === 0) {
        // Auto submit if time is up (simplified)
        navigate('/assessment/24/result');
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  const saveState = (newState) => {
    setAssessmentState(newState);
    localStorage.setItem('cpl_assessment_state', JSON.stringify(newState));
  };

  if (!assessmentState) return null;

  // Formatting time
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const getSectionData = () => {
    return lesson24Assessment.objective[currentSection];
  };
  
  const sectionQuestions = getSectionData();
  const currentQuestion = sectionQuestions[currentIndex];

  const handleAnswerSelect = (answer) => {
    const newState = { ...assessmentState };
    newState.objectiveAnswers[currentSection][currentQuestion.id] = answer;
    saveState(newState);
  };

  const handleNext = () => {
    if (currentIndex < sectionQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsReviewing(true);
    }
  };

  const handlePrevious = () => {
    if (isReviewing) {
      setIsReviewing(false);
      setCurrentIndex(sectionQuestions.length - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmitSection = () => {
    const newState = { ...assessmentState };
    newState.completedSections.push(currentSection);
    saveState(newState);
    
    setIsReviewing(false);
    setCurrentIndex(0);
    
    if (currentSection === 'mcqs') {
      setCurrentSection('fillInBlanks');
    } else if (currentSection === 'fillInBlanks') {
      setCurrentSection('trueFalse');
    } else {
      navigate('/assessment/24/programming');
    }
  };

  const getSectionTitle = () => {
    if (currentSection === 'mcqs') return 'Multiple Choice Questions';
    if (currentSection === 'fillInBlanks') return 'Fill in the Blanks';
    return 'True or False';
  };

  const renderReviewPage = () => {
    return (
      <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-dark-50 mb-6 text-center">Review {getSectionTitle()}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {sectionQuestions.map((q, idx) => {
            const hasAnswer = assessmentState.objectiveAnswers[currentSection][q.id] !== undefined;
            return (
              <div 
                key={q.id} 
                className="flex items-center justify-between bg-dark-900 border border-dark-700 p-4 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
                onClick={() => {
                  setIsReviewing(false);
                  setCurrentIndex(idx);
                }}
              >
                <span className="text-dark-200 font-medium">Question {idx + 1}</span>
                {hasAnswer ? (
                  <span className="flex items-center text-success-500 text-sm font-semibold gap-1">
                    <CheckCircle size={16} /> Answered
                  </span>
                ) : (
                  <span className="flex items-center text-error-400 text-sm font-semibold gap-1">
                    <AlertCircle size={16} /> Not Answered
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-dark-700 pt-6">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-dark-700 text-dark-200 hover:bg-dark-600 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} /> Back to Questions
          </button>
          <button
            onClick={handleSubmitSection}
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-primary-600 text-white hover:bg-primary-500 transition-all shadow-[0_0_15px_rgba(var(--primary-500),0.3)]"
          >
            Submit {getSectionTitle()} <CheckCircle size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderQuestion = () => {
    const currentAnswer = assessmentState.objectiveAnswers[currentSection][currentQuestion.id];
    
    return (
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-dark-200">
            {getSectionTitle()} - Question {currentIndex + 1} of {sectionQuestions.length}
          </h2>
          <div className="bg-dark-800 px-4 py-2 rounded-full border border-dark-700 font-mono text-sm text-primary-400">
            {currentIndex + 1} / {sectionQuestions.length}
          </div>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-8">
          <p className="text-lg text-dark-50 mb-8">{currentQuestion.question}</p>

          {currentSection === 'mcqs' && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    currentAnswer === idx
                      ? 'bg-primary-900/20 border-primary-500 text-primary-100'
                      : 'bg-dark-900 border-dark-700 text-dark-200 hover:border-dark-500'
                  }`}
                >
                  <span className="inline-block w-8 font-bold text-dark-400 mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentSection === 'fillInBlanks' && (
            <div>
              <input
                type="text"
                value={currentAnswer || ''}
                onChange={(e) => handleAnswerSelect(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full bg-dark-900 border border-dark-700 rounded-lg p-4 text-dark-100 focus:border-primary-500 focus:outline-none transition-colors"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          )}

          {currentSection === 'trueFalse' && (
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswerSelect(true)}
                className={`flex-1 p-6 rounded-lg border text-center text-lg font-bold transition-all ${
                  currentAnswer === true
                    ? 'bg-success-900/20 border-success-500 text-success-400'
                    : 'bg-dark-900 border-dark-700 text-dark-200 hover:border-dark-500'
                }`}
              >
                True
              </button>
              <button
                onClick={() => handleAnswerSelect(false)}
                className={`flex-1 p-6 rounded-lg border text-center text-lg font-bold transition-all ${
                  currentAnswer === false
                    ? 'bg-error-900/20 border-error-500 text-error-400'
                    : 'bg-dark-900 border-dark-700 text-dark-200 hover:border-dark-500'
                }`}
              >
                False
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentIndex === 0
                ? 'bg-dark-800 text-dark-500 cursor-not-allowed'
                : 'bg-dark-700 text-dark-200 hover:bg-dark-600 hover:text-white'
            }`}
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-primary-600 text-white hover:bg-primary-500 transition-all shadow-[0_0_15px_rgba(var(--primary-500),0.3)]"
          >
            {currentIndex === sectionQuestions.length - 1 ? 'Review Answers' : 'Next Question'}
            {currentIndex !== sectionQuestions.length - 1 && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    );
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
            <p className="text-xs text-dark-400">Section A: Objective</p>
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

      <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar">
        {isReviewing ? renderReviewPage() : renderQuestion()}
      </div>
    </div>
  );
}
