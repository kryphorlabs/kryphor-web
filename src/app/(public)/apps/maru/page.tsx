import type { Metadata } from "next";
import ContenidoMaru from "./contenido";

export const metadata: Metadata = {
  title: "Maru — Juegos para ejercitar la mente | Kryphor Labs",
  description:
    "Juegos suaves para ejercitar la mente cada día: parejas, sopa de letras, cálculo, botellas de colores y más. Letra grande, 13 idiomas y gratis.",
  alternates: { canonical: "/apps/maru" },
  openGraph: {
    title: "Maru — Juegos para ejercitar la mente",
    description: "8 juegos suaves, letra grande y 13 idiomas. Un ratito para la mente, cada día.",
    images: ["/promo/maru-og.png"],
  },
};

export default function MaruPage() {
  return <ContenidoMaru />;
}
