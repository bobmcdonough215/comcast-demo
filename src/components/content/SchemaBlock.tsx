import { useState } from 'react';

interface SchemaBlockProps {
  schemaType: string;
  json: object;
}

export default function SchemaBlock({ schemaType, json }: SchemaBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const jsonStr = JSON.stringify(json, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8 rounded-lg border border-white/5 overflow-hidden">
      <button
        className="w-full flex items-center gap-2 px-5 py-3 bg-navy-light/50 hover:bg-navy-light/70 transition-colors text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-sm">&#x1f4cb;</span>
        <span className="text-sm font-medium text-white flex-1">
          Schema Markup &mdash; {schemaType}
        </span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="relative">
          <div className="px-5 py-2 text-xs text-slate-500">
            This structured data is embedded in the page &lt;head&gt; and tells Google and AI systems what this page means.
          </div>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-4 text-[10px] font-mono text-slate-500 hover:text-cyan transition-colors px-2 py-1 rounded bg-white/5"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre className="px-5 pb-4 text-xs text-slate-300 overflow-x-auto leading-relaxed">
            <code>{jsonStr}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
