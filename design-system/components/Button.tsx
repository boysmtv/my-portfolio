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
    'inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgba(56,189,248,1),rgba(52,211,153,0.95))] text-[#021019] font-extrabold shadow-[0_20px_44px_rgba(14,165,233,0.26)] hover:-translate-y-px hover:shadow-[0_28px_60px_rgba(14,165,233,0.3)] transition-all duration-250',
  secondary:
    'inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] text-slate-200 font-semibold hover:bg-white/[0.08] hover:text-white transition-all duration-250',
  ghost:
    'inline-flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-all duration-250',
  icon: 'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-sky-300/40 hover:bg-sky-400/8 transition-all duration-250',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-4 text-base',
  lg: 'px-7 py-4 text-lg',
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
