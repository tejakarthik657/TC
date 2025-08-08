import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import EventCard from "@/components/common/EventCard";
import { Button } from "@/components/ui/button";

const allEvents = [
  { title: "SUMSHODHINI", tag: "Competition", date: "Oct 2025" },
  { title: "CODE4KITSW", tag: "Competition", date: "Sep 2025" },
  { title: "Blockchain Workshop", tag: "Workshop", date: "Nov 2025" },
  { title: "Ideathon", tag: "Hackathon", date: "Aug 2025" },
  { title: "Tech Week", tag: "Festival", date: "Dec 2025" },
];

const filters = ["All", "Workshops", "Competitions", "Hackathons", "Festival"] as const;

type Filter = typeof filters[number];

export default function Events() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return allEvents;
    if (active === "Workshops") return allEvents.filter((e) => e.tag === "Workshop");
    if (active === "Competitions") return allEvents.filter((e) => e.tag === "Competition");
    if (active === "Hackathons") return allEvents.filter((e) => e.tag === "Hackathon");
    if (active === "Festival") return allEvents.filter((e) => e.tag === "Festival");
    return allEvents;
  }, [active]);

  return (
    <main className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Events | Technical Club KITSW</title>
        <meta name="description" content="Workshops, competitions, and festivals by Technical Club KITSW." />
        <link rel="canonical" href="/events" />
      </Helmet>
      <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="font-display text-4xl uppercase tracking-wide">Events</h1>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={active === f ? "cta" : "ghostTeal"}
              size="sm"
              onClick={() => setActive(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </header>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>
    </main>
  );
}
