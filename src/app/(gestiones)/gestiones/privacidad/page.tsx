import type { Metadata } from "next";
import { PoliticaDatos } from "@/components/legal/PoliticaDatos";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadGestiones() {
  return <PoliticaDatos />;
}
