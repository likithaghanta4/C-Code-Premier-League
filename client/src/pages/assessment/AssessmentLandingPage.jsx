import { useNavigate } from 'react-router-dom';
import { Play, ClipboardList, Clock, Award, ShieldAlert } from 'lucide-react';
import { PageWrapper } from '../../components/common';
import PageHeader from '../../components/common/PageHeader';
import { lesson24Assessment } from '../../data/assessment/lesson24';

export default function AssessmentLandingPage() {
  const navigate = useNavigate();
  const assessment = lesson24Assessment;

  const startAssessment = () => {
    // Initialize assessment state in localStorage
    const startTime = Date.now();
    const durationMs = assessment.duration * 60 * 1000;
    
    const assessmentState = {
      startTime,
      endTime: startTime + durationMs,
      completedSections: [],
      objectiveAnswers: {
        mcqs: {},
        fillInBlanks: {},
        trueFalse: {}
      },
      programmingStatus: {
        prog1: false,
        prog2: false,
        prog3: false,
        prog4: false
      },
      projectSubmitted: false,
      scores: null
    };
    
    localStorage.setItem('cpl_assessment_state', JSON.stringify(assessmentState));
    navigate('/assessment/24/objective');
  };

  return (
    <PageWrapper>
      <PageHeader
        title={`Lesson 24 : ${assessment.title}`}
        description="Module 6 - C Programming Final Evaluation"
        icon={ClipboardList}
      />
      
      <div className="max-w-4xl mx-auto mt-8 flex flex-col gap-8">
        
        {/* Assessment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-primary-900/30 text-primary-500 rounded-full flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-dark-400 text-sm font-semibold uppercase tracking-wider mb-1">Duration</h3>
            <p className="text-2xl font-bold text-dark-50">{assessment.duration} Minutes</p>
          </div>
          
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-success-900/30 text-success-500 rounded-full flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-dark-400 text-sm font-semibold uppercase tracking-wider mb-1">Total Marks</h3>
            <p className="text-2xl font-bold text-dark-50">{assessment.totalMarks}</p>
          </div>
          
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-warning-900/30 text-warning-500 rounded-full flex items-center justify-center mb-4">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-dark-400 text-sm font-semibold uppercase tracking-wider mb-1">Passing Marks</h3>
            <p className="text-2xl font-bold text-dark-50">{assessment.passingMarks}</p>
          </div>
        </div>

        {/* Assessment Structure & Rules */}
        <div className="bg-dark-800 border border-dark-700 rounded-xl p-8">
          <h2 className="text-xl font-bold text-dark-100 mb-6 border-b border-dark-700 pb-3">Assessment Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-900 p-4 rounded-lg border border-dark-700">
              <h4 className="font-semibold text-primary-400 mb-2">1. Objective</h4>
              <p className="text-sm text-dark-300">MCQs, Fill in the blanks, and True/False questions testing your theoretical knowledge.</p>
            </div>
            <div className="bg-dark-900 p-4 rounded-lg border border-dark-700">
              <h4 className="font-semibold text-primary-400 mb-2">2. Programming</h4>
              <p className="text-sm text-dark-300">Write, run, and submit code to solve 4 distinct programming problems using our compiler.</p>
            </div>
            <div className="bg-dark-900 p-4 rounded-lg border border-dark-700">
              <h4 className="font-semibold text-primary-400 mb-2">3. Mini Project</h4>
              <p className="text-sm text-dark-300">Submit a fully functioning C program demonstrating a Student Record Management System.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-dark-100 mb-4 border-b border-dark-700 pb-3">Assessment Rules</h2>
          <ul className="space-y-3 mb-8">
            {assessment.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-3 text-dark-200">
                <span className="text-primary-500 font-bold mt-0.5">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-10">
            <button
              onClick={startAssessment}
              className="group relative flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white text-lg font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-500),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary-500),0.6)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Assessment <Play size={20} className="fill-current" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
