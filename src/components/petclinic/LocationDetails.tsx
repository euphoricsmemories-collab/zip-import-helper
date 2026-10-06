import { Clock3, MapPin, PawPrint } from "lucide-react";
import logo from "@/assets/location-logo.png.asset.json";
import map from "@/assets/location-map.jpg.asset.json";
import facade from "@/assets/location-facade.jpg.asset.json";
import { ADDRESS, ADDRESS_CITY, HOURS } from "@/lib/petclinic";

export function LocationDetails() {
  return (
    <div id="localizacao" className="mt-12 overflow-hidden rounded-lg bg-teal-soft text-deep">
      <div className="px-5 pt-8 pb-6 text-center sm:px-8 sm:pt-10">
        <img src={logo.url} alt="PetClin — Clínica Veterinária e Pet Shop" width={324} height={102} loading="lazy" className="mx-auto h-auto w-64 max-w-full" />
        <div className="mt-6 flex items-center justify-center gap-3">
          <MapPin aria-hidden="true" className="size-8 shrink-0 text-primary" />
          <h3 className="text-3xl font-extrabold sm:text-4xl">Chegue até nós!</h3>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-lg font-semibold leading-snug">Estamos no coração de Penedo, Alagoas, prontos para cuidar do seu pet!</p>
      </div>
      <div className="grid gap-4 px-5 sm:grid-cols-[1.3fr_1fr] sm:px-8">
        <figure className="relative overflow-hidden rounded-lg">
          <img src={map.url} alt="Mapa da região da PetClin em Penedo" width={353} height={372} loading="lazy" className="h-full min-h-64 w-full object-cover" />
          <figcaption className="absolute inset-0 flex flex-col items-center justify-center">
            <MapPin aria-hidden="true" className="size-12 fill-accent text-accent-foreground" />
            <span className="rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground">PetClin Clínica Veterinária</span>
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-lg bg-background">
          <img src={facade.url} alt="Fachada da PetClin com letreiro e entrada da clínica" width={440} height={320} loading="lazy" className="h-auto w-full sm:h-full sm:object-cover" />
        </figure>
      </div>
      <div className="mt-6 bg-deep px-5 py-7 text-left text-deep-foreground sm:px-8">
        <h4 className="text-xl font-bold">PetClin Clínica Veterinária e Pet Shop</h4>
        <div className="mt-4 flex items-start gap-3">
          <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{ADDRESS} —<br />{ADDRESS_CITY}</p>
        </div>
        <div className="mt-3 flex items-start gap-3">
          <Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{HOURS.map((h) => `${h.days}: ${h.time}`).join(" · ")}</p>
        </div>
      </div>
      <p className="flex items-center justify-center gap-3 px-5 py-6 font-display text-lg italic sm:text-xl"><PawPrint aria-hidden="true" className="size-5 shrink-0 text-primary" />Sua confiança nos leva mais longe!</p>
    </div>
  );
}