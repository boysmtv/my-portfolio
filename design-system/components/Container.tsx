type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`site-wrap ${className}`} {...props}>
      {children}
    </div>
  );
}
