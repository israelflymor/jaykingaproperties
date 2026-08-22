import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";

const title = "Contact | Jaykinga Vision Realty";
const description =
  "Book a private consultation with Jaykinga Vision Realty. Call 0901 472 7494 or send an inquiry — a consultant responds within one business day.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Enquire</p>
            <h1 className="max-w-[20ch] text-balance text-4xl leading-tight text-foreground md:text-5xl">
              Begin your journey with a private consultation.
            </h1>
            <p className="max-w-[52ch] text-pretty text-muted-foreground">
              Tell us what you are buying, selling or building, and the right consultant will come
              back to you within one business day.
            </p>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-brand-gold" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Direct line
                </p>
                <a href="tel:+2349014727494" className="text-xl font-medium text-brand-blue">
                  0901 472 7494
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-brand-gold" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@jaykingavisionrealty.com"
                  className="text-base font-medium text-foreground"
                >
                  hello@jaykingavisionrealty.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-brand-gold" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Office
                </p>
                <p className="text-base text-foreground">Lekki Phase 1, Lagos, Nigeria</p>
                <p className="text-sm text-muted-foreground">Inspections by appointment.</p>
              </div>
            </div>
            <div className="border border-border bg-card p-4 text-sm text-muted-foreground">
              Registered business — <span className="font-medium text-foreground">BN: 3504356</span>
            </div>
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}
