import type { Metadata } from "next";
import Encabezado from "@/components/gestiones/Encabezado";
import Pie from "@/components/gestiones/Pie";
import Asistente from "@/components/gestiones/Asistente";
import { GESTIONES_PUBLICA, GESTIONES_SITIO } from "@/data/gestiones";

const DESCRIPCION =
  "Kryphor Gestiones: afiliaciones a EPS, pensión, ARL y caja de compensación, y pago de planilla de seguridad social en Circasia y todo el Quindío. Sin filas, por WhatsApp, en 24 horas.";

// sitio propio de gestiones, con su nombre y sin depender de la marca del grupo
export const metadata: Metadata = {
  metadataBase: new URL(GESTIONES_SITIO),
  title: {
    absolute: "Kryphor Gestiones — Afiliaciones a seguridad social en el Quindío",
    template: "%s | Kryphor Gestiones",
  },
  description: DESCRIPCION,
  applicationName: "Kryphor Gestiones",
  keywords: [
    "Kryphor Gestiones", "afiliación EPS", "afiliación ARL", "afiliación pensión", "caja de compensación",
    "planilla de seguridad social", "afiliaciones Circasia", "afiliaciones Quindío", "seguridad social independientes",
  ],
  robots: GESTIONES_PUBLICA ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    title: "Kryphor Gestiones — Tu seguridad social, sin filas y en 24 horas",
    description: DESCRIPCION,
    url: GESTIONES_SITIO,
    siteName: "Kryphor Gestiones",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kryphor Gestiones — Tu seguridad social, sin filas y en 24 horas",
    description: DESCRIPCION,
  },
  icons: { icon: "/gestiones-icono.svg" },
};

export default function GestionesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <main>{children}</main>
      <Pie />
      <Asistente />
    </div>
  );
}
