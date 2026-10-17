import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import { AppProviders } from "@/lib/providers";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITIO = "https://kryphorlabs.com";
const TITULO = "Kryphor — Grupo de Soluciones Integrales | Labs y Gestiones";
const DESCRIPCION =
  "Kryphor es un grupo empresarial del Quindío. Kryphor Labs desarrolla software como KryphorConnect y Kryphor Gestiones gestiona afiliaciones a ARL, EPS, caja de compensación y trámites de salud.";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: TITULO,
    template: "%s | Grupo Kryphor",
  },
  description: DESCRIPCION,
  keywords: [
    "Grupo Kryphor",
    "Kryphor Labs",
    "Kryphor Gestiones",
    "afiliación ARL",
    "afiliación EPS",
    "caja de compensación",
    "trámites de salud",
    "desarrollo de software",
    "KryphorConnect",
    "Armenia",
    "Circasia",
    "Quindío",
    "Eje Cafetero",
    "videojuegos",
  ],
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: SITIO,
    siteName: "Grupo Kryphor",
    type: "website",
    locale: "es_CO",
    images: [{ url: "/logos/kryphor_banner.png", alt: "Grupo Kryphor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: ["/logos/kryphor_banner.png"],
  },
};

const direccion = {
  "@type": "PostalAddress",
  addressLocality: "Armenia",
  addressRegion: "Quindío",
  addressCountry: "CO",
};

const organizacion = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Kryphor",
  alternateName: "Kryphor",
  url: SITIO,
  logo: `${SITIO}/logos/kryphor_logo_light.png`,
  email: "kryphorlabs@gmail.com",
  description: DESCRIPCION,
  address: direccion,
  areaServed: ["Quindío", "Eje Cafetero", "Colombia"],
  subOrganization: [
    {
      "@type": "Organization",
      name: "Kryphor Labs",
      url: `${SITIO}/labs`,
      description: "Estudio de desarrollo de software y soluciones digitales, creadores de KryphorConnect.",
      address: direccion,
    },
    {
      "@type": "Organization",
      name: "Kryphor Gestiones",
      url: `${SITIO}/gestiones`,
      description: "Afiliaciones a ARL, EPS, caja de compensación y trámites de salud en 24 horas.",
      address: { ...direccion, addressLocality: "Circasia" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`} data-theme="dark">
      <head>
        {/* Anti-FOUC: restore saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('kl-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacion) }}
        />
      </head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5185495129250136"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className="min-h-full antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
