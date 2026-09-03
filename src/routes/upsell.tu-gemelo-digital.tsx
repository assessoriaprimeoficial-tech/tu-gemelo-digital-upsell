import { createFileRoute } from "@tanstack/react-router";

import { TuGemeloDigitalPage } from "@/components/upsell/TuGemeloDigitalPage";

export const Route = createFileRoute("/upsell/tu-gemelo-digital")({
  head: () => ({
    meta: [
      {
        title: "Método Mente Expandida — Oferta exclusiva",
      },
      {
        name: "description",
        content:
          "Transforme a inteligência artificial em uma extensão da sua mente para conhecer você, pensar com você, multiplicar suas ideias e transformar conhecimento em ação.",
      },
      {
        property: "og:title",
        content: "Método Mente Expandida — Oferta exclusiva",
      },
      {
        property: "og:description",
        content:
          "Uma inteligência digital construída ao seu redor: conheça, pense, multiplique e evolua com a IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TuGemeloDigitalPage,
});
