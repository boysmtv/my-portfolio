type GlassSurfaceProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function GlassSurface({ children, className = '', ...props }: GlassSurfaceProps) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-surface-glass backdrop-blur-xl p-7 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
