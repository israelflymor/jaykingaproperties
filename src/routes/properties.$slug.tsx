import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { getProperty, properties } from "@/data/properties";
import { InquiryForm } from "@/components/inquiry-form";
import { PropertyCard } from "@/components/property-card";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Listing not found | Jaykinga Vision Realty" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.property.title}, ${loaderData.property.location} | Jaykinga Vision Realty`;
    const d = loaderData.property.summary.slice(0, 155);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  return (
    <>
      <section className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-brand-blue"
          >
            <ArrowLeft className="size-3.5" /> All listings
          </Link>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">
              {property.location} · {property.status}
            </p>
            <h1 className="text-4xl leading-tight text-foreground md:text-5xl">{property.title}</h1>
            <p className="font-display text-3xl text-brand-blue">{property.price}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {property.gallery.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${property.title} — view ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={
                  i === 0
                    ? "aspect-[4/3] w-full rounded-sm object-cover sm:col-span-2"
                    : "aspect-[4/3] w-full rounded-sm object-cover"
                }
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
            <Spec label="Type" value={property.type} />
            <Spec label="Bedrooms" value={property.beds} />
            <Spec label="Bathrooms" value={property.baths} />
            <Spec label="Area" value={property.area} />
          </div>

          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl text-foreground">The residence</h2>
                <span className="rule-gold" />
                <p className="max-w-[62ch] text-pretty text-muted-foreground">{property.summary}</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl text-foreground">Features & documentation</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 border border-border bg-card p-6 shadow-card">
              <div className="space-y-1">
                <p className="eyebrow">Request an inspection</p>
                <h2 className="text-2xl text-foreground">Speak to a consultant</h2>
              </div>
              <InquiryForm defaultProperty={`${property.title}, ${property.location}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl text-foreground">Also available</h2>
            <span className="rule-gold" />
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {others.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="text-base font-medium text-foreground">{value}</p>
    </div>
  );
}
