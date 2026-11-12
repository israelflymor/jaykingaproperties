export const WHATSAPP_NUMBER = "2349014727494";

export function buildInspectionMessage(b: {
  property: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  notes?: string;
}) {
  const lines = [
    "Hello Jaykinga Vision Realty,",
    "",
    `I would like to book a property inspection for *${b.property}*.`,
    "",
    `Preferred date: ${b.date}`,
    `Preferred time: ${b.time}`,
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
  ];
  if (b.notes?.trim()) lines.push("", `Notes: ${b.notes.trim()}`);
  lines.push("", "Please confirm availability. Thank you.");
  return lines.join("\n");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
