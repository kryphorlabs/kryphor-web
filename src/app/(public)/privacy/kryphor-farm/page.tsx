import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Kryphor Farm | Kryphor Labs",
  description:
    "Política de privacidad de Kryphor Farm, el cuaderno de finca de Kryphor Labs: qué datos se guardan, dónde, para qué y cómo borrarlos.",
  alternates: { canonical: "/privacy/kryphor-farm" },
};

const CORREO = "kryphorlabs@gmail.com";

type Seccion = { titulo: string; parrafos?: string[]; lista?: string[] };
type Version = { idioma: string; ancla: string; titulo: string; actualizado: string; secciones: Seccion[] };

const versiones: Version[] = [
  {
    idioma: "Español",
    ancla: "es",
    titulo: "Política de Privacidad",
    actualizado: "Última actualización: noviembre de 2026",
    secciones: [
      {
        titulo: "1. Quiénes somos",
        parrafos: [
          "Kryphor Farm es una aplicación de Kryphor Labs (Grupo Kryphor), con domicilio en Armenia, Quindío, Colombia. Kryphor Labs es el responsable del tratamiento de los datos personales, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
        ],
      },
      {
        titulo: "2. Qué datos guardamos",
        parrafos: ["La app guarda únicamente lo que tú escribes en tu cuaderno de finca:"],
        lista: [
          "Datos de la finca: nombre, cultivos, lotes, moneda, idioma y país del celular.",
          "Labores, gastos, ventas, pagos y deudas que registras (fechas, valores, notas).",
          "Nombres de los trabajadores y de las personas o negocios a quienes les compras o vendes, si decides escribirlos.",
          "Un identificador de cuenta anónimo que crea la app automáticamente. Si inicias sesión con Google, también tu nombre, correo y foto de perfil de Google.",
        ],
      },
      {
        titulo: "3. Para qué los usamos",
        parrafos: [
          "Solo para que la app funcione: mostrarte tu cuaderno, calcular tus totales y resúmenes, y guardar una copia segura en la nube para que no pierdas tu información si cambias o pierdes el celular.",
          "No vendemos ni alquilamos tus datos. No los usamos para publicidad personalizada. No los compartimos con terceros, salvo con Google Firebase, que es el servicio donde se almacenan.",
        ],
      },
      {
        titulo: "4. Dónde se guardan y cómo se protegen",
        parrafos: [
          "Tus datos se guardan en tu celular (para que la app funcione sin internet) y en Google Firebase, en servidores ubicados en Estados Unidos. Al usar la app aceptas esta transferencia internacional, que cuenta con las garantías de seguridad de Google.",
          "Las reglas de seguridad de la app impiden que una persona vea o modifique los datos de una finca que no es suya. La comunicación con el servidor siempre va cifrada.",
        ],
      },
      {
        titulo: "5. Datos de trabajadores y terceros",
        parrafos: [
          "Si registras nombres de trabajadores u otras personas, eres responsable de contar con su autorización para hacerlo. Te recomendamos anotar solo lo necesario para llevar tus cuentas.",
        ],
      },
      {
        titulo: "6. Cuánto tiempo los guardamos y cómo borrarlos",
        lista: [
          "Si usas la app sin iniciar sesión, tu cuenta anónima y sus datos se borran automáticamente a los 30 días. La app te avisa con tiempo para que te registres si quieres conservarlos.",
          "Si inicias sesión con Google, guardamos tus datos mientras tengas la cuenta. Puedes pedir que borremos tu cuenta y todos sus datos escribiendo a " + CORREO + ".",
          "Puedes borrar cualquier registro desde la app en cualquier momento.",
        ],
      },
      {
        titulo: "7. Tus derechos",
        parrafos: [
          "Como titular de los datos puedes conocer, actualizar, rectificar y pedir la supresión de tu información, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio. Para ejercerlos, escríbenos a " + CORREO + "; respondemos en un máximo de 15 días hábiles.",
        ],
      },
      {
        titulo: "8. Menores de edad",
        parrafos: ["Kryphor Farm está dirigida a personas mayores de 18 años y no recopila intencionalmente datos de menores."],
      },
      {
        titulo: "9. Cambios a esta política",
        parrafos: [
          "Si cambiamos esta política (por ejemplo, al agregar publicidad en la versión gratuita), lo publicaremos aquí y lo avisaremos en la app antes de que el cambio aplique.",
        ],
      },
    ],
  },
  {
    idioma: "English",
    ancla: "en",
    titulo: "Privacy Policy",
    actualizado: "Last updated: November 2026",
    secciones: [
      {
        titulo: "1. Who we are",
        parrafos: [
          "Kryphor Farm is an app by Kryphor Labs (Grupo Kryphor), based in Armenia, Quindío, Colombia. Kryphor Labs is the data controller under Colombian Law 1581 of 2012.",
        ],
      },
      {
        titulo: "2. What we store",
        lista: [
          "Farm data: name, crops, plots, currency, language and the phone's country.",
          "The work, expenses, sales, payments and debts you log (dates, amounts, notes).",
          "Names of workers and of the people or businesses you buy from or sell to, if you choose to write them.",
          "An anonymous account ID created automatically by the app. If you sign in with Google, also your Google name, email and profile picture.",
        ],
      },
      {
        titulo: "3. Why we use it",
        parrafos: [
          "Only to make the app work: show your notebook, calculate totals and summaries, and keep a secure cloud copy so you don't lose your data if you change or lose your phone. We do not sell or rent your data, use it for personalized advertising, or share it with third parties other than Google Firebase, where it is stored.",
        ],
      },
      {
        titulo: "4. Where it is stored",
        parrafos: [
          "On your phone (so the app works offline) and on Google Firebase servers in the United States. Security rules prevent anyone from seeing or changing data of a farm that is not theirs. Communication is always encrypted.",
        ],
      },
      {
        titulo: "5. Retention and deletion",
        lista: [
          "If you use the app without signing in, your anonymous account and its data are deleted automatically after 30 days. The app warns you in advance.",
          "If you sign in with Google, we keep your data while you have the account. You can ask us to delete your account and all its data by writing to " + CORREO + ".",
          "You can delete any entry from the app at any time.",
        ],
      },
      {
        titulo: "6. Your rights and contact",
        parrafos: [
          "You can access, update, correct and request deletion of your data by writing to " + CORREO + ". We reply within 15 business days. Kryphor Farm is intended for adults (18+).",
        ],
      },
    ],
  },
  {
    idioma: "Português",
    ancla: "pt",
    titulo: "Política de Privacidade",
    actualizado: "Última atualização: novembro de 2026",
    secciones: [
      {
        titulo: "1. Quem somos",
        parrafos: [
          "O Kryphor Farm é um aplicativo da Kryphor Labs (Grupo Kryphor), com sede em Armenia, Quindío, Colômbia. A Kryphor Labs é a controladora dos dados, conforme a Lei colombiana 1581 de 2012.",
        ],
      },
      {
        titulo: "2. Quais dados guardamos",
        lista: [
          "Dados da fazenda: nome, culturas, talhões, moeda, idioma e país do celular.",
          "Os trabalhos, gastos, vendas, pagamentos e dívidas que você registra (datas, valores, observações).",
          "Nomes de trabalhadores e de pessoas ou empresas de quem você compra ou para quem vende, se você decidir escrevê-los.",
          "Um identificador de conta anônimo criado automaticamente. Se você entrar com o Google, também seu nome, e-mail e foto do Google.",
        ],
      },
      {
        titulo: "3. Para que usamos",
        parrafos: [
          "Apenas para o aplicativo funcionar: mostrar seu caderno, calcular totais e resumos e guardar uma cópia segura na nuvem. Não vendemos nem alugamos seus dados, não os usamos para publicidade personalizada e não os compartilhamos com terceiros, exceto o Google Firebase, onde ficam armazenados.",
        ],
      },
      {
        titulo: "4. Onde ficam armazenados",
        parrafos: [
          "No seu celular (para funcionar sem internet) e nos servidores do Google Firebase nos Estados Unidos. Regras de segurança impedem que alguém veja ou altere dados de uma fazenda que não é sua. A comunicação é sempre criptografada.",
        ],
      },
      {
        titulo: "5. Prazo e exclusão",
        lista: [
          "Se você usa o aplicativo sem entrar com uma conta, a conta anônima e seus dados são apagados automaticamente após 30 dias. O aplicativo avisa antes.",
          "Se você entrar com o Google, guardamos seus dados enquanto tiver a conta. Você pode pedir a exclusão da conta e de todos os dados escrevendo para " + CORREO + ".",
          "Você pode apagar qualquer registro pelo aplicativo a qualquer momento.",
        ],
      },
      {
        titulo: "6. Seus direitos e contato",
        parrafos: [
          "Você pode acessar, atualizar, corrigir e pedir a exclusão dos seus dados escrevendo para " + CORREO + ". Respondemos em até 15 dias úteis. O Kryphor Farm é destinado a maiores de 18 anos.",
        ],
      },
    ],
  },
];

export default function PrivacidadKryphorFarmPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-8">
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Kryphor Labs
          </p>
          <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--fg)" }}>
            Kryphor Farm
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
