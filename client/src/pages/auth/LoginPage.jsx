/**
 * CPL — Login Page (SRKR Exclusive)
 * Premium two-column login page.
 */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserPlus,
  GraduationCap,
  Code2,
  Terminal,
  Trophy,
  Award,
  User,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../../components/common';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  // Clear any leftover mock authentication tokens from previous tests
  useEffect(() => {
    // Only clear if not in loading state and no valid user
    // We don't want to log them out immediately if they are coming from a refresh
    // Actually, AuthContext handles validation on mount, so we can remove this 
    // force logout which was only for fixing the mock issue.
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    
    const success = await login({ email, password });
    if (success) {
      navigate(ROUTES.DASHBOARD);
    }
  };

  const features = [
    { icon: Code2, title: 'Learn C', desc: 'Step by Step' },
    { icon: Terminal, title: 'Practice', desc: 'Real Problems' },
    { icon: Trophy, title: 'Compete', desc: 'Win & Excel' },
    { icon: Award, title: 'Achieve', desc: 'Badges & Certificates' },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#020617] text-white font-sans relative overflow-hidden">
      
      {/* ===== LEFT COLUMN (Branding) ===== */}
      <div className="lg:w-[55%] flex flex-col justify-between p-8 lg:p-12 z-10 relative min-h-screen lg:min-h-0">
        
        {/* Background Building Graphic Overlay (Subtle) */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none bg-bottom bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/assets/images/building-outline.svg)' }}
        />
        
        <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
          
          {/* SRKR Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src="/assets/images/srkr-logo.png" 
              alt="SRKR Engineering College" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="hidden w-40 h-40 rounded-full border-2 border-primary-500/30 items-center justify-center bg-dark-900/50 mx-auto">
              <GraduationCap size={48} className="text-primary-400" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Faint 'C' watermark behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-blue-500/5 select-none pointer-events-none z-0">
              C
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 whitespace-nowrap z-10 relative">
              <span className="text-white">C CODE </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                PREMIER LEAGUE
              </span>
            </h1>
            
            {/* Tagline */}
            <div className="flex items-center justify-center gap-4 mt-4 mb-8">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-orange-500/50" />
              <p className="text-lg md:text-xl font-medium text-orange-400 tracking-wide">
                Code. Learn. Compete. Excel.
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-orange-500/50" />
            </div>
          </motion.div>

          {/* Exclusive Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 bg-[#0a0f1c]/80 border border-slate-700/60 rounded-full px-6 py-3 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative z-10"
          >
            <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30">
              <GraduationCap size={20} className="text-blue-400" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[13px] text-slate-300">Exclusively for</p>
              <p className="text-[15px] font-bold text-white">SRKR Engineering College</p>
              <p className="text-[13px] font-semibold text-slate-400">CSD & CSIT Students</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex flex-row items-end justify-between gap-4 mt-auto pt-8 relative z-10 w-full max-w-2xl mx-auto"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-orange-400">
                <feature.icon size={22} strokeWidth={2} />
              </div>
              <div className="text-left flex flex-col justify-center">
                <p className="text-[15px] font-bold text-white leading-tight">{feature.title}</p>
                <p className="text-[12px] text-slate-400 leading-tight">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== RIGHT COLUMN (Login Form) ===== */}
      <div className="lg:w-[45%] flex flex-col items-center justify-center p-4 lg:p-8 z-20 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[440px] flex flex-col items-center"
        >
          {/* Glass Card */}
          <div className="w-full bg-[#070b14]/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
            
            {/* Subtle top glow inside card */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-[#0b1221] border border-slate-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <User size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">Welcome Back!</h2>
              <p className="text-sm text-slate-300">Log in to continue your coding journey</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="College Email"
                  required
                  className="w-full bg-transparent border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-[15px] text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all hover:border-slate-500"
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full bg-transparent border border-slate-700 rounded-xl py-3.5 pl-11 pr-12 text-[15px] text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all hover:border-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 pb-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer appearance-none w-4 h-4 border border-slate-500 rounded bg-transparent checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all" />
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[13px] text-slate-300 group-hover:text-white transition-colors">Remember Me</span>
                </label>
                <Link to={ROUTES.FORGOT_PASSWORD} className="text-[13px] text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-bold tracking-wide rounded-xl py-3.5 mt-2 flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'LOGGING IN...' : 'LOGIN'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-[1px] bg-slate-700/70" />
              <span className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">OR</span>
              <div className="flex-1 h-[1px] bg-slate-700/70" />
            </div>

            {/* Register Action */}
            <div className="text-center">
              <p className="text-[13px] text-slate-400 mb-3">New to CPL?</p>
              <Link to={ROUTES.REGISTER}>
                <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 text-slate-300 text-[14px] font-semibold tracking-wide rounded-xl py-3.5 transition-all">
                  <UserPlus size={18} className="text-blue-500" />
                  REGISTER NOW
                </button>
              </Link>
            </div>

            {/* Secure Badge Inside Card */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col items-center justify-center gap-1.5 text-center">
              <p className="text-[12px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-slate-500" /> Secure & Trusted Platform for
              </p>
              <p className="text-[13px] text-blue-400 font-semibold tracking-wide">SRKR Engineering College Students</p>
            </div>
          </div>

          {/* Copyright Outside Card */}
          <p className="text-center text-[12px] text-slate-500 mt-6">
            © 2026 CPL | All Rights Reserved
          </p>
        </motion.div>
      </div>
    </div>
  );
}
