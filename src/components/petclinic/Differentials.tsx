import { Reveal } from "@/components/petclinic/Reveal";
const atendimento = "/images/services/diferencial-atendimento.avif";
const prevencao = "/images/services/diferencial-prevencao.avif";
const diagnostico = "/images/services/diferencial-diagnostico.avif";
const banho = "/images/services/diferencial-banho.avif";
const produtos = "/images/products/diferencial-produtos.png";

interface Pillar {
  image: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    image: atendimento,
    title: "Atendimento veterinário",
    description:
      "Cuidado próximo e atento, do acolhimento na chegada ao acompanhamento depois da consulta.",
  },
  {
    image: prevencao,
    title: "Prevenção e saúde",
    description:
      "Vacinas e orientações para proteger o dia a dia do seu pet em cada fase da vida.",
  },
  {
    image: diagnostico,
    title: "Serviços de diagnóstico",
    description:
      "Exames laboratoriais e ultrassonografia para apoiar o veterinário nas decisões clínicas.",
  },
  {
    image: banho,
    title: "Cuidados estéticos",
    description:
      "Banho e tosa realizados com calma, técnica e afeto — bem-estar que se vê e se sente.",
  },
  {
    image: produtos,
    title: "Produtos e soluções para pets",
    description:
      "Pet shop com itens de alimentação, higiene e bem-estar, selecionados com cuidado.",
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

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={Math.min(index * 70, 280)}
              className="min-w-0 h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transform-none motion-reduce:transition-none">
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <img src={pillar.image} alt={pillar.title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
