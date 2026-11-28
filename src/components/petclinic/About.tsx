import { AboutCarousel } from "@/components/petclinic/AboutCarousel";
import { Reveal } from "@/components/petclinic/Reveal";

export function About() {
  return (
    <section
      id="a-clinica"
      className="about-background scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Texto institucional */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="clinic-micro flex items-center gap-3 text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Sobre a PetClin
          </p>
          <h2 className="mt-4">
            Mais que cuidados, uma relação de confiança.
          </h2>
          <p className="clinic-copy mt-5 max-w-xl text-pretty sm:mt-6">
            Há mais de 10 anos em Penedo, a PetClin constrói sua trajetória com profissionalismo,
            dedicação e compromisso com a saúde e o bem-estar dos animais. Ao longo dessa caminhada,
            tornou-se referência na região, oferecendo atendimento veterinário responsável e
            acolhedor, com o propósito de cuidar de quem faz parte da sua família.
          </p>
        </Reveal>
        <Reveal className="mt-14 sm:mt-16">
          <AboutCarousel />
        </Reveal>
      </div>
    </section>
  );
}
