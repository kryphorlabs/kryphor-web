import type { Metadata } from "next";
import GrupoHeroSection from "@/components/sections/GrupoHeroSection";
import GrupoEmpresasSection from "@/components/sections/GrupoEmpresasSection";
import GrupoValoresSection from "@/components/sections/GrupoValoresSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <GrupoHeroSection />
      <GrupoEmpresasSection />
      <GrupoValoresSection />
      <ContactSection />
    </>
  );
}
