"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Monitor, Cpu, ShieldCheck, HeartPulse, Building2, Clapperboard } from "lucide-react";
import { useApp } from "@/lib/providers";

type Icono = typeof Code;

interface Empresa {
  href: string;
  nombre: string;
  linea: string;
  desc: string;
  chips: string[];
  cta: string;
  iconos: Icono[];
  fondo: string;
  brillo: string;
}

const copy = {
  es: {
    eyebrow: "Elige con quién hablar",
    labs: {
      nombre: "Kryphor Labs",
      linea: "Tecnología",
      desc: "Desarrollo de Software y Plataformas como KryphorConnect.",
      chips: ["Software a la medida", "KryphorConnect", "Apps y plataformas"],
      cta: "Conocer Kryphor Labs",
    },
    gestiones: {
      nombre: "Kryphor Gestiones",
      linea: "Gestión",
      desc: "Afiliaciones a ARL, EPS, Caja de Compensación y trámites en 24h.",
      chips: ["ARL", "EPS", "Caja de Compensación"],
      cta: "Ver servicios de afiliación",
    },
    media: "Kryphor Media",
    mediaDesc: "Contenido y medios para la región.",
    pronto: "Próximamente",
  },
  en: {
    eyebrow: "Choose who to talk to",
    labs: {
      nombre: "Kryphor Labs",
      linea: "Technology",
      desc: "Software development and platforms such as KryphorConnect.",
      chips: ["Custom software", "KryphorConnect", "Apps & platforms"],
      cta: "Explore Kryphor Labs",
    },
    gestiones: {
      nombre: "Kryphor Gestiones",
      linea: "Management",
      desc: "Enrollment in ARL, EPS, Family Compensation Fund and paperwork within 24h.",
      chips: ["ARL", "EPS", "Compensation Fund"],
      cta: "See enrollment services",
    },
    media: "Kryphor Media",
    mediaDesc: "Content and media for the region.",
    pronto: "Coming soon",
  },
};

export default function GrupoEmpresasSection() {
  const { lang } = useApp();
  const c = copy[lang];

  const empresas: Empresa[] = [
    {
      href: "/labs",
      ...c.labs,
      iconos: [Code, Monitor, Cpu],
      fondo: "linear-gradient(145deg, var(--labs) 0%, var(--labs-hondo) 100%)",
      brillo: "rgba(165,180,252,0.35)",
    },
    {
      href: "/gestiones",
      ...c.gestiones,
      iconos: [ShieldCheck, HeartPulse, Building2],
      fondo: "linear-gradient(145deg, var(--gestiones-2) 0%, var(--gestiones) 100%)",
      brillo: "rgba(34,197,94,0.22)",
    },
  ];

  return (
    <section className="pb-28 sm:pb-36" style={{ background: "var(--bg)" }}>
      <div className="kl-container">
        <p className="font-inter font-medium text-sm text-center mb-8" style={{ color: "var(--fg-muted)" }}>
          {c.eyebrow}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {empresas.map((e, i) => (
            <motion.a
              key={e.href}
              href={e.href}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col min-h-[420px] text-white transition-transform duration-300 hover:-translate-y-1"
              style={{ background: e.fondo, boxShadow: "0 24px 60px -24px rgba(15,23,42,0.45)" }}
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${e.brillo}, transparent 70%)` }} />

              <div className="relative flex items-center gap-3 mb-10">
                {e.iconos.map((Icon, k) => (
                  <span key={k} className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)" }}>
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                ))}
              </div>

              <p className="relative font-inter font-medium text-sm uppercase tracking-[0.14em] mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                {e.linea}
              </p>
              <h2 className="relative font-inter font-semibold tracking-[-0.03em] mb-4" style={{ fontSize: "clamp(30px, 3.4vw, 42px)" }}>
                {e.nombre}
              </h2>
              <p className="relative font-inter text-lg max-w-md mb-8" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                {e.desc}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-10">
                {e.chips.map(ch => (
                  <span key={ch} className="font-inter text-sm px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.9)" }}>
                    {ch}
                  </span>
                ))}
              </div>

              <span className="relative mt-auto inline-flex items-center gap-2 font-inter font-semibold text-base">
                {e.cta}
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-6 rounded-2xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5"
          style={{ background: "var(--bg-2)", border: "1px dashed rgba(15,23,42,0.14)" }}
        >
          <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}>
            <Clapperboard size={18} strokeWidth={1.75} />
          </span>
          <p className="font-inter text-base" style={{ color: "var(--fg-muted)" }}>
            <span className="font-semibold" style={{ color: "var(--fg)" }}>{c.media}</span> — {c.mediaDesc}
          </p>
          <span className="sm:ml-auto font-inter text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}>
            {c.pronto}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
