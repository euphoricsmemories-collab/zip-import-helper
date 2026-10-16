import { MapPin } from "lucide-react";
import facade from "@/assets/petclin-fachada.png.asset.json";
import { ADDRESS_CITY } from "@/lib/petclinic";
import { Reveal } from "@/components/petclinic/Reveal";
import { petclinEmbedUrl, PETCLIN_MAP_URL } from "@/lib/petclinic-location";

export function LocationSection() {
  const browserKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const embedUrl = browserKey
    ? petclinEmbedUrl(browserKey)
    : undefined;

  return (
    <section id="localizacao" className="bg-background py-14 sm:py-20" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 text-center sm:mb-10">
            <h2 id="location-heading" className="font-display text-3xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Onde estamos
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Venha nos visitar — estamos prontos para cuidar do seu pet
            </p>
          </div>
          <div className="relative">
            <div className="h-[440px] overflow-hidden rounded-lg border border-border bg-muted sm:h-[520px]">
              {embedUrl ? (
                <iframe
                  title="Localização da PetClin no Google Maps"
                  src={embedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-muted-foreground">
                  O mapa está temporariamente indisponível.
                </div>
              )}
            </div>
            <figure className="pointer-events-none absolute top-4 right-4 w-24 overflow-hidden rounded-lg border-4 border-background bg-background shadow-lg sm:top-6 sm:right-6 sm:w-44">
              <img src={facade.url} alt="Fachada da PetClin em Penedo" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="hidden py-1.5 text-center text-xs font-semibold text-foreground sm:block">PetClin · Penedo</figcaption>
            </figure>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{ADDRESS_CITY}</span>
            </p>
            <a href={PETCLIN_MAP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
              <MapPin className="size-4" aria-hidden="true" />
              Abrir no Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}