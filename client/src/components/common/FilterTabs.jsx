import { motion } from 'framer-motion';

export default function FilterTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              isActive ? 'text-white' : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-dark-700 border border-dark-600 rounded-full"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
