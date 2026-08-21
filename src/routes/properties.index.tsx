import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";

const title = "Luxury Properties for Sale in Lagos | Jaykinga Vision Realty";
const description =
  "Browse verified duplexes, penthouses, terraces and serviced land across Ikoyi, Banana Island, Lekki, Ajah and the Epe corridor.";

export const Route = createFileRoute("/properties/")({
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
  component: PropertiesPage,
});

const filters = ["All", "Duplex", "Penthouse", "Terrace", "Land"] as const;

function PropertiesPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? properties : properties.filter((p) => p.type === active);

  return (
    <>
      <section className="px-6 pb-10 pt-14">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="eyebrow">The Portfolio</p>
          <h1 className="max-w-[22ch] text-balance text-4xl leading-tight text-foreground md:text-5xl">
            Homes and land, verified before they reach you.
          </h1>
          <p className="max-w-[60ch] text-pretty text-muted-foreground">
            Every listing is title-checked and physically inspected by our team. Prices are in naira
            and exclude statutory fees unless stated.
          </p>
        </div>
      </section>

      <div className="bg-ink px-6 py-5">
        <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={
                f === active
                  ? "whitespace-nowrap border border-brand-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold"
                  : "whitespace-nowrap border border-border/30 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-ink-foreground/60"
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
          {list.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mx-auto mt-8 max-w-6xl text-sm text-muted-foreground">
            No listings in this category right now — call 0901 472 7494 for off-market options.
          </p>
        ) : null}
      </section>
    </>
  );
}
