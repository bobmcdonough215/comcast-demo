import { useState, type ReactNode } from 'react';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header bar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-navy sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white p-1"
            aria-label="Open navigation"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-heading font-semibold text-white">
            Comcast Business — Content Strategy Demo
          </span>
        </div>

        {/* Main content */}
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
