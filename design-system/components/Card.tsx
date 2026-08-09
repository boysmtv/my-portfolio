type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variantStyles = {
  default: 'rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,25,0.82),rgba(5,11,18,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
  elevated: 'rounded-[2rem] border border-white/10 bg-[#07111b] shadow-[0_35px_120px_rgba(2,6,23,0.85)]',
  glass: 'rounded-3xl border border-white/10 bg-white/5 backdrop-blur',
  outlined: 'rounded-[2rem] border border-white/10 bg-transparent',
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
