import { Heart, PawPrint, Stethoscope } from "lucide-react";
const heroDoctor = "/images/banners/doutor-hero.png";
import { HOURS } from "@/lib/petclinic";

const hoursLabel = HOURS.map((h) => h.time).join(" · Seg a Sex / Sáb");

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16">
      {/* Fundo decorativo */}
      <div aria-hidden="true" className="hero-background pointer-events-none absolute inset-0 -z-10">
        <Heart className="hero-heart hero-heart-float absolute top-[10%] left-[9%] size-4 fill-current" />
        <Heart className="hero-heart hero-heart-float-delayed absolute top-[24%] left-[26%] size-2.5 fill-current" />
        <Heart className="hero-heart hero-heart-float-slow absolute top-[38%] left-[6%] size-3 fill-current" />
        <Heart className="hero-heart hero-heart-float absolute top-[30%] left-[46%] size-3.5 fill-current" />
        <Heart className="hero-heart hero-heart-float-delayed absolute right-[12%] bottom-[34%] size-4 fill-current [animation-delay:-9s]" />
        <Heart className="hero-heart hero-heart-float-slow absolute right-[26%] bottom-[12%] size-2.5 fill-current" />
        <Heart className="hero-heart hero-heart-float absolute right-[6%] bottom-[58%] size-3 fill-current [animation-delay:-5s]" />
        <Heart className="hero-heart hero-heart-float-slow absolute right-[44%] bottom-[6%] size-3 fill-current [animation-delay:-11s]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 sm:px-8 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
        {/* Lado esquerdo */}
        <div className="animate-fade-in [animation-duration:700ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-teal-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/80">
            <PawPrint className="size-3.5 text-primary" aria-hidden="true" />
            Clínica Veterinária em Penedo, Alagoas
          </span>

          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
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

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground sm:mt-6">
            Na PetClin, unimos cuidado veterinário, tecnologia e carinho para proporcionar mais
            saúde e qualidade de vida ao seu melhor amigo.
          </p>

        </div>

        {/* Imagem principal */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:-mt-8 lg:max-w-none">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/15">
            <img
              src={heroDoctor}
              alt="Veterinário da PetClin sorrindo segurando três filhotes de shih tzu na recepção da clínica"
              width={1059}
              height={1512}
              className="aspect-[4/4.4] w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>

          <div className="hero-card-float absolute bottom-5 left-3 flex w-40 items-center gap-2.5 rounded-xl border border-border/50 bg-card/95 p-2.5 text-card-foreground shadow-xl shadow-navy/10 backdrop-blur-sm sm:bottom-7 sm:left-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-primary">
              <Stethoscope className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 leading-tight">
              <strong className="block text-sm font-semibold">+10 anos</strong>
              <span className="block text-[11px] text-muted-foreground">cuidando de pets</span>
            </span>
          </div>
        </div>
      </div>

      {/* marcação discreta de horário para leitores de tela */}
      <span className="sr-only">{hoursLabel}</span>
    </section>
  );
}
