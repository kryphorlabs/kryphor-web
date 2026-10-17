"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useApp } from "@/lib/providers";

const copy = {
  es: {
    badge: "Grupo empresarial · Circasia, Quindío",
    marca: "Kryphor",
    titulo: "Grupo de Soluciones Integrales.",
    sub: "Tecnología, Gestión y Medios para el Eje Cafetero.",
  },
  en: {
    badge: "Business group · Circasia, Quindío",
    marca: "Kryphor",
    titulo: "Integrated Solutions Group.",
    sub: "Technology, Management and Media for Colombia's Coffee Region.",
  },
};

export default function GrupoHeroSection() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20" style={{ background: "var(--bg)" }}>
      <div className="grupo-grid absolute inset-0 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,70,229,0.08), transparent 70%)" }} />

      <div className="relative z-10 kl-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-10 text-sm font-inter font-medium"
          style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg-muted)", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
        >
          <MapPin size={14} style={{ color: "var(--labs)" }} />
          {c.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-inter font-semibold tracking-[-0.04em] leading-[1.02]"
          style={{ fontSize: "clamp(44px, 8vw, 104px)", color: "var(--gestiones)" }}
        >
          {c.marca}
          <span className="block mt-2 tracking-[-0.03em]"
            style={{
              fontSize: "clamp(26px, 4.2vw, 56px)",
              background: "linear-gradient(180deg, #0F172A 0%, #475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            {c.titulo}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter max-w-xl mt-8"
          style={{ fontSize: "clamp(17px, 1.8vw, 21px)", color: "var(--fg-muted)", lineHeight: 1.6 }}
        >
          {c.sub}
        </motion.p>
      </div>
    </section>
  );
}
