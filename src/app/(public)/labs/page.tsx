import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kryphor Labs — Desarrollo de software y soluciones digitales",
  description:
    "Kryphor Labs es el estudio de desarrollo de software y soluciones digitales del Grupo Kryphor. Creamos plataformas como KryphorConnect, aplicaciones y productos digitales desde el Quindío.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Kryphor Labs — Desarrollo de software y soluciones digitales",
    description: "Estudio de desarrollo de software y soluciones digitales del Grupo Kryphor.",
    url: "/labs",
  },
};

export default function LabsPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ContactSection />
    </>
  );
}
