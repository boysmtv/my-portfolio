type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';
type HeadingProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
} & React.HTMLAttributes<HTMLHeadingElement>;

const levelStyles: Record<HeadingLevel, string> = {
  display: 'text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] text-text-primary',
  h1: 'text-4xl sm:text-5xl font-bold tracking-tight text-text-primary',
  h2: 'text-3xl sm:text-4xl font-bold tracking-tight text-text-primary',
  h3: 'text-2xl font-bold text-text-primary',
  h4: 'text-xl font-medium text-text-primary',
};

export function Heading({ level = 'h2', children, className = '', as, ...props }: HeadingProps) {
  const Tag = as || (level === 'display' ? 'h1' : level) as 'h1' | 'h2' | 'h3' | 'h4';

  return (
    <Tag className={`${levelStyles[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
