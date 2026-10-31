"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Heart, CalendarCheck, WifiOff, Globe, Bell, Download } from "lucide-react";

const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.devocionario.app";
const DORADO = "#D4AF37";
const curva = [0.16, 1, 0.3, 1] as const;

const caracteristicas = [
  { icono: BookOpen, titulo: "Santo Rosario completo", texto: "Los misterios de cada día, paso a paso, con las oraciones en pantalla." },
  { icono: Heart, titulo: "Más de 20 novenas", texto: "Cada día de la novena guiado, y la app recuerda en qué día vas." },
  { icono: CalendarCheck, titulo: "Plan de oración", texto: "Arma tu propio plan con varias devociones y sigue tu progreso." },
  { icono: WifiOff, titulo: "Funciona sin internet", texto: "Reza donde estés, sin depender de la señal." },
  { icono: Globe, titulo: "17 idiomas", texto: "Español, inglés, portugués, latín, francés, italiano y más." },
  { icono: Bell, titulo: "Recordatorio diario", texto: "Un aviso suave a la hora que elijas para tu momento de oración." },
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
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-poppins font-semibold text-base text-white"
      style={{ background: `linear-gradient(135deg, ${DORADO}, #B8860B)`, boxShadow: "0 8px 32px rgba(212,175,55,0.25)" }}
    >
      <Download size={18} /> Descargar en Google Play
    </motion.a>
  );
}

export default function ContenidoMiDevocionario() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-16 text-center sm:text-left">
          <motion.img
            src="/logos/mi-devocionario-icono.png"
            alt="Icono de Mi Devocionario"
            width={128}
            height={128}
            className="rounded-3xl flex-shrink-0"
            style={{ boxShadow: "0 12px 48px rgba(212,175,55,0.25)" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: curva }}
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: curva }}
          >
            <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}>
              Kryphor Labs
            </p>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-3" style={{ color: "var(--fg)" }}>
              Mi Devocionario
            </h1>
            <p className="font-inter text-lg mb-7" style={{ color: "var(--fg-muted)" }}>
              Tu compañía diaria de oración católica.
            </p>
            <BotonPlayStore />
          </motion.div>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
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

        {/* Imágenes */}
        <motion.h2
          className="font-poppins font-bold text-3xl text-center mb-10"
          style={{ color: "var(--fg)" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: curva }}
        >
          Compártela con tu familia
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {imagenes.map((img, i) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={720}
              height={1280}
              loading="lazy"
              className="w-full h-auto rounded-3xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.35)", border: "1px solid rgba(212,175,55,0.25)" }}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: curva }}
              whileHover={{ scale: 1.02 }}
            />
          ))}
        </div>

        <div className="text-center mb-10">
          <BotonPlayStore />
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
