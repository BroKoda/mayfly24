import { useId } from 'react';
import type { CSSProperties } from 'react';
import './MayflyAnimation.scss';

export interface MayflyAnimationProps {
  animated?: boolean;
  duration?: number;
  className?: string;
  replayKey?: string | number;
}

/** Transparent, dependency-free SVG logo. Animation plays once on mount. */
export default function MayflyAnimation({
  animated = true,
  duration = 2250,
  className = '',
  replayKey = 0,
}: MayflyAnimationProps) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const style = { '--mf-speed': Math.max(0, duration) / 2250 } as CSSProperties;
  return (
    <svg
      key={replayKey}
      className={`mayfly-logo ${animated ? 'mayfly-logo--animated' : ''} ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1165 1106"
      role="img"
      aria-label="Mayfly24 geometric mayfly symbol"
    >
      <defs>
        <linearGradient id={`${id}-g1`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#D4AD73" />
          <stop offset="1" stopColor="#DEB67B" />
        </linearGradient>
        <linearGradient id={`${id}-g2`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#D5AB6C" />
          <stop offset="1" stopColor="#C99D63" />
        </linearGradient>
        <linearGradient id={`${id}-g3`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#456268" />
          <stop offset="1" stopColor="#6E8990" />
        </linearGradient>
        <linearGradient id={`${id}-b1`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#B47957" />
          <stop offset="1" stopColor="#BE8969" />
        </linearGradient>
        <linearGradient id={`${id}-b2`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#A16C4B" />
          <stop offset="1" stopColor="#925D3D" />
        </linearGradient>
        <linearGradient id={`${id}-b3`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#A46D4A" />
          <stop offset="1" stopColor="#935B3A" />
        </linearGradient>
        <linearGradient id={`${id}-s1`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#94B5BE" />
          <stop offset="1" stopColor="#829FA8" />
        </linearGradient>
        <linearGradient id={`${id}-s2`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#8CAAB3" />
          <stop offset="1" stopColor="#6D8A94" />
        </linearGradient>
        <linearGradient id={`${id}-s3`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#4B656B" />
          <stop offset="1" stopColor="#6F9099" />
        </linearGradient>
        <linearGradient id={`${id}-head`} x1="0" y1="0" x2="35%" y2="100%">
          <stop stopColor="#F8F4EA" />
          <stop offset="1" stopColor="#EFE4D1" />
        </linearGradient>
      </defs>
      <g className="mf-rise">
        <path d="M 610 586 L 678 714 L 461 802 Z" fill={`url(#${id}-s1)`} />
        <path d="M 461 802 L 678 714 L 637 748 L 615 893 Z" fill={`url(#${id}-s2)`} />
        <path d="M 461 802 L 615 893 L 368 1096 Z" fill={`url(#${id}-s3)`} />
        <g className="mf-small">
          <path d="M 610 586 L 921 477 L 678 714 Z" fill={`url(#${id}-b3)`} />
        </g>
        <g className="mf-left">
          <path d="M 8 101 L 386 263 L 178 421 Z" fill={`url(#${id}-g1)`} />
          <path d="M 178 421 L 386 263 L 546 592 Z" fill={`url(#${id}-g2)`} />
          <path d="M 178 421 L 546 592 L 442 708 Z" fill={`url(#${id}-g3)`} />
        </g>
        <g className="mf-right">
          <path d="M 772 179 L 1159 8 L 995 328 Z" fill={`url(#${id}-b1)`} />
          <path d="M 772 179 L 995 328 L 610 586 Z" fill={`url(#${id}-b2)`} />
        </g>
        <g className="mf-head">
          <circle cx="567" cy="252" r="88" fill={`url(#${id}-head)`} />
        </g>
      </g>
    </svg>
  );
}
