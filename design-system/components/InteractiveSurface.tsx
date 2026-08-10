type InteractiveSurfaceProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function InteractiveSurface({ children, className = '', ...props }: InteractiveSurfaceProps) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-base-800/30 p-5 transition hover:border-brand-500/30 hover:bg-base-800/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
