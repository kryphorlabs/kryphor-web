import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Maru | Kryphor Labs",
  description:
    "Política de privacidad de Maru, juegos para ejercitar la mente cada día: qué datos se guardan, dónde, para qué y cómo borrarlos.",
  alternates: { canonical: "/privacy/maru" },
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
          "Maru es una aplicación de Kryphor Labs (Grupo Kryphor), con domicilio en Armenia, Quindío, Colombia. Kryphor Labs es el responsable del tratamiento de los datos, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
        ],
      },
      {
        titulo: "2. Qué datos guarda la app",
        parrafos: [
          "Maru no pide crear una cuenta y no te pide tu nombre, correo, teléfono ni ningún otro dato personal.",
          "La app guarda únicamente en tu celular:",
        ],
        lista: [
          "Tu progreso: rubíes, nivel de cada juego, la planta que cuidas y tu jardín.",
          "La partida que tengas a medias, para que puedas seguir donde ibas.",
          "Tus ajustes: tamaño de la letra, música, sonidos, voz y la hora del recordatorio.",
          "Tu nombre, solo si lo escribes en Ajustes, para que la app te salude. No sale de tu celular, salvo que juegues ajedrez en línea: ahí lo ven las personas de tu partida (ver punto 4).",
        ],
      },
      {
        titulo: "3. Dónde se guardan",
        parrafos: [
          "Toda esta información se queda en tu celular y no se envía a nuestros servidores. Nosotros no la vemos ni la recibimos. La única excepción es el ajedrez en línea, si lo usas (punto 4).",
          "La voz que lee las instrucciones es la del propio celular, y la música viene dentro de la app: ninguna de las dos usa internet ni envía datos.",
          "Si tienes activada la copia de seguridad de Google en tu celular, Android puede guardar una copia de tu progreso en tu propia cuenta de Google, para recuperarlo si cambias de celular. Esa copia la maneja Android; nosotros no la vemos.",
        ],
      },
      {
        titulo: "4. Ajedrez en línea (solo si lo usas)",
        parrafos: [
          "Si eliges jugar ajedrez en línea con un código, la app se conecta a Firebase, un servicio de Google, para que las jugadas lleguen a las demás personas de la partida. No hace falta crear una cuenta ni iniciar sesión.",
          "Para eso Firebase le asigna al celular un identificador anónimo (un número al azar, sin tu nombre, correo ni teléfono). En la partida se guardan: el código de 6 números, el nombre que se ve en la sala (el que escribiste en Ajustes, o “Jugador” si no escribiste ninguno), si estás conectado y las jugadas.",
          "Esos datos solo los pueden ver quienes están en esa misma partida, viajan cifrados y se usan únicamente para jugar: no se usan para publicidad ni se venden. Si quieres que borremos una partida, escríbenos a " + CORREO + " con su código.",
          "Firebase trata estos datos según la política de Google: https://firebase.google.com/support/privacy",
        ],
      },
      {
        titulo: "5. Publicidad (Google AdMob)",
        parrafos: [
          "Maru es gratis y muestra un anuncio pequeño en la parte de abajo, proporcionado por Google AdMob. También puedes ver un video para ganar rubíes, siempre y solo si tú lo eliges. Si compras \"Maru sin anuncios\", la franja de anuncios desaparece.",
          "Pedimos a Google anuncios no personalizados (no basados en tus intereses). Aun así, para mostrar y medir los anuncios y prevenir fraudes, AdMob puede recopilar datos como el identificador de publicidad del dispositivo, el modelo del celular, el idioma, el país aproximado y cómo interactúas con los anuncios. Ese tratamiento lo hace Google según su propia política: https://policies.google.com/privacy",
          "Puedes restablecer o eliminar tu identificador de publicidad en los ajustes de tu celular (Google → Anuncios).",
        ],
      },
      {
        titulo: "6. Permisos",
        lista: [
          "Internet: para mostrar los anuncios y, solo si juegas ajedrez en línea, para enviar y recibir las jugadas.",
          "Vibración: para dar una respuesta suave al tocar.",
          "Mantener la pantalla encendida mientras la app está abierta (no requiere permisos especiales).",
          "Notificaciones: solo si las permites. Se usan para el recordatorio diario (si lo activas) y para un aviso amable si pasan 3 días sin jugar. Se programan en tu celular; no se envía nada por internet.",
          "Compras de Google Play: solo si eliges comprar \"Maru sin anuncios\", un paquete de rubíes o hacer un aporte voluntario. Todo es opcional. El pago lo procesa Google Play; Maru no recibe ni guarda datos de tu tarjeta. La app solo guarda en tu celular que la compra ya se entregó, para no entregarla dos veces.",
        ],
      },
      {
        titulo: "7. Cómo borrar tus datos",
        parrafos: [
          "Como tu progreso está solo en tu celular, puedes borrarlo cuando quieras desinstalando la app o borrando sus datos desde los ajustes del celular (Aplicaciones → Maru → Almacenamiento → Borrar datos).",
        ],
      },
      {
        titulo: "8. Menores de edad",
        parrafos: [
          "Maru está pensada para personas adultas, especialmente adultos mayores. No está dirigida a menores de 13 años y no recopilamos a sabiendas datos de menores.",
        ],
      },
      {
        titulo: "9. Cambios y contacto",
        parrafos: [
          "Si esta política cambia, publicaremos la nueva versión en esta misma página.",
          "Para cualquier pregunta sobre privacidad, escríbenos a " + CORREO + ". Respondemos en un plazo máximo de 15 días hábiles.",
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
          "Maru is an app by Kryphor Labs (Grupo Kryphor), based in Armenia, Quindío, Colombia. Kryphor Labs is the data controller under Colombian Law 1581 of 2012.",
        ],
      },
      {
        titulo: "2. What the app stores",
        parrafos: [
          "Maru does not ask you to create an account and does not ask for your name, email, phone number or any other personal information.",
          "The app stores only on your phone:",
        ],
        lista: [
          "Your progress: rubies, the level of each game, the plant you care for and your garden.",
          "The game you left unfinished, so you can continue where you were.",
          "Your settings: text size, music, sounds, voice and reminder time.",
          "Your name, only if you type it in Settings, so the app can greet you. It never leaves your phone, unless you play chess online: then the people in your game can see it (see section 4).",
        ],
      },
      {
        titulo: "3. Where it is stored",
        parrafos: [
          "All of this stays on your phone and is not sent to our servers. We do not see or receive it. The only exception is online chess, if you use it (section 4).",
          "If Google backup is turned on on your phone, Android may keep a copy of your progress in your own Google account, so you can recover it if you change phones. Android handles that copy; we never see it.",
          "The voice that reads the instructions is your phone's own voice, and the music is included in the app: neither uses the internet or sends data.",
        ],
      },
      {
        titulo: "4. Online chess (only if you use it)",
        parrafos: [
          "If you choose to play chess online with a code, the app connects to Firebase, a Google service, so your moves reach the other people in the game. You do not need to create an account or sign in.",
          "For this, Firebase gives the phone an anonymous identifier (a random number, without your name, email or phone number). The game stores: the 6-digit code, the name shown in the room (the one you typed in Settings, or “Player” if you did not type one), whether you are connected, and the moves.",
          "Only the people in that same game can see this data. It travels encrypted and is used only to play: it is not used for advertising and it is never sold. If you want us to delete a game, write to " + CORREO + " with its code.",
          "Firebase processes this data under Google's policy: https://firebase.google.com/support/privacy",
        ],
      },
      {
        titulo: "5. Advertising (Google AdMob)",
        parrafos: [
          "Maru is free and shows a small ad at the bottom, provided by Google AdMob. You can also watch a video to earn rubies, only if you choose to. If you buy \"Maru without ads\", the ad strip goes away.",
          "We request non-personalized ads (not based on your interests). Even so, to show and measure ads and to prevent fraud, AdMob may collect data such as the device advertising ID, phone model, language, approximate country and how you interact with ads. Google processes this data under its own policy: https://policies.google.com/privacy",
          "You can reset or delete your advertising ID in your phone settings (Google → Ads).",
        ],
      },
      {
        titulo: "6. Permissions",
        lista: [
          "Internet: to show ads and, only if you play chess online, to send and receive the moves.",
          "Vibration: for gentle feedback when you tap.",
          "Keeping the screen on while the app is open (no special permission needed).",
          "Notifications: only if you allow them. They are used for the daily reminder (if you turn it on) and for a friendly note after 3 days without playing. They are scheduled on your phone; nothing is sent over the internet.",
          "Google Play purchases: only if you choose to buy \"Maru without ads\", a pack of rubies or make a voluntary contribution. Everything is optional. Payment is handled by Google Play; Maru never receives or stores your card details. The app only stores on your phone that the purchase was delivered, so it is never delivered twice.",
        ],
      },
      {
        titulo: "7. How to delete your data",
        parrafos: [
          "Since your progress is only on your phone, you can delete it at any time by uninstalling the app or clearing its data in your phone settings (Apps → Maru → Storage → Clear data).",
        ],
      },
      {
        titulo: "8. Children",
        parrafos: [
          "Maru is designed for adults, especially older adults. It is not directed to children under 13 and we do not knowingly collect data from children.",
        ],
      },
      {
        titulo: "9. Changes and contact",
        parrafos: [
          "If this policy changes, we will publish the new version on this page.",
          "For any privacy question, write to " + CORREO + ". We reply within 15 business days.",
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
          "Maru é um aplicativo da Kryphor Labs (Grupo Kryphor), com sede em Armenia, Quindío, Colômbia. A Kryphor Labs é a responsável pelo tratamento dos dados, conforme a Lei colombiana 1581 de 2012.",
        ],
      },
      {
        titulo: "2. Quais dados o app guarda",
        parrafos: [
          "Maru não pede para criar uma conta e não pede seu nome, e-mail, telefone ou qualquer outro dado pessoal.",
          "O app guarda apenas no seu celular:",
        ],
        lista: [
          "Seu progresso: rubis, nível de cada jogo, a planta que você cuida e seu jardim.",
          "A partida que ficou pela metade, para você continuar de onde parou.",
          "Seus ajustes: tamanho da letra, música, sons, voz e a hora do lembrete.",
          "Seu nome, só se você escrever nos Ajustes, para o app cumprimentar você. Ele não sai do seu celular, a não ser que você jogue xadrez on-line: aí as pessoas da sua partida podem vê-lo (ver item 4).",
        ],
      },
      {
        titulo: "3. Onde ficam guardados",
        parrafos: [
          "Tudo isso fica no seu celular e não é enviado aos nossos servidores. Nós não vemos nem recebemos essas informações. A única exceção é o xadrez on-line, se você usar (item 4).",
          "Se o backup do Google estiver ativado no seu celular, o Android pode guardar uma cópia do seu progresso na sua própria conta Google, para você recuperar se trocar de celular. Essa cópia é do Android; nós não a vemos.",
          "A voz que lê as instruções é a do próprio celular, e a música vem dentro do app: nenhuma das duas usa internet nem envia dados.",
        ],
      },
      {
        titulo: "4. Xadrez on-line (só se você usar)",
        parrafos: [
          "Se você escolher jogar xadrez on-line com um código, o app se conecta ao Firebase, um serviço do Google, para que as jogadas cheguem às outras pessoas da partida. Não é preciso criar uma conta nem fazer login.",
          "Para isso o Firebase dá ao celular um identificador anônimo (um número aleatório, sem seu nome, e-mail ou telefone). Na partida ficam guardados: o código de 6 números, o nome que aparece na sala (o que você escreveu nos Ajustes, ou “Jogador” se não escreveu nenhum), se você está conectado e as jogadas.",
          "Esses dados só podem ser vistos por quem está nessa mesma partida, viajam criptografados e são usados apenas para jogar: não são usados para publicidade nem vendidos. Se quiser que apaguemos uma partida, escreva para " + CORREO + " com o código dela.",
          "O Firebase trata esses dados conforme a política do Google: https://firebase.google.com/support/privacy",
        ],
      },
      {
        titulo: "5. Publicidade (Google AdMob)",
        parrafos: [
          "Maru é grátis e mostra um anúncio pequeno na parte de baixo, fornecido pelo Google AdMob. Você também pode assistir a um vídeo para ganhar rubis, sempre e só se escolher. Se você comprar o \"Maru sem anúncios\", a faixa de anúncios desaparece.",
          "Pedimos ao Google anúncios não personalizados (não baseados nos seus interesses). Mesmo assim, para mostrar e medir os anúncios e prevenir fraudes, o AdMob pode coletar dados como o identificador de publicidade do dispositivo, o modelo do celular, o idioma, o país aproximado e como você interage com os anúncios. O Google trata esses dados conforme sua própria política: https://policies.google.com/privacy",
          "Você pode redefinir ou excluir seu identificador de publicidade nos ajustes do celular (Google → Anúncios).",
        ],
      },
      {
        titulo: "6. Permissões",
        lista: [
          "Internet: para mostrar os anúncios e, só se você jogar xadrez on-line, para enviar e receber as jogadas.",
          "Vibração: para dar uma resposta suave ao tocar.",
          "Manter a tela ligada enquanto o app está aberto (não exige permissões especiais).",
          "Notificações: só se você permitir. São usadas para o lembrete diário (se você ativar) e para um aviso gentil após 3 dias sem jogar. São programadas no seu celular; nada é enviado pela internet.",
          "Compras no Google Play: só se você escolher comprar o \"Maru sem anúncios\", um pacote de rubis ou fazer uma contribuição voluntária. Tudo é opcional. O pagamento é processado pelo Google Play; o Maru não recebe nem guarda dados do seu cartão. O app só guarda no seu celular que a compra já foi entregue, para não entregá-la duas vezes.",
        ],
      },
      {
        titulo: "7. Como apagar seus dados",
        parrafos: [
          "Como seu progresso fica só no celular, você pode apagá-lo quando quiser desinstalando o app ou limpando os dados dele nos ajustes do celular (Apps → Maru → Armazenamento → Limpar dados).",
        ],
      },
      {
        titulo: "8. Menores de idade",
        parrafos: [
          "Maru foi pensado para adultos, especialmente pessoas idosas. Não é direcionado a menores de 13 anos e não coletamos intencionalmente dados de menores.",
        ],
      },
      {
        titulo: "9. Mudanças e contato",
        parrafos: [
          "Se esta política mudar, publicaremos a nova versão nesta mesma página.",
          "Para qualquer dúvida sobre privacidade, escreva para " + CORREO + ". Respondemos em até 15 dias úteis.",
        ],
      },
    ],
  },
];

export default function PrivacidadMaruPage() {
  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="mb-8">
          <p className="font-poppins font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Kryphor Labs
          </p>
          <h1 className="font-poppins font-bold text-4xl mb-3" style={{ color: "var(--fg)" }}>
            Maru
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
