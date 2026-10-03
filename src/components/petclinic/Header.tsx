import { useEffect, useState } from "react";
import { Menu, MessageCircle, PawPrint, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_DEFAULT_URL } from "@/lib/petclinic";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="PetClin — início">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
            <PawPrint className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight text-foreground">
              Pet<span className="text-primary">Clin</span>
            </span>
            <span className="block text-[0.68rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Clínica Veterinária
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-teal-soft hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-white/70 text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border/70 bg-white/95 px-5 pt-2 pb-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-teal-soft hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
