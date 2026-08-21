import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 flex-col" onClick={() => setOpen(false)}>
          <span className="font-display text-xl uppercase leading-none tracking-tight text-brand-blue">
            Jaykinga
          </span>
          <span className="text-[10px] uppercase leading-none tracking-[0.2em] text-brand-gold">
            Vision Realty
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brand-blue"
              activeProps={{ className: "text-brand-blue" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+2349014727494"
            className="inline-flex items-center gap-2 bg-brand-blue px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-brand-blue-deep"
          >
            <Phone className="size-3.5 shrink-0" />
            0901 472 7494
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-2 text-brand-blue md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground/80"
                activeProps={{ className: "text-brand-blue" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2349014727494"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-blue px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              <Phone className="size-4 shrink-0" />
              0901 472 7494
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
