import { Clock, Instagram, MapPin, MessageCircle, PawPrint } from "lucide-react";
import {
  ADDRESS,
  ADDRESS_CITY,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DEFAULT_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/petclinic";

const FOOTER_SERVICES = [
  "Clínica Veterinária",
  "Pet Shop",
  "Banho e Tosa",
  "Exames Laboratoriais",
  "Ultrassonografia",
  "Cirurgias",
  "Vacinas Importadas",
  "Tartarectomia",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        {/* Marca */}
        <div className="md:col-span-4">
          <a href="#inicio" className="flex items-center gap-3" aria-label="PetClin — início">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-white">
              <PawPrint className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold tracking-tight text-white">
                Pet<span className="text-primary">Clin</span>
              </span>
              <span className="block text-[0.68rem] font-medium tracking-[0.18em] text-white/60 uppercase">
                Clínica Veterinária
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Clínica veterinária em Penedo, Alagoas, reunindo saúde, diagnóstico, prevenção e
            cuidados estéticos para cães e gatos.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram da PetClin: ${INSTAGRAM_HANDLE}`}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <Instagram className="size-4.5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da PetClin"
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <MessageCircle className="size-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Serviços */}
        <nav className="md:col-span-4" aria-label="Serviços da PetClin">
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">Serviços</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a href="#servicos" className="transition-colors hover:text-white">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {ADDRESS}
                <br />
                {ADDRESS_CITY}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {HOURS.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/60 sm:flex-row sm:px-8">
          <p>
            © {year} PetClin — Clínica Veterinária. Todos os direitos reservados.
          </p>
          <p>Penedo, Alagoas</p>
        </div>
      </div>
    </footer>
  );
}
