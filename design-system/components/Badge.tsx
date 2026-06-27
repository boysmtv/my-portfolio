type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
};

const variantStyles = {
  default: 'border-white/10 bg-white/[0.05] text-slate-300',
  success: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  warning: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  danger: 'border-red-400/20 bg-red-400/10 text-red-300',
  info: 'border-sky-400/20 bg-sky-400/10 text-sky-300',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
