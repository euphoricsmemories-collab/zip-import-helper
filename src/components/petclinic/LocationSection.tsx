import { Clock3, MapPin, Navigation } from "lucide-react";
const facade = "/images/services/petclin-fachada.png";
import { ADDRESS_CITY } from "@/lib/petclinic";
import { Reveal } from "@/components/petclinic/Reveal";
import { LOCATION_HOURS, petclinEmbedUrl, PETCLIN_DIRECTIONS_URL } from "@/lib/petclinic-location";

export function LocationSection() {
  const embedUrl = petclinEmbedUrl();

  return (
    <section id="localizacao" className="relative isolate overflow-hidden bg-background py-14 sm:py-20" aria-labelledby="location-heading">
      <div aria-hidden="true" className="location-background pointer-events-none absolute inset-0 -z-10">
        <span className="location-blob location-blob-sky location-blob-drift -top-28 -right-24 h-[22rem] w-[22rem] sm:-top-32 sm:-right-28 sm:h-[32rem] sm:w-[32rem]" />
        <span className="location-blob location-blob-mint location-blob-drift -bottom-32 -left-28 h-[24rem] w-[24rem] [animation-delay:-6s] sm:-bottom-36 sm:-left-32 sm:h-[34rem] sm:w-[34rem]" />
        <span className="location-blob location-blob-glow -top-16 left-1/2 h-[16rem] w-[28rem] -translate-x-1/2 sm:-top-24 sm:h-[20rem] sm:w-[40rem]" />
        <svg viewBox="0 0 200 200" className="location-lines absolute -top-6 -left-6 h-36 w-36 sm:-top-8 sm:-left-8 sm:h-56 sm:w-56">
          <circle cx="0" cy="0" r="72" />
          <circle cx="0" cy="0" r="112" />
          <circle cx="0" cy="0" r="152" />
        </svg>
        <svg viewBox="0 0 200 200" className="location-lines absolute -right-6 -bottom-6 h-36 w-36 sm:-right-8 sm:-bottom-8 sm:h-56 sm:w-56">
          <circle cx="200" cy="200" r="72" />
          <circle cx="200" cy="200" r="112" />
          <circle cx="200" cy="200" r="152" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 text-center sm:mb-10">
            <h2 id="location-heading" className="font-display text-3xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Onde estamos
            </h2>
            <p className="mt-3 font-outfit text-base leading-relaxed text-muted-foreground">
              Venha nos visitar — estamos prontos para cuidar do seu pet
            </p>
          </div>
          <div className="relative">
            <div className="h-[440px] overflow-hidden rounded-lg border border-border bg-muted sm:h-[520px]">
              <iframe
                  title="Localização da PetClin no Google Maps"
                  src={embedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <figure className="pointer-events-none absolute top-4 right-4 w-24 overflow-hidden rounded-lg border-4 border-background bg-background shadow-lg sm:top-6 sm:right-6 sm:w-44">
              <img src={facade} alt="Fachada da PetClin em Penedo" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="hidden py-1.5 text-center text-xs font-semibold text-foreground sm:block">PetClin · Penedo</figcaption>
            </figure>
          </div>
          <div className="mt-7 grid gap-7 border-t border-primary/15 pt-6 sm:mt-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-10 sm:pt-7">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,1.2fr)] md:gap-10">
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{ADDRESS_CITY}</span>
              </p>
              <div>
                <h3 className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
                  <Clock3 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  Horário de funcionamento
                </h3>
                <dl className="mt-3 grid max-w-sm gap-2">
                  {LOCATION_HOURS.map(({ days, time }) => (
                    <div key={days} className="flex items-baseline justify-between gap-6 text-sm">
                      <dt className="font-semibold text-foreground">{days}</dt>
                      <dd className="whitespace-nowrap tabular-nums text-muted-foreground">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <a
              href={PETCLIN_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              <Navigation className="size-5" aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}