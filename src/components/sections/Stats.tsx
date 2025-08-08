import { useEffect, useRef, useState } from "react";
import { Users, CalendarClock, Cpu } from "lucide-react";

function useCountUp(target: number, duration = 1000) {
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const step = (ts: number) => {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function Stats() {
  const members = useCountUp(250);
  const events = useCountUp(40);
  const workshops = useCountUp(18);

  const items = [
    { icon: Users, value: members, label: "Active Members" },
    { icon: CalendarClock, value: events, label: "Events Hosted" },
    { icon: Cpu, value: workshops, label: "Workshops" },
  ];

  return (
    <section aria-label="Stats" className="border-t border-b">
      <div className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="glass-card rounded-xl p-6 animate-enter">
            <div className="flex items-center gap-3 text-primary">
              <Icon className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
            <p className="mt-2 font-display text-4xl">{value}+</p>
          </div>
        ))}
      </div>
    </section>
  );
}
