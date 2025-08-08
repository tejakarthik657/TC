import heroImage from "@/assets/hero-tech-glow.jpg";

interface EventCardProps {
  title: string;
  date: string;
  tag: string;
  imageUrl?: string;
}

export default function EventCard({ title, date, tag, imageUrl }: EventCardProps) {
  const img = imageUrl ?? heroImage;
  return (
    <article className="group relative overflow-hidden rounded-xl glass-card">
      <img src={img} alt={`${title} poster`} className="h-44 w-full object-cover opacity-70 transition duration-300 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-3 py-1 text-xs text-primary backdrop-blur">
          <span>{tag}</span>
        </div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </article>
  );
}
