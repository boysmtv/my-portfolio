type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
};

const variantStyles = {
  default: 'border-border-default bg-white/5 text-text-secondary',
  success: 'border-brand-500/20 bg-brand-500/10 text-brand-400',
  warning: 'border-highlight-500/20 bg-highlight-500/10 text-highlight-400',
  danger: 'border-red-400/20 bg-red-400/10 text-red-300',
  info: 'border-accent-500/20 bg-accent-500/10 text-accent-400',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
