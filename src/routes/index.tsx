import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import inspection from "@/assets/site-inspection.jpeg.asset.json";
import kitchen from "@/assets/kitchen-island.jpeg.asset.json";
import banner from "@/assets/listing-banner.jpeg.asset.json";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { InquiryForm } from "@/components/inquiry-form";

const title = "Jaykinga Vision Realty — Luxury Homes & Land in Lagos";
const description =
  "Client focused, results driven. Buy, sell and build luxury homes, penthouses and serviced land across Lagos with Jaykinga Vision Realty.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "12+", label: "Years in the Lagos market" },
  { value: "₦15B+", label: "Portfolio transacted" },
  { value: "240+", label: "Homes & plots delivered" },
  { value: "98%", label: "Client retention" },
];

const services = [
  {
    name: "Property Sales & Acquisition",
    copy: "Verified luxury homes, penthouses and terraces with full title due diligence before a naira changes hands.",
  },
  {
    name: "Land & Estate Plots",
    copy: "Surveyed, gazetted and serviced plots inside gated schemes, with flexible allocation and documentation handled end to end.",
  },
  {
    name: "Construction Supervision",
    copy: "On-site project management from foundation to finishing, with weekly reporting for diaspora and remote clients.",
  },
  {
    name: "Property Management",
    copy: "Letting, tenant vetting, rent collection and facility upkeep for owners who want a hands-off asset.",
  },
];

function Index() {
  const featured = properties.slice(0, 3);

  return (
    <>
      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_1fr] md:items-center">
          <div className="reveal space-y-5">
            <p className="eyebrow">Curated Excellence</p>
            <h1 className="max-w-[20ch] text-balance text-5xl leading-tight text-foreground md:text-6xl">
              Defining the standard of <span className="italic">modern luxury</span> in Lagos.
            </h1>
            <p className="max-w-[56ch] text-pretty text-base text-muted-foreground">
              Sophisticated property portfolios for investors and homeowners who value architectural
              integrity and market performance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-brand-blue-deep"
              >
                Inquire now
                <ArrowRight className="size-3.5 shrink-0" />
              </Link>
              <Link
                to="/properties"
                className="inline-flex items-center border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue transition-colors hover:border-brand-blue"
              >
                View listings
              </Link>
            </div>
          </div>

          <img
            src={heroVilla}
            alt="Contemporary luxury villa in Lagos at dusk"
            width={1200}
            height={1600}
            className="aspect-[3/4] w-full rounded-sm object-cover shadow-elegant"
          />
        </div>
      </section>

      <div className="relative z-10 -mt-6 px-6 md:-mt-10">
        <Link
          to="/properties"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-sm border border-border bg-card p-4 shadow-card transition-colors hover:border-brand-gold"
        >
          <span className="flex min-w-0 flex-col">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Browse the portfolio
            </span>
            <span className="truncate text-sm font-medium text-foreground">
              Ikoyi · Banana Island · Lekki · Ajah · Epe
            </span>
          </span>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gold/15 text-brand-gold">
            <Search className="size-4" />
          </span>
        </Link>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl leading-none text-foreground">Premier Assets</h2>
              <span className="rule-gold" />
            </div>
            <Link
              to="/properties"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue"
            >
              All listings
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-ink-foreground">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4">
            <h2 className="max-w-[24ch] text-balance text-4xl leading-tight">
              Commitment to high-performance real estate.
            </h2>
            <p className="max-w-[56ch] text-pretty text-muted-foreground">
              We combine market intelligence with an uncompromising eye for architecture — and we
              stand on site until the keys are handed over.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <span className="block font-display text-3xl tracking-tight text-brand-gold">
                  {s.value}
                </span>
                <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">What we do</p>
            <h2 className="text-3xl leading-tight text-foreground">
              A full-service house, not a listings board.
            </h2>
            <p className="max-w-[52ch] text-sm text-muted-foreground">
              From title verification to construction supervision and letting, every mandate is
              handled in-house by the same team.
            </p>
            <img
              src={inspection.url}
              alt="Jaykinga Vision Realty team inspecting a construction site in Lagos"
              loading="lazy"
              className="mt-4 aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>

          <div className="divide-y divide-border border-t border-border">
            {services.map((s, i) => (
              <div key={s.name} className="flex gap-5 py-6">
                <span className="font-display text-xl text-brand-gold">
                  0{i + 1}
                </span>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-lg font-medium text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.copy}</p>
                </div>
              </div>
            ))}
            <div className="pt-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue"
              >
                Explore services <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          <img
            src={kitchen.url}
            alt="Fitted open kitchen with island in a Jaykinga Vision Realty listing"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <img
            src={banner.url}
            alt="Jaykinga Vision Realty signage on an elegant home for sale in Lagos"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="eyebrow">Private consultation</p>
              <h2 className="text-3xl text-foreground">Secure Your Future</h2>
              <p className="max-w-[48ch] text-sm text-muted-foreground">
                Tell us what you are looking for and a consultant will come back to you within one
                business day.
              </p>
            </div>
            <div className="space-y-5 border-t border-border pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Direct line
                </p>
                <a href="tel:+2349014727494" className="text-xl font-medium text-brand-blue">
                  0901 472 7494
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Office
                </p>
                <p className="text-base text-foreground">Lekki Phase 1, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
