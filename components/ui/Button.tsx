import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-secondary border border-transparent",
  secondary:
    "bg-white text-ink border border-card-border hover:bg-neutral",
  dark: "bg-white text-ink hover:bg-neutral border border-transparent",
  light:
    "bg-transparent text-ink border border-border hover:bg-black/[0.04]",
  ghost: "bg-transparent text-ink hover:opacity-70 border-transparent",
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
  "inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50";

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
  const content = (
    <>
      {children}
      {showArrow ? <ArrowUpRight className="size-4 shrink-0" aria-hidden /> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
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
