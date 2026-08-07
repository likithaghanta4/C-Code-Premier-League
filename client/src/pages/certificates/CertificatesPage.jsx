import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PageWrapper, PageLoader } from '../../components/common';
import PageHeader from '../../components/common/PageHeader';
import { GlassCard } from '../../components/ui';
import { useAuth } from '../../contexts/AuthContext';
import { certificateService } from '../../services/certificate.service';
import CertificateTemplate from '../../components/certificates/CertificateTemplate';
import { Award, Lock, CheckCircle, Download, Eye, FileText, ChevronRight, X, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const STATUS_COLORS = {
  'Locked': 'text-dark-400 bg-dark-700/50 border-dark-600',
  'In Progress': 'text-warning-400 bg-warning-900/20 border-warning-500/30',
  'Eligible': 'text-success-400 bg-success-900/20 border-success-500/30',
  'Generated': 'text-primary-400 bg-primary-900/20 border-primary-500/30',
  'Downloaded': 'text-primary-400 bg-primary-900/20 border-primary-500/30',
};

const STATUS_ICONS = {
  'Locked': Lock,
  'In Progress': Loader2,
  'Eligible': CheckCircle,
  'Generated': Award,
  'Downloaded': Download,
};

export default function CertificatesPage() {
  const { user } = useAuth();
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Preview State
  const [previewCert, setPreviewCert] = useState(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfRef = useRef(null);
  const navigate = useNavigate();

  const isProfileComplete = user?.rollNumber && user?.department && user.rollNumber !== 'N/A' && user.department !== 'N/A';

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await certificateService.getCertificateStatus();
        if (data.success) {
          setStatusData(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch certificate status", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  const handlePreview = (certificate) => {
    setPreviewCert(certificate);
  };

  const closePreview = () => {
    setPreviewCert(null);
  };

  const handleDownload = async (certificate) => {
    // If not previewing, set it to preview momentarily offscreen (or we can use the ref directly if already open)
    // Actually, we'll force set it to preview state to render, but in a hidden container.
    // For simplicity, we just trigger preview, then download.
    setIsGeneratingPdf(true);
    
    // We need the element rendered. The easiest way is to render it offscreen.
    // We have a hidden div for PDF rendering at the bottom of the component.
    setPreviewCert(certificate);
    
    try {
      toast.info("Generating high-quality PDF...");
      // Small timeout to allow React to render the template
      await new Promise(r => setTimeout(r, 500));
      
      if (!pdfRef.current) throw new Error("Certificate template not found");

      const canvas = await html2canvas(pdfRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // A4 Landscape is 297mm x 210mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      pdf.save(`${certificate.certificateId}.pdf`);
      
      toast.success("Certificate downloaded successfully!");
      // Optionally update status to "Downloaded" via an API call in the future
      
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
      setPreviewCert(null);
    }
  };

  if (loading || !statusData) return <PageLoader />;

  const { course, courseName, allCertificates } = statusData;

  return (
    <PageWrapper>
      <PageHeader
        title="Certificates"
        description="Track your progress and download your earned certificates."
        icon={Award}
      />

      {/* Main Single Certificate Card */}
      <div className="mb-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <GlassCard padding="p-8" className="relative overflow-hidden flex flex-col border-primary-500/30 shadow-xl">
            {/* Background glow if unlocked */}
            {(course.status === 'Generated' || course.status === 'Downloaded') && (
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none bg-primary-500" />
            )}
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${course.status === 'Generated' || course.status === 'Downloaded' ? 'bg-primary-600' : 'bg-dark-700'}`}>
                  <Award className={course.status === 'Generated' || course.status === 'Downloaded' ? 'text-white' : 'text-dark-400'} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-dark-100 uppercase tracking-wide">Certificate of {courseName} Course Completion</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[course.status]}`}>
                      {(STATUS_ICONS[course.status] || Award) && (
                        (() => {
                          const Icon = STATUS_ICONS[course.status] || Award;
                          return <Icon size={14} className={course.status === 'In Progress' ? 'animate-spin' : ''} />;
                        })()
                      )}
                      {course.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-dark-200 mb-8 leading-relaxed max-w-3xl">
              This is the ultimate achievement awarded for successfully completing the entire {courseName} curriculum. 
              You must complete all Learn Modules, Practice Lessons, solve all required Practice Problems, and pass the Final Assessment to unlock this premium certificate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
              {/* Progress Metric: Learn */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-300 font-medium">Learn Modules</span>
                  <span className="text-dark-100 font-bold">{course.learnCompleted} / {course.learnTarget}</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${course.learnCompleted >= course.learnTarget ? 'bg-success-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-primary-500'}`}
                    style={{ width: `${Math.min(100, (course.learnCompleted / course.learnTarget) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Progress Metric: Practice Lessons */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-300 font-medium">Practice Lessons</span>
                  <span className="text-dark-100 font-bold">{course.practiceCompleted} / {course.practiceTarget}</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${course.practiceCompleted >= course.practiceTarget ? 'bg-success-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-primary-500'}`}
                    style={{ width: `${Math.min(100, (course.practiceCompleted / course.practiceTarget) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Progress Metric: Practice Problems */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-300 font-medium">Practice Problems</span>
                  <span className="text-dark-100 font-bold">{course.problemsCompleted} / {course.problemsTarget}</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${course.problemsCompleted >= course.problemsTarget ? 'bg-success-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-primary-500'}`}
                    style={{ width: `${Math.min(100, (course.problemsCompleted / course.problemsTarget) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Progress Metric: Final Assessment */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-300 font-medium">Final Assessment Score</span>
                  <span className="text-dark-100 font-bold">{course.assessmentScore} / 100</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${course.assessmentScore >= course.assessmentTarget ? 'bg-success-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-primary-500'}`}
                    style={{ width: `${Math.min(100, (course.assessmentScore / 100) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Remaining Requirements Section */}
            {course.status !== 'Generated' && course.status !== 'Downloaded' && (
              <div className="mb-8 p-5 rounded-xl bg-dark-800/50 border border-dark-600/50">
                <h4 className="text-sm font-bold text-dark-200 mb-3 uppercase tracking-wider">Remaining Requirements</h4>
                <ul className="space-y-2 text-sm text-dark-300">
                  {course.learnCompleted < course.learnTarget && (
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning-500"></div>
                      Complete {course.learnTarget - course.learnCompleted} Learn Modules
                    </li>
                  )}
                  {course.practiceCompleted < course.practiceTarget && (
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning-500"></div>
                      Complete {course.practiceTarget - course.practiceCompleted} Practice Lessons
                    </li>
                  )}
                  {course.problemsCompleted < course.problemsTarget && (
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning-500"></div>
                      Solve {course.problemsTarget - course.problemsCompleted} Practice Problems
                    </li>
                  )}
                  {course.assessmentScore < course.assessmentTarget && (
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning-500"></div>
                      Pass Final Assessment with at least {course.assessmentTarget} marks
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-6 border-t border-dark-700/50">
              {!isProfileComplete ? (
                <div className="w-full flex flex-col items-center gap-3 py-4">
                  <p className="text-warning-400 font-medium text-sm text-center">
                    Please complete your profile before downloading your certificate.
                  </p>
                  <button 
                    onClick={() => navigate('/profile')}
                    className="flex items-center justify-center gap-2 py-2 px-6 rounded-xl bg-warning-600 hover:bg-warning-500 text-white font-bold transition-all shadow-lg"
                  >
                    Complete Profile
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => handlePreview(course.certificate || { title: `Certificate of ${courseName} Course Completion`, issueDate: new Date(), certificateId: 'TEST-ID-1234' })}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-dark-700 hover:bg-dark-600 text-dark-100 font-semibold transition-colors shadow-sm"
                  >
                    <Eye size={18} /> Preview (Test)
                  </button>
                  
                  {course.status === 'Generated' || course.status === 'Downloaded' ? (
                    <button 
                      onClick={() => handleDownload(course.certificate)}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
                    >
                      <Download size={20} /> Download High-Quality PDF
                    </button>
                  ) : (
                    <div className="w-full sm:flex-1 flex items-center justify-center py-3 px-6 rounded-xl bg-dark-800/80 border border-dark-700 text-dark-400 font-medium">
                      <Lock size={16} className="mr-2" /> Complete all requirements to unlock download
                    </div>
                  )}
                </>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Certificate History */}
      <GlassCard padding="p-0" className="overflow-hidden mb-8">
        <div className="p-6 border-b border-dark-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-secondary-400" />
            <h3 className="text-lg font-bold text-dark-100">Certificate History</h3>
          </div>
          <span className="text-sm text-dark-400 font-medium">{allCertificates.length} Earned</span>
        </div>
        
        {allCertificates.length === 0 ? (
          <div className="p-10 text-center flex flex-col items-center">
            <Award size={48} className="text-dark-600 mb-4" />
            <p className="text-dark-300 font-medium">No certificates earned yet.</p>
            <p className="text-dark-500 text-sm mt-1">Keep learning and practicing to unlock your first certificate!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-800/50 border-b border-dark-700">
                  <th className="px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Certificate Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Completion Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Certificate ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700/50">
                {allCertificates.map((cert) => (
                  <tr key={cert.certificateId} className="hover:bg-dark-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center shrink-0">
                          <Award size={14} className="text-primary-400" />
                        </div>
                        <span className="text-sm font-medium text-dark-200">{cert.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-300">{new Date(cert.issueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono text-dark-400">{cert.certificateId}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handlePreview(cert)}
                          className="p-2 text-dark-400 hover:text-dark-100 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
                          title="Preview"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => handleDownload(cert)}
                          className="p-2 text-primary-400 hover:text-white bg-primary-900/20 hover:bg-primary-600 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </GlassCard>

      {/* Hidden Offscreen Container for PDF Generation */}
      <div className="fixed top-[-9999px] left-[-9999px] z-[-1]">
        <CertificateTemplate ref={pdfRef} certificate={previewCert} user={user} courseName={courseName} />
      </div>

      {/* Preview Modal Portal */}
      {previewCert && !isGeneratingPdf && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-full max-h-full flex flex-col items-center"
          >
            {/* Action Bar */}
            <div className="absolute -top-12 left-0 right-0 flex justify-between items-center w-full">
              <span className="text-white font-medium">Previewing: {previewCert.title}</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleDownload(previewCert)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg"
                >
                  <Download size={16} /> Download PDF
                </button>
                <button 
                  onClick={closePreview}
                  className="p-2 bg-dark-700/80 hover:bg-dark-600 text-white rounded-lg backdrop-blur transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scaled Preview Wrapper to fit screen */}
            <div className="relative overflow-auto custom-scrollbar rounded-xl shadow-2xl max-h-[85vh] max-w-[95vw]" style={{ 
              transform: 'scale(min(1, calc(100vw / 1200)))', 
              transformOrigin: 'top center' 
            }}>
              <CertificateTemplate certificate={previewCert} user={user} courseName={courseName} />
            </div>
          </motion.div>
        </div>,
        document.body
      )}

      {/* Loading overlay for PDF generation */}
      {isGeneratingPdf && createPortal(
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900/90 backdrop-blur-md">
          <Loader2 size={48} className="text-primary-500 animate-spin mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Generating High-Quality PDF</h2>
          <p className="text-dark-300">Please wait a moment while we render your certificate...</p>
        </div>,
        document.body
      )}
    </PageWrapper>
  );
}
