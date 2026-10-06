import { Clock, MapPin, PawPrint } from "lucide-react";
import mapAsset from "@/assets/location-map.jpg.asset.json";
import logoAsset from "@/assets/location-logo.jpg.asset.json";
import { ADDRESS, ADDRESS_CITY, HOURS } from "@/lib/petclinic";

export function LocationCard() {
  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-teal-soft px-5 pt-8 pb-6 text-left text-deep shadow-2xl shadow-navy/30 sm:px-8">
      <img src={logoAsset.url} alt="PetClin — Clínica Veterinária e Pet Shop" className="mx-auto h-16 w-auto rounded-lg mix-blend-multiply sm:h-20" loading="lazy" />

      <div className="mt-6 flex items-center justify-center">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-teal-soft bg-deep text-deep-foreground shadow-lg">
          <MapPin className="size-7" aria-hidden="true" />
        </span>
        <h3 className="-ml-3 rounded-r-full bg-deep py-2 pr-6 pl-6 font-display text-2xl font-bold text-deep-foreground sm:text-3xl">
          Chegue até nós!
        </h3>
      </div>

      <p className="mx-auto mt-4 max-w-sm text-center text-base font-semibold text-deep">
        Estamos no coração de Penedo, Alagoas, prontos para cuidar do seu pet!
      </p>

      <img src={mapAsset.url} alt="Mapa de Penedo com a localização da PetClin e foto da fachada da clínica" className="mt-5 w-full rounded-2xl" loading="lazy" />

      <div className="mt-5 rounded-2xl bg-deep p-5 text-deep-foreground">
        <p className="font-display text-lg font-bold">PetClin Clínica Veterinária e Pet Shop</p>
        <p className="mt-3 flex gap-2 text-sm">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{ADDRESS} — {ADDRESS_CITY}</span>
        </p>
        <p className="mt-2 flex gap-2 text-sm">
          <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{HOURS.map((h) => `${h.days}: ${h.time}`).join(" · ")}</span>
        </p>
      </div>

      <p className="mt-5 flex items-center justify-center gap-3 font-display text-lg italic text-deep">
        <PawPrint className="size-5" aria-hidden="true" />
        Sua confiança nos leva mais longe!
        <PawPrint className="size-5" aria-hidden="true" />
      </p>
    </div>
  );
}
