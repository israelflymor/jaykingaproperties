import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-14 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
        <div className="space-y-3">
          <span className="block font-display text-2xl uppercase tracking-tight text-brand-blue">
            Jaykinga Vision Realty
          </span>
          <span className="rule-gold" />
          <p className="max-w-[38ch] text-sm text-muted-foreground">
            Client focused. Results driven. Advisory, sales and project supervision for the modern
            Lagos property market.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <Link to="/properties" className="transition-colors hover:text-brand-blue">
            Properties
          </Link>
          <Link to="/services" className="transition-colors hover:text-brand-blue">
            Services
          </Link>
          <Link to="/about" className="transition-colors hover:text-brand-blue">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-brand-blue">
            Contact
          </Link>
        </div>

        <div className="space-y-4 text-sm">
          <a
            href="tel:+2349014727494"
            className="flex items-start gap-3 text-foreground transition-colors hover:text-brand-blue"
          >
            <Phone className="mt-0.5 size-4 shrink-0 text-brand-gold" />
            0901 472 7494
          </a>
          <a
            href="mailto:hello@jaykingavisionrealty.com"
            className="flex items-start gap-3 text-foreground transition-colors hover:text-brand-blue"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-brand-gold" />
            hello@jaykingavisionrealty.com
          </a>
          <p className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
            Lekki Phase 1, Lagos, Nigeria
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Registered Business
          </span>
          <span className="text-sm font-medium text-foreground">BN: 3504356</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Jaykinga Vision Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
