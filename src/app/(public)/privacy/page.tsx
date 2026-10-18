import type { Metadata } from "next";
import { PoliticaDatos } from "@/components/legal/PoliticaDatos";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales",
  description:
    "Política de tratamiento de datos personales del Grupo Kryphor (Kryphor Labs y Kryphor Gestiones), conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PoliticaDatos />;
}
