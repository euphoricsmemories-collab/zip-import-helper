import { MessageCircle, Sparkles } from "lucide-react";
const bathTosaAsset = "/images/services/banho-e-tosa-final.png";
const bathTosaBackgroundAsset = "/images/backgrounds/banho-e-tosa-background.png";
import { Reveal } from "@/components/petclinic/Reveal";
import { whatsappUrl } from "@/lib/petclinic";

const bathTosa = bathTosaAsset;
const bathTosaBackground = bathTosaBackgroundAsset;

const HIGHLIGHTS = [
  "Banho com produtos adequados para cada pelagem",
  "Tosa higiênica e estética, do jeitinho que o seu pet merece",
  "Ambiente tranquilo, com paciência e carinho",
];

export function BathTosa() {
  return (
    <section id="banho-e-tosa" className="relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={bathTosaBackground}
          alt=""
          loading="lazy"
          className="size-full object-cover object-[58%_48%] sm:object-[62%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Banho e Tosa
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Seu pet bonito, confortável e bem cuidado.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            O banho e a tosa vão além da estética: é um momento de cuidado que também contribui
            para a saúde e o conforto do seu pet no dia a dia.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-soft text-primary">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl(
              "Olá! Gostaria de agendar um banho e tosa para o meu pet na PetClin.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Agendar banho e tosa
          </a>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-8 -bottom-8 -z-10 size-44 rounded-[2.5rem] bg-teal-soft"
          />
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-navy/10 transition-transform duration-500 hover:rotate-0">
            <img
              src={bathTosa}
              alt="Arte promocional da PetClin: cão de pelagem marrom com toalha de patinhas segurando uma escova de banho na boca, com o texto Hoje é dia de Banho & Tosa e a etiqueta Tosa com carinho"
              width={1122}
              height={1402}
              loading="lazy"
              className="aspect-[4/5] w-full rotate-1 object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
