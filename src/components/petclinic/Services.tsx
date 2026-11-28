import { cn } from "@/lib/utils";
import { serviceWhatsappUrl } from "@/lib/petclinic";

const petshop = "/images/products/petshop.jpg";
const banhoTosa = "/images/services/banho-e-tosa-card.jpg";
const exames = "/images/services/exames-laboratoriais.jpg";
const ultrassom = "/images/services/ultrassonografia.jpg";
const cirurgias = "/images/services/cirurgias.jpg";
const vacinas = "/images/services/vacinas-importadas.png";
const fachada = "/images/services/petclin-fachada.png";
const tartarectomia = "/images/services/tartarectomia.png";

interface Service {
  name: string;
  description: string;
  image: string;
}

const FEATURED_SERVICE: Service = {
  name: "Clínica Veterinária",
  description: "Consultas, vacinas e acompanhamento de cães e gatos, do filhote ao idoso.",
  image: fachada,
};

const SECONDARY_SERVICES: Service[] = [
  {
    name: "Pet Shop",
    description: "Rações, petiscos e acessórios. Se não tiver o que você procura, a gente pede.",
    image: petshop,
  },
  {
    name: "Banho e Tosa",
    description: "Banho, tosa higiênica e tosa na tesoura. Com horário marcado.",
    image: banhoTosa,
  },
  {
    name: "Exames Laboratoriais",
    description: "Hemograma, bioquímico e outros exames, com resultado explicado pelo veterinário.",
    image: exames,
  },
  {
    name: "Ultrassonografia",
    description: "Ultrassom com laudo e conversa sobre o resultado na mesma consulta.",
    image: ultrassom,
  },
  {
    name: "Cirurgias",
    description: "Procedimentos realizados com protocolos de segurança e acompanhamento atento.",
    image: cirurgias,
  },
  {
    name: "Vacinas Importadas",
    description: "Imunização com vacinas importadas, seguindo o calendário de cada pet.",
    image: vacinas,
  },
  {
    name: "Tartarectomia",
    description: "Remoção de tártaro para a saúde bucal e o conforto do seu pet.",
    image: tartarectomia,
  },
];

interface ServiceCardProps {
  service: Service;
  number: number;
  featured?: boolean;
}

function ServiceCard({ service, number, featured = false }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col",
        featured && "lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-12",
      )}
    >
      <img
        src={service.image}
        alt={service.name}
        loading="lazy"
        className={cn(
          "w-full rounded-xl object-cover object-[50%_42%]",
          featured ? "aspect-[4/3]" : "aspect-square",
        )}
      />

      <div className="pt-3.5">
        <span className="block font-display text-sm tracking-[0.05em] text-services-accent">
          {String(number).padStart(2, "0")}
        </span>
        <h3
          className={cn(
            "mt-1 font-display font-semibold tracking-tight text-services-ink",
            featured ? "text-2xl" : "text-lg lg:text-2xl",
          )}
        >
          {service.name}
        </h3>
        <p
          className={cn(
            "mt-1.5 leading-[1.5] text-services-copy",
            featured ? "text-[15px]" : "text-sm lg:text-[15px]",
          )}
        >
          {service.description}
        </p>
        <a
          href={serviceWhatsappUrl(service.name)}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "mt-3 inline-flex whitespace-nowrap font-medium text-services-accent no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-services-accent",
            featured ? "text-[15px]" : "text-sm",
          )}
        >
          Agendar pelo WhatsApp →
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="servicos"
      className="services-section scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header>
          <h2 className="font-display text-[32px] font-semibold tracking-tight text-services-ink lg:text-[44px]">
            O que fazemos aqui na <span className="text-services-accent">PetClin</span>
          </h2>
          <p className="mt-3 whitespace-nowrap text-base text-services-copy">
            Atendimento para cães e gatos em Penedo.
          </p>
        </header>

        <div className="mt-7">
          <ServiceCard service={FEATURED_SERVICE} number={1} featured />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 lg:mt-[72px] lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[72px]">
          {SECONDARY_SERVICES.map((service, index) => (
            <ServiceCard key={service.name} service={service} number={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
