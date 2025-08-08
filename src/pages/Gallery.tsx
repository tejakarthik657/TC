import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-tech-glow.jpg";

export default function Gallery() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Gallery | Technical Club KITSW</title>
        <meta name="description" content="Photos and videos from Technical Club KITSW events." />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <h1 className="font-display text-4xl uppercase tracking-wide">Gallery</h1>
      <p className="mt-2 text-muted-foreground">Dive into moments from our workshops, competitions, and tech fests.</p>

      <div className="mt-8 columns-2 gap-4 md:columns-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <img
            key={i}
            src={heroImage}
            alt={`Gallery item ${i + 1}`}
            className="mb-4 w-full break-inside-avoid rounded-lg border border-primary/20 opacity-80 hover:opacity-100"
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}
