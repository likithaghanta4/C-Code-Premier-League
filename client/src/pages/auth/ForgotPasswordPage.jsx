/**
 * CPL — Forgot Password Page
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

export default function ForgotPasswordPage() {
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
            Forgot Password?
          </h1>
          <p className="text-sm text-slate-400">
            Enter your college email and we'll send you a reset link
          </p>
        </div>

        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <form className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-400" />
              </div>
              <input
                type="email"
                placeholder="College Email Address"
                required
                className="w-full bg-[#0b1120] border border-slate-700/80 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <Send size={18} />
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-8">
            <Link
              to={ROUTES.LOGIN}
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
