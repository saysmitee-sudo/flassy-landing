import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-bg-dark text-text-on-dark">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-text-muted-dark">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted-dark transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href={site.telegram.url} external showArrow variant="dark">
          {site.telegram.handle}
        </Button>
      </div>
      <div className="container-page border-t border-white/10 py-6">
        <p className="text-xs text-text-muted-dark">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
