import { PawPrint } from "lucide-react";
import heroDoctor from "@/assets/doutor-hero.png.asset.json";
import { HOURS } from "@/lib/petclinic";

const hoursLabel = HOURS.map((h) => h.time).join(" · Seg a Sex / Sáb");

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16">
      {/* Fundo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(52rem 30rem at 88% -6%, var(--color-teal-soft) 0%, transparent 62%), radial-gradient(40rem 26rem at -8% 30%, color-mix(in oklab, var(--color-teal-soft) 65%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 sm:px-8 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
        {/* Lado esquerdo */}
        <div className="animate-fade-in [animation-duration:700ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-teal-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/80">
            <PawPrint className="size-3.5 text-primary" aria-hidden="true" />
            Clínica Veterinária em Penedo, Alagoas
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Seu pet merece{" "}
            <span className="relative inline-block text-primary italic">
              cuidado
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-1.5 left-0 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 8 C 60 2, 150 2, 216 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            em cada fase da vida.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Na PetClin, unimos cuidado veterinário, tecnologia e carinho para proporcionar mais
            saúde e qualidade de vida ao seu melhor amigo.
          </p>

        </div>

        {/* Imagem principal */}
        <div className="mx-auto w-full max-w-[34rem] lg:-mt-8 lg:max-w-none">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/15">
            <img
              src={heroDoctor.url}
              alt="Veterinário da PetClin sorrindo segurando três filhotes de shih tzu na recepção da clínica"
              width={1059}
              height={1512}
              className="aspect-[4/4.4] w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* marcação discreta de horário para leitores de tela */}
      <span className="sr-only">{hoursLabel}</span>
    </section>
  );
}
