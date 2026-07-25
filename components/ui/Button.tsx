import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/85",
  secondary: "bg-white text-ink border border-ink/10 hover:bg-surface-soft",
  dark: "bg-white text-ink hover:bg-white/90",
  ghost: "bg-transparent text-ink hover:opacity-60",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
} & Omit<ComponentProps<"button">, "children" | "className">;

const base =
  "relative inline-flex h-12 items-center justify-center rounded-full px-7 text-[17px] font-medium leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50";

export function Button({
  children,
  variant = "primary",
  href,
  external,
  showArrow,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = showArrow ? (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className="pointer-events-none absolute right-5 top-1/2 size-[18px] -translate-y-1/2"
        aria-hidden
      />
    </>
  ) : (
    children
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
