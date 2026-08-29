import { useEffect } from "react";
import { Zap, Mic, Video, Radio, Bot, Clapperboard, Sparkles } from "lucide-react";

import coverAsset from "@/assets/tu-gemelo-digital-cover.webp.asset.json";

const HOTMART_SCRIPT_SRC = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
const HOTMART_TARGET_ID = "hotmart-sales-funnel";

function HotmartSalesFunnel() {
  useEffect(() => {
    let cancelled = false;

    const mount = () => {
      if (cancelled) return;
      const w = window as unknown as { checkoutElements?: { init: (k: string) => { mount: (s: string) => void } } };
      const el = document.getElementById(HOTMART_TARGET_ID);
      if (!w.checkoutElements || !el || el.dataset.mounted === "true") return;
      el.dataset.mounted = "true";
      w.checkoutElements.init("salesFunnel").mount(`#${HOTMART_TARGET_ID}`);
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HOTMART_SCRIPT_SRC}"]`);
    if (existing) {
      if ((window as unknown as { checkoutElements?: unknown }).checkoutElements) {
        mount();
      } else {
        existing.addEventListener("load", mount, { once: true });
      }
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

const benefits = [
  { icon: Bot, text: "Crea un avatar realista alineado con tu imagen y tu marca." },
  { icon: Mic, text: "Utiliza una voz natural con sincronización precisa." },
  { icon: Zap, text: "Produce videos profesionales en aproximadamente 3 minutos." },
  { icon: Radio, text: "Mantén una presencia constante en tus canales digitales." },
  { icon: Video, text: "Automatiza y escala tu contenido con mayor agilidad." },
  { icon: Clapperboard, text: "Transforma ideas, enseñanzas y ofertas en videos listos para publicar." },
];

export function TuGemeloDigitalPage() {
  return (
    <main className="min-h-screen bg-upsell-bg text-upsell-text">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-upsell-blue/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Top notice */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-upsell-gold uppercase sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Oferta exclusiva para compradores de Tu Mente en GPT
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
          Tu imagen. Tu voz. Tu presencia{" "}
          <span className="upsell-text-gradient-blue">creando contenido a escala</span>.
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-center text-base leading-relaxed text-upsell-text-muted sm:text-lg">
          Crea tu Gemelo Digital y transforma una sola grabación en una presencia capaz de
          comunicar, enseñar y vender a través de videos profesionales.
        </p>

        {/* Body text */}
        <p className="mt-6 text-center text-sm leading-7 text-upsell-text-muted sm:text-base">
          Ya tienes en tus manos una nueva forma de trabajar con inteligencia artificial. Ahora
          puedes llevar tus ideas a la pantalla con un avatar que representa tu imagen, reproduce tu
          voz y te permite crear contenido con una velocidad que antes parecía imposible.
        </p>

        {/* Official ebook cover */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-upsell-gold/20 via-upsell-blue/20 to-transparent blur-xl" />
            <img
              src={coverAsset.url}
              alt="Portada oficial de Tu Gemelo Digital — Método Avatar IA"
              width={720}
              height={1020}
              loading="eager"
              decoding="async"
              className="relative z-10 w-64 rounded-xl shadow-2xl shadow-black/40 sm:w-80"
            />
          </div>
        </div>

        {/* Impact block */}
        <div className="mt-12 text-center">
          <p className="upsell-text-gradient-gold text-2xl font-black tracking-tight uppercase sm:text-3xl">
            Graba una vez. Aparece siempre.
          </p>
          <p className="mt-4 text-sm leading-7 text-upsell-text-muted sm:text-base">
            Tu Gemelo Digital te guía paso a paso para convertir tu presencia en un avatar de IA
            preparado para producir videos claros, naturales y profesionales en pocos minutos.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-10 space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-upsell-surface bg-upsell-surface/40 p-4 backdrop-blur-sm"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-upsell-blue/10 text-upsell-blue">
                <benefit.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <p className="text-sm leading-6 text-upsell-text sm:text-base">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Value block */}
        <div className="mt-10 rounded-2xl border border-upsell-gold/20 bg-gradient-to-br from-upsell-gold/10 to-transparent p-6 text-center sm:p-8">
          <p className="text-base leading-relaxed text-upsell-text sm:text-lg">
            Tu conocimiento puede llegar mucho más lejos cuando tu presencia deja de depender del
            tiempo disponible para grabar. Tu Gemelo Digital convierte tu imagen y tu voz en una
            nueva capacidad de comunicación: constante, estratégica y preparada para crecer contigo.
          </p>
        </div>

        {/* Offer block */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-upsell-gold uppercase sm:text-sm">
            Acceso inmediato
          </p>
          <p className="mt-2 text-2xl font-bold text-upsell-text sm:text-3xl">Tu Gemelo Digital</p>
          <p className="mt-3">
            <span className="upsell-text-gradient-gold text-5xl font-black tracking-tight sm:text-6xl">
              US$ 9,99
            </span>
          </p>
          <p className="mt-2 text-sm text-upsell-text-muted">Pago único</p>
        </div>

        {/* Hotmart Sales Funnel widget */}
        <div className="mt-8 rounded-2xl border border-upsell-surface bg-upsell-surface/30 p-4 backdrop-blur-sm sm:p-6">
          <HotmartSalesFunnel />
        </div>
      </div>
    </main>
  );
}
