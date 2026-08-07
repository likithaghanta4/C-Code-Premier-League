import React, { useEffect } from 'react';
import { GlassCard } from '../ui';
import { Flame, CheckCircle, XCircle, Trophy, Calendar } from 'lucide-react';
import { toast } from 'react-toastify';

const MILESTONE_MESSAGES = {
  3: "Great Start!",
  7: "One Week Streak!",
  15: "Keep Going!",
  30: "Learning Champion!",
  60: "Consistency Master!",
  100: "CPL Legend!"
};

const StreakCard = ({ streak }) => {
  const currentStreak = streak?.current || 0;
  const longestStreak = streak?.longest || 0;
  const activeDays = streak?.activeDays || [];

  // Helper to format Date to YYYY-MM-DD local time
  const toDateString = (date) => {
    const d = new Date(date);
    const offset = d.getTimezoneOffset() * 60000;
    return (new Date(d - offset)).toISOString().split('T')[0];
  };

  const todayStr = toDateString(new Date());
  const isTodayActive = activeDays.includes(todayStr);

  // Milestone Celebration logic
  useEffect(() => {
    if (currentStreak > 0 && isTodayActive) {
      const milestones = [3, 7, 15, 30, 60, 100];
      if (milestones.includes(currentStreak)) {
        // Prevent toast spam by checking sessionStorage
        const toastKey = `streak_toast_${todayStr}_${currentStreak}`;
        if (!sessionStorage.getItem(toastKey)) {
          toast.success(`🔥 ${currentStreak} Days! ${MILESTONE_MESSAGES[currentStreak] || "Amazing work!"}`, {
            icon: '🔥',
            theme: 'dark'
          });
          sessionStorage.setItem(toastKey, 'true');
        }
      }
    }
  }, [currentStreak, isTodayActive, todayStr]);

  // Generate current week dates (Mon - Sun)
  const getCurrentWeek = () => {
    const curr = new Date();
    // getDay() is 0 for Sun, 1 for Mon. We want Mon=0, Sun=6
    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(curr.setDate(first + i));
      const dayStr = toDateString(day);
      const isPastOrToday = day <= new Date(); // Only evaluate days that have passed or are today
      const isActive = activeDays.includes(dayStr);
      
      const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      week.push({
        name: dayNames[i],
        dateStr: dayStr,
        isPastOrToday,
        isActive
      });
    }
    return week;
  };

  const week = getCurrentWeek();

  return (
    <GlassCard padding="p-6" className="relative overflow-hidden flex flex-col h-full border-warning-500/30">
      {/* Background Glow */}
      {isTodayActive && (
        <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none bg-warning-500" />
      )}
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-warning-900/30 flex items-center justify-center shrink-0">
          <Flame size={20} className="text-warning-500" />
        </div>
        <h3 className="text-lg font-bold text-dark-100">Learning Streak</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800/50 p-4 rounded-xl border border-dark-700/50">
          <p className="text-sm font-semibold text-dark-400 mb-1">Current</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-warning-400">{currentStreak}</span>
            <span className="text-dark-300 font-medium">Days</span>
          </div>
        </div>
        <div className="bg-dark-800/50 p-4 rounded-xl border border-dark-700/50">
          <p className="text-sm font-semibold text-dark-400 mb-1 flex items-center gap-1">
            <Trophy size={14} className="text-primary-400" /> Longest
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-dark-100">{longestStreak}</span>
            <span className="text-dark-400">Days</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-dark-300 mb-3 flex justify-between items-center">
          Weekly Progress
          <span className="text-xs text-dark-400 font-normal">Mon - Sun</span>
        </p>
        <div className="flex justify-between items-center gap-1 bg-dark-800/30 p-3 rounded-xl border border-dark-700/50">
          {week.map((day, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
              <span className="text-[10px] uppercase font-bold text-dark-400">{day.name}</span>
              {day.isPastOrToday ? (
                day.isActive ? (
                  <CheckCircle size={20} className="text-success-500 bg-success-500/10 rounded-full" />
                ) : (
                  <XCircle size={20} className="text-dark-600" />
                )
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-dark-700 border-dashed" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div className={`p-4 rounded-xl border ${isTodayActive ? 'bg-success-900/10 border-success-500/20' : 'bg-warning-900/10 border-warning-500/20'}`}>
          <div className="flex items-start gap-3">
            {isTodayActive ? (
              <CheckCircle size={20} className="text-success-500 shrink-0 mt-0.5" />
            ) : (
              <Flame size={20} className="text-warning-500 shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`text-sm font-bold mb-1 ${isTodayActive ? 'text-success-400' : 'text-warning-400'}`}>
                {isTodayActive ? "Today's Status: ✅ Completed" : "Don't break your streak!"}
              </p>
              <p className="text-xs text-dark-300">
                {isTodayActive 
                  ? "You've successfully completed a learning activity today. Come back tomorrow!" 
                  : "Complete one lesson or solve one practice problem today to maintain your streak."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default StreakCard;
