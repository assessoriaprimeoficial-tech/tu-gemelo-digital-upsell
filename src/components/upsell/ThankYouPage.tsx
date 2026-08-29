import { CheckCircle } from "lucide-react";

export function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-upsell-bg text-upsell-text">
      {/* Decorative top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-upsell-gold/20 blur-[100px]" />
      </div>

      {/* Brand signature */}
      <div className="relative z-10 flex justify-center pt-8 pb-2 sm:pt-10">
        <span
          className="text-center text-[10px] font-medium tracking-[0.3em] text-white/90 uppercase sm:text-xs"
          aria-label="We Digital Mindset"
        >
          WE{" "}
          <span className="text-upsell-gold">Digital</span>{" "}
          Mindset
        </span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-5 py-8 sm:px-6 sm:py-10">
        {/* Top label */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-upsell-gold uppercase sm:text-sm">
            <CheckCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Compra finalizada
          </span>
        </div>

        {/* Confirmation icon */}
        <div className="mb-8 grid h-20 w-20 place-items-center rounded-full border border-upsell-gold/30 bg-upsell-gold/10 sm:h-24 sm:w-24">
          <CheckCircle className="h-10 w-10 text-upsell-gold sm:h-12 sm:w-12" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1 className="text-center text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
          ¡Gracias por tu compra!
        </h1>

        {/* Main text */}
        <p className="mt-5 text-center text-base leading-relaxed text-upsell-text-muted sm:text-lg">
          Tu pedido ha sido procesado. En unos minutos recibirás en tu correo electrónico las
          instrucciones de acceso a los productos confirmados en tu compra.
        </p>

        {/* Guidance block */}
        <div className="mt-8 w-full rounded-2xl border border-upsell-surface bg-upsell-surface/40 p-6 backdrop-blur-sm sm:p-8">
          <p className="text-center text-sm leading-7 text-upsell-text sm:text-base">
            También puedes encontrar tus productos en tu cuenta de Hotmart. Revisa las carpetas
            Promociones o Spam si el mensaje tarda en aparecer.
          </p>
        </div>

        {/* Closing message */}
        <p className="mt-8 text-center text-sm leading-7 text-upsell-text-muted sm:text-base">
          Este es el comienzo de una nueva etapa. Disfruta cada recurso y conviértelo en acción.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full px-5 py-8 text-center sm:px-6">
        <div className="mx-auto max-w-xl space-y-2">
          <p className="text-[11px] leading-relaxed text-upsell-text-muted sm:text-xs">
            © 2026 We Digital Mindset. Todos los derechos reservados.
          </p>
          <p className="text-[11px] leading-relaxed text-upsell-text-muted/80 sm:text-xs">
            Compra procesada de forma segura por Hotmart.
          </p>
        </div>
      </footer>
    </main>
  );
}
