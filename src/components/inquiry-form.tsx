import { useState } from "react";

const interests = [
  "Buy a property",
  "Sell / list a property",
  "Land & plots",
  "Project supervision",
  "Property management",
];

export function InquiryForm({ defaultProperty }: { defaultProperty?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: defaultProperty ? `I would like more details on ${defaultProperty}.` : "",
  });

  if (sent) {
    return (
      <div className="border border-brand-gold/50 bg-card p-8 text-center shadow-card">
        <p className="eyebrow">Inquiry received</p>
        <h3 className="mt-2 text-2xl text-foreground">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-3 max-w-[46ch] text-sm text-muted-foreground">
          A consultant will respond within one business day. For anything urgent, call{" "}
          <a href="tel:+2349014727494" className="font-medium text-brand-blue">
            0901 472 7494
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          required
        />
        <Field
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          required
        />
      </div>
      <Field
        label="Email address"
        type="email"
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
        required
      />

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          I am interested in
        </span>
        <select
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
        >
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Message
        </span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Budget, preferred location, timeline…"
          className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-brand-blue"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-brand-blue px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-brand-blue-deep active:scale-[0.99]"
      >
        Send inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
      />
    </label>
  );
}
