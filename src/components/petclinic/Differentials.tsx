import type { LucideIcon } from "lucide-react";
import { Microscope, ShieldCheck, ShoppingBag, Sparkles, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/petclinic/Reveal";
import { cn } from "@/lib/utils";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  wide?: boolean;
}

const PILLARS: Pillar[] = [
  {
    icon: Stethoscope,
    title: "Atendimento veterinário",
    description:
      "Cuidado próximo e atento, do acolhimento na chegada ao acompanhamento depois da consulta.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção e saúde",
    description:
      "Vacinas e orientações para proteger o dia a dia do seu pet em cada fase da vida.",
  },
  {
    icon: Microscope,
    title: "Serviços de diagnóstico",
    description:
      "Exames laboratoriais e ultrassonografia para apoiar o veterinário nas decisões clínicas.",
  },
  {
    icon: Sparkles,
    title: "Cuidados estéticos",
    description:
      "Banho e tosa realizados com calma, técnica e afeto — bem-estar que se vê e se sente.",
    wide: true,
  },
  {
    icon: ShoppingBag,
    title: "Produtos e soluções para pets",
    description:
      "Pet shop com itens de alimentação, higiene e bem-estar, selecionados com cuidado.",
    wide: true,
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Diferenciais
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Cuidado completo para quem faz parte da sua família.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={Math.min(index * 70, 280)}
              className={cn(pillar.wide ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <article className="group h-full rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-soft text-primary transition-transform duration-300 group-hover:scale-110">
                  <pillar.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
