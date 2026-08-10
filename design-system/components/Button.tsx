type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center gap-3 rounded-lg bg-brand-500 text-white font-medium shadow-glow-emerald hover:bg-brand-600 transition-all duration-200',
  secondary:
    'inline-flex items-center justify-center gap-3 rounded-lg border border-border-default bg-transparent text-text-primary font-medium hover:bg-white/5 transition-all duration-200',
  ghost:
    'inline-flex items-center justify-center gap-3 text-text-secondary hover:text-text-primary transition-all duration-200',
  icon: 'inline-flex items-center justify-center rounded-full border border-border-default bg-transparent text-text-secondary hover:text-text-primary hover:border-brand-500/40 transition-all duration-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const base = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.href) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={base} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
