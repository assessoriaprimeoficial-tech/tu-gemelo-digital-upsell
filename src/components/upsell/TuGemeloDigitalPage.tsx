import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
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
  X,
} from "lucide-react";

import tuMenteEnGPTCover from "@/assets/tu-mente-en-gpt-cover-v2.png.asset.json";
import tuSegundoCerebroCover from "@/assets/tu-segundo-cerebro-cover-v2.png.asset.json";
import tuGemeloDigitalCover from "@/assets/tu-gemelo-digital-cover-v2.png.asset.json";
import elEspejoDigitalCover from "@/assets/el-espejo-digital-cover-v2.png.asset.json";
import depoimento10 from "@/assets/depoimento-10.png.asset.json";
import depoimento11 from "@/assets/depoimento-11.png.asset.json";
import depoimento12 from "@/assets/depoimento-12.png.asset.json";
import depoimento13 from "@/assets/depoimento-13.png.asset.json";
import depoimento14 from "@/assets/depoimento-14.png.asset.json";
import depoimento15 from "@/assets/depoimento-15.png.asset.json";
import ofertaTuMente from "@/assets/oferta-tu-mente-en-gpt.png.asset.json";
import ofertaEspejo from "@/assets/oferta-el-espejo-digital.png.asset.json";
import pilarMenteLifestyle from "@/assets/pilar-mente-lifestyle.png.asset.json";
import pilarCerebroLifestyle from "@/assets/pilar-cerebro-lifestyle.png.asset.json";
import pilarGemeloLifestyle from "@/assets/pilar-gemelo-lifestyle.png.asset.json";
import heroCover from "@/assets/hero-tu-mente-en-gpt-v2.png.asset.json";

const produtoCovers = [tuMenteEnGPTCover, tuSegundoCerebroCover, tuGemeloDigitalCover, elEspejoDigitalCover];
const pilarImagens = [...produtoCovers, pilarMenteLifestyle, pilarCerebroLifestyle, pilarGemeloLifestyle];
const depoimentos = [depoimento10, depoimento11, depoimento12, depoimento13, depoimento14, depoimento15];

const faixaItens = ["MÉTODO MENTE EXPANDIDA™", "GUIA PRINCIPAL + BÔNUS GRÁTIS", "PAGAMENTO ÚNICO", "ACESSO IMEDIATO", "GARANTIA DE 7 DIAS", "SUA IA, DO SEU JEITO"];

const typewriterWords = ["CRIAR.", "APRENDER.", "PRODUZIR.", "CONQUISTAR."];

function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[wordIndex]!;
    let delay: number;
    if (!deleting && charCount < word.length) delay = 110;
    else if (!deleting && charCount === word.length) delay = 1700;
    else if (deleting && charCount > 0) delay = 60;
    else delay = 350;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charCount < word.length) setCharCount(charCount + 1);
        else setDeleting(true);
      } else {
        if (charCount > 0) setCharCount(charCount - 1);
        else {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % typewriterWords.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charCount, deleting, wordIndex]);

  return (
    <span className="relative inline-flex items-baseline" aria-live="polite">
      <span className="opacity-0" aria-hidden="true">CONQUISTAR.</span>
      <span className="upsell-text-gradient-gold absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap" aria-hidden="true">
        {typewriterWords[wordIndex]!.slice(0, charCount)}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-upsell-gold align-baseline" />
      </span>
      <span className="sr-only">{typewriterWords[wordIndex]}</span>
    </span>
  );
}

const problemas = [
  "Você abre o chat e começa do zero. Todos os dias. Em toda conversa.",
  "Perde minutos (e energia) explicando de novo quem você é, o que faz e o que quer conquistar.",
  "Recebe respostas genéricas que poderiam ter sido escritas para qualquer pessoa — menos para você.",
  "Tem boas ideias, mas elas ficam na cabeça porque você não consegue organizar, priorizar nem executar.",
  "Sabe que conteúdo vende, mas não quer passar a vida gravando na frente de uma câmera.",
  "Todo o seu conhecimento está espalhado: notas, chats, ideias… e nenhum sistema transforma isso em resultado.",
];
const CHECKOUT = { mente: "#oferta", cerebro: "#oferta-segundo-cerebro", gemelo: "#oferta-gemelo", combo: "#combo" };
const beneficiosMente = [
  "Ensinar à IA quem você é e como trabalha",
  "Configurar seu tom de voz e suas preferências",
  "Organizar informações sobre seus produtos e seu público",
  "Transformar seu conhecimento em uma base consultável",
  "Receber respostas mais coerentes com seu contexto",
  "Reduzir correções, repetições e retrabalho",
  "Criar conteúdos sem apagar sua personalidade",
  "Ter uma inteligência preparada para começar do lugar certo",
];
const beneficiosEspejo = [
  "Padrões de pensamento que aparecem repetidamente",
  "Maneiras recorrentes de tomar decisões",
  "Forças e habilidades que você talvez esteja subestimando",
  "Possíveis crenças e bloqueios presentes nas suas falas",
  "Temas que ocupam sua atenção com frequência",
  "Oportunidades que podem estar diante de você sem serem reconhecidas",
  "Mudanças que aconteceram ao longo da sua trajetória",
  "Um verdadeiro “manual da sua mente”",
];
const individuais = [
  { name: "Tu Segundo Cerebro", icon: Lightbulb, hook: "Sua cabeça tem ideias demais e clareza de menos?", text: "10 comandos mestres, prontos para copiar e aplicar, para transformar a IA em uma parceira de raciocínio estratégico: organizar pensamentos, questionar premissas, revelar pontos cegos e transformar ideias em decisões e planos concretos.", bullets: ["Organize seu caos mental em poucos passos", "Enxergue riscos e oportunidades ocultas", "Transforme ideias em decisões e execução"], resultado: "RESULTADO: UMA INTELIGÊNCIA QUE PENSA COM VOCÊ.", cta: "QUERO ATIVAR MEU SEGUNDO CÉREBRO", href: "#oferta-segundo-cerebro" },
  { name: "Tu Gemelo Digital", icon: Video, hook: "Crie uma vez. Apareça muitas vezes.", text: "Um processo rápido e surpreendentemente fácil para transformar textos em vídeos com avatar e voz — mesmo que você não goste de gravar, tenha pouco tempo ou nunca tenha editado um vídeo.", bullets: ["Crie seu avatar digital passo a passo", "Transforme roteiros em vídeos em poucos minutos", "Multiplique sua presença sem gravar todos os dias"], resultado: "RESULTADO: SUAS IDEIAS GANHAM VOZ, IMAGEM E PRESENÇA.", cta: "QUERO CRIAR MEU GÊMEO DIGITAL", href: "#oferta-gemelo" },
];
const comboItens = [
  { nome: "Tu Mente en GPT", etiqueta: "Guia 1", desc: "Sua mente digital criada, sem programação", valor: "US$ 9,99", bonus: false },
  { nome: "Tu Segundo Cerebro", etiqueta: "Guia 2", desc: "10 comandos mestres para pensar com clareza", valor: "US$ 9,99", bonus: false },
  { nome: "Tu Gemelo Digital", etiqueta: "Guia 3", desc: "Textos viram vídeos com avatar e voz", valor: "US$ 9,99", bonus: false },
  { nome: "El Espejo Digital", etiqueta: "Bônus incluído", desc: "Autoconhecimento guiado por IA", valor: "GRÁTIS", bonus: true },
];

const pilares = [
  { step: "01", name: "Tu Mente en GPT", tag: "CONHECE", icon: Brain, title: "Seu ChatGPT parece genérico porque ainda não conhece você.", text: "Aprenda, passo a passo e sem programação, a criar um GPT com seu contexto, sua personalidade, seu tom de voz e seus objetivos — para receber respostas muito mais alinhadas sem precisar explicar tudo novamente.", resultado: "RESULTADO: SUA MENTE DIGITAL CRIADA." },
  { step: "02", name: "El Espejo Digital", tag: "BÔNUS", icon: Eye, title: "E se a IA já tivesse percebido algo sobre você que você ainda não percebeu?", text: "Use prompts guiados para observar padrões presentes nas suas conversas, reconhecer forças, possíveis bloqueios, formas de decisão e oportunidades que podem estar passando despercebidas.", resultado: "RESULTADO: UMA NOVA PERSPECTIVA SOBRE VOCÊ." },
  { step: "03", name: "Tu Segundo Cerebro", tag: "PENSA", icon: Lightbulb, title: "Sua cabeça tem ideias demais e clareza de menos?", text: "Utilize 10 comandos mestres, prontos para copiar e aplicar, para organizar pensamentos, desenvolver ideias, analisar decisões, encontrar pontos cegos e transformar objetivos em planos concretos.", resultado: "RESULTADO: UMA INTELIGÊNCIA QUE PENSA COM VOCÊ." },
  { step: "04", name: "Tu Gemelo Digital", tag: "MULTIPLICA", icon: Video, title: "Crie uma vez. Apareça muitas vezes.", text: "Aprenda um processo rápido e surpreendentemente fácil para transformar textos em vídeos com avatar e voz — mesmo que você não goste de gravar, tenha pouco tempo ou nunca tenha editado um vídeo.", resultado: "RESULTADO: SUAS IDEIAS GANHAM VOZ, IMAGEM E PRESENÇA." },
];
const resultados = [
  { icon: Brain, title: "Uma IA que conhece você", text: "Chega de respostas genéricas: a IA entende seu contexto e responde no seu idioma mental." },
  { icon: Lightbulb, title: "Ideias que se multiplicam", text: "Uma única ideia vira ângulos, formatos e oportunidades que sozinho você não teria visto." },
  { icon: Target, title: "Decisões com critério", text: "Analise riscos, prioridades e pontos cegos antes de agir. Menos dúvida, mais avanço." },
  { icon: Layers3, title: "Mente organizada", text: "Informação dispersa se transforma em estruturas claras, prontas para executar." },
  { icon: MessageSquareText, title: "Conteúdo sem atrito", text: "Do pensamento ao roteiro, ao post, à mensagem: você publica mais com menos esforço." },
  { icon: Video, title: "Vídeos sem se gravar", text: "Seu avatar e sua voz trabalham por você. Multiplique sua presença sem multiplicar seu tempo." },
  { icon: Gauge, title: "Execução 10 vezes mais rápida", text: "A distância entre pensar uma ideia e lançá-la cai para minutos, não semanas." },
  { icon: Eye, title: "Ver o que outros não veem", text: "Perguntas melhores, padrões claros, oportunidades que antes passavam despercebidas." },
];
const recursos = ["Perfil Mestre", "Prompt Mestre", "10 Comandos de Alto Valor", "Sistema de Decisões", "Planos de Ação", "Análise de Riscos", "Avatar com IA", "Voz com IA", "Roteiros para Vídeo", "Superprompts de Reflexão", "Mapa de Pontos Fortes", "Perguntas de Evolução"];
const perguntas = [
  ["Preciso saber programar?", "Não. O método foi desenhado para ser aplicado sem programação e sem conhecimento técnico avançado de prompts. Se você sabe escrever uma mensagem, consegue aplicar."],
  ["Preciso de experiência com inteligência artificial?", "Não. Você pode começar do zero e avançar seguindo o passo a passo de cada guia."],
  ["O método funciona com o ChatGPT?", "Sim. Tu Mente en GPT e Tu Segundo Cerebro foram criados para usar o ChatGPT como base de trabalho, e os princípios se aplicam a qualquer IA de texto."],
  ["Posso aplicar no meu negócio?", "Sim. O sistema serve para organizar ideias, criar conteúdo, analisar decisões, planejar projetos e transformar conhecimento em execução."],
  ["Preciso saber editar vídeos?", "Não é necessário dominar edição avançada. Tu Gemelo Digital simplifica a produção com ferramentas de inteligência artificial."],
  ["Como recebo o acesso?", "Depois da confirmação do pagamento, o acesso é entregue de forma digital pela plataforma de compra. Você começa em minutos."],
  ["O pagamento é único?", "Sim, a oferta desta página é de pagamento único. As condições finais são confirmadas no checkout seguro antes de finalizar a compra."],
  ["Como funciona a garantia de 7 dias?", "Você tem 7 dias para conhecer o método por dentro. Se decidir que não é para você, solicita a garantia dentro do prazo segundo as condições da plataforma de compra. Sem perguntas incômodas."],
];

function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = 0;
    const fontSize = 16;
    const chars = "アイウエオカキクケコサシスセソ01<>[]{}#$%&";
    let drops: number[] = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.floor(Math.random() * -50));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 78) return;
      last = t;
      ctx.fillStyle = "rgba(6, 10, 24, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)] ?? "0";
        ctx.fillStyle = Math.random() > 0.975 ? "rgba(191, 219, 254, 0.5)" : "rgba(96, 165, 250, 0.22)";
        ctx.fillText(ch, i * fontSize, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="upsell-matrix pointer-events-none absolute inset-0 h-full w-full opacity-60" />;
}

function TituloSecao({ etiqueta, titulo, light = false, children }: { etiqueta: string; titulo: ReactNode; light?: boolean; children?: ReactNode }) {
  return <div className="mx-auto max-w-3xl text-center"><div className={`upsell-eyebrow mb-4 text-xs tracking-[0.28em] uppercase ${light ? "text-upsell-light-blue" : "text-upsell-blue"}`}>{etiqueta}</div><h2 className={`text-3xl font-bold tracking-[-0.01em] sm:text-4xl md:text-5xl ${light ? "text-upsell-light-text" : "text-white"}`}>{titulo}</h2>{children ? <div className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-upsell-light-muted" : "text-upsell-text-muted"}`}>{children}</div> : null}</div>;
}
function CTA({ children = "QUERO CRIAR MINHA IA PERSONALIZADA", href = "#oferta" }: { children?: ReactNode; href?: string }) {
  return <a href={href} className="upsell-cta inline-flex w-full max-w-xl items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-5 text-center text-xs tracking-wide text-white uppercase sm:gap-3 sm:px-6 sm:text-base">{children}<ArrowRight className="h-5 w-5 shrink-0" /></a>;
}
function CapaCard({ cover, nome }: { cover: { url: string }; nome: string }) {
  return <div className="w-[220px] shrink-0 overflow-hidden rounded-[24px] p-1 sm:w-[280px]"><img src={cover.url} alt={`Capa ${nome}`} className="h-auto w-full rounded-[18px] object-contain" /></div>;
}
function DepoimentoCard({ imagem, index }: { imagem: { url: string }; index: number }) {
  return <div className="w-[240px] shrink-0 overflow-hidden rounded-[20px] p-1 sm:w-[300px]"><img src={imagem.url} alt={`Depoimento de cliente ${index + 1}`} className="h-auto w-full rounded-[14px] object-contain" /></div>;
}
const compradores = ["Mariana S.", "Carlos P.", "Fernanda L.", "João M.", "Ana Paula R.", "Ricardo T.", "Camila V.", "Diego A.", "Patrícia G.", "Lucas H.", "Beatriz C.", "Thiago N."];
function NotificacoesVendas() {
  const [atual, setAtual] = useState(0);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    let ciclo: ReturnType<typeof setTimeout> | undefined;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const mostrar = () => {
      setAtual((a) => (a + 1) % compradores.length);
      setVisivel(true);
      timeouts.push(setTimeout(() => setVisivel(false), 4000));
      ciclo = setTimeout(mostrar, 28000);
    };
    const inicial = setTimeout(mostrar, 12000);
    return () => { clearTimeout(inicial); if (ciclo) clearTimeout(ciclo); timeouts.forEach(clearTimeout); };
  }, []);
  return <div className={`fixed bottom-4 left-4 z-50 flex max-w-[260px] items-center gap-3 rounded-2xl bg-[#15803d] px-4 py-3 shadow-[0_18px_50px_-20px_rgba(34,197,94,0.65)] transition-opacity duration-200 ${visivel ? "opacity-100" : "opacity-0"}`} role="status"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white"><BadgeCheck className="h-4 w-4" /></span><p className="text-xs leading-4 text-white"><span className="font-bold">{compradores[atual]}</span> acabou de garantir o <span className="font-semibold">Tu Mente en GPT + Bônus</span></p></div>;
}

export function TuGemeloDigitalPage() {
  return <main className="upsell-font overflow-hidden bg-upsell-bg text-upsell-text selection:bg-upsell-blue selection:text-white">
    <div className="whitespace-nowrap border-b border-red-500/40 bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-3 py-2.5 text-center text-[10px] font-bold tracking-[0.14em] text-white uppercase sm:text-xs">🔥 Hoje é o último dia da promoção</div>

    {/* SEÇÃO 1 — HERO */}
    <section className="relative overflow-hidden px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20"><MatrixRain /><div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-upsell-blue/15 blur-[140px]" /><div className="relative mx-auto max-w-7xl"><div className="mx-auto max-w-5xl text-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-blue/25 bg-upsell-blue/10 px-4 py-2 text-[11px] tracking-[0.22em] text-upsell-blue uppercase sm:text-xs"><Sparkles className="h-4 w-4" /> Método Mente Expandida™</span><h1 className="mt-7 text-xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl">DESCUBRA COMO EXTRAIR O MÁXIMO DO PODER DA INTELIGÊNCIA ARTIFICIAL E TRANSFORMÁ-LA EM UMA VERDADEIRA <span className="upsell-text-gradient-blue">MÁQUINA DE RESULTADOS PARA</span><span className="mt-1.5 block text-3xl font-extrabold tracking-wide sm:text-5xl md:text-6xl"><TypewriterWord /></span></h1><img src={heroCover.url} alt="Guia Tu Mente en GPT — transforme a IA em uma extensão da sua mente" className="mx-auto mt-8 w-full max-w-sm rounded-[24px] shadow-[0_30px_90px_-30px_rgba(96,165,250,0.45)] sm:max-w-md" /><p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-xl sm:leading-8">Seu ChatGPT parece genérico porque ainda não conhece você. Aprenda a criar uma inteligência personalizada com <span className="font-semibold text-white">seu contexto, sua identidade, seu tom de voz e seus objetivos</span> — e pare de explicar tudo de novo a cada conversa.</p><p className="mx-auto mt-5 max-w-3xl rounded-2xl border border-upsell-blue/25 bg-upsell-blue/[0.07] px-5 py-4 text-sm leading-6 text-white/80 sm:text-base">Sem programação, sem código e sem configurações complicadas. Siga o passo a passo, copie, adapte e comece a construir sua inteligência personalizada.</p><div className="mt-9 flex justify-center"><CTA /></div><div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55 sm:text-sm"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acesso digital imediato</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pagamento 100% seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> 7 dias de garantia</span></div></div></div></section>

    {/* FAIXA AZUL EM ESTEIRA */}
    <div className="upsell-marquee-mask border-y border-upsell-blue/30 bg-gradient-to-r from-blue-700 via-upsell-blue to-blue-700 py-3.5"><div className="upsell-marquee flex w-max items-center gap-8 px-4">{[...faixaItens, ...faixaItens, ...faixaItens, ...faixaItens].map((item, index) => <span key={`faixa-${index}`} className="upsell-eyebrow flex items-center gap-8 whitespace-nowrap text-xs tracking-[0.22em] text-white uppercase sm:text-sm">{item}<span className="text-white/50">◆</span></span>)}</div></div>

    {/* SEÇÃO 2 — PROBLEMA */}
    <section className="border-b border-white/10 bg-white/[0.02] px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="O VERDADEIRO PROBLEMA" titulo={<>A IA já é brilhante.<br /><span className="upsell-text-gradient-blue">O problema é que ela não sabe quem você é.</span></>}>Cada dia usando IA sem um sistema, você paga um preço invisível: tempo, clareza e oportunidades. Veja se alguma dessas frases parece familiar demais:</TituloSecao><div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">{problemas.map((problema) => <div key={problema} className="group flex items-center gap-4 rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-600/20 to-red-500/[0.07] p-5 text-left shadow-[0_16px_50px_-25px_rgba(239,68,68,0.6)] transition duration-300 hover:-translate-y-1 hover:border-red-400/60 hover:from-red-600/30 sm:p-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-red-400/50 bg-red-500/25 text-red-300 shadow-[0_0_20px_-6px_rgba(239,68,68,0.8)]"><X className="h-5 w-5" /></span><p className="text-sm leading-6 font-bold text-red-100 sm:text-base">{problema}</p></div>)}</div><div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-upsell-blue/20 bg-upsell-blue/[0.07] p-7 text-center sm:p-10"><p className="text-xl font-bold tracking-tight text-white sm:text-3xl">O custo de não ter um sistema não é zero. É tudo o que você deixa de criar.</p><p className="mt-3 text-base text-upsell-text-muted sm:text-lg">A boa notícia: você não precisa de uma IA nova. Precisa construir a sua. E é exatamente esse o método.</p><div className="mt-8 flex justify-center"><CTA /></div></div></div></section>

    {/* SEÇÃO 3 — O SISTEMA */}
    <section className="bg-upsell-light px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao light etiqueta="O SISTEMA" titulo={<>Não são quatro guias soltos.<br /><span className="text-upsell-light-blue">É uma máquina completa, em 4 passos.</span></>}>Cada pilar potencializa o próximo. Juntos, eles transformam uma IA que apenas responde em uma inteligência que <span className="font-semibold">conhece, pensa, multiplica e evolui com você.</span></TituloSecao><div className="mt-10 grid gap-5 lg:grid-cols-2">{pilares.map((pilar) => { const Icon = pilar.icon; return <article key={pilar.name} className="group relative overflow-hidden rounded-[30px] border border-upsell-light-border bg-upsell-light-surface p-7 text-center shadow-[0_24px_70px_-40px_rgba(30,58,138,0.35)] transition duration-300 hover:-translate-y-1 hover:border-upsell-light-blue/40 sm:p-9"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-upsell-light-blue/10 blur-3xl transition group-hover:bg-upsell-light-blue/20" /><div className="relative flex flex-col items-center"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-upsell-light-blue/25 bg-upsell-light-blue/10 text-upsell-light-blue"><Icon className="h-6 w-6" /></div><div className="upsell-eyebrow mt-5 text-xs tracking-[0.2em] text-upsell-light-blue">{pilar.step} · {pilar.tag}</div><h3 className="mt-2 text-2xl font-bold tracking-tight text-upsell-light-text sm:text-3xl">{pilar.name}</h3><p className="mt-3 text-base font-semibold text-upsell-light-text/80">{pilar.title}</p><p className="mt-3 text-sm leading-7 text-upsell-light-muted sm:text-base">{pilar.text}</p><p className="upsell-eyebrow mt-4 text-[11px] tracking-[0.16em] text-upsell-light-blue uppercase">{pilar.resultado}</p></div></article>; })}</div><div className="mt-8 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 3B — TU MENTE EN GPT EM DETALHE */}
    <section id="tu-mente-en-gpt" className="border-y border-white/10 bg-white/[0.02] px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="OFERTA PRINCIPAL" titulo={<>Tu Mente en GPT<br /><span className="upsell-text-gradient-blue">Sua Mente Digital criada, sem programar nada.</span></>}>Quantas vezes você já precisou explicar o que faz, quem é seu público, qual é seu objetivo e como deseja que o texto seja escrito? Você corrige o tom, troca palavras, acrescenta contexto e finalmente consegue uma resposta razoável. Mas, na conversa seguinte, tudo começa novamente.</TituloSecao><div className="mx-auto mt-8 max-w-4xl space-y-5 text-center text-base leading-7 text-upsell-text-muted sm:text-lg"><p>Tu Mente en GPT mostra como transformar o ChatGPT em uma inteligência personalizada, alimentada com sua identidade, seus conhecimentos, seus objetivos, suas referências e sua maneira de se comunicar.</p><p>Seguindo um processo visual, claro e fácil de implementar, você aprende a construir seu <span className="font-semibold text-white">Perfil Maestro</span>, criar as instruções do seu assistente, organizar seus arquivos de conhecimento e configurar um GPT que trabalhe com muito mais contexto desde o início.</p><p>Você não precisa programar, entender códigos ou dominar termos técnicos. O guia conduz cada etapa e entrega estruturas e prompts prontos para copiar, adaptar e utilizar.</p></div><div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">{beneficiosMente.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-upsell-blue/20 bg-upsell-blue/[0.06] p-4 text-left"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-upsell-blue/15 text-upsell-blue"><Check className="h-4 w-4" /></span><p className="text-sm leading-6 text-white/85">{item}</p></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-xl font-bold tracking-tight text-white sm:text-2xl">Você não precisa se apresentar novamente toda vez que abrir o ChatGPT.</p><p className="upsell-text-gradient-gold mx-auto mt-4 max-w-3xl text-center text-xl font-extrabold tracking-tight sm:text-3xl">Você já conversa com a IA. Agora ensine a ela como trabalhar melhor com você.</p><p className="upsell-eyebrow mt-4 text-center text-xs tracking-[0.2em] text-upsell-blue uppercase">RESULTADO: SUA MENTE DIGITAL CRIADA.</p><div className="mt-9 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 3C — BÔNUS EL ESPEJO DIGITAL */}
    <section className="bg-upsell-light-alt px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><div className="flex justify-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-success/40 bg-upsell-success/10 px-5 py-2 text-xs tracking-[0.18em] text-upsell-success uppercase"><Sparkles className="h-4 w-4" /> Bônus exclusivo · Grátis</span></div><div className="mt-6"><TituloSecao light etiqueta="EL ESPEJO DIGITAL" titulo={<>E se a IA já tivesse percebido algo sobre você <span className="text-upsell-light-blue">que você ainda não percebeu?</span></>}>Cada pergunta que você faz deixa pistas. Seus interesses, dúvidas, preocupações, objetivos e decisões formam padrões que, quando observados em conjunto, podem revelar conexões surpreendentes sobre sua maneira de pensar.</TituloSecao></div><div className="mx-auto mt-8 max-w-4xl text-center text-base leading-7 text-upsell-light-muted sm:text-lg">El Espejo Digital reúne prompts guiados que transformam suas próprias conversas com a IA em uma experiência estruturada de reflexão e autoconhecimento. Você copia o prompt, utiliza no ChatGPT e permite que a IA organize uma perspectiva baseada no material disponível.</div><div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">{beneficiosEspejo.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-upsell-light-border bg-upsell-light-surface p-4 text-left shadow-[0_18px_45px_-38px_rgba(30,58,138,0.45)]"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-upsell-light-blue/10 text-upsell-light-blue"><Check className="h-4 w-4" /></span><p className="text-sm leading-6 text-upsell-light-text/85">{item}</p></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-xl font-bold tracking-tight text-upsell-light-text sm:text-2xl">Talvez algumas das respostas que você procura já estejam escondidas nas perguntas que vem fazendo.</p><p className="upsell-eyebrow mt-4 text-center text-xs tracking-[0.2em] text-upsell-light-blue uppercase">RESULTADO: UMA NOVA PERSPECTIVA SOBRE VOCÊ.</p><p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-upsell-light-muted">El Espejo Digital é uma ferramenta de reflexão guiada por IA. Suas respostas são baseadas nas informações disponibilizadas pelo usuário e não representam diagnóstico, terapia ou avaliação psicológica.</p><div className="mt-9 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 4 — 4 PILARES + DEPOIMENTOS */}
    <section className="py-14 sm:py-20"><div className="px-5 sm:px-6"><TituloSecao etiqueta="OS 4 PILARES" titulo={<>Tudo conectado para construir <span className="upsell-text-gradient-blue">sua inteligência digital.</span></>} /></div><div className="upsell-marquee-mask mt-10 overflow-hidden"><div className="upsell-marquee flex w-max items-center gap-5 px-5">{[...pilarImagens, ...pilarImagens, ...pilarImagens].map((cover, index) => { const nome = pilarImagens[index % pilarImagens.length]?.url.split("/").pop()?.replace(".png", "") ?? "capa"; return <CapaCard key={`capa-${index}`} cover={cover} nome={nome} />; })}</div></div><div className="px-5 sm:px-6"><div className="mx-auto mt-10 max-w-3xl text-center"><div className="upsell-eyebrow mb-4 text-xs tracking-[0.28em] text-upsell-gold uppercase">DEPOIMENTOS</div><h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Quem já aplicou o método nunca mais usou a IA da mesma forma.</h3></div></div><div className="upsell-marquee-mask mt-10 overflow-hidden"><div className="upsell-marquee-reverse flex w-max items-center gap-5 px-5">{[...depoimentos, ...depoimentos].map((item, index) => <DepoimentoCard key={`depoimento-${index}`} imagem={item} index={index % depoimentos.length} />)}</div></div><div className="mt-10 flex justify-center px-5 sm:px-6"><CTA /></div></section>

    {/* SEÇÃO 5 — NA PRÁTICA */}
    <section className="bg-upsell-light-alt px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao light etiqueta="NA PRÁTICA" titulo={<>É isso que muda <span className="text-upsell-light-blue">desde o primeiro dia.</span></>} /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resultados.map(({ icon: Icon, title, text }) => <article key={title} className="flex flex-col items-center rounded-[24px] border border-upsell-light-border bg-upsell-light-surface p-6 text-center shadow-[0_20px_50px_-38px_rgba(30,58,138,0.4)]"><div className="grid h-11 w-11 place-items-center rounded-xl bg-upsell-light-blue/10 text-upsell-light-blue"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-bold text-upsell-light-text">{title}</h3><p className="mt-2 text-sm leading-6 text-upsell-light-muted">{text}</p></article>)}</div><div className="mt-8 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 6 — RECURSOS */}
    <section className="py-14 sm:py-20"><div className="px-5 sm:px-6"><TituloSecao etiqueta="RECURSOS" titulo={<>Não é uma coleção de prompts.<br /><span className="upsell-text-gradient-blue">É a infraestrutura da sua mente.</span></>}>12 recursos prontos para usar, criados para você aplicar o método sem teoria desnecessária:</TituloSecao></div><div className="upsell-marquee-mask mt-12 overflow-hidden"><div className="upsell-marquee-reverse flex w-max gap-3 px-4">{[...recursos, ...recursos].map((recurso, index) => <div key={`${recurso}-${index}`} className="flex min-w-[230px] items-center gap-3 rounded-2xl bg-white/[0.035] px-5 py-4"><div className="grid h-9 w-9 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Check className="h-4 w-4" /></div><span className="text-sm font-semibold text-white/85">{recurso}</span></div>)}</div></div></section>

    {/* SEÇÃO 7 — IMAGINE TER ISSO */}
    <section className="bg-upsell-light px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao light etiqueta="IMAGINE TER ISSO" titulo={<>Imagine abrir o chat e a IA <span className="text-upsell-light-blue">já saber do que você está falando.</span></>}>É isso que você vai poder pedir à sua inteligência digital, sem explicar nada de novo:</TituloSecao><div className="mx-auto mt-8 grid max-w-5xl gap-4">{["Analise esta decisão levando em conta meus objetivos, minha forma de pensar e todo o contexto que você já conhece sobre mim.", "Tenho esta ideia. Expanda, encontre as oportunidades que não estou vendo e transforme em um plano de ação.", "Transforme este conteúdo em um roteiro claro para o meu avatar digital e adapte a mensagem para um vídeo curto.", "Faça as perguntas necessárias para identificar qual padrão está influenciando esta decisão."].map((prompt, index) => <div key={prompt} className="flex gap-4 rounded-[24px] border border-upsell-light-border bg-upsell-light-surface p-5 shadow-[0_18px_45px_-35px_rgba(30,58,138,0.45)] sm:p-6"><div className="upsell-eyebrow grid h-10 w-10 shrink-0 place-items-center rounded-full bg-upsell-light-blue/10 text-xs text-upsell-light-blue">0{index + 1}</div><p className="text-sm leading-7 text-upsell-light-text/85 sm:text-base">“{prompt}”</p></div>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-2xl font-bold tracking-tight text-upsell-light-text sm:text-3xl">Isso não é ficção científica. É o que acontece quando a sua IA trabalha com o seu contexto, não contra ele.</p><div className="mt-10 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 8 — O RESULTADO */}
    <section className="px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="O RESULTADO" titulo={<>Uma inteligência digital <span className="upsell-text-gradient-blue">construída ao seu redor.</span></>}>O Método Mente Expandida conecta as quatro capacidades em um único sistema: você sai do caos para o contexto, do contexto para a clareza, da clareza para a execução — e da execução para uma presença digital que cresce com você. Cada mês que passa, o seu sistema vale mais. E o dos outros continua em zero.</TituloSecao><div className="mt-10 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 9 — OFERTA */}
    <section id="oferta" className="relative border-y border-white/10 bg-black/25 px-5 py-14 sm:px-6 sm:py-20"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[150px]" /><div className="relative mx-auto max-w-5xl text-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-5 py-2 text-xs tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Oferta especial · Só hoje</span><h2 className="mt-6 text-3xl font-bold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl">Tudo começa com o Tu Mente en GPT.<span className="upsell-text-gradient-gold block">E hoje ele não vem sozinho.</span></h2><p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-lg">Você leva o guia principal do método e recebe <span className="font-semibold text-white">El Espejo Digital de bônus, sem pagar nada a mais por ele.</span> Você pode escolher apenas a solução que precisa agora — ou acessar o sistema completo no final desta página por uma condição especial.</p><div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[32px] border border-upsell-gold/30 bg-white/[0.045] text-left shadow-[0_25px_100px_-40px_rgba(250,204,21,0.35)] backdrop-blur-xl"><div className="border-b border-white/10 bg-upsell-gold/[0.08] px-6 py-5 text-center sm:px-10"><p className="upsell-eyebrow text-xs tracking-[0.22em] text-upsell-gold uppercase">Tudo o que você vai receber hoje</p><h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">O guia principal + bônus em um único acesso</h3></div><div className="grid gap-3 p-5 sm:p-8"><div className="overflow-hidden rounded-2xl border border-upsell-blue/30 bg-upsell-blue/[0.08]"><img src={ofertaTuMente.url} alt="Capa do guia Tu Mente en GPT" className="mx-auto w-full max-w-[300px] object-cover sm:max-w-sm md:max-w-md" /><div className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="font-bold text-white">Tu Mente en GPT <span className="ml-1 rounded-full bg-upsell-blue/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-upsell-blue uppercase">Guia principal</span></p><p className="mt-1 text-xs text-upsell-text-muted">Perfil Mestre + Prompt Mestre: a IA aprende quem você é</p></div><span className="shrink-0 text-lg font-bold text-upsell-success">US$ 9,99</span></div></div><div className="overflow-hidden rounded-2xl border border-upsell-success/30 bg-upsell-success/[0.08]"><img src={ofertaEspejo.url} alt="Capa do bônus El Espejo Digital" className="mx-auto w-full max-w-[260px] object-cover sm:max-w-[300px]" /><div className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="font-bold text-white">El Espejo Digital <span className="ml-1 rounded-full bg-upsell-success/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-upsell-success uppercase">Bônus incluído</span></p><p className="mt-1 text-xs text-upsell-text-muted">Autoconhecimento guiado + padrões + pontos fortes</p></div><div className="shrink-0 text-right"><span className="block text-sm font-bold text-red-400 line-through">US$ 9,99</span><span className="block text-lg font-black tracking-wide text-upsell-success">GRÁTIS</span></div></div></div></div><div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-black/30 p-5 text-center sm:mx-8 sm:mb-8 sm:p-7"><p className="upsell-eyebrow text-xs tracking-[0.22em] text-white/45 uppercase">Valor normal dos dois juntos</p><div className="mt-2 text-4xl font-bold text-red-500 line-through decoration-red-500/80 sm:text-5xl">US$ 19,98</div><p className="upsell-eyebrow mt-5 text-xs tracking-[0.22em] text-upsell-gold uppercase">por apenas</p><div className="mt-1 text-6xl font-bold tracking-[-0.02em] whitespace-nowrap text-upsell-success sm:text-7xl">US$ 9,99</div><p className="mt-2 text-lg font-bold text-upsell-success">E o bônus sai de graça</p><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65">Traduzindo: você paga só o guia principal e leva El Espejo Digital junto, sem custo. Se depois quiser as outras duas capacidades, elas estão logo abaixo — e o método completo aparece no final da página por uma condição especial.</p><div className="mt-7 flex justify-center"><CTA href={CHECKOUT.mente}>QUERO CRIAR MINHA IA PERSONALIZADA</CTA></div><div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acesso imediato</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pagamento 100% seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> Garantia de 7 dias</span></div></div></div><p className="mt-5 text-xs leading-5 text-white/60">Acesso imediato a Tu Mente en GPT + El Espejo Digital de bônus por US$ 9,99.</p><p className="mt-2 text-xs leading-5 text-white/40">Valor em dólares americanos. As condições finais de pagamento são confirmadas no checkout seguro.</p></div></section>

    {/* SEÇÃO 9B — AS OUTRAS DUAS CAPACIDADES */}
    <section className="bg-upsell-light px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao light etiqueta="PRÓXIMOS PASSOS" titulo={<>Criar sua Mente Digital é o primeiro passo.<br /><span className="text-upsell-light-blue">Existem outras duas capacidades para desbloquear.</span></>}>Você pode escolher apenas a solução que precisa agora — ou acessar o sistema completo no final desta página por uma condição especial.</TituloSecao><div className="mt-10 grid gap-5 lg:grid-cols-2">{individuais.map((produto) => { const Icon = produto.icon; return <article key={produto.name} id={produto.href.slice(1)} className="flex flex-col scroll-mt-24 rounded-[30px] border border-upsell-light-border bg-upsell-light-surface p-7 text-center shadow-[0_24px_70px_-40px_rgba(30,58,138,0.35)] sm:p-9"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-upsell-light-blue/25 bg-upsell-light-blue/10 text-upsell-light-blue"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-2xl font-bold tracking-tight text-upsell-light-text sm:text-3xl">{produto.name}</h3><p className="mt-3 text-base font-semibold text-upsell-light-text/80">{produto.hook}</p><p className="mt-3 text-sm leading-7 text-upsell-light-muted sm:text-base">{produto.text}</p><div className="mt-6 space-y-2 text-left">{produto.bullets.map((b) => <div key={b} className="flex items-start gap-2 text-sm text-upsell-light-text/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-upsell-light-blue" /><span>{b}</span></div>)}</div><p className="upsell-eyebrow mt-6 text-[11px] tracking-[0.16em] text-upsell-light-blue uppercase">{produto.resultado}</p><div className="mt-6 text-3xl font-bold text-upsell-light-text">US$ 9,99</div><div className="mt-5 flex justify-center"><CTA href={produto.href}>{produto.cta}</CTA></div></article>; })}</div></div></section>

    {/* SEÇÃO 9C — OFERTA FINAL: MÉTODO COMPLETO */}
    <section id="combo" className="relative border-y border-white/10 bg-black/25 px-5 py-14 sm:px-6 sm:py-20"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-gold/10 blur-[150px]" /><div className="relative mx-auto max-w-5xl text-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-5 py-2 text-xs tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Oferta final · Condição especial</span><h2 className="mt-6 text-3xl font-bold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl">Método Mente Expandida completo<span className="upsell-text-gradient-gold block">Os 4 guias por apenas US$ 20.</span></h2><p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-lg">Em vez de escolher uma capacidade por vez, você leva o sistema inteiro: a IA que conhece você, a que pensa com você, a que multiplica sua presença — e o bônus que mostra você para você mesmo.</p><div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[32px] border border-upsell-gold/30 bg-white/[0.045] text-left shadow-[0_25px_100px_-40px_rgba(250,204,21,0.35)] backdrop-blur-xl"><div className="grid gap-3 p-5 sm:p-8">{comboItens.map((item) => <div key={item.nome} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"><div><p className="font-bold text-white">{item.nome} <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${item.bonus ? "bg-upsell-success/20 text-upsell-success" : "bg-upsell-blue/20 text-upsell-blue"}`}>{item.etiqueta}</span></p><p className="mt-1 text-xs text-upsell-text-muted">{item.desc}</p></div><span className={`shrink-0 text-sm font-bold ${item.bonus ? "text-upsell-success" : "text-white/70"}`}>{item.valor}</span></div>)}</div><div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-black/30 p-5 text-center sm:mx-8 sm:mb-8 sm:p-7"><p className="upsell-eyebrow text-xs tracking-[0.22em] text-white/45 uppercase">Valor dos guias separados</p><div className="mt-2 text-4xl font-bold text-red-500 line-through decoration-red-500/80 sm:text-5xl">US$ 39,96</div><p className="upsell-eyebrow mt-5 text-xs tracking-[0.22em] text-upsell-gold uppercase">no conjunto, hoje</p><div className="mt-1 text-6xl font-bold tracking-[-0.02em] whitespace-nowrap text-upsell-success sm:text-7xl">US$ 20</div><div className="mt-7 flex justify-center"><CTA href={CHECKOUT.combo}>QUERO OS 4 GUIAS POR APENAS US$ 20</CTA></div><div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acesso imediato</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pagamento 100% seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> Garantia de 7 dias</span></div></div></div><p className="mt-5 text-xs leading-5 text-white/40">Sem programação, sem código e sem configurações complicadas. Siga o passo a passo, copie, adapte e comece hoje.</p></div></section>

    {/* SEÇÃO 10 — GARANTIA */}
    <section className="bg-upsell-light-alt px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-4xl text-center"><div className="relative mx-auto grid h-56 w-56 place-items-center rounded-full border-2 border-upsell-success/50 bg-upsell-success/10 text-center shadow-[0_0_80px_-30px_rgba(34,197,94,0.5)] sm:h-64 sm:w-64"><div className="absolute inset-3 rounded-full border border-dashed border-upsell-success/40" /><div className="relative"><BadgeCheck className="mx-auto h-10 w-10 text-upsell-success" /><div className="mt-1 text-6xl font-bold leading-none text-upsell-light-text">7</div><div className="upsell-eyebrow mt-1 text-xs tracking-[0.24em] text-upsell-light-text/70">DIAS</div><div className="mt-2 text-[10px] font-bold tracking-[0.2em] text-upsell-success uppercase">Garantia total</div></div></div><div className="mt-10"><div className="upsell-eyebrow text-xs tracking-[0.22em] text-upsell-success uppercase">RISCO ZERO PARA VOCÊ</div><h2 className="mt-4 text-4xl font-bold tracking-[-0.01em] text-upsell-light-text sm:text-5xl">Teste por 7 dias. O risco fica todo com a gente.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-upsell-light-muted sm:text-lg">Entre, aplique o método e veja os resultados com seus próprios olhos. Se em 7 dias decidir que não é para você, basta solicitar a garantia segundo as condições da plataforma de compra. Simples assim.</p><div className="mt-9 flex justify-center"><CTA>QUERO COMEÇAR SEM RISCO</CTA></div></div></div></section>

    {/* SEÇÃO 11 — ACESSO SIMPLES */}
    <section className="border-y border-white/10 bg-white/[0.02] px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><TituloSecao etiqueta="ACESSO SIMPLES" titulo={<>Da compra à sua nova <span className="upsell-text-gradient-blue">forma de pensar com IA.</span></>} /><div className="mt-8 grid gap-4 md:grid-cols-4">{["Você faz o pagamento seguro", "Recebe seu acesso em minutos", "Entra no método passo a passo", "Constrói sua inteligência digital"].map((passo, index) => <div key={passo} className="rounded-[24px] border border-white/10 bg-black/20 p-6 text-center"><div className="upsell-eyebrow text-xs tracking-[0.2em] text-upsell-blue">0{index + 1}</div><div className="mt-4 text-lg font-bold text-white">{passo}</div></div>)}</div><div className="mt-8 flex justify-center"><CTA /></div></div></section>

    {/* SEÇÃO 12 — FAQ */}
    <section className="bg-upsell-light px-5 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-4xl"><TituloSecao light etiqueta="PERGUNTAS FREQUENTES" titulo="O último passo antes de começar." /><div className="mt-12 space-y-3">{perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group rounded-2xl border border-upsell-light-border bg-upsell-light-surface p-5 shadow-[0_16px_40px_-34px_rgba(30,58,138,0.45)] open:border-upsell-light-blue/40"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-upsell-light-text"><span>{pergunta}</span><ChevronDown className="h-5 w-5 shrink-0 text-upsell-light-blue transition group-open:rotate-180" /></summary><p className="mt-4 pr-6 text-sm leading-7 text-upsell-light-muted sm:text-base">{resposta}</p></details>)}</div><div className="mt-10 flex justify-center"><CTA>SIM, QUERO O TU MENTE EN GPT + BÔNUS</CTA></div></div></section>

    {/* SEÇÃO 13 — FECHAMENTO */}
    <section className="relative border-t border-white/10 px-5 py-16 text-center sm:px-6 sm:py-20"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-blue/10 blur-[140px]" /><div className="relative mx-auto max-w-5xl"><WandSparkles className="mx-auto h-10 w-10 text-upsell-blue" /><h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.01em] text-white sm:text-6xl md:text-7xl">A IA não vai esperar você.<span className="upsell-text-gradient-blue block">A pergunta é: vai usar ela de verdade?</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-upsell-text-muted sm:text-lg">Daqui a um ano, todo mundo vai falar sobre ter uma inteligência digital própria. Você pode começar hoje — com o guia principal, o bônus grátis e 7 dias de garantia. Ou continuar começando cada conversa do zero.</p><div className="mt-9 flex justify-center"><CTA /></div><div className="mt-5 flex flex-wrap justify-center gap-5 text-xs font-semibold text-white/45"><span>Acesso digital imediato</span><span>•</span><span>Pagamento seguro</span><span>•</span><span>7 dias de garantia</span></div></div></section>

    <NotificacoesVendas />
    <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/35 sm:px-6"><div className="upsell-eyebrow tracking-[0.18em] text-white/55">MÉTODO MENTE EXPANDIDA™</div><p className="mt-3">Produto digital. Os resultados dependem da aplicação individual do método e das ferramentas utilizadas.</p></footer>
  </main>;
}
