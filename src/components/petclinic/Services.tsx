import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Cross,
  FlaskConical,
  Heart,
  ScanHeart,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/petclinic/Reveal";
import { whatsappUrl } from "@/lib/petclinic";
import { cn } from "@/lib/utils";
import petshop from "@/assets/petshop.jpg.asset.json";
import banhoTosa from "@/assets/banho-e-tosa-card.jpg.asset.json";
import exames from "@/assets/exames-laboratoriais.jpg.asset.json";
import ultrassom from "@/assets/ultrassonografia.jpg.asset.json";
import cirurgias from "@/assets/cirurgias.jpg.asset.json";
import vacinas from "@/assets/vacinas-importadas.png.asset.json";
import fachada from "@/assets/petclin-fachada.png.asset.json";

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  featured?: boolean;
  wide?: boolean;
  image?: string;
}

const SERVICES: Service[] = [
  {
    icon: Stethoscope,
    name: "Clínica Veterinária",
    description:
      "Consultas e acompanhamento da saúde do seu pet, com atenção em cada etapa da vida — da primeira visita ao cuidado contínuo.",
    featured: true,
    wide: true,
    image: fachada.url,
  },
  {
    icon: ShoppingBag,
    name: "Pet Shop",
    description: "Produtos, rações e acessórios selecionados para o dia a dia do seu melhor amigo.",
    image: petshop.url,
  },
  {
    icon: Scissors,
    name: "Banho e Tosa",
    description: "Estética e bem-estar com calma, técnica e carinho em cada detalhe.",
    image: banhoTosa.url,
  },
  {
    icon: FlaskConical,
    name: "Exames Laboratoriais",
    description: "Análises que ajudam o veterinário a acompanhar a saúde do seu pet com segurança.",
    image: exames.url,
  },
  {
    icon: ScanHeart,
    name: "Ultrassonografia",
    description: "Imagens que auxiliam o veterinário em avaliações e no acompanhamento da saúde.",
    image: ultrassom.url,
  },
  {
    icon: Cross,
    name: "Cirurgias",
    description: "Procedimentos realizados com protocolos de segurança e acompanhamento atento.",
    image: cirurgias.url,
  },
  {
    icon: Syringe,
    name: "Vacinas Importadas",
    description: "Imunização com vacinas importadas, seguindo o calendário de cada pet.",
    image: vacinas.url,
  },
  {
    icon: Sparkles,
    name: "Tartarectomia",
    description: "Remoção de tártaro para a saúde bucal e o conforto do seu pet.",
  },
];

/**
 * Tracks which card is closest to the activation line (~45% of viewport height).
 * Uses a rAF-throttled passive scroll listener — never blocks native scroll.
 * A small hysteresis margin avoids flicker when two cards are equidistant.
 */
function useActiveCard(count: number) {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    const HYSTERESIS = 24;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      let best = -1;
      let bestDist = Infinity;
      cardRefs.current.slice(0, count).forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - line);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      if (best < 0) return;
      setActiveIndex((prev) => {
        if (prev === best) return prev;
        const prevEl = cardRefs.current[prev];
        if (prevEl) {
          const r = prevEl.getBoundingClientRect();
          const prevDist = Math.abs(r.top + r.height / 2 - line);
          if (prevDist - bestDist < HYSTERESIS) return prev;
        }
        return best;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  return { cardRefs, activeIndex };
}

export function Services() {
  const { cardRefs, activeIndex } = useActiveCard(SERVICES.length);

  return (
    <section id="servicos" className="services-background relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Heart className="services-heart hero-heart-float absolute top-[8%] left-[7%] size-4 fill-current" />
        <Heart className="services-heart hero-heart-float-delayed absolute top-[31%] right-[8%] size-3 fill-current" />
        <Heart className="services-heart hero-heart-float-slow absolute top-[56%] left-[3%] size-5 fill-current" />
        <Heart className="services-heart hero-heart-float absolute right-[5%] bottom-[16%] size-4 fill-current [animation-delay:-6s]" />
        <Heart className="services-heart hero-heart-float-delayed absolute bottom-[5%] left-[38%] size-3 fill-current" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-navy uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Nossos serviços
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo o que seu pet precisa em um só lugar.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Da consulta de rotina ao diagnóstico, da estética ao pet shop: cuidado completo para
            cães e gatos em Penedo.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const active = index === activeIndex || !!service.image;
            const photo = service.image;
            return (
              <Reveal
                key={service.name}
                delay={Math.min(index * 60, 240)}
                className={cn(service.wide && "sm:col-span-2")}
              >
                <article
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "group relative isolate flex h-full flex-col overflow-hidden justify-between gap-6 rounded-3xl border p-7 transition-[background-color,border-color,box-shadow,transform,color] duration-[550ms] ease-out motion-reduce:transition-none",
                    active
                      ? "-translate-y-1 border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/25"
                      : "border-border bg-white shadow-none hover:border-primary/40",
                    photo && "min-h-80 border-primary/40",
                  )}
                >
                  {photo && (
                    <div aria-hidden="true" className="absolute inset-0 -z-10">
                      <img src={photo} alt="" loading="lazy" className="size-full object-cover object-[50%_42%] transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/45 to-transparent sm:bg-gradient-to-r sm:from-deep/90 sm:via-deep/50 sm:to-transparent" />
                    </div>
                  )}
                  <div className={cn(photo && "max-w-md")}>
                    <span
                      className={cn(
                        "flex size-13 items-center justify-center rounded-2xl transition-colors duration-[550ms]",
                        active ? "bg-white/15 text-white" : "bg-teal-soft text-primary",
                      )}
                    >
                      <service.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3
                      className={cn(
                        "mt-5 font-display text-xl font-semibold tracking-tight transition-colors duration-[550ms]",
                        active ? "text-white" : "text-foreground",
                      )}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-2.5 text-[0.95rem] leading-relaxed transition-colors duration-[550ms]",
                        active ? "text-white/85" : "text-muted-foreground",
                      )}
                    >
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={whatsappUrl(`Olá! Gostaria de saber mais sobre ${service.name} da PetClin.`)}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-[550ms]",
                      active ? "text-white hover:text-white/80" : "text-primary hover:text-primary/75",
                    )}
                  >
                    Saiba mais
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
