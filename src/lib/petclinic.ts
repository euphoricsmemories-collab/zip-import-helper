export const WHATSAPP_NUMBER = "558299605249";
export const WHATSAPP_DISPLAY = "(82) 9960-5249";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_URL = whatsappUrl(
  "Olá! Gostaria de agendar um atendimento para o meu pet.",
);

export const INSTAGRAM_URL = "https://instagram.com/petclin_penedo";
export const INSTAGRAM_HANDLE = "@petclin_penedo";

export const ADDRESS = "Rodovia Engenheiro Joaquim Gonçalves, 1241";
export const ADDRESS_CITY = "Penedo, AL — 57200-000";

export const HOURS = [
  { days: "Segunda a sexta", time: "8h às 18h" },
  { days: "Sábado", time: "8h às 12h" },
];

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "A Clínica", href: "#a-clinica" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Diagnóstico", href: "#diagnostico" },
] as const;
