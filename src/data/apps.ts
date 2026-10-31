export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Espiritual" | "Productividad" | "Conectividad" | "Agrícola" | "Finanzas" | "Bienestar";
  status: "disponible" | "en-desarrollo" | "proximamente";
  playStoreUrl?: string;
  apkUrl?: string;
  color: string;
  icon: string;
  features: string[];
  subsidiary?: string;
}

export const statusLabels: Record<App["status"], string> = {
  disponible: "Disponible",
  "en-desarrollo": "En Desarrollo",
  proximamente: "Próximamente",
};

export const apps: App[] = [
  {
    id: "mi-devocionario",
    name: "Mi Devocionario",
    tagline: "Tu compañía diaria de oración católica",
    description:
      "App de oración católica con el Santo Rosario completo, más de 20 novenas paso a paso, versículo diario, plan de oración personalizado y recordatorio diario. Funciona sin internet y está disponible en 17 idiomas.",
    category: "Espiritual",
    status: "disponible",
    color: "#D4AF37",
    icon: "📿",
    subsidiary: "Kryphor Labs",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devocionario.app",
    features: [
      "Santo Rosario completo",
      "Más de 20 novenas",
      "Funciona sin internet",
      "17 idiomas",
      "Recordatorio diario",
    ],
  },
  {
    id: "kryphor-connect-tv",
    name: "KryphorConnect TV",
    tagline: "Publicidad digital inteligente en tu pantalla",
    description:
      "App para Android TV y Google TV que convierte cualquier televisor en una pantalla de publicidad digital profesional. Gestiona campañas, programa contenido y monitorea estadísticas en tiempo real desde el panel web.",
    category: "Conectividad",
    status: "disponible",
    color: "#38BDF8",
    icon: "📺",
    subsidiary: "KryphorConnect",
    apkUrl: "https://github.com/Crisb26/kryphorconnect-tv/releases/download/v1.0.0/kryphorconnect-tv.apk",
    features: [
      "Compatible con Android TV y Google TV",
      "APK descargable (sin necesidad de Play Store)",
      "Gestión de campañas en tiempo real",
      "Programación por horarios y días",
      "Panel de administración web incluido",
    ],
  },
];
