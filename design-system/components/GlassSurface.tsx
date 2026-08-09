type GlassSurfaceProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function GlassSurface({ children, className = '', ...props }: GlassSurfaceProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,25,0.82),rgba(5,11,18,0.96))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
