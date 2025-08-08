import heroImage from "@/assets/hero-tech-glow.jpg";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="relative isolate overflow-hidden bg-background"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Technical Club neon tech grid background"
          className="h-full w-full object-cover opacity-60"
          loading="eager"
        />
        <div className="gradient-hero absolute inset-0" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          <h1 className="font-display text-5xl uppercase tracking-wide md:text-6xl">
            Invent. Imagine. Inspire.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The digital headquarters of Technical Club KITSW — a collaborative hub
            for student-led innovation, events, and engineering excellence.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild variant="cta" size="xl" className="hover-scale">
              <Link to="/events">Explore Our Events</Link>
            </Button>
            <Button asChild variant="ghostTeal" size="xl" className="hover-scale">
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
