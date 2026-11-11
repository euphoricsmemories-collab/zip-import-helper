import { HeartHandshake, MapPin } from "lucide-react";
import vetCare from "@/assets/doutor-exame.jpg.asset.json";
const vetCareUrl = vetCare.url;
import { Reveal } from "@/components/petclinic/Reveal";

export function About() {
  return (
    <section
      id="a-clinica"
      className="about-background scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Composição visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -top-8 -left-8 -z-10 size-40 rounded-[2.5rem] bg-teal-soft"
          />
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-navy/10">
            <img
              src={vetCareUrl}
              alt="Veterinário da PetClin examinando uma gata com luvas e estetoscópio"
              width={1248}
              height={1254}
              loading="lazy"
              className="aspect-[4/4.2] w-full object-cover"
            />
          </div>

          {/* Card sobreposto */}
          <div className="absolute -bottom-8 left-6 max-w-64 rounded-3xl bg-primary p-5 text-primary-foreground shadow-xl shadow-primary/30 sm:left-10">
            <HeartHandshake className="size-7" aria-hidden="true" />
            <p className="mt-3 font-display text-lg leading-snug font-semibold">
              Cuidado humanizado
            </p>
            <p className="mt-1.5 text-sm text-white/85">
              Cada pet é atendido com paciência e afeto.
            </p>
          </div>

          <span className="absolute -top-3 right-8 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-white/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-lg shadow-navy/10 backdrop-blur">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Penedo, AL
          </span>
        </Reveal>

        {/* Texto institucional */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Sobre a PetClin
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Mais que cuidados, uma relação de confiança.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:text-lg">
            Há mais de 10 anos em Penedo, a PetClin constrói sua trajetória com profissionalismo,
            dedicação e compromisso com a saúde e o bem-estar dos animais. Ao longo dessa caminhada,
            tornou-se referência na região, oferecendo atendimento veterinário responsável e
            acolhedor, com o propósito de cuidar de quem faz parte da sua família.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
