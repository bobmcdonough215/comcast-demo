import { useState, type ReactNode, type FormEvent } from 'react';

const PASSCODE = 'comcast-demo';
const SESSION_KEY = 'comcast-demo-auth';

export default function AuthGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PASSCODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setAuthed(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-2xl font-heading font-bold text-white tracking-tight mb-1">
            Comcast Business
          </div>
          <div className="text-[11px] text-cyan tracking-widest uppercase">
            Content Strategy Demo
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="passcode" className="block text-xs text-slate-500 uppercase tracking-wide mb-2">
              Enter passcode to continue
            </label>
            <input
              id="passcode"
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              className={`w-full bg-navy-light border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan transition-colors ${
                error ? 'border-red-500' : 'border-white/10 focus:border-cyan'
              }`}
              placeholder="Passcode"
            />
            {error && (
              <p className="text-xs text-red-400 mt-2">Incorrect passcode. Try again.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-electric hover:bg-electric/80 text-white font-semibold text-sm transition-colors"
          >
            Enter Demo
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-600 mt-8">
          Portfolio demo &mdash; not an official Comcast product
        </p>
      </div>
    </div>
  );
}
