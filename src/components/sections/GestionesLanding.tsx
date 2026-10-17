"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck, HeartPulse, Building2, FileText, Clock, MessageCircle,
  UserCheck, ArrowRight, Check, MapPin,
} from "lucide-react";
import { useApp } from "@/lib/providers";
import { enlaceWhatsapp } from "@/data/gestiones";

const copy = {
  es: {
    badge: "Kryphor Gestiones · Circasia, Quindío",
    titulo: "Tu afiliación a ARL, EPS y Caja de Compensación, lista en 24 horas.",
    sub: "Nos encargamos de tus afiliaciones y trámites de salud, para empresas, independientes y familias. Sin filas y con atención directa por WhatsApp.",
    cta: "Escríbenos por WhatsApp",
    cta2: "Ver servicios",
    confianza: ["Atención personalizada", "Respuesta en 24 horas", "Equipo del Quindío"],
    serviciosEyebrow: "Servicios",
    serviciosTitulo: "Lo que gestionamos por ti",
    servicios: [
      { titulo: "ARL", texto: "Afiliación a riesgos laborales para trabajadores dependientes e independientes, con el nivel de riesgo correcto.", puntos: ["Empleados", "Independientes", "Novedades"] },
      { titulo: "EPS", texto: "Afiliación, traslado de EPS e inclusión de beneficiarios para ti y tu familia.", puntos: ["Afiliación", "Traslados", "Beneficiarios"] },
      { titulo: "Caja de Compensación", texto: "Afiliación de empresas y trabajadores a la caja de compensación familiar.", puntos: ["Empresas", "Trabajadores", "Subsidios"] },
      { titulo: "Trámites de salud", texto: "Certificados, actualización de datos y novedades ante las entidades.", puntos: ["Certificados", "Actualizaciones", "Novedades"] },
    ],
    beneficiosEyebrow: "Por qué con nosotros",
    beneficiosTitulo: "Sin vueltas, sin filas, sin letra pequeña.",
    beneficios: [
      { titulo: "En 24 horas", texto: "Con tus documentos completos, dejamos el trámite radicado en un día hábil." },
      { titulo: "Sin filas", texto: "No tienes que ir a ninguna oficina. Todo se hace a distancia." },
      { titulo: "Por WhatsApp", texto: "Hablas con una persona real que te acompaña de principio a fin." },
      { titulo: "Te explicamos todo", texto: "Te decimos qué documentos necesitas y en qué estado va tu trámite." },
    ],
    pasosEyebrow: "Cómo funciona",
    pasosTitulo: "Tres pasos y listo",
    pasos: [
      { titulo: "Escríbenos", texto: "Cuéntanos por WhatsApp qué necesitas afiliar o tramitar." },
      { titulo: "Envía tus documentos", texto: "Te decimos exactamente qué enviar, desde tu celular." },
      { titulo: "Recibe tu afiliación", texto: "Te confirmamos cuando quede lista, con el soporte correspondiente." },
    ],
    finalTitulo: "¿Listo para afiliarte?",
    finalSub: "Escríbenos ahora y te respondemos con los pasos exactos para tu caso.",
    ubicacion: "Circasia, Quindío — atendemos todo el Eje Cafetero",
    aviso: "Kryphor Gestiones presta el servicio de gestión y acompañamiento de trámites. La aprobación de cada afiliación depende de la entidad correspondiente (ARL, EPS o Caja de Compensación).",
  },
  en: {
    badge: "Kryphor Gestiones · Circasia, Quindío",
    titulo: "Your ARL, EPS and Compensation Fund enrollment, ready in 24 hours.",
    sub: "We handle your enrollments and health paperwork, for businesses, freelancers and families. No lines and direct support on WhatsApp.",
    cta: "Message us on WhatsApp",
    cta2: "See services",
    confianza: ["Personal support", "24-hour response", "Team from Quindío"],
    serviciosEyebrow: "Services",
    serviciosTitulo: "What we handle for you",
    servicios: [
      { titulo: "ARL", texto: "Occupational risk enrollment for employees and freelancers, with the right risk level.", puntos: ["Employees", "Freelancers", "Updates"] },
      { titulo: "EPS", texto: "Health insurer enrollment, transfers and adding beneficiaries for you and your family.", puntos: ["Enrollment", "Transfers", "Beneficiaries"] },
      { titulo: "Compensation Fund", texto: "Enrollment of businesses and workers in the family compensation fund.", puntos: ["Businesses", "Workers", "Subsidies"] },
      { titulo: "Health paperwork", texto: "Certificates, data updates and changes with each entity.", puntos: ["Certificates", "Updates", "Changes"] },
    ],
    beneficiosEyebrow: "Why us",
    beneficiosTitulo: "No hassle, no lines, no fine print.",
    beneficios: [
      { titulo: "In 24 hours", texto: "With complete documents, your request is filed within one business day." },
      { titulo: "No lines", texto: "You don't need to visit any office. Everything is done remotely." },
      { titulo: "On WhatsApp", texto: "You talk to a real person who supports you from start to finish." },
      { titulo: "Everything explained", texto: "We tell you which documents you need and the status of your request." },
    ],
    pasosEyebrow: "How it works",
    pasosTitulo: "Three steps and done",
    pasos: [
      { titulo: "Message us", texto: "Tell us on WhatsApp what you need to enroll or process." },
      { titulo: "Send your documents", texto: "We tell you exactly what to send, from your phone." },
      { titulo: "Get your enrollment", texto: "We confirm once it's ready, with the corresponding proof." },
    ],
    finalTitulo: "Ready to enroll?",
    finalSub: "Message us now and we'll reply with the exact steps for your case.",
    ubicacion: "Circasia, Quindío — serving the whole Coffee Region",
    aviso: "Kryphor Gestiones provides paperwork management and support. Approval of each enrollment depends on the corresponding entity (ARL, EPS or Compensation Fund).",
  },
};

const iconosServicio = [ShieldCheck, HeartPulse, Building2, FileText];
const iconosBeneficio = [Clock, MapPin, MessageCircle, UserCheck];

const entrada = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function BotonWhatsapp({ texto, grande = false }: { texto: string; grande?: boolean }) {
  const href = enlaceWhatsapp();
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-inter font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] ${grande ? "px-9 py-4.5 text-lg" : "px-7 py-4 text-base"}`}
      style={{ background: "var(--confianza)", boxShadow: "0 10px 30px -10px rgba(22,163,74,0.6)" }}
    >
      <MessageCircle size={grande ? 22 : 20} />
      {texto}
    </a>
  );
}

function Encabezado({ eyebrow, titulo, claro = false }: { eyebrow: string; titulo: string; claro?: boolean }) {
  return (
    <motion.div {...entrada} transition={{ duration: 0.6 }} className="max-w-2xl mb-14">
      <p className="font-inter font-medium text-sm uppercase tracking-[0.14em] mb-4" style={{ color: "var(--confianza)" }}>
        {eyebrow}
      </p>
      <h2 className="font-inter font-semibold tracking-[-0.03em]"
        style={{ fontSize: "clamp(28px, 3.8vw, 46px)", color: claro ? "#FFFFFF" : "var(--gestiones)", lineHeight: 1.12 }}>
        {titulo}
      </h2>
    </motion.div>
  );
}

export default function GestionesLanding() {
  const { lang } = useApp();
  const c = copy[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-28" style={{ background: "var(--bg)" }}>
        <div className="grupo-grid absolute inset-0 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(22,163,74,0.07), transparent 70%)" }} />

        <div className="relative z-10 kl-container max-w-5xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-10 text-sm font-inter font-medium"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--confianza)" }} />
            {c.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter font-semibold tracking-[-0.035em]"
            style={{ fontSize: "clamp(34px, 5.6vw, 68px)", color: "var(--gestiones)", lineHeight: 1.06 }}
          >
            {c.titulo}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter max-w-2xl mt-7"
            style={{ fontSize: "clamp(17px, 1.7vw, 20px)", color: "var(--fg-muted)", lineHeight: 1.65 }}
          >
            {c.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10"
          >
            <BotonWhatsapp texto={c.cta} grande />
            <a href="#servicios"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-inter font-semibold text-base transition-colors"
              style={{ color: "var(--gestiones)", border: "1px solid var(--border)", background: "var(--bg)" }}>
              {c.cta2} <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-x-7 gap-y-3 mt-10"
          >
            {c.confianza.map(t => (
              <li key={t} className="inline-flex items-center gap-2 font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
                <Check size={16} style={{ color: "var(--confianza)" }} /> {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-28 sm:py-32 border-t" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
        <div className="kl-container max-w-6xl">
          <Encabezado eyebrow={c.serviciosEyebrow} titulo={c.serviciosTitulo} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.servicios.map((s, i) => {
              const Icon = iconosServicio[i];
              return (
                <motion.div key={s.titulo} {...entrada} transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl p-7 sm:p-9"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "var(--gestiones)", color: "#FFFFFF" }}>
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-inter font-semibold text-xl mb-3" style={{ color: "var(--gestiones)" }}>{s.titulo}</h3>
                  <p className="font-inter text-base mb-6" style={{ color: "var(--fg-muted)", lineHeight: 1.65 }}>{s.texto}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.puntos.map(p => (
                      <span key={p} className="font-inter text-sm px-3 py-1 rounded-full"
                        style={{ background: "rgba(22,163,74,0.08)", color: "#15803D" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-28 sm:py-32" style={{ background: "var(--gestiones)" }}>
        <div className="kl-container max-w-6xl">
          <Encabezado eyebrow={c.beneficiosEyebrow} titulo={c.beneficiosTitulo} claro />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.beneficios.map((b, i) => {
              const Icon = iconosBeneficio[i];
              return (
                <motion.div key={b.titulo} {...entrada} transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(34,197,94,0.14)", color: "#4ADE80" }}>
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-inter font-semibold text-lg mb-2 text-white">{b.titulo}</h3>
                  <p className="font-inter text-base" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{b.texto}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="py-28 sm:py-32" style={{ background: "var(--bg)" }}>
        <div className="kl-container max-w-6xl">
          <Encabezado eyebrow={c.pasosEyebrow} titulo={c.pasosTitulo} />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.pasos.map((p, i) => (
              <motion.li key={p.titulo} {...entrada} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-7 sm:p-8"
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
                <span className="font-inter font-semibold text-sm w-9 h-9 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--confianza)", color: "#FFFFFF" }}>
                  {i + 1}
                </span>
                <h3 className="font-inter font-semibold text-lg mb-2" style={{ color: "var(--gestiones)" }}>{p.titulo}</h3>
                <p className="font-inter text-base" style={{ color: "var(--fg-muted)", lineHeight: 1.65 }}>{p.texto}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Llamado final */}
      <section className="pb-28 sm:pb-32" style={{ background: "var(--bg)" }}>
        <div className="kl-container max-w-6xl">
          <motion.div {...entrada} transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14 sm:py-16 text-center"
            style={{ background: "linear-gradient(145deg, var(--gestiones-2), var(--gestiones))" }}>
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[520px] h-[300px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.25), transparent 70%)" }} />
            <h2 className="relative font-inter font-semibold tracking-[-0.03em] text-white mb-4"
              style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>
              {c.finalTitulo}
            </h2>
            <p className="relative font-inter text-lg max-w-xl mx-auto mb-9" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              {c.finalSub}
            </p>
            <div className="relative">
              <BotonWhatsapp texto={c.cta} grande />
            </div>
            <p className="relative inline-flex items-center gap-2 font-inter text-sm mt-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              <MapPin size={14} /> {c.ubicacion}
            </p>
          </motion.div>

          <p className="font-inter text-sm text-center max-w-3xl mx-auto mt-8" style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}>
            {c.aviso}
          </p>
        </div>
      </section>
    </>
  );
}
