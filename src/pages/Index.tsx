import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import UpcomingEvents from "@/components/sections/UpcomingEvents";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Technical Club KITSW — Digital Hub</title>
        <meta name="description" content="Student-led innovation, events, and engineering excellence at KITSW." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Stats />
      <UpcomingEvents />
    </main>
  );
};

export default Index;
