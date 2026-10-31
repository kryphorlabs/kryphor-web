"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Heart, CalendarCheck, WifiOff, Globe, Bell, Download } from "lucide-react";

const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.devocionario.app";
const DORADO = "#D4AF37";
const NOCHE = "linear-gradient(160deg, #0D0D2B 0%, #151545 55%, #0D0D2B 100%)";
const curva = [0.16, 1, 0.3, 1] as const;

const caracteristicas = [
  { icono: BookOpen, titulo: "Santo Rosario completo", texto: "Los misterios de cada día, paso a paso, con las oraciones en pantalla." },
  { icono: Heart, titulo: "Más de 20 novenas", texto: "Cada día de la novena guiado, y la app recuerda en qué día vas." },
  { icono: CalendarCheck, titulo: "Plan de oración", texto: "Arma tu propio plan con varias devociones y sigue tu progreso." },
  { icono: WifiOff, titulo: "Funciona sin internet", texto: "Reza donde estés, sin depender de la señal." },
  { icono: Globe, titulo: "17 idiomas", texto: "Español, inglés, portugués, latín, francés, italiano y más." },
  { icono: Bell, titulo: "Recordatorio diario", texto: "Un aviso suave a la hora que elijas para tu momento de oración." },
];

const capturas = [
  { src: "/promo/capturas/oraciones.webp", texto: "Tu oración sugerida para hoy" },
  { src: "/promo/capturas/padre-nuestro.webp", texto: "Cada oración en pantalla" },
  { src: "/promo/capturas/avemarias.webp", texto: "Contador de avemarías" },
  { src: "/promo/capturas/novena.webp", texto: "Reza por tu intención" },
  { src: "/promo/capturas/inicio.webp", texto: "Tu progreso en cada novena" },
];

const imagenes = [
  { src: "/promo/mi-devocionario-es.webp", alt: "Mi Devocionario: crea tu plan de oración, Rosario y novenas juntas, disponible en 17 idiomas" },
  { src: "/promo/mi-devocionario-en.webp", alt: "Mi Devocionario: create your prayer plan, Rosary and novenas together, available in 17 languages" },
];

function BotonPlayStore() {
  return (
    <motion.a
      href={URL_PLAY_STORE}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full font-poppins font-semibold text-[15px] sm:text-base whitespace-nowrap"
      style={{ background: `linear-gradient(135deg, #F0D27A, ${DORADO} 50%, #B8860B)`, color: "#0D0D2B", boxShadow: "0 8px 32px rgba(212,175,55,0.35)" }}
    >
      <Download size={18} /> Descargar en Google Play
    </motion.a>
  );
}

// Marco de celular para las capturas reales de la app
function Celular({ src, alt, ancho }: { src: string; alt: string; ancho: number }) {
  return (
    <div className="rounded-[2rem] p-2 flex-shrink-0"
      style={{ width: ancho, background: "#05051A", border: `1px solid rgba(212,175,55,0.35)`, boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={360} height={800} loading="lazy" className="w-full h-auto rounded-[1.6rem]" />
    </div>
  );
}

export default function ContenidoMiDevocionario() {
  return (
    <div className="min-h-screen pt-[84px]" style={{ background: "var(--bg)" }}>

      {/* Portada en los colores de la app (empieza bajo el menú, que es transparente arriba) */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24" style={{ background: NOCHE }}>
        {/* resplandor dorado de fondo */}
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 65%)" }} />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: curva }}
          >
            <motion.img
              src="/logos/mi-devocionario-icono.png"
              alt="Icono de Mi Devocionario"
              width={112}
              height={112}
              className="rounded-[1.75rem] mb-7 mx-auto lg:mx-0"
              style={{ boxShadow: "0 0 0 1px rgba(212,175,55,0.35), 0 16px 48px rgba(212,175,55,0.3)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: curva }}
            />
            <p className="font-poppins font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: DORADO }}>
              Kryphor Labs
            </p>
            <h1 className="font-poppins font-bold text-4xl sm:text-6xl mb-4 text-white">
              Mi Devocionario
            </h1>
            <p className="font-inter text-lg sm:text-xl mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              Tu compañía diaria de oración católica.
            </p>
            <BotonPlayStore />
            <p className="font-inter text-sm mt-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gratis · 17 idiomas · Funciona sin internet
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Celular src="/promo/capturas/oraciones.webp" alt="Pantalla principal de Mi Devocionario" ancho={250} />
          </motion.div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caracteristicas.map((c, i) => (
            <motion.div
              key={c.titulo}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: curva }}
              whileHover={{ y: -4 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}>
                <c.icono size={20} style={{ color: DORADO }} />
              </div>
              <h2 className="font-poppins font-semibold text-lg mb-2" style={{ color: "var(--fg)" }}>
                {c.titulo}
              </h2>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {c.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capturas reales */}
      <section className="py-20 sm:py-24" style={{ background: NOCHE }}>
        <motion.h2
          className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-3 text-white px-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: curva }}
        >
          Así se ve por dentro
        </motion.h2>
        <p className="font-inter text-center mb-12 px-6" style={{ color: "rgba(255,255,255,0.65)" }}>
          Pensada para que cualquier persona pueda rezar sin complicaciones.
        </p>
        <div className="flex gap-6 overflow-x-auto px-6 sm:px-10 pb-4 lg:justify-center snap-x">
          {capturas.map((c, i) => (
            <motion.figure
              key={c.src}
              className="snap-center flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: curva }}
              whileHover={{ y: -6 }}
            >
              <Celular src={c.src} alt={c.texto} ancho={190} />
              <figcaption className="font-inter text-sm text-center" style={{ color: "rgba(255,255,255,0.8)" }}>
                {c.texto}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Imágenes para compartir */}
      <section className="py-20 sm:py-24">
        <motion.h2
          className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-12 px-6"
          style={{ color: "var(--fg)" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: curva }}
        >
          Compártela con tu familia
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto px-6">
          {imagenes.map((img, i) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={720}
              height={1280}
              loading="lazy"
              className="w-full h-auto rounded-3xl"
              style={{ boxShadow: "0 20px 60px rgba(13,13,43,0.35)", border: "1px solid rgba(212,175,55,0.3)" }}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: curva }}
              whileHover={{ scale: 1.02 }}
            />
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="py-20 text-center px-6" style={{ background: NOCHE }}>
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4 text-white">
          Empieza hoy tu momento de oración
        </h2>
        <p className="font-inter mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
          Gratis en Google Play.
        </p>
        <BotonPlayStore />
        <p className="font-inter text-sm mt-10" style={{ color: "rgba(255,255,255,0.55)" }}>
          Mi Devocionario no recopila datos personales.{" "}
          <Link href="/privacy/mi-devocionario" className="underline" style={{ color: DORADO }}>
            Política de privacidad
          </Link>
        </p>
      </section>

    </div>
  );
}
