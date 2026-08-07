import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { Play, Check, RotateCcw, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';

import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import { practiceQuestionsMap } from '../../data/practice';
import { PageLoader } from '../../components/common';
import { DIFFICULTY_COLORS, XP_REWARDS } from '../../utils/constants';

export default function PracticeQuestionPage() {
  const { topicId, questionId } = useParams();
  const navigate = useNavigate();
  const { user, updatePracticeProgress } = useAuth();
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStatus, setExecutionStatus] = useState(null); // 'success', 'error', null
  const [testResults, setTestResults] = useState(null); // { passed: 0, total: 0, details: [] }
  const [customInput, setCustomInput] = useState('');
  const [activeTab, setActiveTab] = useState('console'); // 'console' or 'input'
  
  // Load question data
  useEffect(() => {
    const qList = practiceQuestionsMap[topicId];
    if (!qList) {
      navigate('/practice');
      return;
    }
    setQuestions(qList);
    
    const index = qList.findIndex(q => q.id === questionId);
    if (index === -1) {
      navigate(`/practice/${topicId}`);
      return;
    }
    
    // Check if user has unlocked this question
    const progress = user?.practiceProgress?.find(p => p.lessonId === topicId);
    const unlocked = progress?.unlockedQuestions || [qList[0].id];
    
    if (!unlocked.includes(questionId) && index > 0) {
      // Trying to access a locked question. Send back to gateway.
      navigate(`/practice/${topicId}`);
      return;
    }
    
    setCurrentIndex(index);
    setCurrentQuestion(qList[index]);
    
    // Load saved code from localStorage or use starter code
    const savedCode = localStorage.getItem(`cpl_code_${topicId}_${qList[index].id}`);
    setCode(savedCode || qList[index].starterCode);
    
    setOutput('');
    setExecutionStatus(null);
    setTestResults(null);
    setCustomInput('');
    setActiveTab('console');
    
  }, [topicId, questionId, navigate, user]);

  const handleEditorChange = (value) => {
    setCode(value);
    if (currentQuestion) {
      localStorage.setItem(`cpl_code_${topicId}_${currentQuestion.id}`, value);
    }
  };

  const handleReset = () => {
    setCode(currentQuestion.starterCode);
    if (currentQuestion) {
      localStorage.removeItem(`cpl_code_${topicId}_${currentQuestion.id}`);
    }
    setOutput('');
    setExecutionStatus(null);
    setTestResults(null);
  };

  const executeCode = async (sourceCode, input) => {
    const res = await api.post('/practice/execute', {
      code: sourceCode,
      input: input || ''
    });
    return res.data;
  };

  const evaluateCode = async (sourceCode, testCases) => {
    const res = await api.post('/practice/evaluate', {
      code: sourceCode,
      testCases
    });
    return res.data;
  };

  const handleRun = async () => {
    if (!currentQuestion) return;
    setIsExecuting(true);
    setExecutionStatus(null);
    setTestResults(null);
    setOutput('Compiling and running...');
    
    const inputToUse = activeTab === 'input' ? customInput : currentQuestion.sampleInput;
    setActiveTab('console');
    
    try {
      const data = await executeCode(code, inputToUse);
      
      if (!data.success) {
        if (data.compileError) {
          setOutput(data.compileError);
          setExecutionStatus('error');
        } else {
          setOutput(data.runtimeError + (data.output ? '\n\nOutput:\n' + data.output : ''));
          setExecutionStatus('error');
        }
      } else {
        setOutput(data.output);
        setExecutionStatus('success');
      }
    } catch (err) {
      setOutput('Failed to connect to execution server. Ensure backend is running.');
      setExecutionStatus('error');
    } finally {
      setIsExecuting(false);
    }
  };

  const handleSubmit = async () => {
    if (!currentQuestion) return;
    setIsExecuting(true);
    setExecutionStatus(null);
    setActiveTab('console');
    setOutput('Evaluating against hidden test cases...');
    
    try {
      // In a real scenario, the backend knows the hidden test cases securely.
      // We pass the hiddenTestCases array to the modular evaluate endpoint.
      const testCases = currentQuestion.hiddenTestCases || [];
      if (testCases.length === 0) {
        // Fallback to sample output for testing if no hidden cases exist
        testCases.push({ input: currentQuestion.sampleInput, expectedOutput: currentQuestion.sampleOutput });
      }

      const data = await evaluateCode(code, testCases);
      
      if (data.success) {
        setExecutionStatus('success');
        setOutput('✅ All test cases passed!\nVerdict: Accepted');
        setTestResults({ passed: data.passed, total: data.total });
        
        // Save progress
        const xp = currentQuestion.difficulty === 'Easy' ? 10 : currentQuestion.difficulty === 'Medium' ? 20 : 30;
        
        const isLastQuestion = currentIndex === questions.length - 1;
        const nextQ = isLastQuestion ? null : questions[currentIndex + 1].id;
        
        const progress = user?.practiceProgress?.find(p => p.lessonId === topicId) || {
          lessonId: topicId,
          completedQuestions: [],
          unlockedQuestions: [currentQuestion.id]
        };
        
        const updatedCompleted = [...new Set([...progress.completedQuestions, currentQuestion.id])];
        const updatedUnlocked = nextQ ? [...new Set([...progress.unlockedQuestions, nextQ])] : progress.unlockedQuestions;
        
        await updatePracticeProgress({
          lessonProgress: {
            lessonId: topicId,
            currentQuestion: isLastQuestion ? currentQuestion.id : nextQ,
            completedQuestions: updatedCompleted,
            unlockedQuestions: updatedUnlocked,
          },
          isLessonCompleted: isLastQuestion,
          solvedProblemId: currentQuestion.id,
          difficulty: currentQuestion.difficulty
        });
        
      } else {
        setExecutionStatus('error');
        setTestResults({ passed: data.passed, total: data.total });
        
        if (data.verdict === 'Compilation Error') {
          setOutput(`❌ ${data.verdict}\n\n${data.failedDetails?.compileError}`);
        } else if (data.verdict === 'Time Limit Exceeded' || data.verdict === 'Runtime Error') {
          setOutput(`❌ ${data.verdict}\n\n${data.failedDetails?.runtimeError}\n\nPartial Output:\n${data.failedDetails?.output || 'None'}`);
        } else {
          setOutput(`❌ ${data.verdict}\n\nFailed Test Case:\nInput:\n${data.failedDetails?.input}\n\nExpected:\n${data.failedDetails?.expectedOutput}\n\nGot:\n${data.failedDetails?.actualOutput}`);
        }
      }
      
    } catch (err) {
      setOutput('Failed to evaluate code. Ensure backend is running.');
      setExecutionStatus('error');
    } finally {
      setIsExecuting(false);
    }
  };

  if (!currentQuestion) return <PageLoader />;

  const progress = user?.practiceProgress?.find(p => p.lessonId === topicId);
  const isCompleted = progress?.completedQuestions?.includes(currentQuestion.id);
  const totalCompleted = progress?.completedQuestions?.length || 0;
  const progressPercent = Math.round((totalCompleted / questions.length) * 100);

  return (
    <div className="h-[calc(100vh-70px)] bg-dark-900 flex flex-col font-sans overflow-hidden">
      
      {/* Top Navbar */}
      <div className="h-14 bg-dark-800 border-b border-dark-700 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/practice')}
            className="text-dark-300 hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-dark-100">
              Question {currentIndex + 1} / {questions.length}
            </span>
            <div className="w-32 h-2 bg-dark-700 rounded-full overflow-hidden hidden sm:block">
              <div 
                className="h-full bg-primary-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-dark-400 font-medium hidden sm:block">
              {progressPercent}%
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {currentIndex > 0 && (
            <button
              onClick={() => navigate(`/practice/${topicId}/${questions[currentIndex - 1].id}`)}
              className="flex items-center gap-1 text-sm font-semibold bg-dark-700 hover:bg-dark-600 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              <ChevronLeft size={16} /> Previous Question
            </button>
          )}
          {isCompleted && currentIndex < questions.length - 1 && (
            <button
              onClick={() => navigate(`/practice/${topicId}/${questions[currentIndex + 1].id}`)}
              className="flex items-center gap-1 text-sm font-semibold bg-dark-700 hover:bg-dark-600 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              Next Question <ChevronRight size={16} />
            </button>
          )}
          {isCompleted && currentIndex === questions.length - 1 && (
            <button
              onClick={() => navigate(`/practice/${topicId}/completed`)}
              className="flex items-center gap-1 text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white px-3 py-1.5 rounded-lg transition-colors shadow-[0_0_10px_rgba(var(--primary-500),0.3)]"
            >
              Finish Lesson <Check size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Split Content */}
      <Split 
        className="flex-1 flex flex-col md:flex-row min-h-0"
        sizes={[40, 60]}
        minSize={300}
        gutterSize={8}
        gutterAlign="center"
        direction="horizontal"
      >
        {/* Left Pane: Question Details */}
        <div className="flex flex-col h-full bg-dark-900 overflow-y-auto custom-scrollbar p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-dark-50">{currentQuestion.title}</h1>
            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${
              currentQuestion.difficulty === 'Easy' ? 'bg-success-900/20 border-success-500/30 text-success-400' :
              currentQuestion.difficulty === 'Medium' ? 'bg-warning-900/20 border-warning-500/30 text-warning-400' :
              'bg-error-900/20 border-error-500/30 text-error-400'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3">Problem Description</h3>
            <p className="text-dark-300 whitespace-pre-wrap">{currentQuestion.description}</p>
            
            {currentQuestion.inputFormat && (
              <>
                <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3 mt-6">Input Format</h3>
                <p className="text-dark-300">{currentQuestion.inputFormat}</p>
              </>
            )}
            
            {currentQuestion.outputFormat && (
              <>
                <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3 mt-6">Output Format</h3>
                <p className="text-dark-300">{currentQuestion.outputFormat}</p>
              </>
            )}

            <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3 mt-6">Sample Input</h3>
            <pre className="bg-dark-800 p-3 rounded-lg text-dark-100 font-mono text-sm border border-dark-700">
              {currentQuestion.sampleInput || 'No input'}
            </pre>

            <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3 mt-6">Sample Output</h3>
            <pre className="bg-dark-800 p-3 rounded-lg text-dark-100 font-mono text-sm border border-dark-700">
              {currentQuestion.sampleOutput}
            </pre>
            
            {currentQuestion.testCases && currentQuestion.testCases.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-dark-200 border-b border-dark-700 pb-2 mb-3 mt-6">Test Cases</h3>
                <div className="flex flex-col gap-4">
                  {currentQuestion.testCases.map((tc, index) => (
                    <div key={index} className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                      <h4 className="text-sm font-bold text-dark-100 mb-3 border-b border-dark-700 pb-2">Test Case {index + 1}</h4>
                      
                      <div className="mb-3">
                        <span className="text-xs text-dark-400 font-semibold uppercase tracking-wider block mb-1">Input</span>
                        <pre className="text-dark-200 font-mono text-sm whitespace-pre-wrap">{tc.input}</pre>
                      </div>
                      
                      <div>
                        <span className="text-xs text-dark-400 font-semibold uppercase tracking-wider block mb-1">Expected Output</span>
                        <pre className="text-dark-200 font-mono text-sm whitespace-pre-wrap">{tc.expectedOutput}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Pane: Code Editor & Console */}
        <div className="flex flex-col h-full bg-dark-900 border-l border-dark-800 min-h-0">
          
          <div className="h-10 bg-dark-800 border-b border-dark-700 flex items-center px-4 shrink-0">
            <Code2 size={16} className="text-dark-400 mr-2" />
            <span className="text-sm font-medium text-dark-300">main.c</span>
          </div>

          <div className="flex-1 relative min-h-[200px]">
            <Editor
              height="100%"
              language="c"
              theme="vs-dark"
              value={code}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                padding: { top: 16 }
              }}
            />
          </div>

          {/* Console / Output Area */}
          <div className="h-[250px] bg-[#1e1e1e] border-t border-dark-700 flex flex-col shrink-0">
            <div className="h-10 bg-dark-800 border-b border-dark-700 flex items-center justify-between px-4 shrink-0">
              <div className="flex gap-4 h-full">
                <button 
                  onClick={() => setActiveTab('console')}
                  className={`text-sm font-medium px-2 border-b-2 transition-colors ${
                    activeTab === 'console' 
                      ? 'text-primary-400 border-primary-500' 
                      : 'text-dark-400 border-transparent hover:text-dark-200'
                  }`}
                >
                  Console Output
                </button>
                <button 
                  onClick={() => setActiveTab('input')}
                  className={`text-sm font-medium px-2 border-b-2 transition-colors ${
                    activeTab === 'input' 
                      ? 'text-primary-400 border-primary-500' 
                      : 'text-dark-400 border-transparent hover:text-dark-200'
                  }`}
                >
                  Custom Input
                </button>
              </div>
              {activeTab === 'console' && testResults && (
                <span className={`text-xs font-bold ${testResults.passed === testResults.total ? 'text-success-400' : 'text-error-400'}`}>
                  Passed {testResults.passed} / {testResults.total} Test Cases
                </span>
              )}
            </div>
            
            <div className="flex-1 overflow-auto p-4 font-mono text-sm">
              {activeTab === 'input' ? (
                <textarea
                  className="w-full h-full bg-transparent text-dark-100 outline-none resize-none placeholder-dark-500 font-mono text-sm"
                  placeholder="Type your custom standard input here...\n\nExample:\nLikitha\n101"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  spellCheck={false}
                />
              ) : isExecuting ? (
                <div className="text-dark-400 animate-pulse">{output}</div>
              ) : (
                <pre className={`whitespace-pre-wrap ${
                  executionStatus === 'success' ? 'text-success-300' : 
                  executionStatus === 'error' ? 'text-error-300' : 'text-dark-300'
                }`}>
                  {output || 'Run or submit your code to see output here.'}
                </pre>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="h-16 bg-dark-800 border-t border-dark-700 flex items-center justify-between px-4 shrink-0">
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-dark-400 hover:text-dark-200 transition-colors text-sm font-medium"
            >
              <RotateCcw size={16} /> Reset
            </button>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleRun}
                disabled={isExecuting}
                className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold bg-dark-700 text-dark-100 hover:bg-dark-600 transition-colors disabled:opacity-50"
              >
                <Play size={16} className="fill-current" /> Run
              </button>
              
              <button 
                onClick={handleSubmit}
                disabled={isExecuting}
                className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-500 shadow-[0_0_15px_rgba(var(--primary-500),0.3)] transition-all disabled:opacity-50"
              >
                <Check size={18} /> Submit
              </button>
            </div>
          </div>
          
        </div>
      </Split>
      
      {/* Required CSS for Split Pane Gutters */}
      <style dangerouslySetInnerHTML={{__html: `
        .gutter {
          background-color: #1a1a2e;
          background-repeat: no-repeat;
          background-position: 50%;
        }
        .gutter.gutter-horizontal {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjbd5MgAnmwOSYQQY/wAAAABJRU5ErkJggg==');
          cursor: col-resize;
        }
        .gutter.gutter-vertical {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyCB2iAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFBgIAAH4Ac+gAAAABJRU5ErkJggg==');
          cursor: row-resize;
        }
      `}} />
    </div>
  );
}
