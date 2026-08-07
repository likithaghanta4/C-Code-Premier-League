import { motion } from 'framer-motion';
import { GlassCard } from '../../components/ui';

export default function ProgressCard({ title, icon: Icon, completedCount, totalCount, stats }) {
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <GlassCard padding="p-6" className="lg:col-span-2">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-primary-400" />}
          <h3 className="text-base font-semibold text-dark-200">{title}</h3>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-dark-400 mb-2">
          <span>{completedCount} of {totalCount} completed</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-2.5 bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full"
          />
        </div>
      </div>

      {/* Dynamic Stats Row */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="bg-dark-800/40 rounded-xl p-3 text-center">
                <StatIcon size={16} className={`mx-auto mb-1 ${stat.color}`} />
                <p className="text-lg font-bold text-dark-100">{stat.value}</p>
                <p className="text-[10px] text-dark-500">{stat.label}</p>
              </div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
}
