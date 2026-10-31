"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, Check, BookOpen } from "lucide-react";
import { MarcaGestiones } from "@/components/gestiones/Logo";
import { GESTIONES_URL } from "@/data/gestiones";

const curva = [0.16, 1, 0.3, 1] as const;

// Vista previa de Labs: el plan de oración de hoy en Mi Devocionario.
function VistaLabs() {
  const plan = [
    { nombre: "Santo Rosario", detalle: "Misterios gozosos", progreso: 40 },
    { nombre: "Novena a San Judas", detalle: "Día 3 de 9", progreso: 33 },
    { nombre: "Versículo del día", detalle: "Juan 1, 29", progreso: 100 },
  ];
  return (
    <div className="rounded-2xl p-4 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-inter text-[12px] font-semibold text-white/90">Mi Devocionario · Hoy</span>
        <span className="inline-flex items-center gap-1 font-inter text-[11px]" style={{ color: "#F5D97A" }}><BookOpen size={12} /> plan de oración</span>
      </div>
      <ul className="space-y-1.5">
        {plan.map((p, i) => (
          <li key={p.nombre} className="rounded-lg px-2.5 py-1.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-inter text-[12px] text-white/90">{p.nombre}</span>
              <span className="font-inter text-[11px] text-white/60">{p.detalle}</span>
            </div>
            <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
              <motion.div className="h-1 rounded-full" style={{ background: "#F5D97A" }}
                initial={{ width: 0 }} animate={{ width: `${p.progreso}%` }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: curva }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Vista previa de Gestiones: lista de afiliaciones listas.
function VistaGestiones() {
  const items = ["EPS", "Pensión", "ARL", "Caja de Compensación"];
  return (
    <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="flex items-center gap-2.5 mb-3">
        <MarcaGestiones tam={26} />
        <span className="font-inter text-[12px] font-semibold text-white/90">Afiliación de Laura M.</span>
      </div>
      <ul className="grid sm:grid-cols-2 gap-1.5">
        {items.map((it, i) => (
          <motion.li key={it} className="flex items-center justify-between rounded-lg px-2.5 py-1.5" style={{ background: "rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: curva }}>
            <span className="font-inter text-[12px] text-white/85">{it}</span>
            <span className="w-5 h-5 rounded-full grid place-items-center" style={{ background: "#22C55E" }}>
              <Check size={12} strokeWidth={3} className="text-white" />
            </span>
          </motion.li>
        ))}
      </ul>
      <p className="mt-3 font-inter text-[11px] text-emerald-300">Radicada el mismo día</p>
    </div>
  );
}

const empresas = [
  {
    href: "/labs",
    linea: "Tecnología",
    nombre: "Kryphor Labs",
    desc: "Desarrollo de software y aplicaciones como Mi Devocionario.",
    chips: ["Software a la medida", "Mi Devocionario", "Apps y plataformas"],
    cta: "Conocer Kryphor Labs",
    fondo: "linear-gradient(150deg, #5B54F0 0%, #4F46E5 40%, #3730A3 100%)",
    brillo: "rgba(199,210,254,0.45)",
    Vista: VistaLabs,
  },
  {
    href: GESTIONES_URL,
    linea: "Gestión",
    nombre: "Kryphor Gestiones",
    desc: "Afiliaciones a ARL, EPS, Caja de Compensación y trámites en 24h.",
    chips: ["EPS", "Pensión", "ARL", "Caja"],
    cta: "Ver servicios de afiliación",
    fondo: "linear-gradient(150deg, #1E293B 0%, #0F172A 55%, #0B1220 100%)",
    brillo: "rgba(34,197,94,0.30)",
    Vista: VistaGestiones,
  },
];

export default function GrupoEmpresasSection() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="kl-container">
        <p className="font-inter font-medium text-sm text-center mb-8 text-slate-500">Elige con quién hablar</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {empresas.map((e, i) => (
            <motion.a
              key={e.nombre}
              href={e.href}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: curva }}
              className="group relative isolate overflow-hidden rounded-[1.75rem] p-8 sm:p-10 flex flex-col text-white transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: e.fondo, boxShadow: "0 30px 70px -30px rgba(15,23,42,0.55)" }}
            >
              <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full -z-10 transition-opacity duration-500 opacity-70 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${e.brillo}, transparent 70%)` }} />

              <div className="flex flex-col flex-1">
                <p className="font-inter font-semibold text-[12px] uppercase tracking-[0.16em] text-white/60 mb-3">{e.linea}</p>
                <h2 className="font-inter font-semibold tracking-[-0.03em] mb-4" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.05 }}>
                  {e.nombre}
                </h2>
                <p className="font-inter text-[16px] text-white/80 mb-7" style={{ lineHeight: 1.6 }}>{e.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {e.chips.map(ch => (
                    <span key={ch} className="font-inter text-[13px] px-3 py-1 rounded-full text-white/90"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}>
                      {ch}
                    </span>
                  ))}
                </div>
                <div className="mb-8"><e.Vista /></div>
                <span className="mt-auto inline-flex items-center gap-2 font-inter font-semibold text-[15px]">
                  {e.cta}
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-6 rounded-2xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 bg-white/70 backdrop-blur"
          style={{ border: "1px dashed rgba(15,23,42,0.16)" }}
        >
          <span className="w-10 h-10 rounded-xl grid place-items-center flex-shrink-0 bg-amber-50 text-amber-600">
            <Clapperboard size={18} strokeWidth={1.75} />
          </span>
          <p className="font-inter text-base text-slate-600">
            <span className="font-semibold text-slate-900">Kryphor Media</span> — Contenido y medios para la región.
          </p>
          <span className="sm:ml-auto font-inter text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
            Próximamente
          </span>
        </motion.div>
      </div>
    </section>
  );
}
