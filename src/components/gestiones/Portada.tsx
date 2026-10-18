"use client";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check, CheckCheck, Paperclip, ShieldCheck } from "lucide-react";
import { MarcaGestiones } from "./Logo";
import { enlaceWhatsapp } from "@/data/gestiones";

const curva = [0.16, 1, 0.3, 1] as const;

function Celular() {
  const burbujas = [
    { de: "persona", texto: "Hola 👋 soy independiente y necesito afiliarme a EPS y ARL", hora: "9:41" },
    { de: "equipo", texto: "¡Hola! Claro que sí. Envíanos una foto de tu cédula y te contamos el paso a paso.", hora: "9:42" },
    { de: "persona", adjunto: true, texto: "cedula.jpg", hora: "9:44" },
    { de: "equipo", texto: "Listo ✅ Tu afiliación quedó radicada. Te avisamos apenas la confirmen.", hora: "10:20" },
  ];
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]">
      <div className="rounded-[2.6rem] p-2.5"
        style={{ background: "linear-gradient(160deg, #1E293B, #0B1220)", boxShadow: "0 50px 100px -30px rgba(15,23,42,0.55)" }}>
        <div className="rounded-[2.1rem] overflow-hidden" style={{ background: "#ECE5DA" }}>
          <div className="flex items-center gap-3 px-4 pt-7 pb-3" style={{ background: "#0F3D2E" }}>
            <MarcaGestiones tam={34} />
            <div className="leading-tight">
              <p className="font-inter font-semibold text-[14px] text-white">Kryphor Gestiones</p>
              <p className="font-inter text-[11px] text-emerald-200">en línea</p>
            </div>
          </div>
          <div className="px-3 py-4 space-y-2.5 min-h-[360px]">
            {burbujas.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.45, ease: curva }}
                className={`flex ${b.de === "persona" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[82%] px-3 py-2 rounded-xl font-inter text-[12.5px] leading-snug text-slate-800 ${
                  b.de === "persona" ? "rounded-tr-sm" : "rounded-tl-sm"}`}
                  style={{ background: b.de === "persona" ? "#D9FDD3" : "#FFFFFF", boxShadow: "0 1px 1px rgba(0,0,0,0.06)" }}>
                  {b.adjunto ? (
                    <span className="inline-flex items-center gap-1.5 text-slate-600"><Paperclip size={13} /> {b.texto}</span>
                  ) : b.texto}
                  <span className="float-right ml-2 mt-1.5 inline-flex items-center gap-0.5 text-[10px] text-slate-500">
                    {b.hora}{b.de === "persona" && <CheckCheck size={13} className="text-sky-500" />}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 2.6, ease: curva }}
        className="absolute -right-6 sm:-right-16 bottom-16 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
        style={{ boxShadow: "0 24px 50px -18px rgba(15,23,42,0.4), 0 0 0 1px rgba(15,23,42,0.05)" }}
      >
        <span className="w-10 h-10 rounded-xl grid place-items-center text-white" style={{ background: "var(--confianza)" }}>
          <Check size={20} strokeWidth={3} />
        </span>
        <span className="leading-tight">
          <span className="block font-inter font-semibold text-[13px] text-slate-900">Afiliación radicada</span>
          <span className="block font-inter text-[12px] text-slate-500">EPS + ARL · mismo día</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: curva }}
        className="absolute -left-6 sm:-left-14 top-24 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white"
        style={{ boxShadow: "0 20px 40px -18px rgba(15,23,42,0.35), 0 0 0 1px rgba(15,23,42,0.05)" }}
      >
        <ShieldCheck size={18} className="text-emerald-600" />
        <span className="font-inter font-medium text-[12.5px] text-slate-700">Datos protegidos</span>
      </motion.div>
    </div>
  );
}

export default function Portada() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10" style={{
        background:
          "radial-gradient(60% 55% at 12% 10%, rgba(34,197,94,0.16), transparent 60%)," +
          "radial-gradient(50% 50% at 92% 20%, rgba(56,189,248,0.16), transparent 60%)," +
          "radial-gradient(60% 50% at 70% 100%, rgba(15,23,42,0.07), transparent 70%)," +
          "linear-gradient(180deg, #F3FAF6 0%, #FFFFFF 70%)",
      }} />
      <div className="grupo-grid absolute inset-0 -z-10 opacity-70" />

      <div className="kl-container max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-inter text-sm font-medium text-emerald-800 bg-white/80"
            style={{ border: "1px solid rgba(22,163,74,0.25)" }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Circasia, Quindío · Atención en línea
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: curva }}
            className="font-inter font-semibold tracking-[-0.035em] mt-7 text-slate-900"
            style={{ fontSize: "clamp(36px, 5.4vw, 66px)", lineHeight: 1.04 }}
          >
            Tu seguridad social,{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">sin filas</span>
              <span className="absolute left-0 right-0 bottom-[0.08em] h-[0.32em] -z-0 rounded-sm" style={{ background: "rgba(34,197,94,0.28)" }} />
            </span>{" "}
            y lista en 24 horas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-slate-600 mt-7 max-w-xl mx-auto lg:mx-0"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: 1.65 }}
          >
            Afiliaciones a EPS, pensión, ARL y caja de compensación, y el pago de tu planilla cada mes.
            Para independientes, empresas y familias del Quindío, todo desde tu celular.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-10"
          >
            <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-inter font-semibold text-[17px] text-white transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ background: "var(--confianza)", boxShadow: "0 14px 34px -12px rgba(22,163,74,0.75)" }}>
              <MessageCircle size={21} /> Escríbenos por WhatsApp
            </a>
            <a href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-inter font-semibold text-[16px] text-slate-800 bg-white/90 transition-colors hover:bg-white"
              style={{ border: "1px solid rgba(15,23,42,0.12)" }}>
              Ver servicios <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5 mt-9"
          >
            {["Respuesta el mismo día", "Te explicamos cada paso", "Equipo del Quindío"].map(t => (
              <li key={t} className="inline-flex items-center gap-2 font-inter text-sm text-slate-600">
                <span className="w-5 h-5 rounded-full grid place-items-center bg-emerald-100 text-emerald-700">
                  <Check size={12} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: curva }}
        >
          <Celular />
        </motion.div>
      </div>
    </section>
  );
}
