"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GESTIONES_URL } from "@/data/gestiones";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Labs", href: "/labs" },
  { label: "Gestiones", href: GESTIONES_URL },
  { label: "Nosotros", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const solido = scrolled || open;

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solido ? "rgba(255,255,255,0.82)" : "transparent",
        backdropFilter: solido ? "blur(18px) saturate(1.4)" : "none",
        WebkitBackdropFilter: solido ? "blur(18px) saturate(1.4)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}
    >
      <div className="kl-container">
        <div className="flex items-center justify-between py-3.5">
          <a href="/" className="flex-shrink-0 group">
            <img
              src="/logos/kryphor_logo_light.png"
              alt="Grupo Kryphor"
              className="h-14 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map(link => (
              <a key={link.label} href={link.href}
                className="nav-link font-inter font-medium text-[15px] text-slate-600 hover:text-slate-900 transition-colors py-1">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-inter font-semibold text-sm text-white transition-all hover:brightness-110"
              style={{ background: "var(--gestiones)", boxShadow: "0 8px 22px -10px rgba(15,23,42,0.6)" }}>
              Contáctanos <ArrowUpRight size={16} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg text-slate-700"
            onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200/70"
          >
            <div className="kl-container py-4 flex flex-col">
              {links.map(link => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                  className="py-3 font-inter text-base text-slate-700">
                  {link.label}
                </a>
              ))}
              <a href="/contact" onClick={() => setOpen(false)}
                className="mt-3 mb-2 inline-flex items-center justify-center gap-1.5 py-3.5 rounded-full font-inter font-semibold text-white"
                style={{ background: "var(--gestiones)" }}>
                Contáctanos <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
