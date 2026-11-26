import { useReveal } from '../../hooks/useReveal';

interface SectionHeadingProps {
  readonly label: string;
  readonly headline: string;
  readonly align?: 'start' | 'center';
}

export function SectionHeading({
  label,
  headline,
  align = 'start',
}: SectionHeadingProps) {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className={`reveal ${align === 'center' ? 'text-center' : ''}`.trim()}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-headline">{headline}</h2>
    </div>
  );
}
