import petShopAsset from "@/assets/petshop.jpg.asset.json";
import { Reveal } from "@/components/petclinic/Reveal";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

const petShopUrl = petShopAsset.url;

const ITEMS: GalleryItem[] = [
  {
    src: petShopUrl,
    alt: "Loja do pet shop da PetClin com o logotipo aceso, rações, petiscos e acessórios nas prateleiras",
    caption: "Pet shop",
    className: "md:col-span-2",
  },
];

export function Universe() {
  return (
    <section id="estrutura" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Universo PetClin
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Seu pet merece o melhor. Conheça nosso Pet Shop!
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-fr">
          {ITEMS.map((item, index) => (
            <Reveal
              key={item.caption}
              delay={Math.min(index * 80, 240)}
              className={item.className}
            >
              <figure className="group relative h-full overflow-hidden rounded-3xl shadow-md shadow-navy/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
