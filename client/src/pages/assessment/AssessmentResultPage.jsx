import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, XCircle, CheckCircle, Award, Target, FileCode2, BookOpen } from 'lucide-react';
import { lesson24Assessment } from '../../data/assessment/lesson24';

export default function AssessmentResultPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const stateStr = localStorage.getItem('cpl_assessment_state');
    if (!stateStr) {
      navigate('/assessment/24');
      return;
    }
    
    const state = JSON.parse(stateStr);
    
    // Calculate Scores
    let mcqScore = 0;
    lesson24Assessment.objective.mcqs.forEach(q => {
      if (state.objectiveAnswers.mcqs[q.id] === q.answer) {
        mcqScore += 1;
      }
    });

    let fillScore = 0;
    lesson24Assessment.objective.fillInBlanks.forEach(q => {
      const userAns = state.objectiveAnswers.fillInBlanks[q.id];
      if (userAns && userAns.toString().trim().toLowerCase() === q.answer.toString().toLowerCase()) {
        fillScore += 1;
      }
    });

    let tfScore = 0;
    lesson24Assessment.objective.trueFalse.forEach(q => {
      if (state.objectiveAnswers.trueFalse[q.id] === q.answer) {
        tfScore += 1;
      }
    });

    let progScore = 0;
    Object.values(state.programmingStatus).forEach(completed => {
      if (completed) progScore += 10;
    });

    let projectScore = state.projectSubmitted ? 20 : 0;

    const totalScore = mcqScore + fillScore + tfScore + progScore + projectScore;
    const isPass = totalScore >= lesson24Assessment.passingMarks;

    setResults({
      mcqScore,
      fillScore,
      tfScore,
      objectiveTotal: mcqScore + fillScore + tfScore,
      progScore,
      projectScore,
      totalScore,
      isPass
    });

    // Clear state so they can't go back, but we could keep it if we wanted to show a history
    // localStorage.removeItem('cpl_assessment_state');

  }, [navigate]);

  if (!results) return null;

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col font-sans py-12 px-6">
      <div className="max-w-3xl mx-auto w-full">
        
        <div className="text-center mb-10">
          {results.isPass ? (
            <div className="inline-flex items-center justify-center w-24 h-24 bg-success-900/30 text-success-500 rounded-full mb-6">
              <Trophy size={48} />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-24 h-24 bg-error-900/30 text-error-500 rounded-full mb-6">
              <XCircle size={48} />
            </div>
          )}
          
          <h1 className="text-4xl font-bold text-white mb-2">
            {results.isPass ? 'Congratulations!' : 'Assessment Failed'}
          </h1>
          <p className="text-lg text-dark-300">
            {results.isPass 
              ? 'You have successfully completed Module 6 – C Programming.' 
              : 'You did not meet the passing criteria. Keep practicing and try again.'}
          </p>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden mb-8 shadow-xl">
          <div className="bg-dark-900 p-6 flex flex-col items-center justify-center border-b border-dark-700">
            <h2 className="text-dark-400 font-bold uppercase tracking-wider text-sm mb-2">Final Score</h2>
            <div className="flex items-baseline gap-2">
              <span className={`text-6xl font-black ${results.isPass ? 'text-success-400' : 'text-error-400'}`}>
                {results.totalScore}
              </span>
              <span className="text-2xl text-dark-500 font-bold">/ 100</span>
            </div>
            <div className={`mt-3 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest ${
              results.isPass ? 'bg-success-900/20 text-success-500 border border-success-500/30' : 'bg-error-900/20 text-error-500 border border-error-500/30'
            }`}>
              {results.isPass ? 'PASS' : 'FAIL'}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-dark-100 mb-6">Score Breakdown</h3>
            
            <div className="space-y-4">
              {/* Objective */}
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-dark-800">
                  <div className="flex items-center gap-3">
                    <Target className="text-primary-500" size={24} />
                    <span className="text-lg font-bold text-dark-100">Objective Section</span>
                  </div>
                  <span className="text-xl font-bold text-white">{results.objectiveTotal} / 40</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-dark-800 p-3 rounded-lg flex justify-between">
                    <span className="text-dark-300">MCQs:</span>
                    <span className="font-bold text-white">{results.mcqScore} / 20</span>
                  </div>
                  <div className="bg-dark-800 p-3 rounded-lg flex justify-between">
                    <span className="text-dark-300">Fill in Blanks:</span>
                    <span className="font-bold text-white">{results.fillScore} / 10</span>
                  </div>
                  <div className="bg-dark-800 p-3 rounded-lg flex justify-between">
                    <span className="text-dark-300">True/False:</span>
                    <span className="font-bold text-white">{results.tfScore} / 10</span>
                  </div>
                </div>
              </div>

              {/* Programming */}
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCode2 className="text-primary-500" size={24} />
                  <div>
                    <span className="text-lg font-bold text-dark-100 block">Programming Section</span>
                    <span className="text-sm text-dark-400">4 Problems (10 marks each)</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-white">{results.progScore} / 40</span>
              </div>

              {/* Mini Project */}
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="text-primary-500" size={24} />
                  <div>
                    <span className="text-lg font-bold text-dark-100 block">Practical Mini Project</span>
                    <span className="text-sm text-dark-400">Student Record Management</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-white">{results.projectScore} / 20</span>
              </div>
            </div>
          </div>
        </div>

        {results.isPass && (
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/learn')}
              className="group relative flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-500),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary-500),0.6)] overflow-hidden w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Unlock Module 7 – Data Structures in C <BookOpen size={20} />
              </span>
            </button>
          </div>
        )}
        
        {!results.isPass && (
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/assessment/24')}
              className="flex items-center justify-center gap-3 bg-dark-700 hover:bg-dark-600 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all duration-300 w-full md:w-auto border border-dark-600"
            >
              Retry Assessment
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
