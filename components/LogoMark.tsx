type LogoMarkProps = {
  className?: string;
  size?: number;
};

export function LogoMark({ className = "", size = 56 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-ink ${className}`}
      aria-hidden
    >
      <rect x="3" y="13" width="14" height="14" rx="3.5" fill="currentColor" />
      <rect x="15" y="5" width="14" height="14" rx="3.5" fill="currentColor" />
    </svg>
  );
}
