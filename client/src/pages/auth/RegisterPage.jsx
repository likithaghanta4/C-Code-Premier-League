/**
 * CPL — Register Page (SRKR Exclusive)
 * Registration for CSD & CSIT students only.
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Hash,
  GraduationCap,
  Building2,
  Calendar,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    email: '',
    department: '',
    year: '1',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const { confirmPassword, ...registerData } = formData;
    const success = await register(registerData);
    
    if (success) {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#020617] text-white overflow-hidden relative">
      {/* ===== LEFT COLUMN (Branding - Same as Login) ===== */}
      <div className="relative hidden lg:flex lg:w-[40%] flex-col justify-between p-12 z-10 bg-dark-900/30 border-r border-dark-800/50">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/assets/images/building-outline.svg)' }}
        />
        
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <img 
              src="/assets/images/srkr-logo.png" 
              alt="SRKR Engineering College" 
              className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-32 h-32 rounded-full border-2 border-primary-500/30 items-center justify-center bg-dark-900/50 mx-auto">
              <GraduationCap size={40} className="text-primary-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              <span className="text-white">C CODE </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                PREMIER LEAGUE
              </span>
            </h1>
            
            <div className="flex flex-col items-center justify-center bg-dark-900/40 border border-primary-500/20 backdrop-blur-sm rounded-2xl px-6 py-4 mt-8 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <p className="text-sm text-dark-300">Exclusively for</p>
              <p className="text-base font-semibold text-white">SRKR Engineering College</p>
              <p className="text-sm font-medium text-primary-300">CSD & CSIT Students</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== RIGHT COLUMN (Registration Form) ===== */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-4 lg:p-8 z-20 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[560px] py-8"
        >
          {/* Glass Card */}
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
            
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Create Student Account</h2>
              <p className="text-sm text-slate-400">Join CPL to start your coding journey</p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* Name & Roll Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Hash size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    placeholder="Roll Number (e.g. 23B91A0501)"
                    required
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all uppercase"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="College Email Address"
                  required
                  className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Department & Year Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 size={18} className="text-slate-400" />
                  </div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none"
                  >
                    <option value="" disabled>Select Department</option>
                    <option value="CSD">CSD - Computer Science and Design</option>
                    <option value="CSIT">CSIT - Computer Science and IT</option>
                  </select>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-slate-400" />
                  </div>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none"
                  >
                    <option value="" disabled>Select Year</option>
                    <option value="1">First Year</option>
                  </select>
                </div>
              </div>

              {/* Password Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    minLength={6}
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                    minLength={6}
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="pt-2">
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded bg-[#0b1120] border-slate-700 text-primary-500 focus:ring-primary-500 focus:ring-offset-0" />
                  <span className="text-xs text-slate-400 leading-tight group-hover:text-slate-300 transition-colors">
                    I agree to the Terms & Conditions and confirm I am a first-year student of CSD/CSIT at SRKR Engineering College.
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl py-3.5 mt-4 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-slate-400 mt-8">
              Already have an account?{' '}
              <Link
                to={ROUTES.LOGIN}
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
