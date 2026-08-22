import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg.asset.json";
import inspection from "@/assets/site-inspection.jpeg.asset.json";

const title = "About | Jaykinga Vision Realty";
const description =
  "Client focused, results driven. Jaykinga Vision Realty is a registered Lagos real estate house specialising in luxury homes, land and project supervision.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const principles = [
  {
    name: "Client focused",
    copy: "Every engagement starts with your brief, not our stock. We advise against deals that do not fit your goals, even when it costs us a commission.",
  },
  {
    name: "Results driven",
    copy: "Deals are measured by outcomes: clean titles, on-time handovers, and assets that hold their value. Anything less is unfinished work.",
  },
  {
    name: "On the ground",
    copy: "We physically inspect every property and stand on every site we supervise. Nothing is sold from a brochure alone.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-14">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="eyebrow">About the house</p>
          <h1 className="max-w-[24ch] text-balance text-4xl leading-tight text-foreground md:text-5xl">
            A registered Nigerian real estate house built on two words: <span className="italic">vision</span> and <span className="italic">results</span>.
          </h1>
          <p className="max-w-[60ch] text-pretty text-muted-foreground">
            Jaykinga Vision Realty serves homeowners, investors and diaspora clients across Lagos —
            from Banana Island penthouses to serviced plots along the Epe corridor. We are a
            registered business (BN: 3504356) and every mandate is handled in-house.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="rounded-sm border border-border bg-card p-6 shadow-card">
            <img
              src={logo.url}
              alt="Jaykinga Vision Realty — official brand mark"
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Client Focused · Results Driven · BN: 3504356
            </p>
          </div>
          <div className="space-y-8">
            {principles.map((p, i) => (
              <div key={p.name} className="flex gap-5 border-b border-border pb-6">
                <span className="font-display text-xl text-brand-gold">0{i + 1}</span>
                <div className="min-w-0 space-y-1">
                  <h2 className="text-xl font-medium text-foreground">{p.name}</h2>
                  <p className="text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-brand-blue-deep"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1.2fr_1fr] md:items-center">
          <img
            src={inspection.url}
            alt="Jaykinga Vision Realty consultants reviewing plans on a construction site"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover md:aspect-[4/3]"
          />
          <div className="space-y-4 md:pl-6">
            <h2 className="text-3xl leading-tight text-foreground">
              We stand on the site until the keys change hands.
            </h2>
            <span className="rule-gold" />
            <p className="text-sm text-muted-foreground">
              Photographic reporting, milestone tracking and contractor vetting are standard on every
              supervised build — whether you are in Lagos or ten time zones away.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
