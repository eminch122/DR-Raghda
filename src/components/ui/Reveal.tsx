'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  as?: 'div' | 'span';
}

const directionClass: Record<NonNullable<RevealProps['direction']>, string> = {
  up: 'slide-in-from-bottom-6',
  down: 'slide-in-from-top-6',
  left: 'slide-in-from-right-6',
  right: 'slide-in-from-left-6',
  none: '',
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
  as = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>}
      className={`${inView ? `animate-in fade-in fill-mode-backwards ${directionClass[direction]} ease-out` : 'opacity-0'} ${className}`}
      style={inView ? { animationDelay: `${delay}ms`, animationDuration: `${duration}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
