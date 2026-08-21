import { Link } from "@tanstack/react-router";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to="/properties/$slug"
      params={{ slug: property.slug }}
      className="group block space-y-4"
    >
      <div className="relative overflow-hidden rounded-sm bg-muted">
        <img
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 bg-brand-blue px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
          {property.status}
        </span>
      </div>

      <div className="space-y-1">
        <p className="eyebrow">{property.location}</p>
        <h3 className="text-xl font-medium text-foreground">{property.title}</h3>
        <div className="flex flex-wrap gap-4 border-t border-border/70 pt-2">
          <Meta label="Beds" value={property.beds} />
          <Meta label="Baths" value={property.baths} />
          <Meta label="Area" value={property.area} />
        </div>
        <p className="pt-2 font-display text-2xl text-brand-blue">{property.price}</p>
      </div>
    </Link>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-xs font-medium uppercase text-muted-foreground">{label}</span>
      <span className="whitespace-nowrap text-sm font-semibold text-foreground">{value}</span>
    </span>
  );
}
