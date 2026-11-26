interface BrandButtonProps {
  readonly label: string;
  readonly href: string;
  readonly variant?: 'primary' | 'outline';
}

export function BrandButton({ label, href, variant = 'primary' }: BrandButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline-light';

  return (
    <a className={`btn ${variantClass} px-4 py-2 rounded-pill`} href={href}>
      {label}
    </a>
  );
}
