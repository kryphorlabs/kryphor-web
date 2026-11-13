import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio — Kryphor Labs",
  description:
    "Términos de servicio de las aplicaciones de Kryphor Labs (Mi Devocionario, Kryphor Farm): uso, publicidad, suscripciones, reembolsos y contacto.",
  alternates: { canonical: "/terms" },
};

const CORREO = "kryphorlabs@gmail.com";

type Seccion = { titulo: string; parrafos?: string[]; lista?: string[] };
type Version = { idioma: string; ancla: string; titulo: string; actualizado: string; secciones: Seccion[] };

const versiones: Version[] = [
  {
    idioma: "Español",
    ancla: "es",
    titulo: "Términos de Servicio",
    actualizado: "Última actualización: noviembre de 2026",
    secciones: [
      {
        titulo: "1. Quiénes somos",
        parrafos: [
          "Estos términos aplican a las aplicaciones y servicios de Kryphor Labs (Grupo Kryphor), con domicilio en Armenia, Quindío, Colombia, incluidas Mi Devocionario y Kryphor Farm, y al sitio kryphorlabs.com. Al descargar o usar nuestras aplicaciones aceptas estos términos. Si no estás de acuerdo, no las uses.",
        ],
      },
      {
        titulo: "2. Uso aceptable",
        lista: [
          "Usar las aplicaciones solo para fines legales y personales o de tu negocio.",
          "No intentar acceder sin autorización a sistemas, cuentas o datos de otras personas.",
          "No interferir con el funcionamiento de las aplicaciones ni copiar o descompilar el software.",
          "Ser responsable de la información que registras y de contar con autorización para registrar datos de terceros.",
        ],
      },
      {
        titulo: "3. Versión gratuita y publicidad",
        parrafos: [
          "Algunas aplicaciones tienen una versión gratuita que puede mostrar anuncios a través de Google AdMob. Los anuncios se muestran de forma no intrusiva y pueden desactivarse con una suscripción o compra, cuando la aplicación la ofrezca.",
        ],
      },
      {
        titulo: "4. Suscripciones, pagos y reembolsos",
        lista: [
          "Las compras y suscripciones se cobran a través de Google Play o App Store, con el medio de pago de tu cuenta. El precio se muestra antes de confirmar.",
          "Las suscripciones se renuevan automáticamente al final de cada periodo, salvo que las canceles antes desde Google Play o App Store. Al cancelar conservas los beneficios hasta el final del periodo pagado.",
          "Los reembolsos se rigen por las políticas de Google Play o App Store. Si tienes un problema con un cobro, escríbenos y te ayudamos.",
          "Esto no limita los derechos que te concede la ley de protección al consumidor de tu país.",
        ],
      },
      {
        titulo: "5. Contenido de las aplicaciones",
        lista: [
          "Mi Devocionario ofrece contenido religioso con fines de oración y reflexión personal.",
          "Kryphor Farm es una herramienta para anotar las cuentas de la finca. Los totales y resúmenes dependen de lo que registras y no reemplazan la asesoría contable, tributaria ni legal.",
        ],
      },
      {
        titulo: "6. Datos personales",
        parrafos: [
          "El tratamiento de tus datos se explica en la política de privacidad de cada aplicación, publicada en kryphorlabs.com/privacy, conforme a la Ley 1581 de 2012 de Colombia.",
        ],
      },
      {
        titulo: "7. Propiedad intelectual",
        parrafos: [
          "El código, los diseños, los logotipos y los contenidos propios de las aplicaciones pertenecen a Kryphor Labs. Los datos que tú registras son tuyos.",
        ],
      },
      {
        titulo: "8. Responsabilidad",
        parrafos: [
          "Trabajamos para que las aplicaciones funcionen bien y protejan tu información, pero se ofrecen \"tal como están\". En la medida que la ley lo permita, Kryphor Labs no responde por daños indirectos derivados de su uso.",
        ],
      },
      {
        titulo: "9. Cambios y ley aplicable",
        parrafos: [
          "Si cambiamos estos términos, publicaremos la nueva versión aquí y, si el cambio es importante, lo avisaremos en la aplicación. Estos términos se rigen por las leyes de Colombia, sin perjuicio de los derechos del consumidor que te otorgue la ley de tu país.",
        ],
      },
      {
        titulo: "10. Contacto",
        parrafos: ["Para cualquier consulta, reclamo o solicitud: " + CORREO + "."],
      },
    ],
  },
  {
    idioma: "English",
    ancla: "en",
    titulo: "Terms of Service",
    actualizado: "Last updated: November 2026",
    secciones: [
      {
        titulo: "1. Who we are",
        parrafos: [
          "These terms apply to the apps and services of Kryphor Labs (Grupo Kryphor), based in Armenia, Quindío, Colombia, including Mi Devocionario and Kryphor Farm, and to kryphorlabs.com. By downloading or using our apps you accept these terms. If you do not agree, do not use them.",
        ],
      },
      {
        titulo: "2. Acceptable use",
        lista: [
          "Use the apps only for lawful personal or business purposes.",
          "Do not attempt unauthorized access to systems, accounts or other people's data.",
          "Do not interfere with the apps or copy or decompile the software.",
          "You are responsible for the information you enter and for having permission to record third-party data.",
        ],
      },
      {
        titulo: "3. Free version and advertising",
        parrafos: [
          "Some apps have a free version that may show ads through Google AdMob. Ads are non-intrusive and can be removed with a subscription or purchase where the app offers one.",
        ],
      },
      {
        titulo: "4. Subscriptions, payments and refunds",
        lista: [
          "Purchases and subscriptions are charged through Google Play or the App Store using your account's payment method. The price is shown before you confirm.",
          "Subscriptions renew automatically at the end of each period unless you cancel beforehand in Google Play or the App Store. After cancelling you keep the benefits until the end of the paid period.",
          "Refunds follow Google Play or App Store policies. If you have a problem with a charge, write to us and we will help.",
          "Nothing here limits the rights granted to you by the consumer protection law of your country.",
        ],
      },
      {
        titulo: "5. App content",
        lista: [
          "Mi Devocionario offers religious content for personal prayer and reflection.",
          "Kryphor Farm is a tool to record farm accounts. Totals and summaries depend on what you enter and are not accounting, tax or legal advice.",
        ],
      },
      {
        titulo: "6. Personal data",
        parrafos: [
          "How we handle your data is explained in each app's privacy policy at kryphorlabs.com/privacy, in accordance with Colombian Law 1581 of 2012.",
        ],
      },
      {
        titulo: "7. Intellectual property",
        parrafos: [
          "The code, designs, logos and original content of the apps belong to Kryphor Labs. The data you enter belongs to you.",
        ],
      },
      {
        titulo: "8. Liability",
        parrafos: [
          "We work to keep the apps reliable and your information safe, but they are provided \"as is\". To the extent permitted by law, Kryphor Labs is not liable for indirect damages arising from their use.",
        ],
      },
      {
        titulo: "9. Changes and governing law",
        parrafos: [
          "If we change these terms we will publish the new version here and, for important changes, notify you in the app. These terms are governed by the laws of Colombia, without prejudice to the consumer rights granted by the law of your country.",
        ],
      },
      {
        titulo: "10. Contact",
        parrafos: ["For any question, complaint or request: " + CORREO + "."],
      },
    ],
  },
  {
    idioma: "Português",
    ancla: "pt",
    titulo: "Termos de Serviço",
    actualizado: "Última atualização: novembro de 2026",
    secciones: [
      {
        titulo: "1. Quem somos",
        parrafos: [
          "Estes termos se aplicam aos aplicativos e serviços da Kryphor Labs (Grupo Kryphor), com sede em Armenia, Quindío, Colômbia, incluindo Mi Devocionario e Kryphor Farm, e ao site kryphorlabs.com. Ao baixar ou usar nossos aplicativos, você aceita estes termos. Se não concordar, não os use.",
        ],
      },
      {
        titulo: "2. Uso aceitável",
        lista: [
          "Usar os aplicativos apenas para fins legais, pessoais ou do seu negócio.",
          "Não tentar acessar sem autorização sistemas, contas ou dados de outras pessoas.",
          "Não interferir no funcionamento dos aplicativos nem copiar ou descompilar o software.",
          "Você é responsável pelas informações que registra e por ter autorização para registrar dados de terceiros.",
        ],
      },
      {
        titulo: "3. Versão gratuita e publicidade",
        parrafos: [
          "Alguns aplicativos têm uma versão gratuita que pode exibir anúncios pelo Google AdMob. Os anúncios não são intrusivos e podem ser removidos com uma assinatura ou compra, quando o aplicativo oferecer.",
        ],
      },
      {
        titulo: "4. Assinaturas, pagamentos e reembolsos",
        lista: [
          "Compras e assinaturas são cobradas pelo Google Play ou pela App Store, com a forma de pagamento da sua conta. O preço é mostrado antes de confirmar.",
          "As assinaturas são renovadas automaticamente ao fim de cada período, a menos que você cancele antes no Google Play ou na App Store. Ao cancelar, você mantém os benefícios até o fim do período pago.",
          "Os reembolsos seguem as políticas do Google Play ou da App Store. Se tiver um problema com uma cobrança, escreva para nós e ajudamos.",
          "Nada aqui limita os direitos garantidos pela lei de defesa do consumidor do seu país.",
        ],
      },
      {
        titulo: "5. Conteúdo dos aplicativos",
        lista: [
          "O Mi Devocionario oferece conteúdo religioso para oração e reflexão pessoal.",
          "O Kryphor Farm é uma ferramenta para anotar as contas da propriedade rural. Totais e resumos dependem do que você registra e não substituem assessoria contábil, tributária ou jurídica.",
        ],
      },
      {
        titulo: "6. Dados pessoais",
        parrafos: [
          "O tratamento dos seus dados é explicado na política de privacidade de cada aplicativo, em kryphorlabs.com/privacy, conforme a Lei colombiana 1581 de 2012.",
        ],
      },
      {
        titulo: "7. Propriedade intelectual",
        parrafos: [
          "O código, os designs, os logotipos e o conteúdo próprio dos aplicativos pertencem à Kryphor Labs. Os dados que você registra são seus.",
        ],
      },
      {
        titulo: "8. Responsabilidade",
        parrafos: [
          "Trabalhamos para que os aplicativos funcionem bem e protejam suas informações, mas eles são oferecidos \"no estado em que se encontram\". Na medida permitida por lei, a Kryphor Labs não responde por danos indiretos decorrentes do uso.",
        ],
      },
      {
        titulo: "9. Alterações e lei aplicável",
        parrafos: [
          "Se alterarmos estes termos, publicaremos a nova versão aqui e, se a mudança for importante, avisaremos no aplicativo. Estes termos são regidos pelas leis da Colômbia, sem prejuízo dos direitos do consumidor garantidos pela lei do seu país.",
        ],
      },
      {
        titulo: "10. Contato",
        parrafos: ["Para qualquer dúvida, reclamação ou solicitação: " + CORREO + "."],
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-8">
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Kryphor Labs
          </p>
          <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--fg)" }}>
            Términos de Servicio
          </h1>
          <nav className="flex flex-wrap gap-3 font-inter text-sm">
            {versiones.map((v) => (
              <a key={v.ancla} href={`#${v.ancla}`} className="underline" style={{ color: "var(--accent)" }}>
                {v.idioma}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-12">
          {versiones.map((v) => (
            <article
              key={v.ancla}
              id={v.ancla}
              className="glass rounded-3xl p-8 sm:p-10 space-y-8 font-inter leading-relaxed scroll-mt-24"
              style={{ color: "var(--fg-muted)" }}
            >
              <header>
                <h2 className="font-poppins font-bold text-2xl mb-1" style={{ color: "var(--fg)" }}>
                  {v.titulo}
                </h2>
                <p className="text-sm">{v.actualizado}</p>
              </header>
              {v.secciones.map((s) => (
                <section key={s.titulo}>
                  <h3 className="font-poppins font-bold text-xl mb-3" style={{ color: "var(--fg)" }}>
                    {s.titulo}
                  </h3>
                  {s.parrafos?.map((p) => (
                    <p key={p} className="mb-3">
                      {p}
                    </p>
                  ))}
                  {s.lista ? (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {s.lista.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
