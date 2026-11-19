import { useEffect, useRef } from "react";
const p1 = "/images/gallery/patient-1.jpg";
const p2 = "/images/gallery/patient-2.jpg";
const p3 = "/images/gallery/patient-3.jpg";
const p4 = "/images/gallery/patient-4.jpg";
const p5 = "/images/gallery/gallery-cat.jpg";

const PATIENTS = [
  { src: p1, name: "Rochoso", text: "Texto demonstrativo: espaço para uma breve descrição do paciente." },
  { src: p2, name: "Máximo", text: "Texto demonstrativo: personalize com uma mensagem carinhosa." },
  { src: p3, name: "Lua", text: "Texto demonstrativo: conte algo especial sobre este pet." },
  { src: p5, name: "Amendoim", text: "Texto demonstrativo: descrição curta e editável." },
  { src: p4, name: "Margarida", text: "Texto demonstrativo: um recado sobre o atendimento." },
];

const SPEED = 40; // px por segundo

export function PatientsGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, dragging: false, startX: 0, startOffset: 0, resumeAt: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const s = state.current;
      const half = track.scrollWidth / 2;
      if (!s.dragging && !reduced && now > s.resumeAt) s.x -= SPEED * dt;
      if (half > 0) {
        while (s.x <= -half) s.x += half;
        while (s.x > 0) s.x -= half;
      }
      track.style.transform = `translate3d(${s.x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    const s = state.current;
    s.dragging = true;
    s.startX = e.clientX;
    s.startOffset = s.x;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (s.dragging) s.x = s.startOffset + (e.clientX - s.startX);
  };
  const onUp = () => {
    state.current.dragging = false;
    state.current.resumeAt = performance.now() + 1500;
  };

  const items = [...PATIENTS, ...PATIENTS];

  return (
    <section id="galeria" className="patients-background scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-deep-foreground/90">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-deep-foreground" />
          Galeria
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-deep-foreground sm:text-5xl lg:text-6xl">
          Nossos Corajosos Pacientes
        </h2>
      </div>

      <div
        className="mt-12 cursor-grab touch-pan-y select-none active:cursor-grabbing sm:mt-16"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onMouseEnter={() => (state.current.resumeAt = Infinity)}
        onMouseLeave={() => (state.current.resumeAt = performance.now() + 300)}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {items.map((p, i) => (
            <figure
              key={i}
              aria-hidden={i >= PATIENTS.length}
              className="relative mr-4 aspect-[1/1.15] w-[64vw] shrink-0 overflow-hidden rounded-3xl sm:w-[40vw] md:w-[30vw] lg:w-[19vw]"
            >
              <img
                src={p.src}
                alt={`Paciente ${p.name}`}
                width={832}
                height={960}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left text-primary-foreground sm:p-6">
                <p className="font-display text-2xl sm:text-3xl">{p.name}</p>
                <p className="mt-1.5 text-sm leading-snug opacity-90">{p.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
