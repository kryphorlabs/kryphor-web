// Marca de Kryphor Gestiones: una K cuya pata inferior es un chulo de "listo".
export function MarcaGestiones({ tam = 36 }: { tam?: number }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kg-fondo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0B1220" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#kg-fondo)" />
      <rect x="10.5" y="9" width="4" height="22" rx="2" fill="#FFFFFF" />
      <path d="M15 20.5 L25.5 9.5" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <path d="M16.5 22.5 L21 27.5 L30 16.5" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoGestiones({ claro = false }: { claro?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <MarcaGestiones />
      <span className="flex flex-col leading-none">
        <span className="font-inter font-semibold text-[10px] tracking-[0.28em] uppercase"
          style={{ color: claro ? "rgba(255,255,255,0.6)" : "#64748B" }}>
          Kryphor
        </span>
        <span className="font-inter font-bold text-[19px] tracking-[-0.02em] mt-1"
          style={{ color: claro ? "#FFFFFF" : "#0F172A" }}>
          Gestiones
        </span>
      </span>
    </span>
  );
}
