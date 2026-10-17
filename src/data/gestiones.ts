// Numero de WhatsApp de Kryphor Gestiones en formato internacional sin "+" ni espacios (ej. 573001234567).
// Mientras este vacio, los botones de WhatsApp llevan a /contact.
export const WHATSAPP_GESTIONES = "";

const MENSAJE = "Hola, quiero información sobre afiliaciones con Kryphor Gestiones.";

export function enlaceWhatsapp(mensaje: string = MENSAJE): string {
  if (!WHATSAPP_GESTIONES) return "/contact";
  return `https://wa.me/${WHATSAPP_GESTIONES}?text=${encodeURIComponent(mensaje)}`;
}
