import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/petclinic";
const heroDoctor = "/images/banners/doutor-hero.png";

const contactUrl = whatsappUrl("Olá, vim pelo site e gostaria de agendar um atendimento.");

export function Hero() {
  return (
    <section id="inicio" className="hero-section relative isolate overflow-hidden pt-[92px] pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-[14px] px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h1 className="max-w-none font-display text-[clamp(32px,9.6vw,38px)] leading-[1.12] font-semibold tracking-normal text-foreground sm:text-5xl lg:text-[clamp(42px,4.15vw,60px)]">
            <span className="sm:hidden">
              Seu pet em
              <br />
              <span className="whitespace-nowrap"><span className="text-primary">boas mãos</span>,</span>
              <br />
              aqui em Penedo.
            </span>
            <span className="hidden sm:inline">
              Seu pet em <span className="text-primary">boas mãos</span>,
              <br />
              aqui em Penedo.
            </span>
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-hero-copy sm:mt-6 sm:text-lg">
            Consultas, vacinas, exames, banho e tosa. Tudo num lugar só, com gente que conhece o seu pet pelo nome.
          </p>
          <div className="mt-[22px] flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button asChild variant="heroWhatsapp" className="h-12 w-full rounded-[8px] px-6 text-base font-semibold sm:w-auto">
              <a href={contactUrl} target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A10 10 0 1 1 12 22Zm5.5-7.5c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.4.3-.4.9-1.5.1-.2 0-.4 0-.6l-.9-2.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.3 5.1 4.6 1.9.8 2.6.9 3.5.8.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="hero-experience mt-[18px] flex max-w-lg items-center gap-4 sm:mt-7">
            <strong className="shrink-0 font-display text-4xl font-semibold text-primary">10+</strong>
            <p className="max-w-[13rem] whitespace-nowrap font-display text-[20px] font-normal italic leading-[1.25] tracking-[-0.01em] text-hero-stat-ink sm:text-[24px]">
              anos cuidando
              <br />
              dos pets de <span className="text-hero-stat-accent">Penedo</span>
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[30rem] pr-3 pb-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 top-3 left-3 rounded-[16px] bg-primary" />
          <div className="relative overflow-hidden rounded-[16px]">
            <img
              src={heroDoctor}
              alt="Veterinário da PetClin sorrindo com filhotes no colo"
              width={1059}
              height={1512}
              className="aspect-[4/4.2] w-full object-cover object-[center_30%] sm:aspect-[4/4.6] sm:object-top"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
