import EventCard from "@/components/common/EventCard";

const sample = [
  {
    title: "SUMSHODHINI",
    date: "Oct 2025",
    tag: "Competition",
  },
  {
    title: "Blockchain Workshop",
    date: "Nov 2025",
    tag: "Workshop",
  },
  {
    title: "Tech Week",
    date: "Dec 2025",
    tag: "Festival",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" aria-label="Upcoming Events" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl uppercase tracking-wide md:text-4xl">
          Upcoming Events
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sample.map((e) => (
            <EventCard key={e.title} {...e} />)
          )}
        </div>
      </div>
    </section>
  );
}
