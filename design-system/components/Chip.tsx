type ChipProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'signal';
  className?: string;
};

const variantStyles = {
  default: 'border-white/10 bg-slate-950/55 text-slate-300',
  outlined: 'border-white/10 bg-white/[0.04] text-slate-200',
  signal: 'border-white/10 bg-slate-950/60 text-slate-300',
};

export function Chip({ children, variant = 'default', className = '' }: ChipProps) {
  return (
    <span className={`rounded-full border px-3 py-2 text-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
