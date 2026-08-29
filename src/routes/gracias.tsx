import { createFileRoute } from "@tanstack/react-router";

import { ThankYouPage } from "@/components/upsell/ThankYouPage";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "Compra finalizada — Tu Gemelo Digital" },
      {
        name: "description",
        content:
          "Gracias por tu compra. Recibirás en tu correo electrónico las instrucciones de acceso a los productos confirmados.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Compra finalizada — Tu Gemelo Digital" },
      {
        property: "og:description",
        content:
          "Gracias por tu compra. Recibirás en tu correo electrónico las instrucciones de acceso a los productos confirmados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://tugemelo.wedigitalmindset.com/gracias",
      },
    ],
  }),
  component: ThankYouPage,
});
