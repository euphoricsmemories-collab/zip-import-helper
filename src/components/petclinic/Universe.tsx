import { ArrowUpRight, Bone, ShoppingBag, Utensils, ImageIcon } from "lucide-react";
const petShopAsset = "/images/products/petshop.jpg";
import { Reveal } from "@/components/petclinic/Reveal";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/petclinic";

const PHOTOS: { src: string | null; alt: string; label: string; position: string }[] = [
  {
    src: petShopAsset,
    alt: "Loja do pet shop da PetClin com o logotipo aceso, rações, petiscos e acessórios nas prateleiras",
    label: "PetClin · Pet Shop",
    position: "main",
  },
  { src: null, alt: "Produtos do Pet Shop PetClin", label: "Produtos", position: "products" },
  { src: null, alt: "Brinquedos e acessórios do Pet Shop PetClin", label: "Brinquedos & acessórios", position: "accessories" },
];

const CATEGORIES = [
  { label: "Alimentação", icon: Utensils },
  { label: "Brinquedos", icon: Bone },
  { label: "Acessórios", icon: ShoppingBag },
];

export function Universe() {
  return (
    <section id="estrutura" className="petshop-section relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-bold text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Universo PetClin
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.16] font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Seu pet merece mais. <span className="text-deep">Descubra um universo de cuidado.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Alimentação, brinquedos e acessórios escolhidos com cuidado. No nosso Pet Shop, você encontra variedade para cada fase da vida do seu pet.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-border pt-6">
            {CATEGORIES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-deep">
                <Icon aria-hidden="true" className="size-4 text-primary" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-9 h-auto min-h-12 gap-4 rounded-lg bg-deep px-6 py-4 text-base font-semibold text-deep-foreground transition-all hover:-translate-y-0.5 hover:bg-primary">
            <a href={whatsappUrl("Olá! Gostaria de conhecer os produtos do Pet Shop da PetClin.")} target="_blank" rel="noreferrer">
              Conheça nosso Pet Shop <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </Reveal>

        <div className="petshop-composition">
          <span aria-hidden="true" className="petshop-outline" />
          {PHOTOS.map((photo, index) => (
            <Reveal key={photo.position} delay={index * 120} className={`petshop-photo petshop-photo-${photo.position}`}>
              <figure className="group relative h-full w-full overflow-hidden rounded-lg bg-card">
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]" />
                ) : (
                  <div role="img" aria-label={`Espaço reservado para foto de ${photo.label.toLowerCase()}`} className="petshop-photo-placeholder flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center text-primary">
                    <ImageIcon aria-hidden="true" className="size-7 opacity-40" strokeWidth={1} />
                    <span className="text-xs font-medium">{photo.label}</span>
                  </div>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
