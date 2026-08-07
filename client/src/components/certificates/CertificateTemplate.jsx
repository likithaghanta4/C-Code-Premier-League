import { forwardRef } from 'react';
import { User, GraduationCap, BookOpen, Calendar, Award, FileText, QrCode } from 'lucide-react';

const CertificateTemplate = forwardRef(({ certificate, user, courseName }, ref) => {
  if (!certificate || !user) return null;

  const assessmentScore = user.assessmentScore || '--';

  return (
    <div 
      ref={ref}
      className="relative bg-white w-[1123px] h-[794px] overflow-hidden shadow-2xl flex flex-col items-center pt-[40px] pb-[30px] text-center font-sans select-none"
      style={{
        backgroundImage: 'radial-gradient(circle at center, #ffffff 0%, #faf8f5 100%)',
      }}
    >
      {/* Borders */}
      <div className="absolute inset-[15px] border-[1px] border-[#C5A059] opacity-40"></div>
      <div className="absolute inset-[20px] border-[3px] border-[#C5A059] opacity-80 shadow-[inset_0_0_15px_rgba(0,0,0,0.05)]"></div>

      {/* Top Left Corner SVG */}
      <svg className="absolute top-0 left-0 w-[450px] h-[450px]" viewBox="0 0 450 450" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldGradientTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2C17D" />
            <stop offset="50%" stopColor="#B38B3A" />
            <stop offset="100%" stopColor="#E2C17D" />
          </linearGradient>
        </defs>
        <path d="M 0 0 L 450 0 C 350 150 150 350 0 450 Z" fill="url(#goldGradientTop)" />
        <path d="M 0 0 L 430 0 C 330 140 130 330 0 430 Z" fill="#0A192F" />
      </svg>

      {/* Bottom Right Corner SVG */}
      <svg className="absolute bottom-0 right-0 w-[400px] h-[400px]" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldGradientBottom" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#E2C17D" />
            <stop offset="50%" stopColor="#B38B3A" />
            <stop offset="100%" stopColor="#E2C17D" />
          </linearGradient>
        </defs>
        <path d="M 400 400 L 0 400 C 100 250 250 100 400 0 Z" fill="url(#goldGradientBottom)" />
        <path d="M 400 400 L 20 400 C 120 260 260 120 400 20 Z" fill="#0A192F" />
      </svg>
      
      {/* Top Right Certificate ID */}
      <div className="absolute top-[40px] right-[50px] text-right z-10">
        <p className="text-sm font-mono text-slate-800 font-semibold tracking-wider">
          {certificate.certificateId}
        </p>
        <div className="w-[180px] h-[1px] bg-[#C5A059] mt-1 ml-auto opacity-50"></div>
        {/* Small gold ornament below ID */}
        <div className="flex justify-center mt-1">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]"></div>
          <div className="w-8 h-[1px] bg-[#C5A059] self-center mx-1"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]"></div>
        </div>
      </div>

      {/* Top Left Branding (Over the Navy blue curve) */}
      <div className="absolute top-[40px] left-[40px] z-20 flex flex-col items-center">
        {/* Shield Logo */}
        <div className="relative w-24 h-28 flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full drop-shadow-xl">
            <path d="M 50 5 L 90 20 L 90 60 C 90 90 50 115 50 115 C 50 115 10 90 10 60 L 10 20 Z" fill="#0A192F" stroke="#C5A059" strokeWidth="4" />
            <path d="M 50 12 L 82 25 L 82 58 C 82 82 50 105 50 105 C 50 105 18 82 18 58 L 18 25 Z" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
          <div className="z-10 flex flex-col items-center justify-center mt-[-10px]">
            <span className="text-[#C5A059] font-black text-xs font-mono tracking-widest mt-2">{'</>'}</span>
            <span className="text-white font-black text-2xl tracking-widest mt-1" style={{ fontFamily: 'Cinzel, serif' }}>CPL</span>
            <span className="text-[#C5A059] text-[10px] mt-1">★</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-white text-xs font-black tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>C Code Premier League</p>
          <p className="text-[#C5A059] text-[8px] font-bold tracking-[0.2em] mt-1">LEARN • PRACTICE • EXCEL</p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="z-10 w-full flex flex-col items-center mt-4">
        
        {/* Decorative Top Ornament */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-16 h-[2px] bg-[#C5A059]"></div>
          <div className="w-2 h-2 rotate-45 bg-[#C5A059]"></div>
          <div className="w-4 h-4 rotate-45 border-2 border-[#C5A059]"></div>
          <div className="w-2 h-2 rotate-45 bg-[#C5A059]"></div>
          <div className="w-16 h-[2px] bg-[#C5A059]"></div>
        </div>

        {/* Title */}
        <h1 className="text-[48px] font-black text-[#0A192F] tracking-wider uppercase leading-none" style={{ fontFamily: 'Cinzel, serif' }}>
          CERTIFICATE
        </h1>
        <div className="flex items-center gap-4 mt-1 mb-3">
          <div className="w-24 h-[1px] bg-[#C5A059]"></div>
          <h2 className="text-xl font-semibold text-[#334155] tracking-[0.3em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            OF COMPLETION
          </h2>
          <div className="w-24 h-[1px] bg-[#C5A059]"></div>
        </div>

        <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          THIS CERTIFICATE IS PROUDLY PRESENTED TO
        </p>

        {/* Student Name */}
        <h3 className="text-[56px] text-[#0A192F] leading-tight capitalize mb-1" style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 500 }}>
          {user.fullName}
        </h3>

        {/* Name Underline Ornament */}
        <div className="flex justify-center items-center gap-2 mb-4 w-[500px]">
          <div className="flex-1 h-[1px] bg-[#C5A059]"></div>
          <div className="w-2 h-2 rotate-45 bg-[#C5A059]"></div>
          <div className="w-3 h-3 rotate-45 border border-[#C5A059]"></div>
          <div className="w-2 h-2 rotate-45 bg-[#C5A059]"></div>
          <div className="flex-1 h-[1px] bg-[#C5A059]"></div>
        </div>

        {/* 3 Columns Details */}
        <div className="flex justify-center gap-16 mb-4 w-[800px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
              <User size={18} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Roll Number</p>
              <p className="text-sm font-bold text-[#0A192F]">{user.rollNumber || 'N/A'}</p>
            </div>
          </div>
          
          <div className="w-[1px] h-10 bg-slate-300"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap size={18} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Branch</p>
              <p className="text-sm font-bold text-[#0A192F]">{user.department || 'N/A'}</p>
            </div>
          </div>

          <div className="w-[1px] h-10 bg-slate-300"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
              <BookOpen size={18} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Course</p>
              <p className="text-sm font-bold text-[#0A192F]">{courseName || 'C Programming'}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 font-bold italic mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          For successfully completing the
        </p>

        {/* Course Banner */}
        <div className="relative bg-[#0A192F] px-16 py-2 mb-3 shadow-lg border-y border-[#C5A059]">
          <div className="absolute left-0 top-0 w-4 h-full bg-[#C5A059]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 50%)' }}></div>
          <div className="absolute right-0 top-0 w-4 h-full bg-[#C5A059]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 50%, 100% 100%, 0 100%)' }}></div>
          <h3 className="text-xl font-bold text-white tracking-[0.15em] uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
            {courseName || 'C PROGRAMMING'} COURSE
          </h3>
        </div>

        {/* Description Paragraph */}
        <p className="text-[13px] text-slate-700 leading-relaxed max-w-[750px] mb-3 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          This certificate is proudly awarded to <span className="font-bold text-[#0A192F]">{user.fullName}</span> (Roll Number: <span className="font-bold text-[#0A192F]">{user.rollNumber || 'N/A'}</span>, Branch: <span className="font-bold text-[#0A192F]">{user.department || 'N/A'}</span>) 
          for successfully completing the <span className="font-bold text-[#0A192F]">{courseName || 'C Programming'} Course</span> by completing all Learn Modules, 
          Practice Modules, and passing the Final Assessment. This achievement demonstrates proficiency in 
          C Programming concepts and practical problem-solving skills.
        </p>
        
        <div className="w-[800px] h-[1px] bg-[#C5A059] opacity-60 mb-2"></div>
      </div>

      {/* Footer Area */}
      <div className="w-[900px] flex justify-between items-end z-10 px-4 mt-auto mb-4">
        
        {/* Left Side: Bottom Stats */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1 pr-12">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0A192F] flex items-center justify-center shrink-0">
              <Calendar size={14} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Course Duration</p>
              <p className="text-xs font-bold text-[#0A192F]">Module 6</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0A192F] flex items-center justify-center shrink-0">
              <Calendar size={14} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Completion Date</p>
              <p className="text-xs font-bold text-[#0A192F]">
                {new Date(certificate.issueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0A192F] flex items-center justify-center shrink-0">
              <Award size={14} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Final Score</p>
              <p className="text-sm font-black text-[#0A192F]">{assessmentScore} <span className="text-xs">/ 100</span></p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0A192F] flex items-center justify-center shrink-0">
              <FileText size={14} className="text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Certificate ID</p>
              <p className="text-[11px] font-mono font-bold text-[#0A192F]">{certificate.certificateId}</p>
            </div>
          </div>

          {/* Signature Area (Blank Signature as requested) */}
          <div className="col-span-2 mt-4 pt-2">
            <div className="w-[200px] border-t border-slate-800 pt-2 text-left">
              <p className="text-[10px] font-bold text-slate-700 tracking-widest uppercase">Authorized Signature</p>
              <p className="text-[9px] text-slate-500 font-semibold tracking-wider mt-0.5">CPL Academic Coordinator</p>
            </div>
          </div>
        </div>

        {/* Center: Official Seal */}
        <div className="flex flex-col items-center justify-end shrink-0 mx-4">
          {/* Detailed Golden Seal */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-2">
            {/* Outer ruffled edge (approximated with rotated squares) */}
            <div className="absolute inset-0 bg-[#E2C17D] rounded-full scale-105 shadow-xl"></div>
            {[0, 15, 30, 45, 60, 75].map((deg) => (
              <div key={deg} className="absolute inset-0 bg-[#C5A059] rounded-md" style={{ transform: `rotate(${deg}deg) scale(0.95)` }}></div>
            ))}
            {/* Inner circles */}
            <div className="absolute inset-2 bg-[#0A192F] rounded-full z-10 border-2 border-[#E2C17D] flex flex-col items-center justify-center shadow-inner">
              <div className="absolute inset-[3px] border border-dashed border-[#C5A059] rounded-full opacity-50"></div>
              <div className="flex gap-1 mb-1">
                {'★★★★★'.split('').map((star, i) => <span key={i} className="text-[#E2C17D] text-[6px]">{star}</span>)}
              </div>
              <p className="text-lg font-black text-[#E2C17D] tracking-widest" style={{ fontFamily: 'Cinzel, serif' }}>CPL</p>
              <p className="text-[7px] font-bold text-white tracking-widest mt-1">OFFICIAL</p>
              <p className="text-[7px] font-bold text-white tracking-widest">SEAL</p>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code Area */}
        <div className="flex-1 flex flex-col items-end pb-2 pl-12">
          <div className="flex flex-col items-center bg-white p-2 border border-slate-200 shadow-sm rounded">
            {/* Mock QR Code since we don't have a dynamic QR generator, QrCode icon works perfectly */}
            <QrCode size={70} strokeWidth={1} className="text-[#0A192F]" />
          </div>
          <div className="text-center mt-3 mr-[-10px]">
            <p className="text-[10px] font-bold text-slate-700 tracking-widest uppercase">Verify Certificate</p>
            <p className="text-[9px] text-slate-500 font-medium tracking-wide mt-0.5">cpl.codepremierleague.com/verify</p>
          </div>
        </div>
      </div>
      
    </div>
  );
});

CertificateTemplate.displayName = 'CertificateTemplate';

export default CertificateTemplate;
