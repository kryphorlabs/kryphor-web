"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ChevronRight } from "lucide-react";
import { MarcaGestiones } from "./Logo";
import { PREGUNTAS, PREGUNTA_ASESOR, enlaceWhatsapp } from "@/data/gestiones";

interface Mensaje { de: "bot" | "persona"; texto: string }

const BIENVENIDA =
  "¡Hola! Soy el asistente de Kryphor Gestiones. Elige una pregunta y te respondo al instante, o habla directo con nuestro equipo.";

/**
 * Asistente flotante: no es una IA, responde con las mismas preguntas
 * frecuentes del sitio. "Hablar con una persona" abre WhatsApp con la
 * conversacion ya escrita para no tener que repetir nada.
 */
export default function Asistente() {
  const [abierto, setAbierto] = useState(false);
  const [saludo, setSaludo] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([{ de: "bot", texto: BIENVENIDA }]);
  const [escribiendo, setEscribiendo] = useState(false);
  const [usadas, setUsadas] = useState<string[]>([]);
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setSaludo(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    lista.current?.scrollTo({ top: lista.current.scrollHeight, behavior: "smooth" });
  }, [mensajes, escribiendo]);

  useEffect(() => {
    if (!abierto) return;
    const alTecla = (e: KeyboardEvent) => { if (e.key === "Escape") setAbierto(false); };
    window.addEventListener("keydown", alTecla);
    return () => window.removeEventListener("keydown", alTecla);
  }, [abierto]);

  const preguntar = (id: string) => {
    const p = PREGUNTAS.find(x => x.id === id);
    if (!p || escribiendo) return;
    setMensajes(m => [...m, { de: "persona", texto: p.pregunta }]);
    setUsadas(u => [...u, id]);
    setEscribiendo(true);
    setTimeout(() => {
      setMensajes(m => [...m, { de: "bot", texto: p.respuesta }]);
      setEscribiendo(false);
    }, 700);
  };

  const hablarConPersona = () => {
    const charla = mensajes
      .slice(1)
      .map(m => `${m.de === "bot" ? "Asistente" : "Yo"}: ${m.texto}`)
      .join("\n");
    const texto = charla
      ? `Hola, vengo del sitio de Kryphor Gestiones.\n\n${charla}\n\nQuiero hablar con una persona.`
      : "Hola, vengo del sitio de Kryphor Gestiones y quiero hablar con una persona.";
    const ventana = window.open(enlaceWhatsapp(texto), "_blank");
    if (ventana) ventana.opener = null;
    else window.location.href = enlaceWhatsapp(texto);
  };

  const pendientes = PREGUNTAS.filter(p => !usadas.includes(p.id));

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {abierto && (
          <motion.section
            role="dialog"
            aria-label="Asistente de Kryphor Gestiones"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[min(640px,calc(100vh-7rem))] flex flex-col rounded-3xl overflow-hidden bg-white"
            style={{ boxShadow: "0 30px 80px -20px rgba(15,23,42,0.45), 0 0 0 1px rgba(15,23,42,0.06)" }}
          >
            <header className="flex items-center gap-3 px-5 py-4 text-white"
              style={{ background: "linear-gradient(135deg, #1E293B, #0B1220)" }}>
              <MarcaGestiones tam={38} />
              <div className="flex-1 min-w-0">
                <p className="font-inter font-semibold text-[15px]">Asistente Gestiones</p>
                <p className="font-inter text-xs text-emerald-300 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Responde al instante
                </p>
              </div>
              <button onClick={() => setAbierto(false)} className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Cerrar asistente">
                <X size={20} />
              </button>
            </header>

            <ol ref={lista} className="flex-1 overflow-y-auto px-4 py-5 space-y-3" style={{ background: "#F5F7F6" }} aria-live="polite">
              {mensajes.map((m, i) => (
                <li key={i} className={`flex ${m.de === "persona" ? "justify-end" : "justify-start"}`}>
                  <p className={`max-w-[85%] px-4 py-2.5 font-inter text-[14px] leading-relaxed whitespace-pre-line ${
                    m.de === "persona"
                      ? "rounded-2xl rounded-br-md text-white"
                      : "rounded-2xl rounded-bl-md text-slate-700 bg-white"
                  }`}
                    style={m.de === "persona"
                      ? { background: "#0F172A" }
                      : { boxShadow: "0 1px 2px rgba(15,23,42,0.06)" }}>
                    {m.texto}
                  </p>
                </li>
              ))}
              {escribiendo && (
                <li className="flex justify-start">
                  <span className="px-4 py-3 rounded-2xl rounded-bl-md bg-white inline-flex gap-1">
                    {[0, 1, 2].map(k => (
                      <motion.span key={k} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: k * 0.15 }} />
                    ))}
                  </span>
                </li>
              )}
            </ol>

            <div className="border-t border-slate-200/80 bg-white px-3 py-3 max-h-[44%] overflow-y-auto">
              <div className="flex flex-col gap-1.5">
                {pendientes.map(p => (
                  <button key={p.id} onClick={() => preguntar(p.id)} disabled={escribiendo}
                    className="group text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl font-inter text-[14px] text-slate-700 hover:bg-slate-50 border border-slate-200 transition-colors disabled:opacity-50">
                    {p.pregunta}
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-slate-700 flex-shrink-0" />
                  </button>
                ))}
                <button onClick={hablarConPersona}
                  className="mt-1 flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl font-inter font-semibold text-[14px] text-white transition-all hover:brightness-110"
                  style={{ background: "var(--confianza)" }}>
                  <MessageCircle size={17} /> {PREGUNTA_ASESOR}
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {saludo && !abierto && (
            <motion.button
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              onClick={() => setAbierto(true)}
              className="hidden sm:block max-w-[240px] text-left px-4 py-3 rounded-2xl rounded-br-md bg-white font-inter text-sm text-slate-700"
              style={{ boxShadow: "0 16px 40px -14px rgba(15,23,42,0.35), 0 0 0 1px rgba(15,23,42,0.05)" }}
            >
              <span className="font-semibold text-slate-900">¿Te ayudo con tu afiliación?</span>
              <span className="block text-slate-500 text-[13px] mt-0.5">Te respondo al instante.</span>
            </motion.button>
          )}
        </AnimatePresence>
        <button
          onClick={() => setAbierto(!abierto)}
          aria-label={abierto ? "Cerrar asistente" : "Abrir asistente"}
          aria-expanded={abierto}
          className="relative w-16 h-16 rounded-full grid place-items-center transition-transform hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #1E293B, #0B1220)", boxShadow: "0 18px 40px -12px rgba(15,23,42,0.6)" }}
        >
          {abierto ? <X size={26} className="text-white" /> : <MarcaGestiones tam={40} />}
          {!abierto && (
            <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full border-2 border-white bg-emerald-500" />
          )}
        </button>
      </div>
    </div>
  );
}
