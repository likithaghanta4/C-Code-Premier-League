import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language = 'c', title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-dark-700 bg-[#1d1f21] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-dark-800 border-b border-dark-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error-500/80" />
            <div className="w-3 h-3 rounded-full bg-warning-500/80" />
            <div className="w-3 h-3 rounded-full bg-success-500/80" />
          </div>
          {title && (
            <span className="ml-2 text-xs font-mono text-dark-300">{title}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium text-dark-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-dark-700/50"
        >
          {copied ? (
            <>
              <Check size={14} className="text-success-400" />
              <span className="text-success-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: 'transparent',
            fontSize: '14px',
          }}
          codeTagProps={{
            style: { fontFamily: 'inherit' }
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
