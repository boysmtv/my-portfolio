type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 ${className}`}>
      {children}
    </span>
  );
}
