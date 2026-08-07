/**
 * CPL — Reset Password Page
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, KeyRound } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Reset Password
          </h1>
          <p className="text-sm text-slate-400">
            Enter your new password below
          </p>
        </div>

        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <form className="space-y-4">
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                required
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
                placeholder="Confirm New Password"
                required
                className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl py-3 mt-4 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <KeyRound size={18} />
              Reset Password
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-400">
              Remember your password?{' '}
              <Link
                to={ROUTES.LOGIN}
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
