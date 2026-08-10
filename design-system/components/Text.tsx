type TextVariant = 'body' | 'body-lg' | 'caption' | 'label' | 'kicker';
type TextProps = {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
} & React.HTMLAttributes<HTMLElement>;

const variantStyles: Record<TextVariant, string> = {
  'body': 'text-base leading-relaxed text-text-secondary',
  'body-lg': 'text-lg leading-relaxed text-text-secondary',
  'caption': 'text-xs uppercase tracking-wider text-text-muted font-mono',
  'label': 'text-xs uppercase tracking-wider text-text-muted font-mono',
  'kicker': 'text-sm uppercase tracking-wider text-brand-400 font-medium font-mono',
};

export function Text({ variant = 'body', children, className = '', as, ...props }: TextProps) {
  const Tag = as || 'p';

  return (
    <Tag className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
