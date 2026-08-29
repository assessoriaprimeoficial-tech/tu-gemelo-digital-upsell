import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Target,
  Lightbulb,
  MessageSquareText,
  Rocket,
  RefreshCw,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

import ebookCover from "@/assets/tu-gemelo-digital-cover.jpg";

export const Route = createFileRoute("/upsell/tu-gemelo-digital")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Tu Gemelo Digital — Oferta exclusiva",
      },
      {
        name: "description",
        content:
          "Oferta exclusiva disponible solo en este momento. Añade Tu Gemelo Digital a tu compra y lleva tu inteligencia artificial al siguiente nivel.",
      },
      {
        property: "og:title",
        content: "Tu Gemelo Digital — Oferta exclusiva",
      },
      {
        property: "og:description",
        content:
          "Convierte ChatGPT en una extensión digital de tu mente. Una inteligencia que comprende tu contexto, tu lógica y tus objetivos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpsellPage,
});

const benefits = [
  {
    icon: Brain,
    text: "Conserva tu contexto y entiende mejor tus objetivos.",
  },
  {
    icon: Target,
    text: "Organiza tus ideas dentro de tu propia lógica.",
  },
  {
    icon: MessageSquareText,
    text: "Reduce la necesidad de explicar lo mismo en cada conversación.",
  },
  {
    icon: Lightbulb,
    text: "Te ayuda a crear, decidir y desarrollar proyectos con mayor claridad.",
  },
  {
    icon: RefreshCw,
    text: "Evoluciona contigo y se vuelve cada vez más preciso.",
  },
];

function UpsellPage() {
  return (
    <main className="min-h-screen bg-upsell-bg text-upsell-text">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-upsell-blue/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Top notice */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-4 py-2 text-xs font-semibold tracking-wide text-upsell-gold uppercase sm:text-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Espera — tu compra aún puede ir mucho más lejos
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ya tienes el método. Ahora puedes crear la{" "}
          <span className="upsell-text-gradient-blue">IA que piensa contigo</span>.
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-center text-base leading-relaxed text-upsell-text-muted sm:text-lg">
          Convierte ChatGPT en una extensión digital de tu mente: una inteligencia que comprende tu
          contexto, tu lógica, tus objetivos y tu forma particular de crear.
        </p>

        {/* Body text */}
        <p className="mt-6 text-center text-sm leading-7 text-upsell-text-muted sm:text-base">
          <span className="text-upsell-text">Tu Mente en GPT</span> te muestra cómo transferir tu
          forma de pensar a la inteligencia artificial.{" "}
          <span className="text-upsell-gold">Tu Gemelo Digital</span> te guía en el siguiente
          nivel: construir una presencia digital personalizada que conserve tu esencia, comprenda lo
          que quieres lograr y trabaje contigo desde un punto de partida mucho más avanzado.
        </p>

        {/* Ebook cover placeholder */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-upsell-gold/20 via-upsell-blue/20 to-transparent blur-xl" />
            <img
              src={ebookCover}
              alt="Portada del ebook Tu Gemelo Digital"
              width={320}
              height={320}
              className="relative z-10 w-64 rounded-xl shadow-2xl shadow-black/40 sm:w-72"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 space-y-4">
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

        {/* Connection block */}
        <div className="mt-10 rounded-2xl border border-upsell-gold/20 bg-gradient-to-br from-upsell-gold/10 to-transparent p-6 text-center sm:p-8">
          <Rocket
            className="mx-auto h-6 w-6 text-upsell-gold"
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <p className="mt-4 text-base leading-relaxed text-upsell-text sm:text-lg">
            No se trata solamente de usar ChatGPT. Se trata de construir una inteligencia capaz de
            reconocerte, acompañar tu evolución y ayudarte a convertir tus ideas en acciones.
          </p>
        </div>

        {/* Offer block */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold tracking-widest text-upsell-gold uppercase sm:text-sm">
            Oferta exclusiva disponible solo en este momento
          </p>
          <p className="mt-3 text-lg font-medium text-upsell-text sm:text-xl">
            Accede ahora a Tu Gemelo Digital por{" "}
            <span className="upsell-text-gradient-gold font-bold">[PRECIO DE LA OFERTA]</span>
          </p>
        </div>

        {/* Hotmart accept button placeholder */}
        <div className="mt-8">
          {/* Reemplazar este div por el widget oficial de aceptación de Hotmart */}
          <button
            type="button"
            disabled
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl upsell-gradient-gold px-6 py-4 text-base font-bold text-upsell-bg shadow-lg upsell-glow-gold transition-transform active:scale-[0.98] sm:py-5 sm:text-lg"
          >
            <Check className="h-5 w-5" aria-hidden="true" />
            SÍ, QUIERO AÑADIR TU GEMELO DIGITAL
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
          <p className="mt-2 text-center text-xs text-upsell-text-muted/70">
            Espacio reservado para el botón oficial de aceptación de Hotmart.
          </p>
        </div>

        {/* Hotmart decline link placeholder */}
        <div className="mt-5 text-center">
          {/* Reemplazar este span por el link oficial de rechazo de Hotmart */}
          <span className="inline-block cursor-pointer text-sm text-upsell-text-muted underline-offset-4 transition-colors hover:text-upsell-text hover:underline">
            No, gracias. Quiero continuar sin Tu Gemelo Digital.
          </span>
          <p className="mt-1 text-xs text-upsell-text-muted/60">
            Espacio reservado para el link oficial de rechazo de Hotmart.
          </p>
        </div>

        {/* Trust microcopy */}
        <p className="mt-10 text-center text-xs leading-5 text-upsell-text-muted/60">
          Esta oferta es exclusiva para compradores de Tu Mente en GPT. Sin compromisos adicionales.
        </p>
      </div>
    </main>
  );
}
