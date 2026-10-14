import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/petclinic/Reveal";
import { WHATSAPP_DEFAULT_URL } from "@/lib/petclinic";

export function CtaSection() {
  return (
    <section id="agendar" className="relative scroll-mt-24 overflow-hidden bg-deep py-20 sm:py-28">
      {/* Elementos gráficos discretos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(42rem 22rem at 15% 0%, color-mix(in oklab, var(--color-primary) 38%, transparent) 0%, transparent 60%), radial-gradient(38rem 20rem at 92% 100%, color-mix(in oklab, var(--color-navy) 55%, transparent) 0%, transparent 65%)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute -top-6 right-[12%] size-40 fill-white/5"
      >
        <path d="M12 21c-3.5-3.2-8.5-6.9-8.5-11A4.5 4.5 0 0 1 8 5.5c1.6 0 3.1.9 4 2.2.9-1.3 2.4-2.2 4-2.2a4.5 4.5 0 0 1 4.5 4.5c0 4.1-5 7.8-8.5 11Z" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.24em] text-white/70 uppercase">
            PetClin — Clínica Veterinária
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Está na hora de cuidar de quem sempre está ao seu lado.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Entre em contato com a PetClin e encontre o cuidado que seu pet merece.
          </p>

          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-bold text-deep shadow-2xl shadow-navy/30 transition-all hover:-translate-y-0.5 hover:bg-white/95"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
