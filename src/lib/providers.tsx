"use client";
import { createContext, useContext, useEffect } from "react";
import { usePageView } from "@/lib/usePageView";

// el sitio va solo en español, para otros idiomas esta el traductor del navegador
export type Theme = "light";
export type Lang = "es" | "en";

interface AppCtx {
  theme: Theme;
  lang: Lang;
}

const AppContext = createContext<AppCtx>({ theme: "light", lang: "es" });

function PageViewTracker() {
  usePageView();
  return null;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    try { localStorage.removeItem("kl-lang"); } catch {}
  }, []);

  return (
    <AppContext.Provider value={{ theme: "light", lang: "es" }}>
      <PageViewTracker />
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
