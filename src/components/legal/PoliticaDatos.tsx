const RESPONSABLE = {
  nombre: "Cristopher Bueno",
  ciudad: "Armenia, Quindío, Colombia",
  correo: "kryphorlabs@gmail.com",
  whatsapp: "+57 314 569 0358",
};

function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-inter font-semibold text-xl mb-3" style={{ color: "var(--fg)" }}>
        {titulo}
      </h2>
      {children}
    </section>
  );
}

function Correo() {
  return (
    <a href={`mailto:${RESPONSABLE.correo}`} style={{ color: "var(--labs)" }}>
      {RESPONSABLE.correo}
    </a>
  );
}

export function PoliticaDatos() {
  return (
    <div className="min-h-screen pt-32 pb-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-10">
          <h1 className="font-inter font-semibold tracking-[-0.03em] text-4xl mb-3" style={{ color: "var(--gestiones)" }}>
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="font-inter text-sm" style={{ color: "var(--fg-muted)" }}>
            Última actualización: 17 de octubre de 2026 · kryphorlabs.com
          </p>
        </div>

        <div className="rounded-3xl p-8 sm:p-10 space-y-8 font-inter leading-relaxed"
          style={{ color: "var(--fg-muted)", background: "var(--bg-2)", border: "1px solid var(--border)" }}>

          <Seccion titulo="1. Responsable del tratamiento">
            <p className="mb-3">
              El responsable del tratamiento de los datos personales recogidos a través de este sitio y de los
              servicios del Grupo Kryphor (Kryphor Labs y Kryphor Gestiones) es:
            </p>
            <ul className="space-y-1 ml-1">
              <li><strong style={{ color: "var(--fg)" }}>Nombre:</strong> {RESPONSABLE.nombre}</li>
              <li><strong style={{ color: "var(--fg)" }}>Domicilio:</strong> {RESPONSABLE.ciudad}</li>
              <li><strong style={{ color: "var(--fg)" }}>Correo:</strong> <Correo /></li>
              <li><strong style={{ color: "var(--fg)" }}>WhatsApp:</strong> {RESPONSABLE.whatsapp}</li>
            </ul>
            <p className="mt-3">
              Esta política se expide conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.
            </p>
          </Seccion>

          <Seccion titulo="2. Datos que recogemos">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Datos de contacto que nos envías: nombre, correo, teléfono y el contenido de tu mensaje.</li>
              <li>
                Para trámites de Kryphor Gestiones: datos de identificación, laborales y de afiliación necesarios
                para gestionar tu afiliación a ARL, EPS o Caja de Compensación, y los documentos que nos compartas
                para ese fin.
              </li>
              <li>Datos de uso anónimos del sitio, para mejorar su funcionamiento.</li>
              <li>En nuestras aplicaciones, un identificador anónimo de dispositivo para mostrar publicidad.</li>
            </ul>
          </Seccion>

          <Seccion titulo="3. Datos sensibles">
            <p>
              Algunos trámites de salud pueden implicar datos sensibles. Solo los tratamos con tu autorización
              previa, expresa e informada, y únicamente para el trámite que nos pediste. No estás obligado a
              entregar datos sensibles; si no los entregas, es posible que no podamos completar ese trámite.
            </p>
          </Seccion>

          <Seccion titulo="4. Finalidades">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder tus consultas y solicitudes.</li>
              <li>Gestionar las afiliaciones y trámites que nos encargues ante las entidades correspondientes.</li>
              <li>Informarte del estado de tus trámites y de vencimientos relacionados.</li>
              <li>Prestar y mejorar nuestros servicios de software.</li>
              <li>Cumplir obligaciones legales.</li>
            </ul>
            <p className="mt-3">
              No vendemos tus datos. Solo los compartimos con las entidades ante las que gestionamos tu trámite
              (ARL, EPS, Caja de Compensación) o cuando la ley lo exija.
            </p>
          </Seccion>

          <Seccion titulo="5. Tus derechos">
            <p className="mb-3">Como titular de los datos tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Conocer, actualizar y rectificar tus datos.</li>
              <li>Pedir prueba de la autorización que nos diste.</li>
              <li>Saber qué uso le hemos dado a tus datos.</li>
              <li>Revocar la autorización o pedir que suprimamos tus datos, cuando no exista un deber legal de conservarlos.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
              <li>Acceder gratis a tus datos personales.</li>
            </ul>
          </Seccion>

          <Seccion titulo="6. Cómo ejercer tus derechos">
            <p>
              Escríbenos a <Correo /> indicando tu nombre, documento y lo que solicitas. Respondemos consultas en
              máximo 10 días hábiles y reclamos en máximo 15 días hábiles, según la Ley 1581 de 2012.
            </p>
          </Seccion>

          <Seccion titulo="7. Seguridad">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra pérdida, uso o
              acceso no autorizado, incluidas copias de seguridad cifradas y acceso restringido a la información.
            </p>
          </Seccion>

          <Seccion titulo="8. Publicidad en aplicaciones">
            <p>
              Algunas de nuestras aplicaciones usan Google AdMob. AdMob puede recoger datos según la política de
              privacidad de Google. Puedes desactivar los anuncios personalizados en la configuración de tu
              dispositivo.
            </p>
          </Seccion>

          <Seccion titulo="9. Menores de edad">
            <p>
              Nuestros servicios no están dirigidos a menores de 13 años. Los datos de menores que se requieran
              para un trámite (por ejemplo, beneficiarios de una EPS) solo se tratan con autorización de su
              representante legal y respetando sus derechos.
            </p>
          </Seccion>

          <Seccion titulo="10. Vigencia y cambios">
            <p>
              Esta política rige desde su publicación. Si la cambiamos de forma importante, lo informaremos en este
              sitio. Los datos se conservan mientras sean necesarios para las finalidades descritas o por el tiempo
              que exija la ley.
            </p>
          </Seccion>
        </div>
      </div>
    </div>
  );
}
