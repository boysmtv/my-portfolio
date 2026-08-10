type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`rounded-full border border-border-default bg-transparent px-3 py-1.5 text-xs text-text-secondary ${className}`}>
      {children}
    </span>
  );
}
