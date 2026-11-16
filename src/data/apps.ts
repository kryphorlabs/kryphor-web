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
  /** Página propia de la app dentro del sitio. */
  pagina?: string;
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
    pagina: "/apps/mi-devocionario",
    features: [
      "Santo Rosario completo",
      "Más de 20 novenas",
      "Funciona sin internet",
      "17 idiomas",
      "Recordatorio diario",
    ],
  },
  {
    id: "maru",
    name: "Maru",
    tagline: "Juegos suaves para ejercitar la mente cada día",
    description:
      "Ocho juegos tranquilos para mantener la mente activa: parejas, sopa de letras, cálculo suave, botellas de colores, triángulos, carritos y más. Letra grande, sin prisa, 13 idiomas y una planta que crece contigo.",
    category: "Bienestar",
    status: "proximamente",
    color: "#C8174F",
    icon: "💎",
    subsidiary: "Kryphor Labs",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.marumente.app",
    pagina: "/apps/maru",
    features: ["8 juegos", "Letra grande", "13 idiomas", "Sin cuentas", "Gratis"],
  },
];
