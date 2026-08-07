import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Upload, CheckCircle, FileCode2 } from 'lucide-react';
import { lesson24Assessment } from '../../data/assessment/lesson24';

export default function AssessmentProjectPage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [assessmentState, setAssessmentState] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  useEffect(() => {
    const stateStr = localStorage.getItem('cpl_assessment_state');
    if (!stateStr) {
      navigate('/assessment/24');
      return;
    }
    
    const state = JSON.parse(stateStr);
    setAssessmentState(state);

    if (state.projectSubmitted) {
      navigate('/assessment/24/result');
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

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
    }
  };

  const handleSubmitProject = () => {
    const state = { ...assessmentState };
    state.projectSubmitted = true;
    localStorage.setItem('cpl_assessment_state', JSON.stringify(state));
    navigate('/assessment/24/result');
  };

  const project = lesson24Assessment.project;

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
            <p className="text-xs text-dark-400">Section C: Practical Mini Project</p>
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

      <div className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8 border-b border-dark-700 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-dark-50 mb-2">Practical Mini Project</h2>
            <p className="text-dark-300">Final section. Write and upload your source code.</p>
          </div>
          <div className="bg-dark-800 px-4 py-2 rounded-lg border border-dark-700 text-dark-200 font-semibold">
            Total Marks: {project.totalMarks}
          </div>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileCode2 size={28} className="text-primary-500" />
            <h3 className="text-2xl font-bold text-dark-100">{project.title}</h3>
          </div>
          
          <p className="text-lg text-dark-200 mb-6">{project.problemStatement}</p>
          
          <h4 className="text-lg font-semibold text-primary-400 mb-3">Required Features:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-dark-300 bg-dark-900 p-3 rounded-lg border border-dark-700">
                <CheckCircle size={16} className="text-primary-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-dark-900 border border-dashed border-dark-600 rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors hover:border-primary-500 hover:bg-dark-800">
            {fileUploaded ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-success-900/30 text-success-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-dark-50 mb-2">File Uploaded Successfully</h4>
                <p className="text-dark-300 mb-6">Your source code has been attached to this assessment.</p>
                <button
                  onClick={() => setFileUploaded(false)}
                  className="text-primary-400 hover:text-primary-300 underline text-sm"
                >
                  Upload a different file
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-dark-800 text-dark-400 rounded-full flex items-center justify-center mb-4">
                  <Upload size={32} />
                </div>
                <h4 className="text-xl font-bold text-dark-50 mb-2">Upload Source Code</h4>
                <p className="text-dark-400 mb-6 text-sm max-w-md">Upload your main.c file containing the complete Student Record Management System.</p>
                
                <label className="cursor-pointer bg-dark-700 hover:bg-dark-600 text-dark-100 font-semibold py-2 px-6 rounded-lg transition-colors border border-dark-600">
                  Select File
                  <input type="file" className="hidden" accept=".c,.txt,.zip" onChange={handleFileUpload} />
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmitProject}
            disabled={!fileUploaded}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              fileUploaded
                ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-[0_0_20px_rgba(var(--primary-500),0.4)]'
                : 'bg-dark-800 text-dark-500 cursor-not-allowed border border-dark-700'
            }`}
          >
            Submit Project & Finish <CheckCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
