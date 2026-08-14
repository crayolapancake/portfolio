import { primaryButtonClasses } from "@/lib/styles";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Jemma Johnston
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={primaryButtonClasses}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
