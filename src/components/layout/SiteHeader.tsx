import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <div className="h-8 w-8 rounded-md bg-primary/20 ring-1 ring-primary/40" />
          <span className="font-display text-xl tracking-wide">Technical Club KITSW</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* --- MODIFIED BUTTON --- */}
          <Button asChild variant="ghostTeal" size="sm">
            <a
              href="https://www.instagram.com/technicalclub.kitsw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </Button>
          {/* --- END OF MODIFICATION --- */}
          
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;