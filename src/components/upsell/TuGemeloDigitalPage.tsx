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
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  WandSparkles,
} from "lucide-react";

import coverAsset from "@/assets/tu-gemelo-digital-cover.webp.asset.json";
import tuMenteEnGPTCover from "@/assets/tu-mente-en-gpt-cover.png.asset.json";
import tuSegundoCerebroCover from "@/assets/tu-segundo-cerebro-cover.png.asset.json";
import tuGemeloDigitalCover from "@/assets/tu-gemelo-digital-cover.png.asset.json";
import elEspejoDigitalCover from "@/assets/el-espejo-digital-cover.png.asset.json";

const produtoCovers = [
  tuMenteEnGPTCover,
  tuSegundoCerebroCover,
  tuGemeloDigitalCover,
  elEspejoDigitalCover,
];

const depoimentos = [1, 2, 3, 4, 5, 6];

const problemas = [
  "Cada conversa começa do zero.",
  "Você precisa explicar várias vezes quem é e o que quer.",
  "Recebe respostas genéricas que não parecem com você.",
  "Tem boas ideias, mas dificuldade para organizar prioridades e agir.",
  "Quer produzir mais conteúdo sem precisar viver diante de uma câmera.",
  "Seu conhecimento está espalhado e não existe um sistema trabalhando junto com você.",
];

const pilares = [
  { step: "01", name: "Tu Mente en GPT", tag: "CONHECE", icon: Brain, title: "Faça a IA entender quem você é.", text: "Construa seu Perfil Mestre e Prompt Mestre para transferir contexto, identidade, objetivos, conhecimentos, valores e sua forma de se comunicar." },
  { step: "02", name: "Tu Segundo Cerebro", tag: "PENSA", icon: Lightbulb, title: "Transforme a IA em uma parceira estratégica.", text: "Use comandos de alto valor para organizar ideias, analisar decisões, descobrir oportunidades, questionar premissas e transformar objetivos em planos." },
  { step: "03", name: "Tu Gemelo Digital", tag: "MULTIPLICA", icon: Video, title: "Transforme suas ideias em voz, imagem e presença.", text: "Crie avatar, voz, roteiros e vídeos profissionais para conteúdos, aulas, anúncios e projetos digitais sem depender de gravações constantes." },
  { step: "04", name: "El Espejo Digital", tag: "EVOLUI", icon: Eye, title: "Use a IA para se observar com mais clareza.", text: "Explore padrões de pensamento, pontos fortes, motivações, formas de decidir, crenças e oportunidades por meio de conversas guiadas e superprompts." },
];

const resultados = [
  { icon: Brain, title: "Personalizar sua IA", text: "Faça a IA conhecer seu contexto e parar de responder como uma IA genérica." },
  { icon: Lightbulb, title: "Expandir ideias", text: "Transforme uma ideia inicial em possibilidades, ângulos e novas oportunidades." },
  { icon: Target, title: "Tomar melhores decisões", text: "Analise riscos, prioridades, pontos cegos e próximos passos." },
  { icon: Layers3, title: "Organizar sua mente", text: "Transforme informação dispersa em estruturas claras e práticas." },
  { icon: MessageSquareText, title: "Criar conteúdo", text: "Passe do pensamento para roteiros, mensagens, publicações e materiais." },
  { icon: Video, title: "Criar vídeos com IA", text: "Multiplique sua presença com avatar, voz e produção mais ágil." },
  { icon: Gauge, title: "Executar com velocidade", text: "Reduza a distância entre pensar uma ideia e colocá-la em prática." },
  { icon: Eye, title: "Enxergar o que não via", text: "Faça perguntas melhores e identifique padrões que costumam passar despercebidos." },
];

const recursos = ["Perfil Mestre", "Prompt Mestre", "10 Comandos de Alto Valor", "Sistema de Decisões", "Planos de Ação", "Análise de Riscos", "Avatar com IA", "Voz com IA", "Roteiros para Vídeo", "Superprompts de Reflexão", "Mapa de Pontos Fortes", "Perguntas de Evolução"];
const jornada = ["MAPEAR", "TRANSFERIR", "AMPLIAR", "MULTIPLICAR", "EVOLUIR"];
const perguntas = [
  ["Preciso saber programar?", "Não. O método foi pensado para ser aplicado sem programação e sem conhecimento técnico avançado de prompts."],
  ["Preciso ter experiência com inteligência artificial?", "Não. Você pode começar mesmo com pouco conhecimento e avançar seguindo o processo de cada recurso."],
  ["O método funciona com ChatGPT?", "Sim. Tu Mente en GPT e Tu Segundo Cerebro foram pensados para o uso prático do ChatGPT como base de trabalho."],
  ["Posso usar o método no meu negócio?", "Sim. Você pode aplicar o sistema para organizar ideias, criar conteúdo, analisar decisões, planejar projetos e transformar conhecimento em execução."],
  ["Preciso saber editar vídeos?", "Não é necessário dominar edição avançada. Tu Gemelo Digital busca simplificar a produção com ferramentas de inteligência artificial."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, o acesso é entregue digitalmente pelo fluxo configurado na plataforma de compra."],
  ["O pagamento é único?", "A oferta apresentada nesta página é estruturada como pagamento único. Confira as condições finais diretamente no checkout antes de concluir a compra."],
  ["Como funciona a garantia de 7 dias?", "Você tem 7 dias para conhecer o método e solicitar a garantia dentro do prazo, conforme as condições da plataforma de compra."],
];

function TituloSecao({ etiqueta, titulo, children }: { etiqueta: string; titulo: ReactNode; children?: ReactNode }) {
  return <div className="mx-auto max-w-3xl text-center"><div className="mb-4 text-xs font-black tracking-[0.28em] text-upsell-blue uppercase">{etiqueta}</div><h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">{titulo}</h2>{children ? <div className="mt-5 text-base leading-7 text-upsell-text-muted sm:text-lg">{children}</div> : null}</div>;
}

function CTA({ children = "QUERO EXPANDIR MINHA MENTE COM IA" }: { children?: ReactNode }) {
  return <a href="#oferta" className="upsell-cta inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl px-6 py-5 text-center text-sm font-black tracking-wide text-white uppercase sm:text-base">{children}<ArrowRight className="h-5 w-5 shrink-0" /></a>;
}

function CardProduto({ pilar, indice }: { pilar: (typeof pilares)[number]; indice: number }) {
  const Icon = pilar.icon;
  return <article className="upsell-product-card relative min-h-[360px] w-[290px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 p-6 sm:w-[340px]"><div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-upsell-blue/80 to-transparent" /><div className="mb-8 flex items-center justify-between"><span className="text-xs font-black tracking-[0.2em] text-upsell-blue">{pilar.step}</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-white/70">{pilar.tag}</span></div>{indice === 2 ? <div className="mb-6 flex justify-center"><img src={coverAsset.url} alt="Capa Tu Gemelo Digital" className="h-36 rounded-lg object-cover shadow-2xl shadow-black/50" /></div> : <div className="mb-10 grid h-20 w-20 place-items-center rounded-3xl border border-upsell-blue/20 bg-upsell-blue/10 text-upsell-blue"><Icon className="h-9 w-9" /></div>}<h3 className="text-2xl font-black tracking-tight text-white">{pilar.name}</h3><p className="mt-3 text-sm leading-6 text-upsell-text-muted">{pilar.text}</p></article>;
}

export function TuGemeloDigitalPage() {
  return <main className="overflow-hidden bg-upsell-bg text-upsell-text selection:bg-upsell-blue selection:text-white">
    <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[11px] font-black tracking-[0.18em] text-white uppercase sm:text-xs">⚡ Método Mente Expandida · Acesso digital · Garantia de 7 dias</div>

    <section className="upsell-hero relative px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"><div className="upsell-grid pointer-events-none absolute inset-0 opacity-40" /><div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-upsell-blue/15 blur-[140px]" /><div className="relative mx-auto max-w-7xl"><div className="mx-auto max-w-5xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-upsell-blue/25 bg-upsell-blue/10 px-4 py-2 text-[11px] font-black tracking-[0.22em] text-upsell-blue uppercase sm:text-xs"><Sparkles className="h-4 w-4" /> Método Mente Expandida™</span><h1 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[86px]">Pare de usar a IA como uma simples ferramenta.<span className="upsell-text-gradient-blue block">Faça ela pensar com você.</span></h1><p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-xl sm:leading-8">Um sistema para transformar a inteligência artificial em uma extensão da sua mente: capaz de conhecer você, ajudar a pensar, multiplicar suas ideias e transformá-las em conteúdo e ação.</p>
        <div className="mt-9 flex justify-center"><CTA /></div><div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55 sm:text-sm"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acesso digital</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pagamento seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> 7 dias de garantia</span></div></div><div className="relative mx-auto mt-16 max-w-5xl"><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{pilares.map((pilar) => <div key={pilar.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur"><div className="text-[10px] font-black tracking-[0.18em] text-upsell-blue">{pilar.tag}</div><div className="mt-2 text-sm font-bold text-white">{pilar.name}</div></div>)}</div></div></div></section>

    <section className="border-y border-white/10 bg-black/20 px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="O VERDADEIRO PROBLEMA" titulo={<>A IA já é incrível.<br /><span className="text-white/45">Mas ainda não conhece você.</span></>}>O problema não é a inteligência artificial ser pouco inteligente. É que ela ainda não conhece sua mente, seu contexto nem a forma como você enxerga o mundo.</TituloSecao><div className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2">{problemas.map((problema) => <div key={problema} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-red-400/20 bg-red-400/10 text-xs text-red-300">×</span><p className="text-sm leading-6 text-white/75 sm:text-base">{problema}</p></div>)}</div><div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-upsell-blue/20 bg-upsell-blue/[0.07] p-7 text-center sm:p-10"><p className="text-xl font-black tracking-tight text-white sm:text-3xl">Você não precisa de outra IA genérica.</p><p className="mt-2 text-base text-upsell-text-muted sm:text-lg">Precisa de uma inteligência digital construída ao seu redor.</p></div></div></section>

    <section className="px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="O SISTEMA" titulo={<>Não são quatro produtos separados.<br /><span className="upsell-text-gradient-blue">É um método conectado.</span></>}>Cada etapa prepara a próxima para transformar uma IA que responde em uma inteligência que conhece, pensa, multiplica e evolui com você.</TituloSecao><div className="mt-14 grid gap-5 lg:grid-cols-2">{pilares.map((pilar, index) => { const Icon = pilar.icon; const cover = produtoCovers[index]; return <article key={pilar.name} className="upsell-panel group relative overflow-hidden rounded-[30px] border border-white/10 p-7 sm:p-9"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-upsell-blue/10 blur-3xl transition group-hover:bg-upsell-blue/20" /><div className="relative flex flex-col gap-6 sm:flex-row sm:items-start"><div className="order-2 flex flex-1 items-start gap-5 sm:order-1"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-upsell-blue/20 bg-upsell-blue/10 text-upsell-blue"><Icon className="h-6 w-6" /></div><div><div className="text-xs font-black tracking-[0.2em] text-upsell-blue">{pilar.step} · {pilar.tag}</div><h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{pilar.name}</h3><p className="mt-3 text-base font-semibold text-white/80">{pilar.title}</p><p className="mt-3 text-sm leading-7 text-upsell-text-muted sm:text-base">{pilar.text}</p></div></div><div className="order-1 flex shrink-0 justify-center sm:order-2 sm:w-36"><img src={cover?.url} alt={`Capa ${pilar.name}`} className="h-44 rounded-xl object-cover shadow-2xl shadow-black/50 sm:h-auto sm:w-full" /></div></div></article>; })}</div></div></section>

    <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28"><div className="px-5 sm:px-6"><TituloSecao etiqueta="SUA NOVA FORMA DE USAR IA" titulo={<>Cinco etapas. <span className="text-white/45">Um único caminho.</span></>} /></div><div className="mx-auto mt-12 flex max-w-6xl flex-col items-stretch justify-center gap-2 px-5 sm:flex-row sm:items-center sm:px-6">{jornada.map((item, index) => <div key={item} className="flex flex-1 items-center gap-2"><div className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-5 text-center text-xs font-black tracking-[0.18em] text-white">{item}</div>{index < jornada.length - 1 ? <ArrowRight className="hidden h-4 w-4 shrink-0 text-upsell-blue sm:block" /> : null}</div>)}</div></section>

    <section className="py-20 sm:py-28"><div className="px-5 sm:px-6"><TituloSecao etiqueta="OS 4 PILARES" titulo={<>Tudo conectado para construir <span className="upsell-text-gradient-blue">sua inteligência digital.</span></>} /></div><div className="upsell-marquee-mask mt-14 overflow-hidden"><div className="upsell-marquee flex w-max gap-5 px-5">{[...pilares, ...pilares].map((pilar, index) => <CardProduto key={`${pilar.name}-${index}`} pilar={pilar} indice={index % pilares.length} />)}</div></div></section>

    <section className="border-y border-white/10 bg-black/20 px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="NA PRÁTICA" titulo={<>Veja tudo o que você pode <span className="upsell-text-gradient-blue">fazer com o método.</span></>} /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resultados.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"><div className="grid h-11 w-11 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-black text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-upsell-text-muted">{text}</p></article>)}</div></div></section>

    <section className="py-20 sm:py-28"><div className="px-5 sm:px-6"><TituloSecao etiqueta="RECURSOS" titulo={<>Não é uma coleção de prompts.<br /><span className="text-white/45">É uma infraestrutura para sua mente.</span></>} /></div><div className="upsell-marquee-mask mt-12 overflow-hidden"><div className="upsell-marquee-reverse flex w-max gap-3 px-4">{[...recursos, ...recursos].map((recurso, index) => <div key={`${recurso}-${index}`} className="flex min-w-[230px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"><div className="grid h-9 w-9 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Check className="h-4 w-4" /></div><span className="text-sm font-bold text-white/85">{recurso}</span></div>)}</div></div></section>

    <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="IMAGINE TER ISSO" titulo={<>Abrir o ChatGPT e <span className="upsell-text-gradient-blue">não começar do zero.</span></>} /><div className="mx-auto mt-12 grid max-w-5xl gap-4">{["Analise esta decisão levando em conta meus objetivos, minha forma de pensar e todo o contexto que você já conhece sobre mim.", "Tenho esta ideia. Expanda, encontre oportunidades que não estou vendo e transforme em um plano de ação.", "Transforme este conteúdo em um roteiro claro para meu avatar digital e adapte a mensagem para um vídeo curto.", "Faça perguntas que me ajudem a identificar qual padrão está influenciando esta decisão."].map((prompt, index) => <div key={prompt} className="flex gap-4 rounded-[24px] border border-white/10 bg-black/25 p-5 sm:p-6"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-upsell-blue/10 text-xs font-black text-upsell-blue">0{index + 1}</div><p className="text-sm leading-7 text-white/80 sm:text-base">“{prompt}”</p></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-2xl font-black tracking-tight text-white sm:text-3xl">Isso é uma inteligência digital construída ao seu redor.</p></div></section>

    <section className="px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="O RESULTADO" titulo={<>Conheça. Pense. Multiplique. Evolua.</>}>O Método Mente Expandida conecta as quatro capacidades em um único sistema para ajudar você a sair do contexto para a clareza, da clareza para a execução e da execução para uma presença que pode crescer com você.</TituloSecao><div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-4">{pilares.map((pilar) => <div key={pilar.tag} className="rounded-[24px] border border-upsell-blue/15 bg-upsell-blue/[0.06] p-6 text-center"><div className="text-[11px] font-black tracking-[0.2em] text-upsell-blue">{pilar.tag}</div><div className="mt-3 text-base font-black text-white">{pilar.name}</div></div>)}</div></div></section>

    <section id="oferta" className="relative border-y border-white/10 bg-black/25 px-5 py-20 sm:px-6 sm:py-28"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[150px]" /><div className="relative mx-auto max-w-4xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-upsell-gold/25 bg-upsell-gold/10 px-4 py-2 text-xs font-black tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Oferta especial</span><h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">Todo o Método Mente Expandida.<span className="block text-white/45">Em um único acesso.</span></h2><div className="mx-auto mt-10 max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.045] p-6 text-left backdrop-blur-xl sm:p-9"><div className="space-y-4">{pilares.map((pilar) => <div key={pilar.name} className="flex items-center gap-3"><div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-upsell-success/15 text-upsell-success"><Check className="h-4 w-4" /></div><span className="font-bold text-white">{pilar.name}</span></div>)}</div><div className="my-7 h-px bg-white/10" /><div className="flex items-center gap-3 text-sm text-white/70"><Check className="h-4 w-4 text-upsell-success" /> Acesso digital imediato</div><div className="mt-3 flex items-center gap-3 text-sm text-white/70"><Check className="h-4 w-4 text-upsell-success" /> Garantia de 7 dias</div><div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4"><HotmartSalesFunnel /></div></div><p className="mt-5 text-xs leading-5 text-white/40">O preço e as condições finais de pagamento aparecem diretamente no checkout seguro.</p></div></section>

    <section className="px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="mx-auto grid h-52 w-52 place-items-center rounded-full border border-upsell-success/25 bg-upsell-success/[0.06] text-center shadow-[0_0_80px_rgba(34,197,94,0.08)] sm:h-64 sm:w-64"><div><ShieldCheck className="mx-auto h-12 w-12 text-upsell-success" /><div className="mt-3 text-5xl font-black text-white">7</div><div className="text-xs font-black tracking-[0.24em] text-white/50">DIAS</div></div></div><div><div className="text-xs font-black tracking-[0.22em] text-upsell-success uppercase">GARANTIA</div><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Experimente com tranquilidade.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-upsell-text-muted sm:text-lg">Você tem 7 dias para conhecer o método e decidir se ele é para você. Dentro do prazo, pode solicitar a garantia de acordo com as condições da plataforma de compra.</p><div className="mt-7"><CTA>QUERO ACESSAR O MÉTODO</CTA></div></div></div></section>

    <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="ACESSO SIMPLES" titulo={<>Da compra à sua nova <span className="upsell-text-gradient-blue">forma de pensar com IA.</span></>} /><div className="mt-12 grid gap-4 md:grid-cols-4">{["Você realiza o pagamento", "Recebe seu acesso", "Entra no Método", "Constrói sua inteligência digital"].map((passo, index) => <div key={passo} className="rounded-[24px] border border-white/10 bg-black/20 p-6"><div className="text-xs font-black tracking-[0.2em] text-upsell-blue">0{index + 1}</div><div className="mt-4 text-lg font-black text-white">{passo}</div></div>)}</div></div></section>

    <section className="px-5 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-4xl"><TituloSecao etiqueta="PERGUNTAS FREQUENTES" titulo="Tudo o que você precisa saber antes de começar." /><div className="mt-12 space-y-3">{perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white"><span>{pergunta}</span><ChevronDown className="h-5 w-5 shrink-0 text-upsell-blue transition group-open:rotate-180" /></summary><p className="mt-4 pr-6 text-sm leading-7 text-upsell-text-muted sm:text-base">{resposta}</p></details>)}</div></div></section>

    <section className="relative border-t border-white/10 px-5 py-24 text-center sm:px-6 sm:py-32"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[140px]" /><div className="relative mx-auto max-w-5xl"><WandSparkles className="mx-auto h-10 w-10 text-upsell-blue" /><h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">Sua IA já é inteligente.<span className="upsell-text-gradient-blue block">Agora faça ela ser sua.</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-upsell-text-muted sm:text-lg">Pare de começar do zero. Construa uma inteligência digital que conheça seu contexto, pense com você e ajude a transformar suas ideias em ação.</p><div className="mt-9 flex justify-center"><CTA /></div><div className="mt-5 flex flex-wrap justify-center gap-5 text-xs font-semibold text-white/45"><span>Acesso digital</span><span>•</span><span>Pagamento seguro</span><span>•</span><span>7 dias de garantia</span></div></div></section>

    <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/35 sm:px-6"><div className="font-black tracking-[0.18em] text-white/55">MÉTODO MENTE EXPANDIDA™</div><p className="mt-3">Produto digital. Os resultados dependem da aplicação individual do método e das ferramentas utilizadas.</p></footer>
  </main>;
}
