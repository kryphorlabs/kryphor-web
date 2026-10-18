"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const curva = [0.16, 1, 0.3, 1] as const;

export default function GrupoHeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-14 sm:pt-48 sm:pb-16">
      <div className="absolute inset-0 -z-20" style={{ background: "linear-gradient(180deg, #F5F6FF 0%, #FFFFFF 85%)" }} />
      <div className="aurora -z-10" aria-hidden="true"><span /><span /><span /></div>
      <div className="grupo-grid absolute inset-0 -z-10" />

      <div className="kl-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-9 text-sm font-inter font-medium text-slate-600 bg-white/70 backdrop-blur"
          style={{ border: "1px solid rgba(15,23,42,0.08)" }}
        >
          <MapPin size={14} className="text-indigo-600" />
          Grupo empresarial · Armenia, Quindío
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: curva }}
          className="font-inter font-semibold tracking-[-0.045em] text-slate-900"
          style={{ fontSize: "clamp(52px, 9vw, 120px)", lineHeight: 0.95 }}
        >
          Kryphor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: curva }}
          className="font-inter font-semibold tracking-[-0.03em] mt-4"
          style={{
            fontSize: "clamp(26px, 4vw, 52px)", lineHeight: 1.1,
            background: "linear-gradient(90deg, #4F46E5 0%, #0F172A 50%, #15803D 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          Grupo de Soluciones Integrales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="font-inter text-slate-600 max-w-xl mt-7"
          style={{ fontSize: "clamp(17px, 1.7vw, 21px)", lineHeight: 1.6 }}
        >
          Tecnología, Gestión y Medios para el Eje Cafetero.
        </motion.p>
      </div>
    </section>
  );
}
