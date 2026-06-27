type IconWrapperProps = {
  children: React.ReactNode;
  variant?: 'default' | 'sky' | 'emerald' | 'amber' | 'violet';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const variantStyles = {
  default: 'border-white/10 bg-white/[0.03] text-sky-200',
  sky: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
  emerald: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  amber: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  violet: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
};

const sizeStyles = {
  sm: 'h-9 w-9 rounded-xl',
  md: 'h-11 w-11 rounded-2xl',
  lg: 'h-12 w-12 rounded-2xl',
};

export function IconWrapper({ children, variant = 'default', size = 'md', className = '' }: IconWrapperProps) {
  return (
    <div className={`flex items-center justify-center border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
