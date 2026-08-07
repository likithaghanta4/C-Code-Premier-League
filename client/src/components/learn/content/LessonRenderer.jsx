import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import CodeBlock from './CodeBlock';
import NoteBlock from './NoteBlock';

export default function LessonRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="space-y-6 text-dark-200">
      {blocks.map((block, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <BlockRenderer block={block} />
          </motion.div>
        );
      })}
    </div>
  );
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-4">{block.content}</h2>;
    case 'h3':
      return <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-3">{block.content}</h3>;
    case 'text':
      return <p className="text-base leading-relaxed text-dark-300 mb-4 whitespace-pre-wrap">{block.content}</p>;
    case 'list':
      return (
        <ul className="list-disc list-inside space-y-2 text-dark-300 mb-4 ml-2">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case 'code':
      return <CodeBlock code={block.code} language={block.language || 'c'} title={block.title} />;
    case 'note':
    case 'tip':
    case 'warning':
    case 'mistake':
    case 'keypoint':
      return <NoteBlock type={block.type} title={block.title} content={block.content} />;
    case 'table':
      return (
        <div className="overflow-x-auto my-6 border border-dark-700 rounded-xl">
          <table className="w-full text-left text-sm text-dark-300">
            <thead className="bg-dark-800 text-dark-200 font-medium uppercase tracking-wider text-xs">
              <tr>
                {block.headers.map((header, i) => (
                  <th key={i} className="px-6 py-4 border-b border-dark-700">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-700/50 bg-dark-900/50">
              {block.rows.map((row, i) => (
                <tr key={i} className="hover:bg-dark-800/30 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-4 whitespace-pre-wrap">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'flow':
      return (
        <div className="flex flex-col items-center my-8 space-y-2">
          {block.items.map((item, i) => (
            <Fragment key={i}>
              <div className="bg-dark-800/80 border border-dark-700/50 px-6 py-4 rounded-2xl text-center w-full max-w-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] font-medium text-dark-100 font-mono text-sm whitespace-pre-wrap">
                {item}
              </div>
              {i < block.items.length - 1 && (
                <div className="text-primary-500 my-1 opacity-70">
                  <ArrowDown size={24} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      );
    case 'quiz':
      return <QuizBlock question={block.question} options={block.options} answer={block.answer} />;
    default:
      return null;
  }
}

function QuizBlock({ question, options, answer }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="my-6 p-6 rounded-2xl bg-dark-800/50 border border-dark-700 shadow-md">
      <h4 className="text-lg font-semibold text-dark-100 mb-4">{question}</h4>
      <div className="space-y-3">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = isSelected && opt.startsWith(answer); // Simple check
          const isWrong = isSelected && !opt.startsWith(answer);

          let styles = 'bg-dark-900 border-dark-700 hover:border-primary-500 hover:bg-dark-800 text-dark-300';
          if (isCorrect) styles = 'bg-success-500/10 border-success-500/50 text-success-400';
          if (isWrong) styles = 'bg-error-500/10 border-error-500/50 text-error-400';

          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${styles} flex items-center justify-between`}
            >
              <span>{opt}</span>
              {isCorrect && <CheckCircle2 size={18} />}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-4 pt-4 border-t border-dark-700/50">
          <p className="text-sm">
            <span className="font-semibold text-dark-400 uppercase tracking-wider text-[10px] mr-2">Correct Answer:</span>
            <span className="text-success-400 font-medium">{answer}</span>
          </p>
        </div>
      )}
    </div>
  );
}
