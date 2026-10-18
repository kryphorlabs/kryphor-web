"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartPulse, PiggyBank, HardHat, Building2, ReceiptText, FileCheck, UserRound, Briefcase,
  Users, Clock, MapPin, MessageCircle, ListChecks, Plus, Check, ArrowRight,
} from "lucide-react";
import {
  SERVICIOS, DOCUMENTOS, PREGUNTAS, MUNICIPIOS_QUINDIO, enlaceWhatsapp, WHATSAPP_VISIBLE,
} from "@/data/gestiones";

const curva = [0.16, 1, 0.3, 1] as const;
const entrada = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function Titulo({ eyebrow, titulo, sub, claro = false, centro = false }: {
  eyebrow: string; titulo: string; sub?: string; claro?: boolean; centro?: boolean;
}) {
  return (
    <motion.div {...entrada} transition={{ duration: 0.6, ease: curva }}
      className={`max-w-2xl mb-14 ${centro ? "mx-auto text-center" : ""}`}>
      <p className={`font-inter font-semibold text-[13px] uppercase tracking-[0.16em] mb-4 ${claro ? "text-emerald-400" : "text-emerald-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-inter font-semibold tracking-[-0.03em] ${claro ? "text-white" : "text-slate-900"}`}
        style={{ fontSize: "clamp(30px, 3.8vw, 46px)", lineHeight: 1.1 }}>
        {titulo}
      </h2>
      {sub && (
        <p className={`font-inter text-lg mt-5 ${claro ? "text-slate-300" : "text-slate-600"}`} style={{ lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
    </motion.div>
  );
}

/* ── Para quién ─────────────────────────────────────────── */
export function ParaQuien() {
  const perfiles = [
    { icono: UserRound, titulo: "Independientes", texto: "Contratistas, comerciantes y trabajadores por cuenta propia que necesitan su seguridad social al día.", tono: "#DCFCE7", color: "#15803D" },
    { icono: Briefcase, titulo: "Empresas y empleadores", texto: "Afiliamos a tu empresa y a tus trabajadores, y manejamos ingresos, retiros y la planilla mensual.", tono: "#E0F2FE", color: "#0369A1" },
    { icono: Users, titulo: "Familias", texto: "Incluimos a tu cónyuge, hijos y demás beneficiarios para que toda tu familia quede cubierta.", tono: "#FEF3C7", color: "#B45309" },
  ];
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="kl-container max-w-7xl">
        <Titulo eyebrow="Para quién" titulo="Te acompañamos según tu caso" centro />
        <div className="grid md:grid-cols-3 gap-5">
          {perfiles.map((p, i) => (
            <motion.div key={p.titulo} {...entrada} transition={{ duration: 0.55, delay: i * 0.08, ease: curva }}
              className="group relative rounded-3xl p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ background: `linear-gradient(160deg, ${p.tono}, #FFFFFF 75%)`, border: "1px solid rgba(15,23,42,0.06)" }}>
              <span className="w-14 h-14 rounded-2xl grid place-items-center bg-white mb-7"
                style={{ color: p.color, boxShadow: "0 10px 24px -12px rgba(15,23,42,0.25)" }}>
                <p.icono size={26} strokeWidth={1.75} />
              </span>
              <h3 className="font-inter font-semibold text-xl text-slate-900 mb-3">{p.titulo}</h3>
              <p className="font-inter text-[15.5px] text-slate-600" style={{ lineHeight: 1.7 }}>{p.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Servicios ──────────────────────────────────────────── */
const estiloServicio: Record<string, { icono: typeof HeartPulse; color: string; tono: string }> = {
  eps: { icono: HeartPulse, color: "#E11D48", tono: "#FFE4E6" },
  pension: { icono: PiggyBank, color: "#7C3AED", tono: "#EDE9FE" },
  arl: { icono: HardHat, color: "#D97706", tono: "#FEF3C7" },
  caja: { icono: Building2, color: "#0284C7", tono: "#E0F2FE" },
  planilla: { icono: ReceiptText, color: "#15803D", tono: "#DCFCE7" },
  novedades: { icono: FileCheck, color: "#0F766E", tono: "#CCFBF1" },
};

export function Servicios() {
  return (
    <section id="servicios" className="py-24 sm:py-28 scroll-mt-20" style={{ background: "#F4F7F5" }}>
      <div className="kl-container max-w-7xl">
        <Titulo eyebrow="Servicios" titulo="Todo tu sistema de seguridad social, en un solo lugar"
          sub="Nos encargamos del trámite completo ante cada entidad y te mantenemos al tanto de cómo va." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map((s, i) => {
            const e = estiloServicio[s.id];
            return (
              <motion.article key={s.id} {...entrada} transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: curva }}
                className="group rounded-3xl bg-white p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
                <span className="w-13 h-13 rounded-2xl grid place-items-center mb-7 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: e.tono, color: e.color, width: 52, height: 52 }}>
                  <e.icono size={24} strokeWidth={1.75} />
                </span>
                <h3 className="font-inter font-semibold text-xl text-slate-900 mb-3">{s.titulo}</h3>
                <p className="font-inter text-[15.5px] text-slate-600 mb-7 flex-1" style={{ lineHeight: 1.7 }}>{s.texto}</p>
                <div className="flex flex-wrap gap-2">
                  {s.puntos.map(pt => (
                    <span key={pt} className="font-inter text-[13px] font-medium px-3 py-1 rounded-full"
                      style={{ background: e.tono, color: e.color }}>
                      {pt}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Por qué con nosotros ──────────────────────────────── */
export function PorQue() {
  const cifras = [
    { valor: "24 h", texto: "para radicar tu trámite con documentos completos" },
    { valor: "0", texto: "filas y oficinas: todo se hace a distancia" },
    { valor: "12", texto: "municipios del Quindío atendidos en línea" },
  ];
  const razones = [
    { icono: Clock, titulo: "Rápido de verdad", texto: "No esperas semanas: te decimos qué falta y lo resolvemos ese mismo día." },
    { icono: MessageCircle, titulo: "Una persona real", texto: "Hablas con nuestro equipo por WhatsApp, no con un conmutador." },
    { icono: ListChecks, titulo: "Sin sorpresas", texto: "Te damos el valor antes de empezar y te avisamos en cada paso." },
    { icono: MapPin, titulo: "Somos de aquí", texto: "Conocemos las EPS, ARL y cajas que operan en el Quindío." },
  ];
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32" style={{ background: "#0B1220" }}>
      <div className="absolute inset-0 -z-10" style={{
        background:
          "radial-gradient(50% 60% at 10% 0%, rgba(34,197,94,0.18), transparent 60%)," +
          "radial-gradient(40% 50% at 100% 100%, rgba(56,189,248,0.14), transparent 60%)",
      }} />
      <div className="kl-container max-w-7xl">
        <Titulo eyebrow="Por qué con nosotros" titulo="Sin vueltas, sin filas y sin letra pequeña." claro />

        <div className="grid sm:grid-cols-3 gap-px rounded-3xl overflow-hidden mb-14" style={{ background: "rgba(255,255,255,0.08)" }}>
          {cifras.map((c, i) => (
            <motion.div key={c.valor} {...entrada} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-8 py-10" style={{ background: "#0F172A" }}>
              <p className="font-inter font-semibold tracking-[-0.04em] text-white" style={{ fontSize: "clamp(44px, 5vw, 64px)", lineHeight: 1 }}>
                {c.valor}
              </p>
              <p className="font-inter text-[15px] text-slate-400 mt-3" style={{ lineHeight: 1.6 }}>{c.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {razones.map((r, i) => (
            <motion.div key={r.titulo} {...entrada} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <span className="w-11 h-11 rounded-xl grid place-items-center mb-6" style={{ background: "rgba(34,197,94,0.14)", color: "#4ADE80" }}>
                <r.icono size={20} strokeWidth={1.75} />
              </span>
              <h3 className="font-inter font-semibold text-lg text-white mb-2">{r.titulo}</h3>
              <p className="font-inter text-[15px] text-slate-400" style={{ lineHeight: 1.65 }}>{r.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Cómo funciona ─────────────────────────────────────── */
export function ComoFunciona() {
  const pasos = [
    { titulo: "Nos escribes", texto: "Por WhatsApp nos cuentas qué necesitas afiliar, trasladar o pagar." },
    { titulo: "Envías tus documentos", texto: "Te decimos exactamente qué mandar, y lo envías con fotos desde tu celular." },
    { titulo: "Radicamos y te avisamos", texto: "Hacemos el trámite ante la entidad y te confirmamos con el soporte." },
  ];
  return (
    <section id="como-funciona" className="py-24 sm:py-28 bg-white scroll-mt-20">
      <div className="kl-container max-w-7xl">
        <Titulo eyebrow="Cómo funciona" titulo="Tres pasos, desde tu celular" centro />
        <ol className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px"
            style={{ background: "repeating-linear-gradient(90deg, #86EFAC 0 8px, transparent 8px 16px)" }} />
          {pasos.map((p, i) => (
            <motion.li key={p.titulo} {...entrada} transition={{ duration: 0.55, delay: i * 0.12, ease: curva }}
              className="relative text-center px-4">
              <span className="relative z-10 mx-auto w-16 h-16 rounded-2xl grid place-items-center font-inter font-semibold text-2xl text-white mb-7"
                style={{ background: "linear-gradient(140deg, #22C55E, #15803D)", boxShadow: "0 16px 30px -12px rgba(22,163,74,0.7)" }}>
                {i + 1}
              </span>
              <h3 className="font-inter font-semibold text-xl text-slate-900 mb-3">{p.titulo}</h3>
              <p className="font-inter text-[15.5px] text-slate-600 max-w-xs mx-auto" style={{ lineHeight: 1.7 }}>{p.texto}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Documentos ────────────────────────────────────────── */
export function Documentos() {
  const columnas = [
    { titulo: "Si eres independiente", icono: UserRound, items: DOCUMENTOS.independiente, tono: "#DCFCE7", color: "#15803D" },
    { titulo: "Si eres empresa", icono: Briefcase, items: DOCUMENTOS.empresa, tono: "#E0F2FE", color: "#0369A1" },
  ];
  return (
    <section id="documentos" className="py-24 sm:py-28 scroll-mt-20" style={{ background: "linear-gradient(180deg, #FFFBF3, #FFFFFF)" }}>
      <div className="kl-container max-w-7xl grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <Titulo eyebrow="Documentos" titulo="Ten esto a la mano y vamos más rápido"
            sub="Con los documentos completos radicamos el mismo día. Si te falta algo, te decimos cómo conseguirlo." />
          <a href={enlaceWhatsapp("Hola, quiero confirmar qué documentos necesito para mi afiliación.")}
            target="_blank" rel="noopener noreferrer"
            className="-mt-6 inline-flex items-center gap-2 font-inter font-semibold text-emerald-700 hover:text-emerald-800">
            Confirmar mi caso por WhatsApp <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {columnas.map((c, i) => (
            <motion.div key={c.titulo} {...entrada} transition={{ duration: 0.55, delay: i * 0.1, ease: curva }}
              className="rounded-3xl bg-white p-8" style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 20px 50px -30px rgba(15,23,42,0.25)" }}>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-11 h-11 rounded-xl grid place-items-center" style={{ background: c.tono, color: c.color }}>
                  <c.icono size={21} strokeWidth={1.75} />
                </span>
                <h3 className="font-inter font-semibold text-lg text-slate-900">{c.titulo}</h3>
              </div>
              <ul className="space-y-4">
                {c.items.map(it => (
                  <li key={it} className="flex gap-3 font-inter text-[15px] text-slate-700" style={{ lineHeight: 1.6 }}>
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full grid place-items-center" style={{ background: c.tono, color: c.color }}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Cobertura ─────────────────────────────────────────── */
export function Cobertura() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="kl-container max-w-7xl flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="lg:w-[38%]">
          <p className="font-inter font-semibold text-[13px] uppercase tracking-[0.16em] text-emerald-700 mb-4">Cobertura</p>
          <h2 className="font-inter font-semibold tracking-[-0.03em] text-slate-900" style={{ fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.15 }}>
            Desde Circasia, para todo el Quindío
          </h2>
          <p className="font-inter text-slate-600 mt-4 text-[16px]" style={{ lineHeight: 1.7 }}>
            Atendemos en línea a cualquier municipio del departamento y del Eje Cafetero.
          </p>
        </div>
        <ul className="flex-1 flex flex-wrap gap-2.5">
          {MUNICIPIOS_QUINDIO.map((m, i) => (
            <motion.li key={m} {...entrada} transition={{ duration: 0.35, delay: i * 0.03 }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-inter text-[15px] ${
                m === "Circasia" ? "text-white font-semibold" : "text-slate-700 bg-slate-50"}`}
              style={m === "Circasia"
                ? { background: "#0F172A" }
                : { border: "1px solid rgba(15,23,42,0.08)" }}>
              <MapPin size={15} className={m === "Circasia" ? "text-emerald-400" : "text-slate-400"} />
              {m}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Preguntas frecuentes ──────────────────────────────── */
export function Preguntas() {
  const [abierta, setAbierta] = useState<string | null>(PREGUNTAS[0].id);
  return (
    <section id="preguntas" className="py-24 sm:py-28 scroll-mt-20" style={{ background: "#F4F7F5" }}>
      <div className="kl-container max-w-4xl">
        <Titulo eyebrow="Preguntas frecuentes" titulo="Lo que más nos preguntan" centro />
        <div className="space-y-3">
          {PREGUNTAS.map(p => {
            const activa = abierta === p.id;
            return (
              <div key={p.id} className="rounded-2xl bg-white overflow-hidden transition-shadow"
                style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: activa ? "0 18px 40px -24px rgba(15,23,42,0.3)" : "none" }}>
                <button onClick={() => setAbierta(activa ? null : p.id)} aria-expanded={activa}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-7 py-5 text-left">
                  <span className="font-inter font-semibold text-[16.5px] text-slate-900">{p.pregunta}</span>
                  <span className={`w-8 h-8 flex-shrink-0 rounded-full grid place-items-center transition-all duration-300 ${
                    activa ? "rotate-45 bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}>
                    <Plus size={17} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {activa && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: curva }}>
                      <p className="px-6 sm:px-7 pb-6 font-inter text-[15.5px] text-slate-600" style={{ lineHeight: 1.75 }}>
                        {p.respuesta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Llamado final ─────────────────────────────────────── */
export function Final() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="kl-container max-w-7xl">
        <motion.div {...entrada} transition={{ duration: 0.6, ease: curva }}
          className="relative isolate overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20 text-center"
          style={{ background: "linear-gradient(140deg, #14532D 0%, #0F172A 70%)" }}>
          <div className="absolute inset-0 -z-10 opacity-60" style={{
            background:
              "radial-gradient(40% 60% at 15% 20%, rgba(74,222,128,0.35), transparent 60%)," +
              "radial-gradient(35% 50% at 90% 90%, rgba(56,189,248,0.25), transparent 60%)",
          }} />
          <h2 className="font-inter font-semibold tracking-[-0.03em] text-white" style={{ fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.08 }}>
            Deja tu afiliación en buenas manos
          </h2>
          <p className="font-inter text-lg text-slate-300 max-w-xl mx-auto mt-5" style={{ lineHeight: 1.65 }}>
            Escríbenos hoy y te respondemos con los pasos exactos para tu caso.
          </p>
          <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 px-9 py-4.5 rounded-full font-inter font-semibold text-lg text-slate-900 bg-white transition-transform hover:scale-[1.03]"
            style={{ boxShadow: "0 18px 40px -16px rgba(0,0,0,0.5)" }}>
            <MessageCircle size={22} className="text-emerald-600" /> WhatsApp {WHATSAPP_VISIBLE}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
