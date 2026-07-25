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
  "group inline-flex h-11 items-center justify-center gap-1.5 rounded-full px-6 text-[15px] font-medium leading-none transition-[color,background-color,transform,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50";

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
      <span className="translate-y-px">{children}</span>
      <ArrowUpRight
        className="size-[18px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-px group-hover:-translate-y-px"
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
