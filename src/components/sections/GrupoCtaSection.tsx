"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GESTIONES_URL } from "@/data/gestiones";

export default function GrupoCtaSection() {
  return (
    <section className="pb-24 sm:pb-32 bg-white">
      <div className="kl-container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20"
          style={{ background: "linear-gradient(120deg, #3730A3 0%, #1E1B4B 45%, #0F172A 75%, #14532D 120%)" }}
        >
          <div className="absolute inset-0 -z-10 opacity-60" style={{
            background:
              "radial-gradient(40% 60% at 10% 10%, rgba(165,180,252,0.45), transparent 60%)," +
              "radial-gradient(35% 55% at 95% 95%, rgba(74,222,128,0.30), transparent 60%)",
          }} />
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-inter font-semibold tracking-[-0.03em] text-white" style={{ fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.06 }}>
                ¿En qué te podemos ayudar hoy?
              </h2>
              <p className="font-inter text-lg text-indigo-100/80 mt-5 max-w-lg" style={{ lineHeight: 1.65 }}>
                Cuéntanos tu proyecto de software o tu trámite de seguridad social y te respondemos con un plan claro.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/contact"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 transition-transform hover:-translate-y-0.5">
                <span>
                  <span className="block font-inter font-semibold text-slate-900">Tengo un proyecto de software</span>
                  <span className="block font-inter text-sm text-slate-500 mt-0.5">Habla con Kryphor Labs</span>
                </span>
                <ArrowRight size={20} className="text-indigo-600 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={GESTIONES_URL}
                className="group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-transform hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <span>
                  <span className="block font-inter font-semibold text-white">Necesito una afiliación</span>
                  <span className="block font-inter text-sm text-slate-300 mt-0.5">Habla con Kryphor Gestiones</span>
                </span>
                <MessageCircle size={20} className="text-emerald-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
