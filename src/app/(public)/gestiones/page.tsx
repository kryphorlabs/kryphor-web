import type { Metadata } from "next";
import GestionesLanding from "@/components/sections/GestionesLanding";

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

export default function GestionesPage() {
  return <GestionesLanding />;
}
