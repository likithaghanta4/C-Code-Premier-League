import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { 
  Play, Save, Upload, Download, Copy, RotateCcw, Trash2, 
  Moon, Sun, Maximize, Minimize, History, ChevronLeft, 
  Terminal as TerminalIcon, CheckCircle, AlertCircle, FileCode2
} from 'lucide-react';
import CompilerService from '../../services/compiler.service';


const DEFAULT_CODE = `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`;

export default function CompilerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // Modes & Routing
  const isAssessment = location.state?.isAssessment;
  const question = location.state?.question;
  
  // Editor State
  const [code, setCode] = useState(DEFAULT_CODE);
  const [originalCode, setOriginalCode] = useState(DEFAULT_CODE); // For dirty checking
  const [theme, setTheme] = useState(localStorage.getItem('cpl_compiler_theme') || 'vs-dark');
  const [fontSize, setFontSize] = useState(Number(localStorage.getItem('cpl_compiler_font')) || 14);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // IO State
  const [customInput, setCustomInput] = useState('');
  const [output, setOutput] = useState('');
  const [executionStats, setExecutionStats] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStatus, setExecutionStatus] = useState(null); 
  const [activeTab, setActiveTab] = useState('output'); // 'input', 'output'
  
  // Modals / Dropdowns
  const [showHistory, setShowHistory] = useState(false);
  const [savedPrograms, setSavedPrograms] = useState([]);
  const [execHistory, setExecHistory] = useState([]);

  // Initialization
  useEffect(() => {
    if (isAssessment && question) {
      const initialCode = question.starterCode || DEFAULT_CODE;
      setCode(initialCode);
      setOriginalCode(initialCode);
    }
    
    // Load local storage data
    const saved = JSON.parse(localStorage.getItem('cpl_compiler_saved') || '[]');
    const hist = JSON.parse(localStorage.getItem('cpl_compiler_history') || '[]');
    setSavedPrograms(saved);
    setExecHistory(hist);
  }, [isAssessment, question]);

  // Dirty check
  const hasUnsavedChanges = code !== originalCode;

  const handleDirtyCheck = (actionFn) => {
    if (hasUnsavedChanges) {
      if (window.confirm('You have unsaved changes. Are you sure you want to proceed?')) {
        actionFn();
      }
    } else {
      actionFn();
    }
  };

  // Execution
  const handleRun = async () => {
    setIsExecuting(true);
    setExecutionStatus(null);
    setExecutionStats(null);
    setOutput('Compiling and running...\n');
    setActiveTab('output');
    
    try {
      const data = await CompilerService.runCode(code, customInput);
      
      let status = 'success';
      if (!data.success) status = 'error';
      
      setExecutionStatus(status);
      
      if (!data.success) {
        if (data.compileError) {
          setOutput(`[Compilation Error]\n\n${data.compileError}`);
        } else {
          setOutput(`[Runtime Error]\n\n${data.runtimeError}\n\n[Output]\n${data.output || 'None'}`);
        }
      } else {
        setOutput(data.output || 'Program finished successfully with no output.');
      }
      
      setExecutionStats({
        time: data.executionTime,
        memory: data.memoryUsed
      });
      
      // Save to history
      if (!isAssessment) {
        const newHist = [{
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          status: status,
          time: data.executionTime
        }, ...execHistory].slice(0, 50); // Keep last 50
        setExecHistory(newHist);
        localStorage.setItem('cpl_compiler_history', JSON.stringify(newHist));
      }
      
    } catch (err) {
      setOutput('Failed to connect to execution server.');
      setExecutionStatus('error');
    } finally {
      setIsExecuting(false);
    }
  };

  // Assessment Submission
  const handleSubmitAssessment = async () => {
    if (!isAssessment || !question) return;
    setIsExecuting(true);
    setExecutionStatus(null);
    setActiveTab('output');
    setOutput('Evaluating against hidden test cases...\n');
    
    try {
      const testCases = question.hiddenTestCases || [];
      if (testCases.length === 0 && question.sampleInput) {
        testCases.push({ input: question.sampleInput, expectedOutput: question.sampleOutput });
      }

      const data = await CompilerService.submitCode(code, testCases);
      
      if (data.success) {
        setExecutionStatus('success');
        setOutput('✅ All test cases passed! Verification successful.');
        
        // Update assessment state
        const stateStr = localStorage.getItem('cpl_assessment_state');
        if (stateStr) {
          const state = JSON.parse(stateStr);
          state.programmingStatus[question.id] = true;
          localStorage.setItem('cpl_assessment_state', JSON.stringify(state));
        }

        setTimeout(() => {
          navigate('/assessment/24/programming');
        }, 1500);
        
      } else {
        setExecutionStatus('error');
        
        if (data.verdict === 'Compilation Error') {
          setOutput(`❌ ${data.verdict}\n\n${data.failedDetails?.compileError}`);
        } else if (data.verdict === 'Time Limit Exceeded' || data.verdict === 'Runtime Error') {
          setOutput(`❌ ${data.verdict}\n\n${data.failedDetails?.runtimeError}\n\nPartial Output:\n${data.failedDetails?.output || 'None'}`);
        } else {
          setOutput(`❌ ${data.verdict}\n\nFailed Test Case:\nInput:\n${data.failedDetails?.input}\n\nExpected:\n${data.failedDetails?.expectedOutput}\n\nGot:\n${data.failedDetails?.actualOutput}`);
        }
      }
    } catch (err) {
      setOutput('Failed to evaluate code.');
      setExecutionStatus('error');
    } finally {
      setIsExecuting(false);
    }
  };

  // Toolbar Actions
  const handleSave = () => {
    const name = window.prompt('Enter program name:');
    if (!name) return;
    
    const newProg = {
      id: crypto.randomUUID(),
      name,
      code,
      dateCreated: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    
    const newSaved = [newProg, ...savedPrograms];
    setSavedPrograms(newSaved);
    localStorage.setItem('cpl_compiler_saved', JSON.stringify(newSaved));
    setOriginalCode(code); // Mark as clean
    alert('Program saved successfully!');
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (evt) => {
      handleDirtyCheck(() => {
        setCode(evt.target.result);
        setOriginalCode(evt.target.result);
      });
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/x-csrc' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'program.c';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const handleReset = () => {
    handleDirtyCheck(() => {
      const resetCode = isAssessment && question ? question.starterCode : DEFAULT_CODE;
      setCode(resetCode);
      setOriginalCode(resetCode);
      setOutput('');
      setExecutionStatus(null);
      setExecutionStats(null);
    });
  };

  const handleClearOutput = () => {
    setOutput('');
    setExecutionStatus(null);
    setExecutionStats(null);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'vs-dark' ? 'light' : 'vs-dark';
    setTheme(newTheme);
    localStorage.setItem('cpl_compiler_theme', newTheme);
  };

  const changeFontSize = (e) => {
    const size = parseInt(e.target.value, 10);
    setFontSize(size);
    localStorage.setItem('cpl_compiler_font', size);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };
  
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const loadSavedProgram = (prog) => {
    handleDirtyCheck(() => {
      setCode(prog.code);
      setOriginalCode(prog.code);
      setShowHistory(false);
    });
  };

  const deleteSavedProgram = (id) => {
    if (window.confirm('Are you sure you want to delete this saved program?')) {
      const newSaved = savedPrograms.filter(p => p.id !== id);
      setSavedPrograms(newSaved);
      localStorage.setItem('cpl_compiler_saved', JSON.stringify(newSaved));
    }
  };

  // UI Renders
  const renderToolbar = () => (
    <div className={`h-14 ${theme === 'vs-dark' ? 'bg-dark-800 border-dark-700' : 'bg-white border-gray-200'} border-b flex items-center justify-between px-4 shrink-0 transition-colors`}>
      <div className="flex items-center gap-2">
        {isAssessment ? (
          <button 
            onClick={() => handleDirtyCheck(() => navigate('/assessment/24/programming'))}
            className={`flex items-center gap-1 text-sm font-bold ${theme === 'vs-dark' ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'}`}
          >
            <ChevronLeft size={18} /> Back to Assessment
          </button>
        ) : (
          <div className={`flex items-center gap-2 font-bold ${theme === 'vs-dark' ? 'text-dark-50' : 'text-gray-800'}`}>
            <TerminalIcon size={20} className="text-primary-500" />
            CPL IDE
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1 pt-1">
        
        {/* Core Actions */}
        <button 
          onClick={handleRun} disabled={isExecuting}
          className="flex items-center gap-1 px-3 py-1.5 rounded bg-primary-600 text-white font-semibold hover:bg-primary-500 disabled:opacity-50 text-sm whitespace-nowrap"
        >
          <Play size={16} className="fill-current" /> Run Code
        </button>
        
        {isAssessment && (
          <button 
            onClick={handleSubmitAssessment} disabled={isExecuting}
            className="flex items-center gap-1 px-3 py-1.5 rounded bg-success-600 text-white font-semibold hover:bg-success-500 disabled:opacity-50 text-sm whitespace-nowrap ml-2"
          >
            <CheckCircle size={16} /> Submit Solution
          </button>
        )}

        <div className={`w-px h-6 mx-1 ${theme === 'vs-dark' ? 'bg-dark-600' : 'bg-gray-300'}`}></div>

        {/* Standalone Actions */}
        {!isAssessment && (
          <>
            <button title="Save Program" onClick={handleSave} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
              <Save size={18} />
            </button>
            <button title="Saved & History" onClick={() => setShowHistory(true)} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
              <History size={18} />
            </button>
            <div className={`w-px h-6 mx-1 ${theme === 'vs-dark' ? 'bg-dark-600' : 'bg-gray-300'}`}></div>
          </>
        )}
        
        <button title="Upload .c File" onClick={() => fileInputRef.current?.click()} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          <Upload size={18} />
          <input type="file" accept=".c,.txt" ref={fileInputRef} className="hidden" onChange={handleUpload} />
        </button>
        <button title="Download .c File" onClick={handleDownload} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          <Download size={18} />
        </button>
        <button title="Copy Code" onClick={handleCopy} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          <Copy size={18} />
        </button>
        <button title="Reset Editor" onClick={handleReset} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          <RotateCcw size={18} />
        </button>
        <button title="Clear Output" onClick={handleClearOutput} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          <Trash2 size={18} />
        </button>

        <div className={`w-px h-6 mx-1 ${theme === 'vs-dark' ? 'bg-dark-600' : 'bg-gray-300'}`}></div>

        {/* View Settings */}
        <button title="Toggle Theme" onClick={toggleTheme} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          {theme === 'vs-dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <select 
          value={fontSize} 
          onChange={changeFontSize}
          className={`text-sm rounded p-1 outline-none ${theme === 'vs-dark' ? 'bg-dark-700 text-dark-100 border border-dark-600' : 'bg-gray-100 text-gray-800 border border-gray-300'}`}
        >
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
        </select>

        <button title="Toggle Fullscreen" onClick={toggleFullscreen} className={`p-1.5 rounded hover:bg-primary-500/20 ${theme === 'vs-dark' ? 'text-dark-200 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'}`}>
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>

      </div>
    </div>
  );

  const renderAssessmentPanel = () => {
    if (!isAssessment || !question) return <div className="hidden"></div>;
    return (
      <div className={`flex flex-col h-full overflow-y-auto custom-scrollbar p-6 ${theme === 'vs-dark' ? 'bg-dark-900 text-dark-200' : 'bg-gray-50 text-gray-700'}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className={`text-2xl font-bold ${theme === 'vs-dark' ? 'text-white' : 'text-black'}`}>{question.title}</h1>
        </div>
        <div className="prose max-w-none mb-8">
          <h3 className={`text-lg font-semibold border-b pb-2 mb-3 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Problem Description</h3>
          <p className="whitespace-pre-wrap">{question.description}</p>
          
          {question.inputFormat && (
            <>
              <h3 className={`text-lg font-semibold border-b pb-2 mb-3 mt-6 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Input Format</h3>
              <p>{question.inputFormat}</p>
            </>
          )}
          
          {question.outputFormat && (
            <>
              <h3 className={`text-lg font-semibold border-b pb-2 mb-3 mt-6 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Output Format</h3>
              <p>{question.outputFormat}</p>
            </>
          )}

          <h3 className={`text-lg font-semibold border-b pb-2 mb-3 mt-6 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Sample Input</h3>
          <pre className={`p-3 rounded-lg font-mono text-sm border ${theme === 'vs-dark' ? 'bg-dark-800 text-dark-100 border-dark-700' : 'bg-gray-100 text-gray-800 border-gray-200'}`}>
            {question.sampleInput || 'No input'}
          </pre>

          <h3 className={`text-lg font-semibold border-b pb-2 mb-3 mt-6 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Sample Output</h3>
          <pre className={`p-3 rounded-lg font-mono text-sm border ${theme === 'vs-dark' ? 'bg-dark-800 text-dark-100 border-dark-700' : 'bg-gray-100 text-gray-800 border-gray-200'}`}>
            {question.sampleOutput}
          </pre>
          
          {question.testCases && question.testCases.length > 0 && (
            <>
              <h3 className={`text-lg font-semibold border-b pb-2 mb-3 mt-6 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Visible Test Cases</h3>
              <div className="flex flex-col gap-4">
                {question.testCases.map((tc, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${theme === 'vs-dark' ? 'bg-dark-800 border-dark-700' : 'bg-gray-100 border-gray-200'}`}>
                    <h4 className={`text-sm font-bold mb-3 border-b pb-2 ${theme === 'vs-dark' ? 'text-dark-100 border-dark-700' : 'text-gray-800 border-gray-300'}`}>Test Case {index + 1}</h4>
                    <div className="mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider block mb-1 opacity-70">Input</span>
                      <pre className="font-mono text-sm whitespace-pre-wrap">{tc.input}</pre>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider block mb-1 opacity-70">Expected Output</span>
                      <pre className="font-mono text-sm whitespace-pre-wrap">{tc.expectedOutput}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderHistoryModal = () => {
    if (!showHistory) return null;
    return (
      <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className={`w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] ${theme === 'vs-dark' ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'}`}>
          <div className={`px-6 py-4 border-b flex justify-between items-center ${theme === 'vs-dark' ? 'border-dark-700' : 'border-gray-200'}`}>
            <h2 className={`text-xl font-bold ${theme === 'vs-dark' ? 'text-white' : 'text-black'}`}>Workspace</h2>
            <button onClick={() => setShowHistory(false)} className={`text-sm font-bold ${theme === 'vs-dark' ? 'text-dark-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>Close</button>
          </div>
          
          <div className="flex-1 flex overflow-hidden">
            {/* Saved Programs */}
            <div className={`flex-1 flex flex-col border-r ${theme === 'vs-dark' ? 'border-dark-700' : 'border-gray-200'}`}>
              <div className={`p-4 font-bold text-sm uppercase tracking-wider border-b ${theme === 'vs-dark' ? 'bg-dark-900/50 text-dark-300 border-dark-700' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                Saved Programs
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {savedPrograms.length === 0 ? (
                  <p className={`text-sm italic text-center mt-4 ${theme === 'vs-dark' ? 'text-dark-500' : 'text-gray-400'}`}>No saved programs.</p>
                ) : (
                  savedPrograms.map(prog => (
                    <div key={prog.id} className={`p-4 rounded-lg border flex justify-between items-center transition-colors ${theme === 'vs-dark' ? 'bg-dark-900 border-dark-700 hover:border-primary-500' : 'bg-gray-50 border-gray-200 hover:border-primary-500'}`}>
                      <div>
                        <h4 className={`font-bold ${theme === 'vs-dark' ? 'text-dark-100' : 'text-gray-800'}`}>{prog.name}</h4>
                        <span className={`text-xs ${theme === 'vs-dark' ? 'text-dark-400' : 'text-gray-500'}`}>{new Date(prog.dateCreated).toLocaleString()}</span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => loadSavedProgram(prog)} className="px-3 py-1 bg-primary-600/20 text-primary-500 rounded font-semibold text-sm hover:bg-primary-600 hover:text-white transition-colors">Open</button>
                        <button onClick={() => deleteSavedProgram(prog.id)} className="p-1 text-error-400 hover:bg-error-400/20 rounded transition-colors"><Trash2 size={16}/></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Execution History */}
            <div className="flex-1 flex flex-col">
              <div className={`p-4 font-bold text-sm uppercase tracking-wider border-b ${theme === 'vs-dark' ? 'bg-dark-900/50 text-dark-300 border-dark-700' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                Recent Executions
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {execHistory.length === 0 ? (
                  <p className={`text-sm italic text-center mt-4 ${theme === 'vs-dark' ? 'text-dark-500' : 'text-gray-400'}`}>No history.</p>
                ) : (
                  execHistory.map((hist, idx) => (
                    <div key={idx} className={`p-3 rounded-lg border flex justify-between items-center ${theme === 'vs-dark' ? 'bg-dark-900 border-dark-700' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center gap-3">
                        {hist.status === 'success' ? <CheckCircle size={16} className="text-success-500"/> : <AlertCircle size={16} className="text-error-500"/>}
                        <span className={`text-sm font-medium ${theme === 'vs-dark' ? 'text-dark-200' : 'text-gray-700'}`}>{new Date(hist.date).toLocaleTimeString()}</span>
                      </div>
                      <span className={`text-xs font-mono ${theme === 'vs-dark' ? 'text-dark-400' : 'text-gray-500'}`}>{hist.time || '-- ms'}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`h-[calc(100vh-70px)] flex flex-col font-sans overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 h-screen' : ''} ${theme === 'vs-dark' ? 'bg-dark-900' : 'bg-[#f3f4f6]'}`}>
      {renderToolbar()}
      {renderHistoryModal()}

      <Split 
        className="flex-1 flex flex-col md:flex-row min-h-0"
        sizes={isAssessment ? [40, 60] : [0, 100]}
        minSize={isAssessment ? 300 : 0}
        gutterSize={isAssessment ? 8 : 0}
        gutterAlign="center"
        direction="horizontal"
      >
        {renderAssessmentPanel()}

        {/* Right Pane: Code Editor & Console */}
        <div className={`flex flex-col h-full min-h-0 ${theme === 'vs-dark' ? 'bg-dark-900 border-dark-800' : 'bg-white border-gray-200'} ${isAssessment ? 'border-l' : ''}`}>
          
          <div className="flex-1 relative min-h-[200px]">
            <Editor
              height="100%"
              language="c"
              theme={theme}
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                minimap: { enabled: false },
                fontSize: fontSize,
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                padding: { top: 16 },
                autoClosingBrackets: 'always',
                autoIndent: 'full',
                formatOnPaste: true,
              }}
            />
          </div>

          {/* Console / Output Area */}
          <div className={`h-[280px] flex flex-col shrink-0 border-t ${theme === 'vs-dark' ? 'bg-[#1e1e1e] border-dark-700' : 'bg-white border-gray-200'}`}>
            {/* IO Tabs */}
            <div className={`h-10 border-b flex justify-between items-center px-4 shrink-0 ${theme === 'vs-dark' ? 'bg-dark-800 border-dark-700' : 'bg-gray-100 border-gray-200'}`}>
              <div className="flex gap-4 h-full">
                <button 
                  onClick={() => setActiveTab('input')}
                  className={`text-sm font-medium px-4 border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'input' 
                      ? (theme === 'vs-dark' ? 'text-primary-400 border-primary-500 bg-dark-900/50' : 'text-primary-600 border-primary-600 bg-white') 
                      : (theme === 'vs-dark' ? 'text-dark-400 border-transparent hover:text-dark-200' : 'text-gray-500 border-transparent hover:text-gray-800')
                  }`}
                >
                  Program Input
                </button>
                <button 
                  onClick={() => setActiveTab('output')}
                  className={`text-sm font-medium px-4 border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'output' 
                      ? (theme === 'vs-dark' ? 'text-primary-400 border-primary-500 bg-dark-900/50' : 'text-primary-600 border-primary-600 bg-white') 
                      : (theme === 'vs-dark' ? 'text-dark-400 border-transparent hover:text-dark-200' : 'text-gray-500 border-transparent hover:text-gray-800')
                  }`}
                >
                  Program Output
                </button>
              </div>
              
              {/* Stats */}
              {activeTab === 'output' && executionStats && (
                <div className={`flex items-center gap-4 text-xs font-mono ${theme === 'vs-dark' ? 'text-dark-400' : 'text-gray-500'}`}>
                  <span>Time: <span className="font-bold">{executionStats.time || 'N/A'}</span></span>
                  <span>Memory: <span className="font-bold">{executionStats.memory || 'N/A'}</span></span>
                </div>
              )}
            </div>
            
            <div className="flex-1 overflow-auto p-4 font-mono text-sm relative">
              {activeTab === 'input' ? (
                <textarea
                  className={`w-full h-full bg-transparent outline-none resize-none font-mono text-sm ${theme === 'vs-dark' ? 'text-dark-100 placeholder-dark-600' : 'text-gray-800 placeholder-gray-400'}`}
                  placeholder="Enter custom standard input (stdin) before running your program..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  spellCheck={false}
                />
              ) : isExecuting ? (
                <div className={`animate-pulse ${theme === 'vs-dark' ? 'text-dark-400' : 'text-gray-500'}`}>{output}</div>
              ) : (
                <pre className={`whitespace-pre-wrap ${
                  executionStatus === 'success' ? (theme === 'vs-dark' ? 'text-success-300' : 'text-success-700') : 
                  executionStatus === 'error' ? (theme === 'vs-dark' ? 'text-error-400' : 'text-error-600') : 
                  (theme === 'vs-dark' ? 'text-dark-300' : 'text-gray-700')
                }`}>
                  {output || 'Output will appear here after execution.'}
                </pre>
              )}
            </div>
          </div>
        </div>
      </Split>
      
      <style dangerouslySetInnerHTML={{__html: `
        .gutter {
          background-color: ${theme === 'vs-dark' ? '#1a1a2e' : '#e5e7eb'};
          background-repeat: no-repeat;
          background-position: 50%;
        }
        .gutter.gutter-horizontal {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjbd5MgAnmwOSYQQY/wAAAABJRU5ErkJggg==');
          cursor: col-resize;
        }
      `}} />
    </div>
  );
}
