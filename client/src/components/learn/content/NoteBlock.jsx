import { Lightbulb, AlertTriangle, Info, BookOpen } from 'lucide-react';

export default function NoteBlock({ type = 'info', title, content }) {
  const config = {
    info: {
      icon: Info,
      bg: 'bg-primary-500/10',
      border: 'border-primary-500/20',
      iconColor: 'text-primary-400',
      titleColor: 'text-primary-300',
      defaultTitle: 'Note',
    },
    tip: {
      icon: Lightbulb,
      bg: 'bg-success-500/10',
      border: 'border-success-500/20',
      iconColor: 'text-success-400',
      titleColor: 'text-success-300',
      defaultTitle: 'Pro Tip',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-warning-500/10',
      border: 'border-warning-500/20',
      iconColor: 'text-warning-400',
      titleColor: 'text-warning-300',
      defaultTitle: 'Warning',
    },
    mistake: {
      icon: AlertTriangle,
      bg: 'bg-error-500/10',
      border: 'border-error-500/20',
      iconColor: 'text-error-400',
      titleColor: 'text-error-300',
      defaultTitle: 'Common Mistake',
    },
    keypoint: {
      icon: BookOpen,
      bg: 'bg-accent-500/10',
      border: 'border-accent-500/20',
      iconColor: 'text-accent-400',
      titleColor: 'text-accent-300',
      defaultTitle: 'Key Point',
    },
  };

  const style = config[type] || config.info;
  const Icon = style.icon;
  const displayTitle = title || style.defaultTitle;

  return (
    <div className={`my-6 flex gap-4 p-5 rounded-2xl border ${style.bg} ${style.border}`}>
      <div className="flex-shrink-0 mt-1">
        <Icon size={24} className={style.iconColor} />
      </div>
      <div>
        <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${style.titleColor}`}>
          {displayTitle}
        </h4>
        <div className="text-dark-200 text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}
