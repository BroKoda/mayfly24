import type { ValueItem as ValueItemData } from '../../types/content.types';

interface ValueItemProps {
  readonly value: ValueItemData;
  readonly index: number;
}

export function ValueItem({ value, index }: ValueItemProps) {
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="d-flex gap-3 gap-md-4 py-4 border-top border-brand">
      <span className="value-index flex-shrink-0" aria-hidden="true">
        {displayIndex}
      </span>
      <div>
        <h3 className="h5 mb-2 font-heading">{value.title}</h3>
        <p className="text-secondary-brand text-measure mb-0">{value.description}</p>
      </div>
    </div>
  );
}
