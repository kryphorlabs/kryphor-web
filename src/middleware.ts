import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { GESTIONES_SUBDOMINIO_ACTIVO, GESTIONES_SITIO } from "@/data/gestiones";

// /admin pide sesion: sin sesion se manda a /login y se vuelve despues de entrar
const conSesion = auth((req) => {
  if (req.auth?.user) return NextResponse.next();
  const login = new URL("/login", req.nextUrl.origin);
  login.searchParams.set("callbackUrl", req.nextUrl.pathname);
  return NextResponse.redirect(login);
}) as unknown as (
  req: NextRequest, ev: NextFetchEvent,
) => Promise<Response>;

// gestiones.kryphorlabs.com es su propio sitio: por dentro se sirve desde /gestiones.
export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  const host = req.headers.get("host") ?? "";
  const { pathname, search } = req.nextUrl;

  if (host.startsWith("gestiones.")) {
    // en el subdominio las rutas van limpias, sin /gestiones delante
    if (pathname === "/gestiones" || pathname.startsWith("/gestiones/")) {
      const limpia = req.nextUrl.clone();
      limpia.pathname = pathname.slice("/gestiones".length) || "/";
      return NextResponse.redirect(limpia, 301);
    }
    const url = req.nextUrl.clone();
    url.pathname = `/gestiones${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/admin")) return conSesion(req, ev);

  if (GESTIONES_SUBDOMINIO_ACTIVO && pathname.startsWith("/gestiones")) {
    const resto = pathname.slice("/gestiones".length) || "/";
    return NextResponse.redirect(`${GESTIONES_SITIO}${resto}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // fuera: internos de next, apis y cualquier archivo con extension (imagenes, robots, sitemap...)
  matcher: ["/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)"],
};
