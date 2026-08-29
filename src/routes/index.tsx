import { createFileRoute } from "@tanstack/react-router";

import { TuGemeloDigitalPage } from "@/components/upsell/TuGemeloDigitalPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Tu Gemelo Digital — Oferta exclusiva",
      },
      {
        name: "description",
        content:
          "Crea tu Gemelo Digital: un avatar de IA con tu imagen y tu voz para producir videos profesionales en minutos. Oferta exclusiva para compradores de Tu Mente en GPT.",
      },
      {
        property: "og:title",
        content: "Tu Gemelo Digital — Oferta exclusiva",
      },
      {
        property: "og:description",
        content:
          "Tu imagen. Tu voz. Tu presencia creando contenido a escala. Graba una vez, aparece siempre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TuGemeloDigitalPage,
});
