import type { ActivityPillar } from '../../types/content.types';

interface ActivityCardProps {
  readonly pillar: ActivityPillar;
}

export function ActivityCard({ pillar }: ActivityCardProps) {
  const statusLabel = pillar.status === 'current' ? 'Active today' : 'Evolving focus';
  const statusClass =
    pillar.status === 'evolving' ? 'status-badge status-badge--evolving' : 'status-badge';

  return (
    <div className="surface-raised h-100 p-4 p-lg-5 rounded-4">
      <span className={statusClass}>{statusLabel}</span>
      <h3 className="h4 mt-3 mb-3 font-heading">{pillar.title}</h3>
      <p className="text-secondary-brand text-measure">{pillar.description}</p>
      <ul className="list-unstyled mt-4 mb-0 d-flex flex-column gap-2">
        {pillar.items.map((item) => (
          <li key={item} className="d-flex align-items-start gap-2">
            <span aria-hidden="true" className="dot-accent mt-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
