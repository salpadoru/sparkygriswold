import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { eventItems } from "../../../lib/generatedEvents";
import { formatEventDate } from "../../../lib/events";

export function generateStaticParams() {
  return eventItems.map((event) => ({ id: event.id }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = eventItems.find((item) => item.id === id);

  if (!event) notFound();

  return (
    <main className="event-detail-page">
      <header className="event-detail-header">
        <a href="/#events" className="event-back">
          <ArrowLeft size={18} /> BACK TO EVENTS
        </a>
        <span>SPARKY GRISWOLD / EVENTS</span>
      </header>

      <section className="event-detail">
        <div className="event-detail-index">EVENT / {String(eventItems.findIndex((item) => item.id === event.id) + 1).padStart(2, "0")}</div>

        <div className="event-detail-main">
          <p className="section-kicker">EVENT</p>
          <h1>{event.title}</h1>

          <div className="event-detail-meta">
            <div>
              <span>DATE</span>
              <strong>{formatEventDate(event.date)}</strong>
            </div>
            <div>
              <span>VENUE</span>
              <strong>{event.venue}</strong>
            </div>
          </div>

          <div className="event-detail-copy">
            {event.description ? <p>{event.description}</p> : null}
            {event.externalUrl && (
              <a
                className="button button-solid"
                href={event.externalUrl}
                target="_blank"
                rel="noreferrer"
              >
                EVENT / TICKETS <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        {event.image ? (
          <div className="event-detail-image">
            <img src={event.image} alt={event.title} />
          </div>
        ) : (
          <div className="event-detail-placeholder">
            <span>SPARKY<br /><b>EVENTS</b></span>
          </div>
        )}
      </section>
    </main>
  );
}
