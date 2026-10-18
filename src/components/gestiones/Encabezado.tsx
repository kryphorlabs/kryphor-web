"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, LockKeyhole } from "lucide-react";
import { LogoGestiones } from "./Logo";
import { enlaceWhatsapp } from "@/data/gestiones";

const enlaces = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Documentos", href: "/#documentos" },
  { label: "Preguntas", href: "/#preguntas" },
];

/**
 * El acceso del equipo vive oculto encima del encabezado. Solo aparece si,
 * recien abierta la pagina, la persona intenta subir estando arriba (rueda,
 * dedo o flecha). Si primero baja, ya no aparece. No es seguridad: eso lo
 * hace la contraseña. Solo evita que el boton llame la atencion.
 */
function useAccesoOculto() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let yaBajo = window.scrollY > 40;
    let inicioToque: number | null = null;
    const mostrar = () => { if (!yaBajo) setVisible(true); };

    const alDesplazar = () => { if (window.scrollY > 40) yaBajo = true; };
    const alRueda = (e: WheelEvent) => { if (window.scrollY <= 0 && e.deltaY < -4) mostrar(); };
    const alTocar = (e: TouchEvent) => { inicioToque = window.scrollY <= 0 ? e.touches[0].clientY : null; };
    const alMover = (e: TouchEvent) => {
      if (inicioToque !== null && e.touches[0].clientY - inicioToque > 60) mostrar();
    };
    const alTecla = (e: KeyboardEvent) => {
      if (window.scrollY <= 0 && (e.key === "ArrowUp" || e.key === "PageUp")) mostrar();
    };

    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("wheel", alRueda, { passive: true });
    window.addEventListener("touchstart", alTocar, { passive: true });
    window.addEventListener("touchmove", alMover, { passive: true });
    window.addEventListener("keydown", alTecla);
    document.documentElement.style.overscrollBehaviorY = "none";
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("wheel", alRueda);
      window.removeEventListener("touchstart", alTocar);
      window.removeEventListener("touchmove", alMover);
      window.removeEventListener("keydown", alTecla);
      document.documentElement.style.overscrollBehaviorY = "";
    };
  }, []);

  return visible;
}

export default function Encabezado() {
  const accesoVisible = useAccesoOculto();
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);

  useEffect(() => {
    const fn = () => setDesplazado(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="grid place-items-center overflow-hidden transition-[max-height] duration-500 ease-out"
        style={{ maxHeight: accesoVisible ? "3.25rem" : 0, background: "#0B1220" }}
        aria-hidden={!accesoVisible}
      >
        <a href="/acceso" tabIndex={accesoVisible ? 0 : -1}
          className="my-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-inter text-sm transition-colors"
          style={{ border: "1px solid rgba(255,255,255,0.22)", color: "#CBD5E1" }}>
          <LockKeyhole size={14} /> Acceso del equipo
        </a>
      </div>

      <div className="transition-all duration-300"
        style={{
          background: desplazado || abierto ? "rgba(255,255,255,0.86)" : "transparent",
          backdropFilter: desplazado || abierto ? "blur(18px) saturate(1.4)" : "none",
          WebkitBackdropFilter: desplazado || abierto ? "blur(18px) saturate(1.4)" : "none",
          borderBottom: `1px solid ${desplazado ? "rgba(15,23,42,0.08)" : "transparent"}`,
        }}>
        <div className="kl-container max-w-7xl flex items-center justify-between py-4">
          <a href="/" aria-label="Kryphor Gestiones, inicio"><LogoGestiones /></a>

          <nav className="hidden lg:flex items-center gap-8">
            {enlaces.map(l => (
              <a key={l.href} href={l.href}
                className="font-inter font-medium text-[15px] text-slate-600 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-white transition-all hover:brightness-110"
              style={{ background: "var(--confianza)", boxShadow: "0 8px 24px -10px rgba(22,163,74,0.7)" }}>
              <MessageCircle size={17} /> Escríbenos
            </a>
            <button className="lg:hidden p-2 rounded-lg text-slate-700" onClick={() => setAbierto(!abierto)}
              aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={abierto}>
              {abierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {abierto && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-200/70">
              <div className="kl-container py-4 flex flex-col">
                {enlaces.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setAbierto(false)}
                    className="py-3 font-inter text-base text-slate-700">
                    {l.label}
                  </a>
                ))}
                <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer"
                  className="mt-3 mb-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-inter font-semibold text-white"
                  style={{ background: "var(--confianza)" }}>
                  <MessageCircle size={18} /> Escríbenos por WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
