import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/petclinic/About";
import { BathTosa } from "@/components/petclinic/BathTosa";
import { CtaSection } from "@/components/petclinic/CtaSection";
import { Diagnostics } from "@/components/petclinic/Diagnostics";
import { Differentials } from "@/components/petclinic/Differentials";
import { Footer } from "@/components/petclinic/Footer";
import { Header } from "@/components/petclinic/Header";
import { Hero } from "@/components/petclinic/Hero";
import { Services } from "@/components/petclinic/Services";
import { PatientsGallery } from "@/components/petclinic/PatientsGallery";
import { Universe } from "@/components/petclinic/Universe";
import { LocationSection } from "@/components/petclinic/LocationSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetClin — Clínica Veterinária em Penedo, AL" },
      {
        name: "description",
        content:
          "Clínica veterinária em Penedo, Alagoas: consultas, exames laboratoriais, ultrassonografia, cirurgias, vacinas importadas, banho e tosa e pet shop. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "PetClin — Clínica Veterinária em Penedo, AL" },
      {
        property: "og:description",
        content:
          "Cuidado veterinário completo em Penedo, Alagoas: clínica, diagnóstico, prevenção, estética e pet shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <PatientsGallery />
        <Differentials />
        <Universe />
        <BathTosa />
        <Diagnostics />
        <CtaSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
