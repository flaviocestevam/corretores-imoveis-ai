import { createFileRoute } from "@tanstack/react-router";
import alineFoto from "@/assets/personagens/aline-tecnica.png.asset.json";
import biancaFoto from "@/assets/personagens/bianca-close.png.asset.json";
import augustoFoto from "@/assets/personagens/augusto-misterio.jpeg.asset.json";
import brunoFoto from "@/assets/personagens/bruno-resenha.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corretor IA Studio — Vídeos virais para imóveis de alto padrão" },
      { name: "description", content: "Reels e TikToks com corretores de IA para imóveis acima de R$ 2M. Sem gravação, sem estúdio, entrega em dias." },
    ],
  }),
  component: LandingPage,
});

const personagens: { nome: string; tag: string; bio: string; foto?: string }[] = [
  { nome: "Sérgio Churrasco", tag: "The Closer", bio: "O amigo que fecha o negócio no domingo à tarde." },
  { nome: "Clara Romance", tag: "The Storyteller", bio: "Vende o sonho da casa para começar a história." },
  { nome: "Aline Técnica", tag: "The Advisor", bio: "Planta, IPTU e ROI sem enrolação.", foto: alineFoto.url },
  { nome: "Bianca Close", tag: "The Negotiator", bio: "Fecha antes da concorrência responder o direct.", foto: biancaFoto.url },
  { nome: "Augusto Mistério", tag: "The Enigma", bio: "Silêncio elegante, presença que fecha antes da palavra.", foto: augustoFoto.url },
  { nome: "Bruno Resenha", tag: "The Host", bio: "Tour descontraído com vista pro mar e papo reto.", foto: brunoFoto.url },
  { nome: "Eduardo Sussurro", tag: "The Curator", bio: "Tour íntimo, tom baixo, alto padrão." },
  { nome: "Yasmin Valença", tag: "The Ambassador", bio: "Frontal beach, brisa e sofisticação." },
  { nome: "Patrícia Luxo", tag: "The Executive", bio: "Coberturas, jóias e closets do tamanho de um apê." },
  { nome: "Nádia Blindada", tag: "The Specialist", bio: "Segurança, portaria e discrição para quem já chegou." },
];

const planos = [
  {
    nome: "Signature",
    preco: "R$ 1.497",
    ciclo: "/mês",
    videos: "20 vídeos por mês",
    destaque: false,
    bullets: [
      "Escolha entre 23 corretores de IA",
      "Formato vertical 9:16",
      "Roteiro personalizado por imóvel",
      "Entrega em até 5 dias úteis",
    ],
  },
  {
    nome: "Prestige",
    preco: "R$ 3.497",
    ciclo: "/mês",
    videos: "60 vídeos por mês",
    destaque: true,
    bullets: [
      "Tudo do Signature",
      "Personagem exclusivo por campanha",
      "Ganchos virais atualizados semanalmente",
      "Entrega em até 3 dias úteis",
      "Gerente de conta dedicado",
    ],
  },
  {
    nome: "Black",
    preco: "R$ 6.997",
    ciclo: "/mês",
    videos: "150 vídeos por mês",
    destaque: false,
    bullets: [
      "Tudo do Prestige",
      "Roteirista sênior + copywriter",
      "Personagem sob medida para a marca",
      "Entrega em até 48 horas",
      "Relatórios mensais de performance",
    ],
  },
];

const faq = [
  { q: "Os personagens são reais?", a: "Não. Todos os 23 corretores são personagens fictícios gerados por inteligência artificial, com identidade visual e personalidade próprias. As fotos dos imóveis são sempre reais — suas." },
  { q: "Preciso aparecer no vídeo?", a: "Não. Essa é a proposta. Você envia as fotos e nós entregamos o Reel pronto. Sem câmera, sem estúdio, sem tempo perdido." },
  { q: "Quanto tempo demora a entrega?", a: "De 48 horas a 5 dias úteis, dependendo do plano contratado. O plano Black tem prioridade máxima." },
  { q: "Posso trocar de personagem todo mês?", a: "Sim. Você pode combinar personagens diferentes conforme o perfil do imóvel e do público que quer atingir." },
  { q: "Funciona para qualquer tipo de imóvel?", a: "O estúdio é dedicado a imóveis de alto padrão — acima de R$ 2 milhões. É onde a linguagem funciona melhor e onde o ticket justifica o investimento." },
  { q: "E se eu não gostar do vídeo?", a: "Toda entrega tem uma rodada de ajuste sem custo. Nosso trabalho é te devolver algo que você tenha orgulho de postar." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-primary-foreground">
      <Nav />
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <Provas />
      <Planos />
      <ParaQuem />
      <FAQ />
      <CtaFinal />
      <Footer />
    </div>
  );
}

/* ---------- Reusable editorial primitives ---------- */

function Eyebrow({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "right" }) {
  return (
    <div className={"flex items-center gap-4 " + (align === "right" ? "justify-end" : "")}>
      {align === "left" && <span className="h-px w-12 bg-gold" />}
      <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gold">{children}</span>
      {align === "right" && <span className="h-px w-12 bg-gold" />}
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-20">
        <a href="#topo" className="font-serif text-lg tracking-tight">
          Corretor <span className="italic text-gold">IA</span> Studio
        </a>
        <nav className="hidden gap-12 text-[10px] uppercase tracking-[0.4em] text-foreground/50 lg:flex">
          <a href="#solucao" className="transition-colors hover:text-gold">Coletivo</a>
          <a href="#como" className="transition-colors hover:text-gold">Método</a>
          <a href="#planos" className="transition-colors hover:text-gold">Planos</a>
          <a href="#faq" className="transition-colors hover:text-gold">FAQ</a>
        </nav>
        <a
          href="#planos"
          className="group relative inline-flex items-center gap-2 border border-gold/40 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Solicitar Portfólio
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-bordeaux/10 blur-[150px]" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-20 lg:py-32">
        <div className="reveal">
          <Eyebrow>Venda o Inalcançável</Eyebrow>
        </div>

        <h1
          className="reveal mt-10 font-serif leading-[0.85] tracking-tight"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black">Corretores de</span>
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black">
            <em className="not-italic text-gold" style={{ fontStyle: "italic" }}>IA Studio</em>
          </span>
          <span className="mt-2 block text-[clamp(2.25rem,7vw,7rem)] font-black md:ml-[18%]">
            Elite Edition.
          </span>
        </h1>

        <div className="reveal mt-16 grid gap-10 md:grid-cols-12 md:items-end" style={{ animationDelay: "180ms" }}>
          <p className="text-base font-light leading-relaxed text-foreground/60 md:col-span-5 md:text-lg">
            Vídeos virais para o mercado de ultra-luxo. Tecnologia de síntese humana que personifica autoridade,
            elegância e exclusividade — sem gravação, sem estúdio, sem equipe.
          </p>

          <div className="flex flex-col items-start gap-8 md:col-span-5 md:col-start-8">
            <a
              href="#planos"
              className="group relative inline-flex items-center gap-3 bg-gold px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:pr-14"
            >
              <span className="relative z-10">Solicitar Portfólio</span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </a>
            <dl className="flex w-full gap-12 border-t border-black/10 pt-6">
              <div>
                <dt className="font-serif text-2xl font-light">R$ 2M+</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.3em] text-foreground/40">Ticket Médio</dd>
              </div>
              <div>
                <dt className="font-serif text-2xl font-light">4K</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.3em] text-foreground/40">Ultra HD 9:16</dd>
              </div>
              <div>
                <dt className="font-serif text-2xl font-light">23</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.3em] text-foreground/40">Personagens</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center gap-2 self-center text-[9px] uppercase tracking-[0.5em] text-foreground/30">
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Problema() {
  return (
    <section className="border-y border-black/[0.06] bg-[oklch(0.97_0.004_85)] px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden border border-black/[0.06] bg-[oklch(0.985_0.003_85)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-bordeaux/25 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <p className="text-center font-serif text-3xl italic leading-tight opacity-50 sm:text-4xl">
                "A imagem estática é o cemitério das grandes propriedades."
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 border-[20px] border-background" />
          </div>

          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <Eyebrow>O Diagnóstico</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              O silêncio do seu <em className="text-gold" style={{ fontStyle: "italic" }}>feed</em> está custando milhões.
            </h2>
            <div className="mt-10 space-y-8">
              {[
                "Imóveis de alto padrão exigem narrativa. Sem um rosto que transmita confiança, sua listagem é apenas mais um dado no portal.",
                "Corretor não tem tempo para virar produtor de conteúdo. Vídeo de celular na mão não vende R$ 5 milhões.",
                "Produtora tradicional cobra caro, demora semanas e devolve algo genérico — enquanto o feed do concorrente aparece no explorar todo dia.",
              ].map((t, i) => (
                <div key={i} className="flex gap-6">
                  <span className="font-serif text-lg font-bold text-bordeaux">/{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-light leading-relaxed text-foreground/50">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solucao() {
  return (
    <section id="solucao" className="px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="reveal max-w-2xl">
            <Eyebrow>The Collective</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              A nova face do <em className="text-gold" style={{ fontStyle: "italic" }}>luxury real estate</em>.
            </h2>
          </div>
          <p className="reveal max-w-[220px] text-right text-[9px] uppercase leading-relaxed tracking-[0.35em] text-foreground/40" style={{ animationDelay: "120ms" }}>
            Escolha o avatar que ressoa com a identidade da sua marca. 23 personagens no portfólio completo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-10">
          {personagens.map((p, i) => (
            <article
              key={p.nome}
              className="reveal group relative aspect-[9/16] overflow-hidden border border-black/[0.06] bg-[oklch(0.96_0.005_85)] transition-all duration-700 hover:-translate-y-2 hover:border-gold/30"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-7xl text-gold/20 transition-colors duration-700 group-hover:text-gold/40">
                  {p.nome.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-bordeaux/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute right-4 top-4 z-20 font-serif text-[10px] uppercase tracking-widest text-foreground/40">
                {String(i + 1).padStart(2, "0")} / 23
              </span>
              <div className="absolute bottom-0 left-0 z-20 p-6">
                <span className="mb-1 block text-[9px] uppercase tracking-[0.3em] text-gold">{p.tag}</span>
                <h4 className="font-serif text-xl">{p.nome}</h4>
                <p className="mt-2 max-w-[85%] text-[11px] leading-snug text-foreground/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {p.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const passos = [
    { t: "Envie as fotos", d: "As que você já tem servem. Sem drone, sem sessão de fotos, sem ângulo especial." },
    { t: "Escolha personagem e gancho", d: "Nós sugerimos, você aprova. Personagem + roteiro + gancho viral definidos." },
    { t: "Nossa equipe produz", d: "IA + roteiristas humanos. Formato 9:16, música, corte, legenda — pronto para postar." },
    { t: "Você recebe e posta", d: "Entregue em MP4 no seu drive. Poste em qualquer plataforma vertical." },
  ];
  return (
    <section id="como" className="border-y border-black/[0.06] bg-[oklch(0.97_0.004_85)] px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal">
          <Eyebrow>The Method</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Quatro passos. <em className="text-gold" style={{ fontStyle: "italic" }}>Zero fricção.</em>
          </h2>
        </div>

        <ol className="mt-20 grid gap-px bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <li
              key={p.t}
              className="reveal group relative bg-background/60 p-8 transition-colors hover:bg-background"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-serif text-5xl font-black text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-foreground/50">{p.d}</p>
              <span className="absolute right-8 top-8 text-gold/40 transition-transform group-hover:translate-x-1">→</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Provas() {
  const metricas = [
    { n: "+10M", l: "Visualizações geradas", tag: "MÉTRICA A CONFIRMAR" },
    { n: "23", l: "Personagens exclusivos", tag: null },
    { n: "48h", l: "Produção mais rápida", tag: "MÉTRICA A CONFIRMAR" },
    { n: "+120", l: "Imóveis anunciados", tag: "MÉTRICA A CONFIRMAR" },
  ];
  const depos = [
    {
      texto: "Substituí três semanas de gravação por um único envio de fotos. O Reel do lançamento estourou em 48 horas.",
      autor: "Depoimento a confirmar",
    },
    {
      texto: "O feed da imobiliária ficou irreconhecível — parece marca de moda, não anúncio de imóvel.",
      autor: "Depoimento a confirmar",
    },
  ];

  return (
    <section className="px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal">
          <Eyebrow>Track Record</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Resultado, <em className="text-gold" style={{ fontStyle: "italic" }}>não promessa.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m, i) => (
            <div
              key={m.l}
              className="reveal bg-background p-10"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="font-serif text-[clamp(3rem,6vw,5rem)] font-black leading-none text-gold">{m.n}</p>
              <p className="mt-4 text-sm text-foreground/60">{m.l}</p>
              {m.tag && (
                <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-bordeaux/70">[{m.tag}]</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {depos.map((d, i) => (
            <blockquote
              key={i}
              className="reveal relative border border-black/[0.06] bg-[oklch(0.985_0.003_85)] p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="absolute left-6 top-4 font-serif text-6xl leading-none text-gold/30">"</span>
              <p className="relative font-serif text-xl italic leading-snug text-foreground/85">{d.texto}</p>
              <footer className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-bordeaux/80">
                <span className="h-px w-8 bg-bordeaux/60" /> {d.autor}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planos() {
  return (
    <section id="planos" className="border-y border-black/[0.06] bg-[oklch(0.97_0.004_85)] px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="reveal max-w-2xl">
            <Eyebrow>Membresia</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Escolha o volume. <em className="text-gold" style={{ fontStyle: "italic" }}>Nós cuidamos do resto.</em>
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm font-light leading-relaxed text-foreground/50" style={{ animationDelay: "100ms" }}>
            Sem taxa de setup. Sem fidelidade. Ajuste o plano a qualquer mês.
          </p>
        </div>

        <div className="grid gap-px bg-black/[0.06] lg:grid-cols-3">
          {planos.map((p, i) => (
            <article
              key={p.nome}
              className={
                "reveal relative flex flex-col p-10 transition-transform " +
                (p.destaque
                  ? "bg-gradient-to-b from-gold/[0.08] via-background to-background lg:-mt-8 lg:pb-16 lg:pt-14"
                  : "bg-background")
              }
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {p.destaque && (
                <span className="absolute left-10 top-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-gold">
                  <span className="h-px w-8 bg-gold" />
                  Mais Popular
                </span>
              )}
              <div className="mt-10">
                <h3 className="font-serif text-3xl font-black">{p.nome}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-black text-gold">{p.preco}</span>
                  <span className="text-sm text-foreground/50">{p.ciclo}</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-foreground/60">{p.videos}</p>
              </div>

              <ul className="mt-10 flex-1 space-y-4 text-sm font-light text-foreground/70">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-4 border-t border-black/[0.06] pt-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#lead"
                className={
                  "group mt-10 inline-flex items-center justify-between gap-3 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.25em] transition-all " +
                  (p.destaque
                    ? "bg-gold text-primary-foreground hover:bg-gold-soft"
                    : "border border-gold/30 text-gold hover:bg-gold/10")
                }
              >
                Quero esse plano
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  const cols = [
    {
      t: "Imobiliárias",
      tag: "For Brokerages",
      itens: [
        "Feed profissional sem depender da agenda dos corretores",
        "Padrão visual único para toda a carteira",
        "Escala de 20 a 150 imóveis por mês",
      ],
    },
    {
      t: "Construtoras",
      tag: "For Developers",
      itens: [
        "Lançamento com identidade cinematográfica",
        "Vídeos por unidade, tipologia ou torre",
        "Conteúdo pronto para stand, mídia paga e redes",
      ],
    },
    {
      t: "Corretores Autônomos",
      tag: "For Solo Agents",
      itens: [
        "Presença de marca sem virar produtor de conteúdo",
        "Personagem exclusivo alinhado ao seu posicionamento",
        "Volume que gera algoritmo, não postagem esporádica",
      ],
    },
  ];
  return (
    <section className="px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal">
          <Eyebrow>Clientela</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Feito para quem vende <em className="text-gold" style={{ fontStyle: "italic" }}>alto padrão.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-black/[0.06] md:grid-cols-3">
          {cols.map((c, i) => (
            <div
              key={c.t}
              className="reveal group relative bg-background p-10 transition-colors hover:bg-[oklch(0.985_0.003_85)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold">{c.tag}</span>
              <h3 className="mt-4 font-serif text-3xl">{c.t}</h3>
              <ul className="mt-8 space-y-5 text-sm font-light leading-relaxed text-foreground/60">
                {c.itens.map((it, j) => (
                  <li key={it} className="flex gap-4">
                    <span className="font-serif text-xs font-bold text-bordeaux">/{String(j + 1).padStart(2, "0")}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-y border-black/[0.06] bg-[oklch(0.97_0.004_85)] px-6 py-32 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="reveal grid gap-16 md:grid-cols-[1fr_2fr] md:items-start">
          <div className="md:sticky md:top-32">
            <Eyebrow>Sumário</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl">
              Perguntas <em className="text-gold" style={{ fontStyle: "italic" }}>frequentes.</em>
            </h2>
          </div>

          <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {faq.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start gap-6">
                  <span className="mt-1 font-serif text-xs text-gold/70">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-serif text-xl leading-snug transition-colors group-hover:text-gold">
                    {f.q}
                  </span>
                  <span className="mt-1 text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pl-10 text-sm font-light leading-relaxed text-foreground/55">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section id="lead" className="relative overflow-hidden px-6 py-40 lg:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-bordeaux/15 blur-[140px]" />
      </div>

      <div className="reveal relative mx-auto max-w-4xl text-center">
        <Eyebrow>The Studio Awaits</Eyebrow>
        <h2 className="mt-8 font-serif text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.95]">
          O feed do seu concorrente
          <br />
          <em className="text-gold" style={{ fontStyle: "italic" }}>não espera.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/55 sm:text-lg">
          Escolha um plano e comece a postar vídeos de outro nível ainda esta semana.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#planos"
            className="group relative inline-flex items-center gap-3 bg-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:pr-16"
          >
            <span className="relative z-10">Ver planos e começar</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
              →
            </span>
          </a>
          <a href="#solucao" className="text-[10px] uppercase tracking-[0.35em] text-foreground/50 hover:text-gold">
            Rever o portfólio →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/[0.06] px-6 py-14 lg:px-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-xl">
            Corretor <em className="text-gold" style={{ fontStyle: "italic" }}>IA</em> Studio
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-foreground/40">
            Estratégia visual para o mercado de luxo
          </p>
        </div>
        <div className="flex items-center gap-10 text-[10px] uppercase tracking-[0.35em] text-foreground/40">
          <a href="#solucao" className="hover:text-gold">Coletivo</a>
          <a href="#planos" className="hover:text-gold">Planos</a>
          <a href="#faq" className="hover:text-gold">FAQ</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
