import type { Metadata } from "next";
import Portada from "@/components/gestiones/Portada";
import {
  ParaQuien, Servicios, PorQue, ComoFunciona, Documentos, Cobertura, Preguntas, Final,
} from "@/components/gestiones/Secciones";
import { GESTIONES_SITIO, PREGUNTAS, SERVICIOS, WHATSAPP_GESTIONES } from "@/data/gestiones";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const negocio = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kryphor Gestiones",
  url: GESTIONES_SITIO,
  telephone: `+${WHATSAPP_GESTIONES}`,
  description:
    "Afiliaciones a EPS, pensión, ARL y caja de compensación, y pago de planilla de seguridad social en 24 horas, sin filas y por WhatsApp.",
  address: { "@type": "PostalAddress", addressLocality: "Circasia", addressRegion: "Quindío", addressCountry: "CO" },
  areaServed: ["Circasia", "Armenia", "Quindío", "Eje Cafetero"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de seguridad social",
    itemListElement: SERVICIOS.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.titulo } })),
  },
};

const preguntasFrecuentes = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PREGUNTAS.map(p => ({
    "@type": "Question",
    name: p.pregunta,
    acceptedAnswer: { "@type": "Answer", text: p.respuesta },
  })),
};

export default function GestionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preguntasFrecuentes) }} />
      <Portada />
      <ParaQuien />
      <Servicios />
      <PorQue />
      <ComoFunciona />
      <Documentos />
      <Cobertura />
      <Preguntas />
      <Final />
    </>
  );
}
