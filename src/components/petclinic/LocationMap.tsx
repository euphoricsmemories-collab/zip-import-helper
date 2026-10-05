import mapAsset from "@/assets/localizacao-petclin.png.asset.json";

const mapUrl = mapAsset.url;

export function LocationMap() {
  return (
    <section aria-label="Localização da PetClin">
      <img
        src={mapUrl}
        alt="Mapa com a localização da PetClin Clínica Veterinária em Penedo, AL, com uma foto da fachada da clínica"
        width={1837}
        height={856}
        loading="lazy"
        className="block w-full h-auto"
      />
    </section>
  );
}
