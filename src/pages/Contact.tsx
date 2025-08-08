import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Thanks!", description: "We'll be in touch soon." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <Helmet>
        <title>Join Us | Technical Club KITSW</title>
        <meta name="description" content="Become a part of the Technical Club KITSW." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <h1 className="font-display text-4xl uppercase tracking-wide">Become a Part of the Innovation</h1>
      <p className="mt-2 text-muted-foreground">
        Fill the form to join our community or reach out for collaborations.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm text-muted-foreground">Full Name</label>
          <Input required placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Email</label>
          <Input required type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Message</label>
          <Textarea required placeholder="Tell us about your interests" />
        </div>
        <div className="pt-2">
          <Button type="submit" variant="cta" size="lg" className="hover-scale">Join the Club</Button>
        </div>
      </form>
    </main>
  );
}
