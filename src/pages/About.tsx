import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About | Technical Club KITSW</title>
        <meta name="description" content="Objective, vision, and team of Technical Club KITSW." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2">
        <div className="animate-enter">
          <h1 className="font-display text-4xl uppercase tracking-wide">Our Objective</h1>
          <p className="mt-4 text-muted-foreground">
            We foster a culture of hands-on learning, innovation, and collaboration across disciplines.
            From ideation to deployment, we empower students to build real-world projects and host impactful events.
          </p>
        </div>
        <div className="animate-enter">
          <h2 className="font-display text-4xl uppercase tracking-wide">Our Vision</h2>
          <p className="mt-4 text-muted-foreground">
            A future-ready student community that leads with technology, creativity, and leadership —
            making KITSW a center of excellence in student-driven engineering.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h3 className="font-display text-3xl uppercase tracking-wide">Meet the Team</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Faculty Incharge", "President", "Vice President"].map((role) => (
            <div key={role} className="glass-card rounded-xl p-6">
              <p className="text-sm text-muted-foreground">{role}</p>
              <p className="mt-2 text-xl text-primary">Name TBA</p>
              <p className="text-sm text-muted-foreground">Technical Club KITSW</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
