type TextVariant = 'body' | 'body-lg' | 'caption' | 'label' | 'kicker';
type TextProps = {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
} & React.HTMLAttributes<HTMLElement>;

const variantStyles: Record<TextVariant, string> = {
  'body': 'text-base leading-8 text-slate-300',
  'body-lg': 'text-lg leading-8 text-slate-300 sm:text-xl',
  'caption': 'text-xs uppercase tracking-[0.24em] text-slate-500',
  'label': 'text-xs uppercase tracking-[0.26em] text-slate-400',
  'kicker': 'text-sm uppercase tracking-[0.3em] text-sky-300 font-bold',
};

export function Text({ variant = 'body', children, className = '', as, ...props }: TextProps) {
  const Tag = as || 'p';

  return (
    <Tag className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
