type ChipProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'signal';
  className?: string;
};

const variantStyles = {
  default: 'border-border-default bg-base-800/50 text-text-secondary',
  outlined: 'border-border-default bg-transparent text-text-primary',
  signal: 'border-border-subtle bg-base-900/50 text-text-secondary',
};

export function Chip({ children, variant = 'default', className = '' }: ChipProps) {
  return (
    <span className={`rounded-full border px-3 py-1.5 text-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
