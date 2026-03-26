import { useState, useRef, useCallback, useEffect, type ReactNode } from 'react';
import { hoverCards } from '../../data/hoverCards';
import { categoryConfig } from '../../types';
import HoverCard from './HoverCard';

interface HoverTriggerProps {
  cardId: string;
  children: ReactNode;
}

export default function HoverTrigger({ cardId, children }: HoverTriggerProps) {
  const card = hoverCards[cardId];
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('above');
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = useCallback(() => {
    clearTimeout(timeoutRef.current);
    // Determine position based on trigger location in viewport
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      setPosition(spaceAbove > 340 ? 'above' : 'below');
    }
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(false), 200);
  }, []);

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setVisible((v) => !v);
    } else if (e.key === 'Escape') {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!card) {
    return <>{children}</>;
  }

  const config = categoryConfig[card.category];

  return (
    <div
      ref={triggerRef}
      className="relative inline-block w-full"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-describedby={`hover-card-${cardId}`}
    >
      {/* Colored dot affordance */}
      <div
        className="absolute -top-1 -right-1 z-10 w-2.5 h-2.5 rounded-full border border-navy-light"
        style={{ backgroundColor: config.color }}
        aria-hidden="true"
      />

      {children}

      <div id={`hover-card-${cardId}`}>
        <HoverCard card={card} position={position} visible={visible} />
      </div>
    </div>
  );
}
