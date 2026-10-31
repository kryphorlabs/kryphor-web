"use client";
import { motion } from "framer-motion";
import { Smartphone, Globe, Workflow, ArrowUpRight, MessageCircle, PenTool, Rocket } from "lucide-react";

const curva = [0.16, 1, 0.3, 1] as const;
const entrada = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

function Encabezado({ etiqueta, titulo, texto }: { etiqueta: string; titulo: string; texto?: string }) {
  return (
    <motion.div {...entrada} transition={{ duration: 0.6, ease: curva }} className="max-w-2xl mb-14">
      <p className="font-poppins font-semibold text-base tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
        {etiqueta}
      </p>
      <h2 className="font-poppins font-bold leading-tight mb-5" style={{ fontSize: "clamp(30px, 4.2vw, 52px)", color: "var(--fg)" }}>
        {titulo}
      </h2>
      {texto && (
        <p className="font-inter text-lg" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>{texto}</p>
      )}
    </motion.div>
  );
}

/* ── Qué hacemos ─────────────────────────────────────────── */
const servicios = [
  {
    icono: Smartphone,
    titulo: "Aplicaciones móviles",
    texto: "Apps para Android pensadas para que cualquier persona las use sin enredos, desde el primer día.",
    color: "#7C7FE0",
  },
  {
    icono: Globe,
    titulo: "Sistemas y páginas web",
    texto: "Plataformas a la medida de tu negocio y páginas web rápidas que se ven bien en celular, tableta y computador.",
    color: "#4FA8D8",
  },
  {
    icono: Workflow,
    titulo: "Automatización de procesos",
    texto: "Convertimos tareas repetitivas en procesos automáticos para que tu equipo dedique el tiempo a lo importante.",
    color: "#22C55E",
  },
];

export function ServiciosLabs() {
  return (
    <section className="py-28" style={{ background: "var(--bg-2)" }}>
      <div className="kl-container">
        <Encabezado
          etiqueta="Qué hacemos"
          titulo="Tecnología a la medida de tu idea."
          texto="Si tienes un negocio, un proceso o una idea, la convertimos en software que funciona."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <motion.div key={s.titulo} {...entrada} transition={{ duration: 0.55, delay: i * 0.08, ease: curva }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-8" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${s.color}14`, border: `1px solid ${s.color}30` }}>
                <s.icono size={22} style={{ color: s.color }} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3" style={{ color: "var(--fg)" }}>{s.titulo}</h3>
              <p className="font-inter text-[15px]" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>{s.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trabajos reales ─────────────────────────────────────── */
const casos = [
  {
    cliente: "Anturi Multiservicios",
    tipo: "Plataforma de gestión",
    texto: "Sistema para gestionar afiliaciones a seguridad social, planillas y liquidaciones, con panel administrativo para el equipo.",
    puntos: ["Panel administrativo", "Liquidaciones", "En producción"],
    url: "https://www.anturimultiservicios.com",
    sitio: "anturimultiservicios.com",
    color: "#4F46E5",
  },
  {
    cliente: "TecniHogar del Eje",
    tipo: "Sitio web y panel",
    texto: "Página de servicio técnico de electrodomésticos a domicilio, con agenda de citas y un panel para que el dueño lo administre desde su celular.",
    puntos: ["Agenda de servicios", "Administrable desde el celular", "En producción"],
    url: "https://tecnihogardeleje.com.co",
    sitio: "tecnihogardeleje.com.co",
    color: "#0284C7",
  },
];

export function CasosLabs() {
  return (
    <section className="py-28" style={{ background: "var(--bg)" }}>
      <div className="kl-container">
        <Encabezado
          etiqueta="Trabajos reales"
          titulo="Lo que ya está funcionando."
          texto="Proyectos construidos para negocios reales, en uso todos los días."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casos.map((c, i) => (
            <motion.a key={c.cliente} href={c.url} target="_blank" rel="noopener noreferrer"
              {...entrada} transition={{ duration: 0.6, delay: i * 0.1, ease: curva }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl p-9 flex flex-col"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: c.color }}>
                {c.tipo}
              </span>
              <h3 className="font-poppins font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--fg)" }}>
                {c.cliente}
              </h3>
              <p className="font-inter text-[15px] mb-7" style={{ color: "var(--fg-muted)", lineHeight: 1.8 }}>{c.texto}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {c.puntos.map(p => (
                  <span key={p} className="font-inter text-xs px-3 py-1.5 rounded-lg" style={{ background: `${c.color}12`, color: c.color }}>
                    {p}
                  </span>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 font-poppins font-semibold text-sm transition-colors"
                style={{ color: "var(--fg)" }}>
                {c.sitio} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Cómo trabajamos ─────────────────────────────────────── */
const pasos = [
  { icono: MessageCircle, titulo: "Nos cuentas tu idea", texto: "Una conversación sin compromiso para entender qué necesitas y para qué." },
  { icono: PenTool, titulo: "Te proponemos el camino", texto: "Te explicamos en palabras sencillas qué haremos, cuánto tarda y cuánto cuesta." },
  { icono: Rocket, titulo: "Lo construimos y te acompañamos", texto: "Ves avances reales durante el proceso y seguimos contigo después de publicarlo." },
];

export function ProcesoLabs() {
  return (
    <section className="py-28" style={{ background: "var(--bg-2)" }}>
      <div className="kl-container">
        <Encabezado etiqueta="Cómo trabajamos" titulo="Simple, claro y contigo." />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pasos.map((p, i) => (
            <motion.li key={p.titulo} {...entrada} transition={{ duration: 0.55, delay: i * 0.1, ease: curva }}
              className="rounded-2xl p-8 relative" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
              <span className="absolute top-6 right-7 font-poppins font-bold text-5xl" style={{ color: "var(--border)" }}>
                {i + 1}
              </span>
              <p.icono size={24} style={{ color: "var(--accent)" }} className="mb-6" />
              <h3 className="font-poppins font-semibold text-lg mb-3" style={{ color: "var(--fg)" }}>{p.titulo}</h3>
              <p className="font-inter text-[15px]" style={{ color: "var(--fg-muted)", lineHeight: 1.75 }}>{p.texto}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
