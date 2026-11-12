import { useState } from "react";
import { format, startOfDay } from "date-fns";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { properties } from "@/data/properties";
import { supabase } from "@/integrations/supabase/client";
import { buildInspectionMessage, whatsappLink } from "@/lib/whatsapp";

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

const schema = z.object({
  property: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1, "Enter your name").max(100),
  phone: z.string().trim().min(5, "Enter a valid phone number").max(30),
  notes: z.string().trim().max(1000).optional(),
});

const labelCls = "mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const inputCls = "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue";

export function InspectionScheduler({ defaultProperty }: { defaultProperty?: string }) {
  const options = properties.map((p) => `${p.title}, ${p.location}`);
  const [property, setProperty] = useState<string>(defaultProperty ?? options[0] ?? "");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [link, setLink] = useState<string>();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(undefined);
    if (!date || !time) return setError("Choose a date and time for your inspection.");
    const parsed = schema.safeParse({ property, name, phone, notes });
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Please check the form.");
    setBusy(true);
    // Open the tab synchronously so pop-up blockers allow it.
    const win = window.open("", "_blank");
    const { error: dbError } = await supabase.from("inspection_bookings").insert({
      property: parsed.data.property,
      inspection_date: format(date, "yyyy-MM-dd"),
      inspection_time: time,
      full_name: parsed.data.name,
      phone: parsed.data.phone,
      notes: parsed.data.notes || null,
    });
    setBusy(false);
    if (dbError) {
      win?.close();
      return setError("We couldn't save your booking. Please try again or call 0901 472 7494.");
    }
    const url = whatsappLink(
      buildInspectionMessage({ property: parsed.data.property, name: parsed.data.name, phone: parsed.data.phone, notes: parsed.data.notes ?? "", date: format(date, "EEEE, d MMMM yyyy"), time }),
    );
    setLink(url);
    if (win) win.location.href = url;
    else window.location.href = url;
  }

  if (link) {
    return (
      <div className="border border-brand-gold/50 bg-card p-8 text-center shadow-card">
        <p className="eyebrow">Inspection requested</p>
        <h3 className="mt-2 text-2xl text-foreground">Almost done, {name.trim().split(" ")[0]}.</h3>
        <p className="mx-auto mt-3 max-w-[46ch] text-sm text-muted-foreground">
          Your request is saved. Press send in WhatsApp so a consultant can confirm your slot.
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-brand-blue px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-brand-blue-deep">
          <MessageCircle className="size-4" /> Open WhatsApp again
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block">
        <span className={labelCls}>Property</span>
        <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputCls}>
          {!options.includes(property) && <option value={property}>{property}</option>}
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>

      <div>
        <span className={labelCls}>Inspection date</span>
        <Popover>
          <PopoverTrigger asChild>
            <button type="button" className={cn(inputCls, "flex items-center gap-2 text-left", !date && "text-muted-foreground")}>
              <CalendarIcon className="size-4 text-brand-gold" />
              {date ? format(date, "EEEE, d MMMM yyyy") : "Pick a date"}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < startOfDay(new Date()) || d.getDay() === 0} initialFocus className="p-3 pointer-events-auto" />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <span className={labelCls}>Preferred time</span>
        <div className="grid grid-cols-4 gap-2">
          {TIMES.map((t) => (
            <button key={t} type="button" onClick={() => setTime(t)} aria-pressed={time === t}
              className={cn("border px-2 py-2.5 text-xs transition-colors", time === t ? "border-brand-blue bg-brand-blue text-primary-foreground" : "border-input bg-card text-foreground hover:border-brand-blue")}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className={labelCls}>Full name</span>
          <input required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Phone</span>
          <input required type="tel" maxLength={30} value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} /></label>
      </div>

      <label className="block"><span className={labelCls}>Notes (optional)</span>
        <textarea rows={3} maxLength={1000} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Number of guests, questions…" className={inputCls} /></label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button type="submit" disabled={busy} className="inline-flex w-full items-center justify-center gap-2 bg-brand-blue px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-brand-blue-deep disabled:opacity-60">
        <MessageCircle className="size-4" /> {busy ? "Saving…" : "Book via WhatsApp"}
      </button>
      <p className="text-center text-[11px] text-muted-foreground">Opens WhatsApp with your request ready to send. Sundays unavailable.</p>
    </form>
  );
}
