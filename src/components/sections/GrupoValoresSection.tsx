"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Code, Smartphone, MonitorPlay, Workflow, HeartPulse, PiggyBank, HardHat, ReceiptText } from "lucide-react";

const curva = [0.16, 1, 0.3, 1] as const;
const entrada = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

const valores = [
  { icono: MapPin, titulo: "Somos de aquí", texto: "Equipo del Quindío que conoce la región, sus empresas y sus trámites.", color: "#4F46E5", tono: "#EEF2FF" },
  { icono: Clock, titulo: "Respuesta rápida", texto: "Tiempos claros desde el primer contacto, sin filas ni vueltas innecesarias.", color: "#0284C7", tono: "#E0F2FE" },
  { icono: ShieldCheck, titulo: "Respaldo real", texto: "Procesos ordenados y tecnología propia detrás de cada servicio que ofrecemos.", color: "#15803D", tono: "#DCFCE7" },
];

const especialidades = [
  {
    nombre: "Kryphor Labs",
    color: "#4F46E5",
    items: [
      { icono: Code, texto: "Software a la medida para empresas" },
      { icono: MonitorPlay, texto: "KryphorConnect: publicidad en pantallas" },
      { icono: Smartphone, texto: "Aplicaciones web y móviles" },
      { icono: Workflow, texto: "Automatización de procesos" },
    ],
  },
  {
    nombre: "Kryphor Gestiones",
    color: "#15803D",
    items: [
      { icono: HeartPulse, texto: "Afiliación y traslados de EPS" },
      { icono: PiggyBank, texto: "Pensión y caja de compensación" },
      { icono: HardHat, texto: "ARL para empleados e independientes" },
      { icono: ReceiptText, texto: "Pago mensual de la planilla" },
    ],
  },
];

export default function GrupoValoresSection() {
  return (
    <>
      <section className="py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #F7F8FC 0%, #FFFFFF 100%)" }}>
        <div className="kl-container max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <motion.div {...entrada} transition={{ duration: 0.6, ease: curva }}>
            <p className="font-inter font-semibold text-[13px] uppercase tracking-[0.16em] mb-4 text-indigo-600">Un solo grupo</p>
            <h2 className="font-inter font-semibold tracking-[-0.03em] text-slate-900" style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.08 }}>
              Cerca de la gente, serios con cada proceso.
            </h2>
            <p className="font-inter text-lg text-slate-600 mt-6" style={{ lineHeight: 1.7 }}>
              Desde Armenia y Circasia atendemos empresas, independientes y familias del Eje Cafetero con el mismo
              cuidado, sea un trámite de afiliación o una plataforma de software.
            </p>
          </motion.div>

          <div className="space-y-4">
            {valores.map((v, i) => (
              <motion.div key={v.titulo} {...entrada} transition={{ duration: 0.5, delay: i * 0.08, ease: curva }}
                className="flex gap-5 items-start rounded-2xl bg-white p-6 sm:p-7"
                style={{ border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 18px 40px -30px rgba(15,23,42,0.3)" }}>
                <span className="w-12 h-12 flex-shrink-0 rounded-xl grid place-items-center" style={{ background: v.tono, color: v.color }}>
                  <v.icono size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-slate-900 mb-1.5">{v.titulo}</h3>
                  <p className="font-inter text-[15.5px] text-slate-600" style={{ lineHeight: 1.65 }}>{v.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-white">
        <div className="kl-container max-w-6xl">
          <motion.h2 {...entrada} transition={{ duration: 0.6, ease: curva }}
            className="font-inter font-semibold tracking-[-0.03em] text-slate-900 text-center mb-14"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}>
            Dos especialidades, un mismo estándar
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {especialidades.map((e, i) => (
              <motion.div key={e.nombre} {...entrada} transition={{ duration: 0.55, delay: i * 0.1, ease: curva }}
                className="rounded-3xl p-8 sm:p-10" style={{ background: "#F8FAFC", border: "1px solid rgba(15,23,42,0.06)" }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: e.color }} />
                  <h3 className="font-inter font-semibold text-xl text-slate-900">{e.nombre}</h3>
                </div>
                <ul className="grid gap-3">
                  {e.items.map(it => (
                    <li key={it.texto} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
                      style={{ border: "1px solid rgba(15,23,42,0.05)" }}>
                      <it.icono size={20} strokeWidth={1.75} style={{ color: e.color }} />
                      <span className="font-inter text-[15.5px] text-slate-700">{it.texto}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
