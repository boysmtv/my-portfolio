type IconWrapperProps = {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'accent' | 'highlight';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const variantStyles = {
  default: 'border-border-default bg-base-800/50 text-text-secondary',
  brand: 'border-brand-500/20 bg-brand-500/10 text-brand-400',
  accent: 'border-accent-500/20 bg-accent-500/10 text-accent-400',
  highlight: 'border-highlight-500/20 bg-highlight-500/10 text-highlight-400',
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
