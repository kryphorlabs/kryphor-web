import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GESTIONES_URL } from "@/data/gestiones";

const columnas = [
  {
    titulo: "Kryphor Labs",
    enlaces: [
      { label: "Desarrollo de software", href: "/labs" },
      { label: "KryphorConnect", href: "https://connect.kryphorlabs.com" },
      { label: "Aplicaciones", href: "/apps" },
    ],
  },
  {
    titulo: "Kryphor Gestiones",
    enlaces: [
      { label: "Afiliaciones EPS y ARL", href: GESTIONES_URL },
      { label: "Pensión y caja", href: GESTIONES_URL },
      { label: "Planilla de seguridad social", href: GESTIONES_URL },
    ],
  },
  {
    titulo: "Grupo",
    enlaces: [
      { label: "Nosotros", href: "/about" },
      { label: "Contacto", href: "/contact" },
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden" style={{ background: "#0B1220" }}>
      <div className="absolute inset-0 -z-10 opacity-70" style={{
        background: "radial-gradient(40% 60% at 0% 0%, rgba(79,70,229,0.22), transparent 60%)",
      }} />
      <div className="kl-container pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <img src="/logos/kryphor_logo_transparent.png" alt="Grupo Kryphor" className="h-16 w-auto object-contain" />
            <p className="font-inter text-[15px] text-slate-400 mt-6 max-w-sm" style={{ lineHeight: 1.75 }}>
              Grupo de soluciones integrales: tecnología, gestión y medios para el Eje Cafetero.
            </p>
            <div className="mt-7 space-y-3">
              <a href="mailto:kryphorlabs@gmail.com"
                className="flex items-center gap-2.5 font-inter text-[15px] text-slate-300 hover:text-white transition-colors">
                <Mail size={16} className="text-indigo-400" /> kryphorlabs@gmail.com
              </a>
              <p className="flex items-center gap-2.5 font-inter text-[15px] text-slate-300">
                <MapPin size={16} className="text-indigo-400" /> Armenia, Quindío — Colombia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columnas.map(c => (
              <div key={c.titulo}>
                <p className="font-inter font-semibold text-sm text-white mb-5">{c.titulo}</p>
                <ul className="space-y-3">
                  {c.enlaces.map(e => (
                    <li key={e.label}>
                      <a href={e.href}
                        className="group inline-flex items-center gap-1 font-inter text-[15px] text-slate-400 hover:text-white transition-colors">
                        {e.label}
                        {e.href.startsWith("http") && <ArrowUpRight size={14} className="opacity-60" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row gap-3 justify-between"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="font-inter text-[13px] text-slate-500">© 2026 Grupo Kryphor. Todos los derechos reservados.</p>
          <p className="font-inter text-[13px] text-slate-500">Kryphor Labs® · Kryphor Gestiones</p>
        </div>
      </div>
    </footer>
  );
}
