import type { LucideIcon } from "lucide-react";
import { FlaskConical, ScanHeart } from "lucide-react";
const diagnostics = "/images/services/diagnostics.jpg";
import { Reveal } from "@/components/petclinic/Reveal";
import { whatsappUrl } from "@/lib/petclinic";

interface DiagnosticService {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  message: string;
}

const DIAGNOSTIC_SERVICES: DiagnosticService[] = [
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais",
    description:
      "Análises clínicas que auxiliam o veterinário no acompanhamento e na prevenção da saúde do seu pet.",
    cta: "Agendar exame",
    message: "Olá! Gostaria de agendar um exame laboratorial para o meu pet.",
  },
  {
    icon: ScanHeart,
    title: "Ultrassonografia",
    description:
      "Imagens que ajudam o veterinário em avaliações e no acompanhamento da saúde do seu pet.",
    cta: "Agendar ultrassom",
    message: "Olá! Gostaria de agendar uma ultrassonografia para o meu pet.",
  },
];

export function Diagnostics() {
  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/60 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 110% 10%, color-mix(in oklab, var(--color-teal-soft) 80%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Diagnóstico e Saúde
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Mais precisão para cuidar da saúde do seu pet.
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {DIAGNOSTIC_SERVICES.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-teal-soft text-primary">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/75"
                >
                  {service.cta} →
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-8 -right-8 -z-10 size-40 rounded-full bg-teal-soft"
          />
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-navy/10">
            <img
              src={diagnostics}
              alt="Veterinária realizando ultrassonografia em um cão na PetClin"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/4.2] w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-5 left-8 rounded-full border border-border/60 bg-white/95 px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg shadow-navy/10 backdrop-blur">
            Diagnóstico na clínica
          </span>
        </Reveal>
      </div>
    </section>
  );
}
