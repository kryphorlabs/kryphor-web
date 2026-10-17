"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    eyebrow: "Un solo grupo",
    titulo: "Cerca de la gente, serios con cada proceso.",
    sub: "Desde Armenia y Circasia atendemos empresas, independientes y familias del Eje Cafetero con el mismo cuidado, sea un trámite de afiliación o una plataforma de software.",
    items: [
      { titulo: "Somos de aquí", texto: "Equipo del Quindío que conoce la región, sus empresas y sus trámites." },
      { titulo: "Respuesta rápida", texto: "Tiempos claros desde el primer contacto, sin filas ni vueltas innecesarias." },
      { titulo: "Respaldo real", texto: "Procesos ordenados y tecnología propia detrás de cada servicio que ofrecemos." },
    ],
  },
  en: {
    eyebrow: "One group",
    titulo: "Close to people, serious about every process.",
    sub: "From Armenia and Circasia we serve businesses, freelancers and families in the Coffee Region with the same care, whether it's an enrollment or a software platform.",
    items: [
      { titulo: "We are local", texto: "A team from Quindío that knows the region, its businesses and its paperwork." },
      { titulo: "Fast response", texto: "Clear timelines from the first contact, no lines and no unnecessary back-and-forth." },
      { titulo: "Real backing", texto: "Organized processes and our own technology behind every service we offer." },
    ],
  },
};

const iconos = [MapPin, Clock, ShieldCheck];

export default function GrupoValoresSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="py-28 sm:py-36 border-t" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
      <div className="kl-container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-inter font-medium text-sm uppercase tracking-[0.14em] mb-4" style={{ color: "var(--labs)" }}>
            {c.eyebrow}
          </p>
          <h2 className="font-inter font-semibold tracking-[-0.03em] mb-5" style={{ fontSize: "clamp(30px, 4vw, 48px)", color: "var(--gestiones)", lineHeight: 1.1 }}>
            {c.titulo}
          </h2>
          <p className="font-inter text-lg" style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
            {c.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.items.map((it, i) => {
            const Icon = iconos[i];
            return (
              <motion.div
                key={it.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-7 sm:p-8"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(79,70,229,0.08)", color: "var(--labs)" }}>
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-inter font-semibold text-lg mb-2" style={{ color: "var(--gestiones)" }}>
                  {it.titulo}
                </h3>
                <p className="font-inter text-base" style={{ color: "var(--fg-muted)", lineHeight: 1.65 }}>
                  {it.texto}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
