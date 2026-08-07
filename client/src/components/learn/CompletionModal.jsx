import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, ArrowRight, X } from 'lucide-react';

export default function CompletionModal({ isOpen, onClose, onNext, nextTopic }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-card rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(var(--primary-500),0.2)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-dark-500 hover:text-dark-200 transition-colors rounded-full hover:bg-dark-800/50"
            >
              <X size={20} />
            </button>
            
            <div className="mx-auto w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-ping" />
              <PartyPopper size={40} className="text-primary-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-dark-100 mb-2">🎉 Congratulations!</h2>
            <p className="text-dark-300 mb-6">Lesson Completed Successfully</p>
            
            {nextTopic && (
              <div className="bg-dark-800/50 rounded-xl p-4 mb-6 border border-dark-700/50">
                <p className="text-xs text-dark-500 uppercase tracking-wider font-bold mb-1">Next Lesson Unlocked</p>
                <p className="text-sm font-medium text-dark-200">{nextTopic.title}</p>
              </div>
            )}
            
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl font-medium text-sm text-dark-300 bg-dark-800 hover:bg-dark-700 hover:text-white transition-all"
              >
                Back to Roadmap
              </button>
              
              {nextTopic && (
                <button
                  onClick={onNext}
                  className="flex-1 py-3 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-primary-500 to-cyan-500 hover:opacity-90 shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  Start Next <ArrowRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
