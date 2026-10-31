import type { Metadata } from "next";
import Link from "next/link";

const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.devocionario.app";

export const metadata: Metadata = {
  title: "Mi Devocionario — App de oración católica | Kryphor Labs",
  description:
    "Santo Rosario completo, más de 20 novenas, versículo diario y recordatorio de oración. Funciona sin internet y está disponible en 17 idiomas.",
  openGraph: {
    title: "Mi Devocionario — App de oración católica",
    description:
      "Santo Rosario, novenas y oración diaria en tu celular. Sin internet y en 17 idiomas.",
    images: ["/logos/mi-devocionario-icono.png"],
  },
};

const caracteristicas = [
  { titulo: "Santo Rosario completo", texto: "Los misterios de cada día, paso a paso, con las oraciones en pantalla." },
  { titulo: "Más de 20 novenas", texto: "Cada día de la novena guiado, y la app recuerda en qué día vas." },
  { titulo: "Plan de oración", texto: "Arma tu propio plan con varias devociones y sigue tu progreso." },
  { titulo: "Funciona sin internet", texto: "Reza donde estés, sin depender de la señal." },
  { titulo: "17 idiomas", texto: "Español, inglés, portugués, latín, francés, italiano y más." },
  { titulo: "Recordatorio diario", texto: "Un aviso suave a la hora que elijas para tu momento de oración." },
];

export default function MiDevocionarioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 text-center sm:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/mi-devocionario-icono.png"
            alt="Icono de Mi Devocionario"
            width={120}
            height={120}
            className="rounded-3xl flex-shrink-0"
          />
          <div>
            <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}>
              Kryphor Labs
            </p>
            <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--fg)" }}>
              Mi Devocionario
            </h1>
            <p className="font-inter text-lg mb-6" style={{ color: "var(--fg-muted)" }}>
              Tu compañía diaria de oración católica.
            </p>
            <a
              href={URL_PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-semibold text-base text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #D4AF37, #D4AF37aa)" }}
            >
              Descargar en Google Play
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {caracteristicas.map(c => (
            <div key={c.titulo} className="glass rounded-2xl p-6">
              <h2 className="font-poppins font-semibold text-lg mb-2" style={{ color: "var(--fg)" }}>
                {c.titulo}
              </h2>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {c.texto}
              </p>
            </div>
          ))}
        </div>

        <p className="font-inter text-sm text-center" style={{ color: "var(--fg-muted)" }}>
          Mi Devocionario no recopila datos personales.{" "}
          <Link href="/privacy/mi-devocionario" className="underline" style={{ color: "var(--accent)" }}>
            Política de privacidad
          </Link>
        </p>

      </div>
    </div>
  );
}
