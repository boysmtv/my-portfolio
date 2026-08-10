type DividerProps = {
  variant?: 'subtle' | 'default' | 'accent';
  className?: string;
};

const variantStyles = {
  subtle: 'border-border-subtle',
  default: 'border-border-default',
  accent: 'border-brand-500/20',
};

export function Divider({ variant = 'default', className = '' }: DividerProps) {
  return (
    <hr className={`border-t ${variantStyles[variant]} ${className}`} />
  );
}
