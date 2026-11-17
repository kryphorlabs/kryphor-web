"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Gem, Sprout, Type, Globe, Smile, Download, Heart } from "lucide-react";

const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.marumente.app";
const URL_APOYO = "https://www.paypal.com/ncp/payment/2TQ9CQ5XBYJBC";
const RUBI = "#C8174F";
const RUBI_OSCURO = "#8E0F37";
const CREMA = "linear-gradient(160deg, #FFF6EC 0%, #FDEFE6 55%, #F9D5E0 100%)";
const curva = [0.16, 1, 0.3, 1] as const;

const caracteristicas = [
  { icono: Brain, titulo: "13 juegos para la mente", texto: "Parejas, sopa de letras, cálculo, melodías, diferencias, sombras, rompecabezas, carritos y más." },
  { icono: Sprout, titulo: "Tu ejercicio de cada día", texto: "Tres juegos cortos, unos 10 minutos, y una planta que crece contigo hasta florecer." },
  { icono: Type, titulo: "Letra grande y sin prisa", texto: "Botones amplios, colores claros y nada de relojes que presionen." },
  { icono: Smile, titulo: "Nunca pierdes", texto: "Cada partida termina con una felicitación y la dificultad se ajusta a tu ritmo." },
  { icono: Globe, titulo: "13 idiomas", texto: "Español, inglés, portugués, francés, alemán, italiano, japonés, chino y más." },
  { icono: Gem, titulo: "Gratis y sin cuentas", texto: "Tu progreso se guarda solo en tu celular. Nada de registros ni contraseñas." },
];

const capturas = [
  { src: "/promo/maru/inicio.png", texto: "Tu ejercicio de hoy" },
  { src: "/promo/maru/parejas.png", texto: "Parejas" },
  { src: "/promo/maru/botellas.png", texto: "Botellas de colores" },
  { src: "/promo/maru/carritos.png", texto: "Carritos" },
  { src: "/promo/maru/triangulos.png", texto: "Triángulos" },
  { src: "/promo/maru/planta.png", texto: "Tu planta" },
];

function BotonPlayStore() {
  return (
    <motion.a
      href={URL_PLAY_STORE}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full font-poppins font-semibold text-[15px] sm:text-base whitespace-nowrap text-white"
      style={{ background: `linear-gradient(135deg, #E9447A, ${RUBI} 50%, ${RUBI_OSCURO})`, boxShadow: "0 8px 32px rgba(200,23,79,0.35)" }}
    >
      <Download size={18} /> Descargar en Google Play
    </motion.a>
  );
}

// Marco de celular para las capturas reales de la app
function Celular({ src, alt, ancho }: { src: string; alt: string; ancho: number }) {
  return (
    <div className="rounded-[2rem] p-2 flex-shrink-0"
      style={{ width: ancho, background: "#2B1E16", boxShadow: "0 24px 60px rgba(43,30,22,0.35)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={360} height={720} loading="lazy" className="w-full h-auto rounded-[1.6rem]" />
    </div>
  );
}

export default function ContenidoMaru() {
  return (
    <div className="min-h-screen pt-[84px]" style={{ background: "var(--bg)" }}>

      {/* Portada en los colores de la app */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24" style={{ background: CREMA }}>
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,23,79,0.12) 0%, transparent 65%)" }} />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: curva }}
          >
            <motion.img
              src="/logos/maru-icono.png"
              alt="Icono de Maru"
              width={112}
              height={112}
              className="rounded-[1.75rem] mb-7 mx-auto lg:mx-0"
              style={{ boxShadow: "0 16px 48px rgba(142,15,55,0.25)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: curva }}
            />
            <p className="font-poppins font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: RUBI }}>
              Kryphor Labs
            </p>
            <h1 className="font-poppins font-bold text-4xl sm:text-6xl mb-4" style={{ color: RUBI_OSCURO }}>
              Maru
            </h1>
            <p className="font-inter text-lg sm:text-xl mb-8" style={{ color: "#4A3528" }}>
              Juegos suaves para ejercitar la mente cada día.
            </p>
            <BotonPlayStore />
            <p className="font-inter text-sm mt-6" style={{ color: "#6B5545" }}>
              Gratis · 8 juegos · 13 idiomas · Letra grande
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Celular src="/promo/maru/inicio.png" alt="Pantalla principal de Maru" ancho={250} />
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
                style={{ background: "rgba(200,23,79,0.10)", border: "1px solid rgba(200,23,79,0.25)" }}>
                <c.icono size={20} style={{ color: RUBI }} />
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
      <section className="py-20 sm:py-24" style={{ background: CREMA }}>
        <motion.h2
          className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-3 px-6"
          style={{ color: RUBI_OSCURO }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: curva }}
        >
          Así se ve por dentro
        </motion.h2>
        <p className="font-inter text-center mb-12 px-6" style={{ color: "#6B5545" }}>
          Pensada para que cualquier persona juegue tranquila, a su ritmo.
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
              <Celular src={c.src} alt={c.texto} ancho={180} />
              <figcaption className="font-inter text-sm text-center" style={{ color: "#4A3528" }}>
                {c.texto}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Imagen para compartir */}
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
        <motion.img
          src="/promo/maru-og.png"
          alt="Maru: juegos suaves para ejercitar la mente cada día. 13 juegos, 13 idiomas, letra grande"
          width={1024}
          height={500}
          loading="lazy"
          className="w-full max-w-3xl mx-auto h-auto rounded-3xl block px-6 sm:px-0"
          style={{ boxShadow: "0 20px 60px rgba(142,15,55,0.2)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: curva }}
        />
      </section>

      {/* Apoyo voluntario (fuera de la app: dentro de la app se apoya con Google Play) */}
      <section className="py-20 sm:py-24 text-center px-6">
        <div className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-10">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: "rgba(200,23,79,0.10)", border: "1px solid rgba(200,23,79,0.25)" }}>
            <Heart size={22} style={{ color: RUBI }} />
          </div>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl mb-3" style={{ color: "var(--fg)" }}>
            Apoya a Maru
          </h2>
          <p className="font-inter leading-relaxed mb-7" style={{ color: "var(--fg-muted)" }}>
            Maru es gratis y lo seguirá siendo. Si quieres ayudar a que crezca con más juegos e idiomas,
            puedes hacer un aporte voluntario del monto que tú elijas.
          </p>
          <motion.a
            href={URL_APOYO}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-poppins font-semibold text-white"
            style={{ background: "#0070BA", boxShadow: "0 8px 28px rgba(0,112,186,0.3)" }}
          >
            <Heart size={18} /> Aportar con PayPal
          </motion.a>
          <p className="font-inter text-xs mt-5" style={{ color: "var(--fg-muted)" }}>
            El pago lo procesa PayPal a nombre de Kryphor Labs. Los juegos son iguales con o sin aporte.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="py-20 text-center px-6" style={{ background: CREMA }}>
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4" style={{ color: RUBI_OSCURO }}>
          Un ratito para la mente, cada día
        </h2>
        <p className="font-inter mb-8" style={{ color: "#6B5545" }}>
          Gratis en Google Play.
        </p>
        <BotonPlayStore />
        <p className="font-inter text-sm mt-10" style={{ color: "#6B5545" }}>
          Maru no pide cuentas y guarda tu progreso solo en tu celular.{" "}
          <Link href="/privacy/maru" className="underline" style={{ color: RUBI }}>
            Política de privacidad
          </Link>
        </p>
      </section>

    </div>
  );
}
