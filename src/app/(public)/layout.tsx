import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITIO, DESCRIPCION } from "@/data/grupo";

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

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacion) }} />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
