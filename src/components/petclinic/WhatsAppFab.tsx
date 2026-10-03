import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT_URL } from "@/lib/petclinic";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_DEFAULT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      title="Agendar pelo WhatsApp"
      className="pulse-ring fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-primary px-4 py-4 text-primary-foreground shadow-xl shadow-primary/40 transition-transform hover:-translate-y-1 sm:px-5"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Agendar</span>
    </a>
  );
}
