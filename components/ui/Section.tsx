import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  theme?: "light" | "dark";
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  theme = "light",
  className = "",
  containerClassName = "",
}: SectionProps) {
  const themeClass =
    theme === "dark" ? "bg-bg-dark text-text-on-dark" : "bg-bg text-ink";

  return (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${themeClass} ${className}`}>
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  );
}
