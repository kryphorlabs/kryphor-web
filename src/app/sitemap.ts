import type { MetadataRoute } from "next";
import { GESTIONES_PUBLICA, GESTIONES_SUBDOMINIO_ACTIVO } from "@/data/gestiones";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kryphorlabs.com";
  // gestiones sale del sitemap mientras no sea publica o cuando ya viva en su subdominio
  const gestiones = GESTIONES_PUBLICA && !GESTIONES_SUBDOMINIO_ACTIVO ? ["/gestiones"] : [];
  const routes = ["", "/labs", ...gestiones, "/about", "/apps", "/contact", "/privacy", "/terms"];

  return routes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
