// Datos de Kryphor Gestiones: contacto, banderas de publicacion y contenido del sitio.

// Numero de WhatsApp en formato internacional sin "+" ni espacios.
export const WHATSAPP_GESTIONES = "573145690358";
export const WHATSAPP_VISIBLE = "314 569 0358";

export const GESTIONES_SITIO = "https://gestiones.kryphorlabs.com";

// true cuando cloudflare ya sirva gestiones.kryphorlabs.com: kryphorlabs.com/gestiones redirige alla.
export const GESTIONES_SUBDOMINIO_ACTIVO = false;

// false mientras no este lista la camara de comercio: la pagina se ve pero google no la indexa.
export const GESTIONES_PUBLICA = false;

// Enlace a la pagina de gestiones desde el sitio del grupo.
export const GESTIONES_URL = GESTIONES_SUBDOMINIO_ACTIVO ? GESTIONES_SITIO : "/gestiones";

const MENSAJE = "Hola, quiero información sobre afiliaciones con Kryphor Gestiones.";

export function enlaceWhatsapp(mensaje: string = MENSAJE): string {
  return `https://wa.me/${WHATSAPP_GESTIONES}?text=${encodeURIComponent(mensaje)}`;
}

export const MUNICIPIOS_QUINDIO = [
  "Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia",
  "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento",
];

export interface Servicio {
  id: string;
  titulo: string;
  texto: string;
  puntos: string[];
}

export const SERVICIOS: Servicio[] = [
  { id: "eps", titulo: "EPS", texto: "Afiliación a salud, traslado entre EPS e inclusión de tu núcleo familiar como beneficiario.", puntos: ["Afiliación", "Traslados", "Beneficiarios"] },
  { id: "pension", titulo: "Pensión", texto: "Afiliación al fondo de pensiones que elijas, para que tus semanas cuenten desde el primer mes.", puntos: ["Afiliación", "Fondos", "Semanas"] },
  { id: "arl", titulo: "ARL", texto: "Cobertura de riesgos laborales para empleados e independientes, con la clase de riesgo que corresponde a tu actividad.", puntos: ["Empleados", "Independientes", "Clase de riesgo"] },
  { id: "caja", titulo: "Caja de Compensación", texto: "Afiliación de empresas y trabajadores a la caja, para acceder a subsidios, recreación y beneficios.", puntos: ["Empresas", "Trabajadores", "Subsidios"] },
  { id: "planilla", titulo: "Planilla de seguridad social", texto: "Liquidamos y pagamos tu planilla cada mes, a tiempo y con los porcentajes correctos.", puntos: ["Independientes", "Empresas", "Pago mensual"] },
  { id: "novedades", titulo: "Novedades y certificados", texto: "Ingresos, retiros, cambios de salario, certificados de afiliación y actualización de datos.", puntos: ["Ingresos y retiros", "Certificados", "Actualizaciones"] },
];

export const DOCUMENTOS = {
  independiente: [
    "Copia de tu cédula de ciudadanía.",
    "Para la ARL, el examen médico de ingreso si la entidad lo pide.",
    "Datos de tu actividad e ingreso mensual, para liquidar bien la planilla.",
  ],
  empresa: [
    "RUT actualizado.",
    "Certificado de Cámara de Comercio con menos de 30 días de expedición.",
    "Cédula del representante legal.",
    "Certificación bancaria de la empresa.",
    "Listado de trabajadores con sus datos y salarios.",
  ],
};

export interface Pregunta {
  id: string;
  pregunta: string;
  respuesta: string;
}

// Mismas dudas que llegan en el dia a dia, con respuesta propia.
export const PREGUNTAS: Pregunta[] = [
  {
    id: "empezar",
    pregunta: "¿Cómo empiezo mi afiliación?",
    respuesta:
      "Escríbenos por WhatsApp contándonos qué necesitas: EPS, pensión, ARL o caja. Te decimos qué documentos enviar y, con todo completo, dejamos el trámite radicado en un día hábil.",
  },
  {
    id: "documentos",
    pregunta: "¿Qué documentos debo tener listos?",
    respuesta:
      "Si eres independiente, basta con tu cédula; para la ARL a veces piden examen médico de ingreso. Si eres empresa: RUT, Cámara de Comercio de menos de 30 días, cédula del representante legal y certificación bancaria. Según el caso te pedimos algo adicional.",
  },
  {
    id: "servicios",
    pregunta: "¿Qué trámites manejan?",
    respuesta:
      "Afiliaciones a EPS, pensión, ARL y caja de compensación; traslados de EPS; inclusión de beneficiarios; pago mensual de la planilla de seguridad social; novedades de ingreso y retiro, y certificados.",
  },
  {
    id: "beneficiarios",
    pregunta: "¿A quién puedo afiliar como beneficiario?",
    respuesta:
      "En la EPS normalmente puedes incluir a tu cónyuge o compañero(a) permanente y a tus hijos; en algunos casos también a tus padres u otros familiares que dependan económicamente de ti. Revisamos tu caso y te confirmamos.",
  },
  {
    id: "costo",
    pregunta: "¿Cuánto vale el servicio?",
    respuesta:
      "Depende del trámite y de cuántas personas o trabajadores sean. Cuéntanos tu caso por WhatsApp y te damos el valor exacto antes de empezar, sin compromiso.",
  },
  {
    id: "horario",
    pregunta: "¿En qué horario me atienden?",
    respuesta:
      "Puedes escribirnos a cualquier hora por WhatsApp. Respondemos en horario de oficina, y lo que llegue fuera de horario lo atendemos a primera hora del siguiente día hábil.",
  },
  {
    id: "ubicacion",
    pregunta: "¿Dónde están ubicados?",
    respuesta:
      "Estamos en Circasia, Quindío, y atendemos en línea a todo el departamento y el Eje Cafetero, sin que tengas que desplazarte.",
  },
];

export const PREGUNTA_ASESOR = "Quiero hablar con una persona";
