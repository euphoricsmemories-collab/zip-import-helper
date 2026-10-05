import mapAsset from "@/assets/localizacao-petclin-art.png.asset.json";

const mapUrl = mapAsset.url;

export function LocationMap() {
  return (
    <section aria-label="Localização da PetClin">
      <img
        src={mapUrl}
        alt="Arte da PetClin: Chegue até nós! Mapa com a localização da clínica em Penedo, AL, endereço Rodovia Engenheiro Joaquim Gonçalves, 1241, e horário de atendimento"
        width={1024}
        height={1536}
        loading="lazy"
        className="mx-auto block w-full h-auto"
      />
    </section>
  );
}
