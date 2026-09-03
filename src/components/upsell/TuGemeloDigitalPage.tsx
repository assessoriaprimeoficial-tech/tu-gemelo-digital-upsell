import { useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  CircleCheck,
  Eye,
  Gauge,
  Layers3,
  Lightbulb,
  LockKeyhole,
  MessageSquareText,
  Mic,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  WandSparkles,
  Zap,
} from "lucide-react";

import coverAsset from "@/assets/tu-gemelo-digital-cover.webp.asset.json";

const HOTMART_SCRIPT_SRC = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
const HOTMART_TARGET_ID = "hotmart-sales-funnel";

function HotmartSalesFunnel() {
  useEffect(() => {
    let cancelled = false;

    const mount = () => {
      if (cancelled) return;
      const w = window as unknown as {
        checkoutElements?: { init: (k: string) => { mount: (s: string) => void } };
      };
      const el = document.getElementById(HOTMART_TARGET_ID);
      if (!w.checkoutElements || !el || el.dataset["mounted"] === "true") return;
      el.dataset["mounted"] = "true";
      w.checkoutElements.init("salesFunnel").mount(`#${HOTMART_TARGET_ID}`);
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HOTMART_SCRIPT_SRC}"]`);
    if (existing) {
      if ((window as unknown as { checkoutElements?: unknown }).checkoutElements) mount();
      else existing.addEventListener("load", mount, { once: true });
      return () => {
        cancelled = true;
        existing.removeEventListener("load", mount);
      };
    }

    const script = document.createElement("script");
    script.src = HOTMART_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", mount, { once: true });
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener("load", mount);
    };
  }, []);

  return <div id={HOTMART_TARGET_ID} className="mx-auto w-full max-w-md" />;
}

const problems = [
  "Cada conversación empieza desde cero.",
  "Tienes que explicar una y otra vez quién eres.",
  "Recibes respuestas genéricas que no suenan como tú.",
  "Tienes ideas, pero cuesta convertirlas en prioridades y acción.",
  "Quieres crear más contenido sin vivir frente a una cámara.",
  "Tu conocimiento no está organizado en un sistema que trabaje contigo.",
];

const pillars = [
  {
    step: "01",
    name: "Tu Mente en GPT",
    tag: "CONOCE",
    icon: Brain,
    title: "Haz que la IA entienda quién eres.",
    text: "Construye tu Perfil Maestro y Prompt Maestro para transferir contexto, identidad, objetivos, conocimientos, valores y forma de comunicar.",
  },
  {
    step: "02",
    name: "Tu Segundo Cerebro",
    tag: "PIENSA",
    icon: Lightbulb,
    title: "Convierte la IA en un compañero estratégico.",
    text: "Usa comandos maestros para ordenar ideas, analizar decisiones, descubrir oportunidades, cuestionar premisas y transformar objetivos en planes.",
  },
  {
    step: "03",
    name: "Tu Gemelo Digital",
    tag: "MULTIPLICA",
    icon: Video,
    title: "Convierte tus ideas en voz, imagen y presencia.",
    text: "Crea avatar, voz, guiones y videos profesionales para contenido, clases, anuncios, tutoriales y proyectos digitales sin depender de grabarte siempre.",
  },
  {
    step: "04",
    name: "El Espejo Digital",
    tag: "EVOLUCIONA",
    icon: Eye,
    title: "Utiliza la IA para observarte con más claridad.",
    text: "Explora patrones de pensamiento, fortalezas, motivaciones, formas de decidir, creencias y oportunidades mediante conversaciones guiadas y superprompts.",
  },
];

const outcomes = [
  { icon: Brain, title: "Personalizar tu IA", text: "Haz que conozca tu contexto y deje de responder como una IA genérica." },
  { icon: Lightbulb, title: "Expandir ideas", text: "Convierte una idea inicial en posibilidades, ángulos y oportunidades nuevas." },
  { icon: Target, title: "Tomar mejores decisiones", text: "Analiza riesgos, prioridades, puntos ciegos y próximos pasos." },
  { icon: Layers3, title: "Organizar tu mente", text: "Transforma información dispersa en estructuras claras y accionables." },
  { icon: MessageSquareText, title: "Crear contenido", text: "Pasa de pensamiento a guiones, mensajes, publicaciones y materiales." },
  { icon: Video, title: "Crear videos con IA", text: "Multiplica tu presencia con avatar, voz y producción más ágil." },
  { icon: Gauge, title: "Ejecutar con velocidad", text: "Reduce fricción entre pensar una idea y ponerla en marcha." },
  { icon: Eye, title: "Ver lo que no estabas viendo", text: "Haz preguntas mejores y detecta patrones que suelen pasar desapercibidos." },
];

const resources = [
  "Perfil Maestro",
  "Prompt Maestro",
  "10 Comandos de Alto Valor",
  "Sistema de Decisiones",
  "Planes de Acción",
  "Análisis de Riesgos",
  "Avatar con IA",
  "Voz con IA",
  "Guiones para Video",
  "Superprompts de Reflexión",
  "Mapa de Fortalezas",
  "Preguntas de Evolución",
];

const journey = ["MAPEAR", "TRANSFERIR", "AMPLIAR", "MULTIPLICAR", "EVOLUIR"];

const faqs = [
  ["¿Necesito saber programar?", "No. El método está pensado para ser aplicado sin programación y sin conocimientos técnicos avanzados de prompts."],
  ["¿Necesito experiencia con inteligencia artificial?", "No. Puedes empezar desde un nivel básico y avanzar siguiendo el proceso de cada recurso."],
  ["¿El método funciona con ChatGPT?", "Sí. Tu Mente en GPT y Tu Segundo Cerebro están diseñados alrededor del uso práctico de ChatGPT como base de trabajo."],
  ["¿Puedo usarlo para mi negocio?", "Sí. Puedes aplicar el sistema para organizar ideas, crear contenido, analizar decisiones, planificar proyectos y transformar conocimiento en ejecución."],
  ["¿Necesito saber editar videos?", "Tu Gemelo Digital está orientado a simplificar la producción con herramientas de IA, reduciendo la dependencia de edición avanzada y grabación constante."],
  ["¿Cómo recibo el acceso?", "Después de la confirmación del pago, el acceso es entregado digitalmente a través del flujo configurado en la plataforma de compra."],
  ["¿El pago es único?", "La oferta mostrada en esta página es presentada como pago único. Confirma siempre las condiciones finales directamente en el checkout antes de concluir la compra."],
  ["¿Cómo funciona la garantía?", "Tienes 7 días para conocer el método y solicitar la garantía dentro del plazo, de acuerdo con las condiciones de la plataforma de compra."],
];

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 text-xs font-black tracking-[0.28em] text-upsell-blue uppercase">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-7 text-upsell-text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}

function CTA({ children = "QUIERO EXPANDIR MI MENTE CON IA" }: { children?: ReactNode }) {
  return (
    <a
      href="#oferta"
      className="upsell-cta inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl px-6 py-5 text-center text-sm font-black tracking-wide text-white uppercase sm:text-base"
    >
      {children}
      <ArrowRight className="h-5 w-5 shrink-0" />
    </a>
  );
}

function ProductCard({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const Icon = pillar.icon;
  return (
    <article className="upsell-product-card relative min-h-[360px] w-[290px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 p-6 sm:w-[340px]">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-upsell-blue/80 to-transparent" />
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.2em] text-upsell-blue">{pillar.step}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-white/70">{pillar.tag}</span>
      </div>
      {index === 2 ? (
        <div className="mb-6 flex justify-center">
          <img src={coverAsset.url} alt="Tu Gemelo Digital" className="h-36 rounded-lg object-cover shadow-2xl shadow-black/50" />
        </div>
      ) : (
        <div className="mb-10 grid h-20 w-20 place-items-center rounded-3xl border border-upsell-blue/20 bg-upsell-blue/10 text-upsell-blue">
          <Icon className="h-9 w-9" />
        </div>
      )}
      <h3 className="text-2xl font-black tracking-tight text-white">{pillar.name}</h3>
      <p className="mt-3 text-sm leading-6 text-upsell-text-muted">{pillar.text}</p>
    </article>
  );
}

export function TuGemeloDigitalPage() {
  return (
    <main className="overflow-hidden bg-upsell-bg text-upsell-text selection:bg-upsell-blue selection:text-white">
      <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[11px] font-black tracking-[0.18em] text-white uppercase sm:text-xs">
        ⚡ Método Mente Expandida · Acceso digital · Garantía de 7 días
      </div>

      <section className="upsell-hero relative px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="upsell-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-upsell-blue/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-upsell-blue/25 bg-upsell-blue/10 px-4 py-2 text-[11px] font-black tracking-[0.22em] text-upsell-blue uppercase sm:text-xs">
              <Sparkles className="h-4 w-4" /> Método Mente Expandida™
            </span>
            <h1 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[86px]">
              Deja de usar la IA como una herramienta.
              <span className="upsell-text-gradient-blue block">Haz que piense contigo.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-xl sm:leading-8">
              Un sistema para convertir la inteligencia artificial en una extensión de tu mente: capaz de conocerte, ayudarte a pensar, multiplicar tus ideas y transformarlas en contenido y acción.
            </p>
            <div className="mt-9 flex justify-center"><CTA /></div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55 sm:text-sm">
              <span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acceso digital</span>
              <span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pago seguro</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> 7 días de garantía</span>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="upsell-brain-core relative mx-auto grid h-56 w-56 place-items-center rounded-full border border-upsell-blue/30 bg-black/40 text-center backdrop-blur-xl sm:h-72 sm:w-72">
              <div><Brain className="mx-auto h-14 w-14 text-upsell-blue sm:h-16 sm:w-16" /><div className="mt-3 text-xs font-black tracking-[0.26em] text-white/50">TU MENTE</div></div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pillars.map((pillar) => <div key={pillar.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur"><div className="text-[10px] font-black tracking-[0.18em] text-upsell-blue">{pillar.tag}</div><div className="mt-2 text-sm font-bold text-white">{pillar.name}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="EL VERDADERO PROBLEMA" title={<>La IA ya es increíble.<br /><span className="text-white/45">Pero todavía no te conoce.</span></>}>
            El problema no es que la inteligencia artificial sea poco inteligente. Es que todavía no conoce tu mente, tu contexto ni la forma en que tú ves el mundo.
          </SectionTitle>
          <div className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2">
            {problems.map((problem) => <div key={problem} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-red-400/20 bg-red-400/10 text-xs text-red-300">×</span><p className="text-sm leading-6 text-white/75 sm:text-base">{problem}</p></div>)}
          </div>
          <div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-upsell-blue/20 bg-upsell-blue/[0.07] p-7 text-center sm:p-10">
            <p className="text-xl font-black tracking-tight text-white sm:text-3xl">No necesitas otra IA genérica.</p>
            <p className="mt-2 text-base text-upsell-text-muted sm:text-lg">Necesitas una inteligencia digital construida alrededor de ti.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="EL SISTEMA" title={<>No son cuatro productos separados.<br /><span className="upsell-text-gradient-blue">Es un método conectado.</span></>}>
            Cada etapa prepara la siguiente para transformar una IA que responde en una inteligencia que conoce, piensa, multiplica y evoluciona contigo.
          </SectionTitle>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {pillars.map((pillar) => { const Icon = pillar.icon; return <article key={pillar.name} className="upsell-panel group relative overflow-hidden rounded-[30px] border border-white/10 p-7 sm:p-9"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-upsell-blue/10 blur-3xl transition group-hover:bg-upsell-blue/20" /><div className="relative flex items-start gap-5"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-upsell-blue/20 bg-upsell-blue/10 text-upsell-blue"><Icon className="h-6 w-6" /></div><div><div className="text-xs font-black tracking-[0.2em] text-upsell-blue">{pillar.step} · {pillar.tag}</div><h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{pillar.name}</h3><p className="mt-3 text-base font-semibold text-white/80">{pillar.title}</p><p className="mt-3 text-sm leading-7 text-upsell-text-muted sm:text-base">{pillar.text}</p></div></div></article>; })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <div className="px-5 sm:px-6"><SectionTitle eyebrow="TU NUEVA FORMA DE USAR IA" title={<>Cinco etapas. <span className="text-white/45">Un solo recorrido.</span></>} /></div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-stretch justify-center gap-2 px-5 sm:flex-row sm:items-center sm:px-6">
          {journey.map((item, index) => <div key={item} className="flex flex-1 items-center gap-2"><div className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-5 text-center text-xs font-black tracking-[0.18em] text-white">{item}</div>{index < journey.length - 1 ? <ArrowRight className="hidden h-4 w-4 shrink-0 text-upsell-blue sm:block" /> : null}</div>)}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="px-5 sm:px-6"><SectionTitle eyebrow="TODO LO QUE FORMA EL MÉTODO" title={<>Cuatro pilares que trabajan <span className="upsell-text-gradient-blue">como un ecosistema.</span></>} /></div>
        <div className="upsell-marquee-mask mt-14 overflow-hidden">
          <div className="upsell-marquee flex w-max gap-5 px-5">
            {[...pillars, ...pillars].map((pillar, index) => <ProductCard key={`${pillar.name}-${index}`} pillar={pillar} index={index % pillars.length} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="EN LA PRÁCTICA" title={<>Mira todo lo que puedes <span className="upsell-text-gradient-blue">hacer con el método.</span></>} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"><div className="grid h-11 w-11 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-black text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-upsell-text-muted">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="px-5 sm:px-6"><SectionTitle eyebrow="RECURSOS" title={<>No es una colección de prompts.<br /><span className="text-white/45">Es una infraestructura de pensamiento.</span></>} /></div>
        <div className="upsell-marquee-mask mt-12 overflow-hidden">
          <div className="upsell-marquee-reverse flex w-max gap-3 px-4">
            {[...resources, ...resources].map((resource, index) => <div key={`${resource}-${index}`} className="flex min-w-[230px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"><div className="grid h-9 w-9 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Check className="h-4 w-4" /></div><span className="text-sm font-bold text-white/85">{resource}</span></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="IMAGINA TENER ESTO" title={<>Abrir ChatGPT y <span className="upsell-text-gradient-blue">no empezar desde cero.</span></>} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4">
            {["Analiza esta decisión teniendo en cuenta mis objetivos, mi forma de pensar y todo el contexto que ya conoces de mí.", "Tengo esta idea. Expándela, encuentra oportunidades que no estoy viendo y conviértela en un plan de acción.", "Convierte este contenido en un guion claro para mi avatar digital y adapta el mensaje a un video corto.", "Hazme preguntas que me ayuden a identificar qué patrón está influyendo en esta decisión."].map((prompt, index) => <div key={prompt} className="flex gap-4 rounded-[24px] border border-white/10 bg-black/25 p-5 sm:p-6"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-upsell-blue/10 text-xs font-black text-upsell-blue">0{index + 1}</div><p className="text-sm leading-7 text-white/80 sm:text-base">“{prompt}”</p></div>)}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-2xl font-black tracking-tight text-white sm:text-3xl">Eso es una inteligencia digital construida alrededor de ti.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="EL RESULTADO" title={<>Conoce. Piensa. Multiplica. Evoluciona.</>}>
            El Método Mente Expandida conecta las cuatro capacidades en un único sistema para ayudarte a pasar del contexto a la claridad, de la claridad a la ejecución y de la ejecución a una presencia que puede crecer contigo.
          </SectionTitle>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-4">
            {pillars.map((pillar) => <div key={pillar.tag} className="rounded-[24px] border border-upsell-blue/15 bg-upsell-blue/[0.06] p-6 text-center"><div className="text-[11px] font-black tracking-[0.2em] text-upsell-blue">{pillar.tag}</div><div className="mt-3 text-base font-black text-white">{pillar.name}</div></div>)}
          </div>
        </div>
      </section>

      <section id="oferta" className="relative border-y border-white/10 bg-black/25 px-5 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[150px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-upsell-gold/25 bg-upsell-gold/10 px-4 py-2 text-xs font-black tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Oferta especial</span>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">Todo el Método Mente Expandida.<span className="block text-white/45">En un solo acceso.</span></h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.045] p-6 text-left backdrop-blur-xl sm:p-9">
            <div className="space-y-4">{pillars.map((pillar) => <div key={pillar.name} className="flex items-center gap-3"><div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-upsell-success/15 text-upsell-success"><Check className="h-4 w-4" /></div><span className="font-bold text-white">{pillar.name}</span></div>)}</div>
            <div className="my-7 h-px bg-white/10" />
            <div className="flex items-center gap-3 text-sm text-white/70"><Check className="h-4 w-4 text-upsell-success" /> Acceso digital inmediato</div>
            <div className="mt-3 flex items-center gap-3 text-sm text-white/70"><Check className="h-4 w-4 text-upsell-success" /> Garantía de 7 días</div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4"><HotmartSalesFunnel /></div>
          </div>
          <p className="mt-5 text-xs leading-5 text-white/40">El precio y las condiciones finales de pago aparecen directamente en el checkout seguro.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto grid h-52 w-52 place-items-center rounded-full border border-upsell-success/25 bg-upsell-success/[0.06] text-center shadow-[0_0_80px_rgba(34,197,94,0.08)] sm:h-64 sm:w-64"><div><ShieldCheck className="mx-auto h-12 w-12 text-upsell-success" /><div className="mt-3 text-5xl font-black text-white">7</div><div className="text-xs font-black tracking-[0.24em] text-white/50">DÍAS</div></div></div>
          <div><div className="text-xs font-black tracking-[0.22em] text-upsell-success uppercase">GARANTÍA</div><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Pruébalo con tranquilidad.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-upsell-text-muted sm:text-lg">Tienes 7 días para conocer el método y decidir si es para ti. Dentro del plazo, puedes solicitar la garantía de acuerdo con las condiciones de la plataforma de compra.</p><div className="mt-7"><CTA>QUIERO ACCEDER AL MÉTODO</CTA></div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="ACCESO SIMPLE" title={<>De la compra a tu nueva <span className="upsell-text-gradient-blue">forma de pensar con IA.</span></>} />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {["Realizas el pago", "Recibes tu acceso", "Entras al Método", "Construyes tu inteligencia digital"].map((step, index) => <div key={step} className="rounded-[24px] border border-white/10 bg-black/20 p-6"><div className="text-xs font-black tracking-[0.2em] text-upsell-blue">0{index + 1}</div><div className="mt-4 text-lg font-black text-white">{step}</div></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="PREGUNTAS FRECUENTES" title="Todo lo que necesitas saber antes de empezar." />
          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white"><span>{question}</span><ChevronDown className="h-5 w-5 shrink-0 text-upsell-blue transition group-open:rotate-180" /></summary><p className="mt-4 pr-6 text-sm leading-7 text-upsell-text-muted sm:text-base">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 px-5 py-24 text-center sm:px-6 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl">
          <WandSparkles className="mx-auto h-10 w-10 text-upsell-blue" />
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">Tu IA ya es inteligente.<span className="upsell-text-gradient-blue block">Ahora haz que sea tuya.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-upsell-text-muted sm:text-lg">Deja de empezar desde cero. Construye una inteligencia digital que conozca tu contexto, piense contigo y te ayude a convertir tus ideas en acción.</p>
          <div className="mt-9 flex justify-center"><CTA /></div>
          <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs font-semibold text-white/45"><span>Acceso digital</span><span>•</span><span>Pago seguro</span><span>•</span><span>7 días de garantía</span></div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/35 sm:px-6">
        <div className="font-black tracking-[0.18em] text-white/55">MÉTODO MENTE EXPANDIDA™</div>
        <p className="mt-3">Producto digital. Resultados dependen de la aplicación individual del método y de las herramientas utilizadas.</p>
      </footer>
    </main>
  );
}
