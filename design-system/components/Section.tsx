type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
} & React.HTMLAttributes<HTMLElement>;

const gapStyles = {
  sm: 'space-y-6',
  md: 'space-y-10',
  lg: 'space-y-16',
  xl: 'space-y-20',
};

export function Section({ children, id, gap = 'md', className = '', ...props }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${gapStyles[gap]} ${className}`} {...props}>
      {children}
    </section>
  );
}
