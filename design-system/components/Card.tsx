type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variantStyles = {
  default: 'rounded-2xl border border-border-subtle bg-base-800/50',
  elevated: 'rounded-2xl border border-border-subtle bg-base-900 shadow-elevation-3',
  glass: 'rounded-2xl border border-border-subtle bg-base-900/60 backdrop-blur-xl',
  outlined: 'rounded-2xl border border-border-subtle bg-transparent',
};

const paddingStyles = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-7',
};

export function Card({ children, variant = 'default', padding = 'lg', className = '', ...props }: CardProps) {
  return (
    <div className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`} {...props}>
      {children}
    </div>
  );
}
