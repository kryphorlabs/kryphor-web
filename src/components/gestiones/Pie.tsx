import { MessageCircle, MapPin } from "lucide-react";
import { LogoGestiones } from "./Logo";
import { SERVICIOS, enlaceWhatsapp, WHATSAPP_VISIBLE } from "@/data/gestiones";

export default function Pie() {
  return (
    <footer style={{ background: "#0B1220" }}>
      <div className="kl-container max-w-7xl pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoGestiones claro />
            <p className="font-inter text-[15px] text-slate-400 mt-6 max-w-sm" style={{ lineHeight: 1.7 }}>
              Afiliaciones y trámites de seguridad social para independientes, empresas y familias del Quindío.
            </p>
          </div>

          <div>
            <p className="font-inter font-semibold text-sm text-white mb-5">Servicios</p>
            <ul className="space-y-3">
              {SERVICIOS.map(s => (
                <li key={s.id}>
                  <a href="/gestiones#servicios" className="font-inter text-[15px] text-slate-400 hover:text-white transition-colors">
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-inter font-semibold text-sm text-white mb-5">Contacto</p>
            <ul className="space-y-4">
              <li>
                <a href={enlaceWhatsapp()} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-inter text-[15px] text-slate-300 hover:text-white">
                  <MessageCircle size={17} className="text-emerald-400" /> {WHATSAPP_VISIBLE}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 font-inter text-[15px] text-slate-300">
                <MapPin size={17} className="text-emerald-400" /> Circasia, Quindío
              </li>
              <li>
                <a href="/gestiones/privacidad" className="font-inter text-[15px] text-slate-400 hover:text-white transition-colors">
                  Política de tratamiento de datos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t flex flex-col sm:flex-row gap-3 justify-between"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="font-inter text-[13px] text-slate-500">© 2026 Kryphor Gestiones. Todos los derechos reservados.</p>
          <p className="font-inter text-[13px] text-slate-500">
            Un servicio de <a href="https://kryphorlabs.com" className="hover:text-slate-300">Kryphor Labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
