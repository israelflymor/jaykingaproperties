import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import inspection from "@/assets/site-inspection.jpeg.asset.json";
import land from "@/assets/land-estate.jpg";
import poolVilla from "@/assets/property-pool.jpg";

const title = "Services | Jaykinga Vision Realty";
const description =
  "Property sales and acquisition, serviced land, construction supervision and property management across Lagos — delivered in-house by one team.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const services = [
  {
    name: "Property Sales & Acquisition",
    copy: "We represent buyers and sellers of luxury homes across Lagos with the same rigour: physical inspection, title verification and negotiation handled by one accountable consultant.",
    points: [
      "Title and survey due diligence",
      "Physical inspection before listing",
      "Negotiation and closing support",
      "Diaspora purchase assistance",
    ],
    image: poolVilla,
  },
  {
    name: "Land & Estate Plots",
    copy: "Serviced residential plots inside gated schemes along the Epe and Lekki corridors, with documentation handled end to end.",
    points: [
      "Gazetted and C of O titles only",
      "Instant allocation on payment",
      "Free survey and deed documentation",
      "12-month payment plans",
    ],
    image: land,
  },
  {
    name: "Construction Supervision",
    copy: "Your eyes on site. We manage builds from foundation to finishing with photographic weekly reports, so remote clients never lose control of a project.",
    points: [
      "Weekly photographic reporting",
      "Contractor and materials vetting",
      "Budget and milestone tracking",
      "Snag list and handover management",
    ],
    image: inspection.url,
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-14">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="eyebrow">Services</p>
          <h1 className="max-w-[22ch] text-balance text-4xl leading-tight text-foreground md:text-5xl">
            Advisory, transactions and site supervision — in-house.
          </h1>
          <p className="max-w-[60ch] text-pretty text-muted-foreground">
            One team carries your mandate from the first viewing to the final key handover. No
            referrals, no hand-offs.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl divide-y divide-border border-t border-border">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="grid gap-8 py-12 md:grid-cols-[1fr_1.1fr] md:items-center"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className={`aspect-[4/3] w-full rounded-sm object-cover ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div className="space-y-4">
                <span className="font-display text-xl text-brand-gold">0{i + 1}</span>
                <h2 className="text-2xl text-foreground md:text-3xl">{s.name}</h2>
                <p className="max-w-[56ch] text-sm text-muted-foreground">{s.copy}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-brand-blue px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue transition-colors hover:bg-brand-blue hover:text-primary-foreground"
                >
                  Discuss a mandate <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-16 text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl leading-tight">Not sure where to start?</h2>
            <p className="max-w-[48ch] text-sm text-muted-foreground">
              Book a private consultation and we will map the right route for your budget and
              timeline.
            </p>
          </div>
          <a
            href="tel:+2349014727494"
            className="inline-flex items-center gap-2 bg-brand-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Call 0901 472 7494
          </a>
        </div>
      </section>
    </>
  );
}
