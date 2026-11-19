import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
const fachada = "/images/gallery/sobre-fachada.png";
const equipe = "/images/gallery/sobre-equipe.png";
const atendimento = "/images/gallery/sobre-atendimento.png";
import { CAROUSEL_INTERVAL, CAROUSEL_RESUME_DELAY, carouselPosition } from "@/lib/about-carousel";

const PHOTOS = [
  { src: fachada, alt: "Fachada da clínica PetClin" },
  { src: equipe, alt: "Equipe veterinária com dois cães" },
  { src: atendimento, alt: "Veterinário examinando uma gata" },
];

export function AboutCarousel() {
  const [active, setActive] = useState(0);
  const pauseUntil = useRef(0);
  const dragging = useRef(false);
  const gesture = useRef({ x: 0, y: 0, moved: false });
  const suppressClick = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!reduced.matches && !dragging.current && Date.now() >= pauseUntil.current && !document.hidden) {
        setActive((current) => (current + 1) % PHOTOS.length);
      }
    }, CAROUSEL_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  const pause = () => { pauseUntil.current = Date.now() + CAROUSEL_RESUME_DELAY; };
  const move = (direction: number) => {
    pause();
    setActive((current) => (current + direction + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div
      className="about-coverflow"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotografias da PetClin"
      onFocusCapture={pause}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        pause();
        dragging.current = true;
        suppressClick.current = false;
        gesture.current = { x: event.clientX, y: event.clientY, moved: false };
      }}
      onPointerMove={(event) => {
        if (!dragging.current) return;
        const dx = event.clientX - gesture.current.x;
        const dy = event.clientY - gesture.current.y;
        if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
          gesture.current.moved = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }
      }}
      onPointerUp={(event) => {
        if (!dragging.current) return;
        const dx = event.clientX - gesture.current.x;
        suppressClick.current = gesture.current.moved;
        dragging.current = false;
        pause();
        if (gesture.current.moved && Math.abs(dx) > 35) move(dx < 0 ? 1 : -1);
      }}
      onPointerCancel={() => { dragging.current = false; pause(); }}
    >
      {PHOTOS.map((photo, index) => {
        const position = carouselPosition(index, active, PHOTOS.length);
        return (
          <Button
            key={photo.src}
            variant="ghost"
            className="about-coverflow-photo"
            data-position={position}
            aria-label={`Visualizar fotografia: ${photo.alt}`}
            aria-current={position === "center" ? "true" : undefined}
            tabIndex={position === "hidden" ? -1 : 0}
            onClick={() => {
              if (suppressClick.current) { suppressClick.current = false; return; }
              pause();
              setActive(index);
            }}
          >
            <img src={photo.src} alt={photo.alt} width={768} height={960} loading="lazy" draggable={false} />
          </Button>
        );
      })}
    </div>
  );
}