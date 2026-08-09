type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';
type HeadingProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
} & React.HTMLAttributes<HTMLHeadingElement>;

const levelStyles: Record<HeadingLevel, string> = {
  display: 'text-6xl sm:text-8xl font-black leading-[0.95] text-white',
  h1: 'text-4xl sm:text-5xl font-black leading-[0.95] text-white',
  h2: 'text-4xl sm:text-5xl font-black text-white',
  h3: 'text-3xl font-black text-white',
  h4: 'text-2xl font-bold text-white',
};

export function Heading({ level = 'h2', children, className = '', as, ...props }: HeadingProps) {
  const Tag = as || (level === 'display' ? 'h1' : level) as 'h1' | 'h2' | 'h3' | 'h4';

  return (
    <Tag className={`${levelStyles[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
