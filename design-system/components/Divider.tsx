type DividerProps = {
  variant?: 'subtle' | 'default' | 'accent';
  className?: string;
};

const variantStyles = {
  subtle: 'border-white/5',
  default: 'border-white/10',
  accent: 'border-sky-400/20',
};

export function Divider({ variant = 'default', className = '' }: DividerProps) {
  return (
    <hr className={`border-t ${variantStyles[variant]} ${className}`} />
  );
}
