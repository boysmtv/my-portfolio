type InteractiveSurfaceProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function InteractiveSurface({ children, className = '', ...props }: InteractiveSurfaceProps) {
  return (
    <div
      className={`rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-300/30 hover:bg-white/[0.05] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
