import type { Metadata } from "next";
import ContenidoMiDevocionario from "./contenido";

export const metadata: Metadata = {
  title: "Mi Devocionario — App de oración católica | Kryphor Labs",
  description:
    "Santo Rosario completo, más de 20 novenas, versículo diario y recordatorio de oración. Funciona sin internet y está disponible en 17 idiomas.",
  openGraph: {
    title: "Mi Devocionario — App de oración católica",
    description:
      "Santo Rosario, novenas y oración diaria en tu celular. Sin internet y en 17 idiomas.",
    images: ["/promo/mi-devocionario-og.jpg"],
  },
};

export default function MiDevocionarioPage() {
  return <ContenidoMiDevocionario />;
}
