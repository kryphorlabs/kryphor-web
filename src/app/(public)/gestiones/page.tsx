import type { Metadata } from "next";
import GestionesLanding from "@/components/sections/GestionesLanding";
import { WHATSAPP_GESTIONES } from "@/data/gestiones";

export const metadata: Metadata = {
  title: "Kryphor Gestiones — Afiliaciones a ARL, EPS y Caja de Compensación en 24h",
  description:
    "Kryphor Gestiones gestiona afiliaciones a ARL, EPS, caja de compensación y trámites de salud en 24 horas, sin filas y por WhatsApp. Circasia, Quindío, Eje Cafetero.",
  keywords: [
    "afiliación ARL", "afiliación EPS", "caja de compensación", "trámites de salud",
    "afiliaciones Circasia", "afiliaciones Quindío", "Kryphor Gestiones",
  ],
  alternates: { canonical: "/gestiones" },
  openGraph: {
    title: "Kryphor Gestiones — Afiliaciones en 24h",
    description: "Afiliaciones a ARL, EPS, caja de compensación y trámites de salud, sin filas y por WhatsApp.",
    url: "/gestiones",
  },
};

const negocio = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kryphor Gestiones",
  url: "https://kryphorlabs.com/gestiones",
  description:
    "Afiliaciones a ARL, EPS, caja de compensación y trámites de salud en 24 horas, sin filas y por WhatsApp.",
  parentOrganization: { "@type": "Organization", name: "Grupo Kryphor", url: "https://kryphorlabs.com" },
  address: { "@type": "PostalAddress", addressLocality: "Circasia", addressRegion: "Quindío", addressCountry: "CO" },
  areaServed: ["Circasia", "Armenia", "Quindío", "Eje Cafetero"],
  ...(WHATSAPP_GESTIONES ? { telephone: `+${WHATSAPP_GESTIONES}` } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de afiliación",
    itemListElement: ["Afiliación a ARL", "Afiliación a EPS", "Afiliación a Caja de Compensación", "Trámites de salud"].map(n => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: n },
    })),
  },
};

export default function GestionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }} />
      <GestionesLanding />
    </>
  );
}
