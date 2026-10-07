export type EventItem = {
  id: string;
  title: string;
  date: string | null;
  venue: string;
  description: string;
  image?: string;
  externalUrl?: string;
};

export function formatEventDate(date: string | null) {
  if (!date) return "DATE TBC";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed).toUpperCase();
}
