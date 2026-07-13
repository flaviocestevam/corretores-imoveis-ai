import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corretor IA Studio — Vídeos virais para imóveis de alto padrão" },
      { name: "description", content: "Reels e TikToks com corretores de IA para imóveis acima de R$ 2M. Sem gravação, sem estúdio, entrega em dias." },
    ],
  }),
  component: LandingPage,
});

const personagens = [
  { nome: "Sérgio Churrasco", bio: "O amigo que fecha o negócio no domingo à tarde." },
  { nome: "Clara Romance", bio: "Vende o sonho da casa para começar a história." },
  { nome: "Aline Técnica", bio: "Explica planta, IPTU e ROI sem enrolação." },
  { nome: "Bianca Close", bio: "Fecha antes da concorrência responder o direct." },
  { nome: "Eduardo Sussurro", bio: "Tour íntimo, tom baixo, alto padrão." },
  { nome: "Yasmin Valença", bio: "Frontal Beach, brisa e sofisticação." },
  { nome: "Patrícia Luxo", bio: "Coberturas, jóias e closets do tamanho de um apê." },
  { nome: "Nádia Blindada", bio: "Segurança, portaria e discrição para quem já chegou." },
];

const planos = [
  {
    nome: "Signature",
    preco: "R$ 1.497",
    ciclo: "/mês",
    videos: "20 vídeos por mês",
    destaque: false,
    bullets: ["Escolha entre 23 corretores de IA", "Formato vertical 9:16", "Roteiro personalizado por imóvel", "Entrega em até 5 dias úteis"],
  },
  {
    nome: "Prestige",
    preco: "R$ 3.497",
    ciclo: "/mês",
    videos: "60 vídeos por mês",
    destaque: true,
    bullets: ["Tudo do Signature", "Personagem exclusivo por campanha", "Ganchos virais atualizados semanalmente", "Entrega em até 3 dias úteis", "Gerente de conta dedicado"],
  },
  {
    nome: "Black",
    preco: "R$ 6.997",
    ciclo: "/mês",
    videos: "150 vídeos por mês",
    destaque: false,
    bullets: ["Tudo do Prestige", "Roteirista sênior + copywriter", "Personagem sob medida para a marca", "Entrega em até 48 horas", "Relatórios mensais de performance"],
  },
];

const faq = [
  { q: "Os personagens são reais?", a: "Não. Todos os 23 corretores são personagens fictícios gerados por inteligência artificial, com identidade visual e personalidade próprias. As fotos dos imóveis são sempre reais — sua." },
  { q: "Preciso aparecer no vídeo?", a: "Não. Essa é a proposta. Você envia as fotos e nós entregamos o Reel pronto. Sem câmera, sem estúdio, sem tempo perdido." },
  { q: "Quanto tempo demora a entrega?", a: "De 48 horas a 5 dias úteis, dependendo do plano contratado. O plano Black tem prioridade máxima." },
  { q: "Posso trocar de personagem todo mês?", a: "Sim. Você pode combinar personagens diferentes conforme o perfil do imóvel e do público que quer atingir." },
  { q: "Funciona para qualquer tipo de imóvel?", a: "O estúdio é dedicado a imóveis de alto padrão — acima de R$ 2 milhões. É onde a linguagem funciona melhor e onde o ticket justifica o investimento." },
  { q: "E se eu não gostar do vídeo?", a: "Toda entrega tem uma rodada de ajuste sem custo. Nosso trabalho é te devolver algo que você tenha orgulho de postar." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#topo" className="font-serif text-lg font-bold tracking-tight">
          Corretor <span className="text-gold">IA</span> Studio
        </a>
        <a
          href="#planos"
          className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs font-medium text-gold-soft transition-colors hover:bg-gold hover:text-primary-foreground sm:text-sm"
        >
          Quero meus vídeos
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-bordeaux/25 blur-[140px]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:gap-10 md:pt-24">
        <div>
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold-soft">
            Alto padrão · Reels & TikTok
          </span>
          <h1 className="mt-5 font-serif text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
            Seus imóveis merecem um corretor que <em className="text-gold not-italic">nunca erra o take</em>.
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            Vídeos virais para imobiliárias, construtoras e corretores de imóveis acima de R$ 2 milhões — gerados por corretores de IA, prontos em poucos dias.
            Sem gravação. Sem equipe. Sem estúdio.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform hover:-translate-y-0.5"
            >
              Quero meus vídeos
            </a>
            <a href="#solucao" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Ver os personagens →
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative aspect-[9/16] w-[260px] shrink-0 rounded-[2.2rem] border border-gold/30 bg-gradient-to-b from-card to-background p-2 shadow-[var(--shadow-luxe)] sm:w-[300px]">
      <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[oklch(0.11_0.012_55)]">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
          <div className="h-1.5 w-16 rounded-full bg-black/70" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gold/10">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-gold">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-4 font-serif text-lg text-gold-soft">Tour 9:16</p>
            <p className="mt-1 text-xs text-muted-foreground">Cobertura · R$ 6,8M</p>
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
          <p className="text-[11px] font-medium text-gold-soft">@corretor.ia</p>
          <p className="mt-0.5 text-[11px] leading-snug text-foreground/80">
            "Se você acha que essa vista é bonita, espera até ver o closet..."
          </p>
        </div>
      </div>
    </div>
  );
}

function Problema() {
  const dores = [
    "Corretor de alto padrão não tem tempo (nem paciência) para gravar Reel toda semana.",
    "Vídeo amador de celular na mão não vende um imóvel de R$ 5 milhões.",
    "Produtora de vídeo tradicional cobra caro, demora semanas e devolve algo genérico.",
    "Enquanto isso, o feed do seu concorrente aparece no explorar todo dia.",
  ];
  return (
    <section className="border-y border-border/40 bg-card/40 py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
          O problema é simples. <span className="text-gold">A solução, também.</span>
        </h2>
        <ul className="mt-10 space-y-4">
          {dores.map((d) => (
            <li key={d} className="flex gap-4 border-l-2 border-bordeaux/60 pl-5 text-base text-muted-foreground sm:text-lg">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Solucao() {
  return (
    <section id="solucao" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">A solução</span>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            23 corretores de IA. Um para cada tipo de imóvel — e de cliente.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Personagens fictícios com identidade, voz e estilo próprios, inseridos de forma realista nas fotos reais dos seus imóveis.
            Escolha o corretor que combina com o perfil do imóvel e do público que você quer atingir.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {personagens.map((p, i) => (
            <article
              key={p.nome}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.03_60)] via-[oklch(0.16_0.02_55)] to-[oklch(0.28_0.06_25)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-gold/30">
                    {p.nome.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="font-serif text-sm font-bold text-foreground">{p.nome}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{p.bio}</p>
                </div>
                <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-gold-soft backdrop-blur">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          + 15 personagens adicionais no portfólio completo.
        </p>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const passos = [
    { n: "01", t: "Você envia as fotos", d: "Fotos do imóvel — sem ângulos especiais, sem drone. As que você já tem servem." },
    { n: "02", t: "Escolhe personagem e gancho", d: "Nós sugerimos, você aprova. Personagem + roteiro + gancho viral definidos." },
    { n: "03", t: "Nossa equipe produz", d: "IA + roteiristas humanos. Formato 9:16, música, corte, legenda — pronto para postar." },
    { n: "04", t: "Você recebe e posta", d: "Entregue em MP4 direto no seu drive. Posta em qualquer plataforma vertical." },
  ];
  return (
    <section id="como" className="border-y border-border/40 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Como funciona</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Quatro etapas. Sem reunião infinita, sem briefing de 40 páginas.
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p) => (
            <li key={p.n} className="rounded-2xl border border-border/60 bg-background/60 p-6">
              <span className="font-serif text-3xl font-black text-gold">{p.n}</span>
              <h3 className="mt-3 font-serif text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Provas() {
  const metricas = [
    { n: "+10M", l: "visualizações geradas", tag: "[MÉTRICA A CONFIRMAR]" },
    { n: "23", l: "personagens exclusivos", tag: null },
    { n: "48h", l: "produção mais rápida", tag: "[MÉTRICA A CONFIRMAR]" },
    { n: "+120", l: "imóveis anunciados", tag: "[MÉTRICA A CONFIRMAR]" },
  ];
  const depos = [
    { texto: "Substituí três semanas de gravação por um único envio de fotos. O Reel do lançamento estourou em 48h.", autor: "[Depoimento a confirmar]" },
    { texto: "O feed da imobiliária ficou irreconhecível — parece marca de moda, não anúncio de imóvel.", autor: "[Depoimento a confirmar]" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Resultado, não promessa.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m) => (
            <div key={m.l} className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-6">
              <p className="font-serif text-4xl font-black text-gold">{m.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
              {m.tag && <p className="mt-3 text-[10px] uppercase tracking-widest text-bordeaux/80">{m.tag}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {depos.map((d, i) => (
            <blockquote key={i} className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="font-serif text-lg italic leading-snug">"{d.texto}"</p>
              <footer className="mt-4 text-xs uppercase tracking-widest text-bordeaux/80">{d.autor}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planos() {
  return (
    <section id="planos" className="border-y border-border/40 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Planos</span>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Escolha o volume. Nós cuidamos do resto.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem taxa de setup. Sem fidelidade. Você pode ajustar o plano a qualquer mês.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {planos.map((p) => (
            <article
              key={p.nome}
              className={
                "relative flex flex-col rounded-3xl border p-8 " +
                (p.destaque
                  ? "border-gold bg-gradient-to-b from-gold/15 via-card to-card shadow-[var(--shadow-luxe)] lg:-translate-y-4"
                  : "border-border/60 bg-background/50")
              }
            >
              {p.destaque && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Mais popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-black">{p.nome}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-black text-gold">{p.preco}</span>
                <span className="text-sm text-muted-foreground">{p.ciclo}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">{p.videos}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#lead"
                className={
                  "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors " +
                  (p.destaque
                    ? "bg-gold text-primary-foreground hover:bg-gold-soft"
                    : "border border-gold/50 text-gold-soft hover:bg-gold/10")
                }
              >
                Quero esse plano
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
      itens: [
        "Feed profissional sem depender da agenda dos corretores",
        "Padrão visual único para toda a carteira",
        "Escala: 20 a 150 imóveis por mês",
      ],
    },
    {
      t: "Construtoras",
      itens: [
        "Lançamento com identidade cinematográfica",
        "Vídeos por unidade, tipologia ou torre",
        "Conteúdo pronto para stand, mídia paga e redes",
      ],
    },
    {
      t: "Corretores autônomos",
      itens: [
        "Presença de marca sem virar produtor de conteúdo",
        "Personagem exclusivo alinhado ao seu posicionamento",
        "Volume que gera algoritmo, não postagem esporádica",
      ],
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Feito para quem vende alto padrão.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border/60 bg-card p-7">
              <h3 className="font-serif text-xl font-bold text-gold">{c.t}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {c.itens.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bordeaux" />
                    <span>{i}</span>
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
    <section className="border-y border-border/40 bg-card/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Perguntas frequentes</h2>
        <div className="mt-10 divide-y divide-border/60 rounded-2xl border border-border/60 bg-background/40">
          {faq.map((f, i) => (
            <details key={i} className="group px-5 py-5 open:bg-card/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-serif text-lg font-bold">{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  const submit = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [erro, setErro] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("loading");
    setErro(null);
    try {
      await submit({
        data: {
          nome: String(fd.get("nome") ?? ""),
          whatsapp: String(fd.get("whatsapp") ?? ""),
          tipo_imovel: String(fd.get("tipo_imovel") ?? ""),
          imoveis_por_mes: String(fd.get("imoveis_por_mes") ?? ""),
        },
      });
      form.reset();
      setStatus("ok");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro ao enviar");
      setStatus("error");
    }
  }

  return (
    <section id="lead" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-serif text-4xl font-black sm:text-5xl md:text-6xl">
          O feed do seu concorrente <em className="text-gold not-italic">não espera</em>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Preencha em 20 segundos. Nosso time entra em contato pelo WhatsApp com o próximo passo — sem robô, sem enrolação.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 grid gap-3 rounded-3xl border border-gold/30 bg-card/70 p-6 text-left backdrop-blur sm:grid-cols-2">
          <Field label="Nome" name="nome" required placeholder="Como podemos te chamar" className="sm:col-span-2" />
          <Field label="WhatsApp" name="whatsapp" required placeholder="(11) 90000-0000" />
          <SelectField label="Tipo de imóvel" name="tipo_imovel" options={["Apartamento alto padrão", "Cobertura", "Casa de condomínio", "Lançamento / construtora", "Comercial de alto padrão"]} />
          <SelectField label="Imóveis por mês" name="imoveis_por_mes" options={["Até 10", "10 a 30", "30 a 80", "80 a 150", "Mais de 150"]} className="sm:col-span-2" />

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
          >
            {status === "loading" ? "Enviando..." : "Quero conversar com o studio"}
          </button>

          {status === "ok" && (
            <p className="text-center text-sm text-gold-soft sm:col-span-2">
              Recebido. Nosso time chama no WhatsApp em breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-destructive sm:col-span-2">{erro}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={"block " + className}>
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={"block " + className}>
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
      >
        <option value="" disabled>Selecione</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Corretor <span className="text-gold">IA</span> Studio. Todos os direitos reservados.
        </p>
        <p>Produção de vídeos com IA · Reels 9:16 · Alto padrão</p>
      </div>
    </footer>
  );
}
