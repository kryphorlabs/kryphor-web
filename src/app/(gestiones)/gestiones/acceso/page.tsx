import type { Metadata } from "next";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import { MarcaGestiones } from "@/components/gestiones/Logo";

export const metadata: Metadata = {
  title: "Acceso del equipo",
  robots: { index: false, follow: false },
};

// Puerta de entrada a la plataforma interna. Mientras la plataforma no este
// desplegada, solo informa; cuando exista, aqui va el formulario de ingreso.
export default function AccesoEquipo() {
  return (
    <section className="relative isolate min-h-[80vh] grid place-items-center px-5 pt-32 pb-20">
      <div className="absolute inset-0 -z-10" style={{
        background:
          "radial-gradient(50% 50% at 20% 10%, rgba(34,197,94,0.14), transparent 60%)," +
          "radial-gradient(45% 45% at 90% 80%, rgba(56,189,248,0.12), transparent 60%), #F8FAF9",
      }} />
      <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center"
        style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 30px 70px -35px rgba(15,23,42,0.35)" }}>
        <div className="mx-auto w-fit"><MarcaGestiones tam={56} /></div>
        <h1 className="font-inter font-semibold text-2xl tracking-[-0.02em] text-slate-900 mt-7">Acceso del equipo</h1>
        <p className="font-inter text-[15.5px] text-slate-600 mt-3" style={{ lineHeight: 1.7 }}>
          La plataforma interna de Kryphor Gestiones se está terminando de construir. Muy pronto podrás ingresar desde aquí.
        </p>
        <span className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full font-inter text-sm text-slate-600 bg-slate-50"
          style={{ border: "1px solid rgba(15,23,42,0.08)" }}>
          <LockKeyhole size={15} /> Solo personal autorizado
        </span>
        <div className="mt-8">
          <a href="/gestiones" className="inline-flex items-center gap-2 font-inter font-medium text-emerald-700 hover:text-emerald-800">
            <ArrowLeft size={17} /> Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
