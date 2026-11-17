import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Gracias por apoyar a Maru! | Kryphor Labs",
  robots: { index: false },
};

// A esta página llega PayPal después de un aporte voluntario.
export default function GraciasMaru() {
  return (
    <div className="min-h-screen pt-[84px] flex items-center justify-center px-6"
      style={{ background: "linear-gradient(160deg, #FFF6EC 0%, #FDEFE6 55%, #F9D5E0 100%)" }}>
      <div className="max-w-lg text-center py-24">
        <p className="text-6xl mb-6">💖</p>
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl mb-4" style={{ color: "#8E0F37" }}>
          ¡Gracias de corazón!
        </h1>
        <p className="font-inter text-lg leading-relaxed mb-8" style={{ color: "#6B5545" }}>
          Tu aporte ayuda a que Maru siga creciendo con más juegos e idiomas para los abuelitos del mundo.
          PayPal te enviará el comprobante a tu correo.
        </p>
        <Link href="/apps/maru" className="inline-flex px-7 py-3.5 rounded-full font-poppins font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #E9447A, #C8174F 50%, #8E0F37)" }}>
          Volver a Maru
        </Link>
      </div>
    </div>
  );
}
