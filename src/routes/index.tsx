import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/lib/leads.functions";

import v1 from "@/assets/videos/1.asset.json";
import v2 from "@/assets/videos/2.asset.json";
import v3 from "@/assets/videos/3.asset.json";
import v4 from "@/assets/videos/4.asset.json";
import v5 from "@/assets/videos/5.asset.json";
import pAline from "@/assets/personagens/aline-tecnica.png.asset.json";
import pAugusto from "@/assets/personagens/augusto-misterio.jpeg.asset.json";
import pBianca from "@/assets/personagens/bianca-close.png.asset.json";
import pBruno from "@/assets/personagens/bruno-resenha.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corretor IA Studio — Influenciadores de IA que viralizam seus imóveis" },
      { name: "description", content: "22 corretores de IA prontos para transformar suas fotos em Reels e TikToks virais. Sem câmera, sem estúdio, entrega em dias." },
      { property: "og:title", content: "Corretor IA Studio — Influenciadores de IA que viralizam seus imóveis" },
      { property: "og:description", content: "Reels virais para imóveis de alto padrão. 22 personagens de IA prontos. Entrega em 48h." },
    ],
  }),
  component: HomePage,
});

const CAST = [
  { n: "01", role: "The Closer", name: "Sérgio Churrasco", bio: "O amigo que fecha negócio num domingo de família.", video: v1.url },
  { n: "02", role: "The Storyteller", name: "Clara Romance", bio: "Vende o começo de uma história, não uma planta.", video: v2.url },
  { n: "03", role: "The Advisor", name: "Aline Técnica", bio: "ROI, planta e detalhe técnico sem enrolação.", video: v3.url, photo: pAline.url },
  { n: "04", role: "The Curator", name: "Eduardo Sussurro", bio: "Tour íntimo, tom baixo, informação exclusiva.", video: v4.url },
  { n: "05", role: "The Negotiator", name: "Bianca Close", bio: "Fecha antes do concorrente responder o direct.", video: v5.url, photo: pBianca.url },
  { n: "06", role: "The Executive", name: "Patrícia Luxo", bio: "Cobertura, closet e presença de passarela." },
  { n: "07", role: "The Specialist", name: "Nádia Blindada", bio: "Segurança, discrição e decisão inteligente." },
  { n: "08", role: "The Ambassador", name: "Yasmin Valença", bio: "Frontal beach, elegância e magnetismo." },
  { n: "09", role: "The Enigma", name: "Augusto Mistério", bio: "Suspense e desejo em cada corte.", photo: pAugusto.url },
  { n: "10", role: "The Host", name: "Bruno Resenha", bio: "Recebe o público como quem abre a própria casa.", photo: pBruno.url },
  { n: "11", role: "The Visionary", name: "Caio Evolução", bio: "Mostra o imóvel como o próximo passo da sua vida." },
  { n: "12", role: "The Voice", name: "Camila Áudio", bio: "Locução envolvente que segura até o último segundo." },
  { n: "13", role: "The Architect", name: "Henrique Espaço", bio: "Lê planta, volume e luz como ninguém." },
  { n: "14", role: "The Champion", name: "João Vitória", bio: "Energia de fechamento e vibração de conquista." },
  { n: "15", role: "The Spark", name: "Luna Energia", bio: "Ritmo alto, corte rápido, alcance viral." },
  { n: "16", role: "The Straight-Shooter", name: "Marcos Verdade", bio: "Sem filtro, sem enrolação — só o que importa." },
  { n: "17", role: "The Trendsetter", name: "Maya Urbano", bio: "Linguagem de rua, estética de capa de revista." },
  { n: "18", role: "The Dramatist", name: "Otávio Novela", bio: "Cada ambiente vira cena de novela das nove." },
  { n: "19", role: "The Broker", name: "Rafael Parcela", bio: "Traduz condição de pagamento em decisão fácil." },
  { n: "20", role: "The Insider", name: "Renata Fofoca", bio: "Conta os bastidores que ninguém mais conta." },
  { n: "21", role: "The Joy", name: "Solange Alegria", bio: "Bom humor que aproxima e engaja o feed." },
  { n: "22", role: "The Editor", name: "Valentina Cortez", bio: "Curadoria afiada, estética de editorial de moda." },
];

const MARQUEE = ["SC Sérgio Churrasco", "CR Clara Romance", "AT Aline Técnica", "BC Bianca Close", "ES Eduardo Sussurro", "YV Yasmin Valença", "PL Patrícia Luxo", "NB Nádia Blindada"];

const FAQ = [
  { q: "Os personagens são reais?", a: "Não. Os 22 corretores são personagens fictícios gerados por IA, com identidade visual e personalidade próprias. As fotos dos imóveis são sempre reais — as suas." },
  { q: "Preciso aparecer no vídeo?", a: "Não. Essa é a proposta. Você envia as fotos, o estúdio entrega o vídeo pronto — sem câmera, sem estúdio, sem tempo perdido." },
  { q: "É só vídeo com personagem, ou dá pra fazer tour sem pessoa?", a: "As duas coisas. Além dos personagens virais, produzimos tour cinematográfico a partir da mesma foto, sem ninguém aparecendo — indicado quando o imóvel deve ser o único protagonista." },
  { q: "Quanto tempo demora a entrega?", a: "De 48 horas a 5 dias úteis, dependendo do plano. O plano Black tem prioridade máxima." },
  { q: "Posso trocar de personagem todo mês?", a: "Sim. Você combina personagens diferentes conforme o perfil do imóvel e do público que quer atingir." },
  { q: "Funciona para qualquer tipo de imóvel?", a: "O estúdio é dedicado a imóveis de alto padrão, acima de R$ 2 milhões — é onde a linguagem funciona melhor e onde o ticket justifica o investimento." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [stickyShow, setStickyShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const submit = useServerFn(submitLead);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    let heroObs: IntersectionObserver | null = null;
    if (heroRef.current) {
      heroObs = new IntersectionObserver(([entry]) => setStickyShow(!entry.isIntersecting), { threshold: 0 });
      heroObs.observe(heroRef.current);
    }
    return () => { io.disconnect(); heroObs?.disconnect(); };
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      await submit({ data: {
        nome: String(fd.get("nome") ?? ""),
        whatsapp: String(fd.get("whatsapp") ?? ""),
        tipo_imovel: String(fd.get("tipo_imovel") ?? ""),
        imoveis_por_mes: String(fd.get("imoveis_por_mes") ?? ""),
      }});
      setDone(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao enviar");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <style>{PAGE_CSS}</style>

      <header className="nav">
        <div className="nav-inner">
          <div className="brand"><span className="dot" />Corretor IA Studio</div>
          <nav className="links">
            <a href="#solucao">Solução</a>
            <a href="#elenco">Elenco</a>
            <a href="#planos">Planos</a>
            <a href="#faq">Perguntas</a>
          </nav>
          <a className="nav-cta" href="#lead">Falar com o estúdio</a>
        </div>
      </header>

      <section className="hero" ref={heroRef}>
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="badge-row">
                <div className="pill"><span className="pulse" /> 22 influenciadores de IA prontos pra vender</div>
              </div>
              <h1>Seus imóveis não precisam de <span className="grad-text">fotógrafo.</span><br />Precisam de <span className="grad-text">influenciador.</span></h1>
              <p className="hero-sub">A gente transforma as fotos que você já tem em Reels e TikToks virais estrelados por corretores de IA — ou em tours cinematográficos sem ninguém aparecendo. Sem câmera, sem estúdio, por uma fração do custo de uma produção tradicional.</p>
              <div className="hero-ctas">
                <a className="btn-primary" href="#lead">Quero viralizar meus imóveis →</a>
                <a className="btn-ghost" href="#solucao">Ver como funciona</a>
              </div>
              <div className="trust-row">
                <div className="avatars"><div>SC</div><div>CR</div><div>YV</div><div>PL</div></div>
                <div className="trust-text"><b>22 personagens</b> de IA já prontos para o seu imóvel</div>
              </div>
            </div>
            <div className="phone-stage">
              <div className="float-chip chip-a"><div className="ic">🎬</div> Formato 9:16 nativo</div>
              <div className="phone">
                <div className="phone-screen">
                  <video className="phone-video" src={v1.url} autoPlay muted loop playsInline />
                  <div className="phone-scrim" />
                  <div className="phone-topbar"><div /><div /><div /></div>
                  <div className="phone-tag"><div className="av">CR</div><span>Clara Romance</span></div>
                  <div className="phone-caption">
                    <p>"Imagina tua história começando aqui..."</p>
                    <span className="phone-cta-chip">📍 Clica no link da bio →</span>
                  </div>
                </div>
              </div>
              <div className="float-chip chip-b"><div className="ic">📈</div> +403% em consultas</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <div className="marquee-item" key={i}>
              <div className="av2">{m.slice(0, 2)}</div>{m.slice(3)}
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="solucao">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O que você realmente está comprando</div>
            <h2>Não é vídeo de imóvel. <span className="grad-text">É viralização de imóvel.</span></h2>
            <p>Três frentes, um só estúdio — nada disso depende de você pegar uma câmera.</p>
          </div>
          <div className="pillars reveal">
            <div className="pillar">
              <div className="icon">🎭</div>
              <h3>Influenciadores de IA</h3>
              <p>22 personagens com personalidade, sotaque e bordão próprios, inseridos de forma realista nas fotos reais do imóvel. O público assiste até o fim porque quer saber o que o personagem vai dizer — não porque precisa saber o preço do m².</p>
              <div className="no">Não é avatar genérico lendo um texto decorado.</div>
            </div>
            <div className="pillar">
              <div className="icon">🏛️</div>
              <h3>Tour sem ninguém aparecer</h3>
              <p>A mesma foto horizontal vira um tour vertical cinematográfico, com movimento de câmera e trilha sonora — sem personagem, sem fala. A arquitetura é a única protagonista.</p>
              <div className="no">Não é slideshow de fotos com música de fundo.</div>
            </div>
            <div className="pillar">
              <div className="icon">💸</div>
              <h3>Uma fração do custo</h3>
              <p>Sem diária de cinegrafista, sem agenda de gravação, sem edição contratada à parte. O custo por vídeo despenca — e escala pra 20, 60 ou 150 vídeos por mês sem contratar ninguém.</p>
              <div className="no">Não é "mais barato e pior". É outra estrutura de custo.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="stat-section">
            <div className="stat-grid">
              <div><div className="stat-num grad-text">403%</div><div className="stat-label">mais chances de um imóvel ser consultado quando é apresentado em vídeo, contra apenas fotos.</div></div>
              <div><div className="stat-num grad-text">48h</div><div className="stat-label">é o prazo mais rápido de entrega — sem esperar semanas de uma produtora tradicional.</div></div>
              <div><div className="stat-num grad-text">22</div><div className="stat-label">personagens de IA prontos, sem precisar treinar ninguém ou contratar um influenciador real.</div></div>
            </div>
            <div className="stat-source">Fonte: pesquisa de mercado citada por EncontraMoema sobre o comportamento do comprador de imóveis de alto padrão, 2026.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">A conta que importa</div>
            <h2>Produção tradicional <span className="grad-text">vs.</span> Corretor IA Studio</h2>
          </div>
          <div className="cost-cards reveal">
            <div className="cost-card old">
              <h4>Produção tradicional</h4>
              <div className="cost-row"><span>Captação</span><span>Diária de cinegrafista + agenda de visita</span></div>
              <div className="cost-row"><span>Elenco</span><span>Corretor precisa gravar e repetir takes</span></div>
              <div className="cost-row"><span>Edição</span><span>Contratada à parte, prazo extra</span></div>
              <div className="cost-row"><span>Escala</span><span>Cada vídeo novo custa do zero de novo</span></div>
              <div className="cost-row"><span>Prazo</span><span>Semanas, sujeito à agenda de todo mundo</span></div>
            </div>
            <div className="cost-card new">
              <h4>Corretor IA Studio</h4>
              <div className="cost-row"><span>Captação</span><span>Fotos que você já tem</span></div>
              <div className="cost-row"><span>Elenco</span><span>22 personagens prontos, sem gravação</span></div>
              <div className="cost-row"><span>Edição</span><span>Incluída no plano, entregue junto</span></div>
              <div className="cost-row"><span>Escala</span><span>20 a 150 vídeos/mês no mesmo plano fixo</span></div>
              <div className="cost-row"><span>Prazo</span><span>48h a 5 dias úteis</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="elenco" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O elenco</div>
            <h2>22 influenciadores de IA. <span className="grad-text">Cada imóvel</span> encontra o seu.</h2>
          </div>
          <div className="cast-grid reveal">
            {CAST.map((c) => (
              <div className="cast-card" key={c.n}>
                {c.video ? (
                  <video className="cast-video" src={c.video} autoPlay muted loop playsInline />
                ) : c.photo ? (
                  <img className="cast-video" src={c.photo} alt={c.name} loading="lazy" />
                ) : null}
                <div className="cast-scrim" />
                <div className="cast-inner">
                  <div className="cast-top-row"><div className="cast-index2">Nº {c.n}</div><div className="cast-role2">{c.role}</div></div>
                  <div><div className="cast-name2">{c.name}</div><div className="cast-bio2">{c.bio}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O método</div>
            <h2>Quatro passos. <span className="grad-text">Zero câmera.</span></h2>
          </div>
          <div className="method-row reveal">
            <div className="method-card"><div className="method-badge">01</div><h4>Envie as fotos</h4><p>As que você já tem servem. Sem drone, sem sessão nova.</p></div>
            <div className="method-card"><div className="method-badge">02</div><h4>Escolha personagem e gancho</h4><p>Sugerimos o corretor de IA e o roteiro viral, você aprova.</p></div>
            <div className="method-card"><div className="method-badge">03</div><h4>O estúdio produz</h4><p>IA de imagem e vídeo + roteirista humano, formato 9:16 pronto.</p></div>
            <div className="method-card"><div className="method-badge">04</div><h4>Você recebe e posta</h4><p>Arquivo entregue na plataforma. Publique em qualquer rede.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="planos">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">O investimento</div>
            <h2>Escolha o volume. <span className="grad-text">Nós cuidamos do resto.</span></h2>
          </div>
          <div className="plans reveal">
            <div className="plan">
              <h3>Signature</h3>
              <div className="plan-price">R$ 1.497<span>/mês</span></div>
              <div className="plan-desc">20 vídeos por mês</div>
              <ul>
                <li>Escolha entre 22 corretores de IA</li>
                <li>Formato vertical 9:16 nativo</li>
                <li>Roteiro personalizado por imóvel</li>
                <li>Entrega em até 5 dias úteis</li>
              </ul>
              <a className="plan-cta" href="#lead">Quero esse plano →</a>
            </div>
            <div className="plan featured">
              <div className="plan-badge">Mais popular</div>
              <h3>Prestige</h3>
              <div className="plan-price">R$ 3.497<span>/mês</span></div>
              <div className="plan-desc">60 vídeos por mês</div>
              <ul>
                <li>Tudo do Signature</li>
                <li>Personagem exclusivo por campanha</li>
                <li>Ganchos virais atualizados semanalmente</li>
                <li>Entrega em até 3 dias úteis</li>
                <li>Gerente de conta dedicado</li>
              </ul>
              <a className="plan-cta" href="#lead">Quero esse plano →</a>
            </div>
            <div className="plan">
              <h3>Black</h3>
              <div className="plan-price">R$ 6.997<span>/mês</span></div>
              <div className="plan-desc">150 vídeos por mês</div>
              <ul>
                <li>Tudo do Prestige</li>
                <li>Roteirista sênior + copywriter</li>
                <li>Personagem sob medida para a marca</li>
                <li>Entrega em até 48 horas</li>
                <li>Relatórios mensais de performance</li>
              </ul>
              <a className="plan-cta" href="#lead">Quero esse plano →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Para quem é</div>
            <h2>Feito para quem vende <span className="grad-text">alto padrão.</span></h2>
          </div>
          <div className="client-grid reveal">
            <div className="client-card">
              <div className="icon">🏢</div>
              <h4>Imobiliárias</h4>
              <ul>
                <li>Feed profissional sem depender da agenda de cada corretor</li>
                <li>Identidade visual única para toda a carteira</li>
                <li>Escala de 20 a 150 imóveis por mês</li>
              </ul>
            </div>
            <div className="client-card">
              <div className="icon">🏗️</div>
              <h4>Construtoras</h4>
              <ul>
                <li>Cinematografia dedicada ao lançamento</li>
                <li>Vídeos por unidade, tipologia ou torre</li>
                <li>Conteúdo pronto para stand, mídia paga e redes</li>
              </ul>
            </div>
            <div className="client-card">
              <div className="icon">🧑‍💼</div>
              <h4>Corretores autônomos</h4>
              <ul>
                <li>Presença de marca sem virar produtor de conteúdo</li>
                <li>Personagem alinhado ao seu posicionamento</li>
                <li>Volume que sustenta o algoritmo, não postagem esporádica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Perguntas frequentes</div>
            <h2>Antes de <span className="grad-text">solicitar o dossiê</span></h2>
          </div>
          <div className="reveal">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <div className={`faq-item${open ? " open" : ""}`} key={i}>
                  <button className="faq-q" onClick={() => setOpenFaq(open ? null : i)}>
                    {f.q}<span className="plus">+</span>
                  </button>
                  <div className="faq-a" style={{ maxHeight: open ? 400 : 0 }}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="lead">
        <div className="wrap">
          <div className="final-cta reveal">
            <div className="final-cta-inner">
              <div className="eyebrow" style={{ color: "var(--gold-2)" }}>O feed do seu concorrente não espera</div>
              <h2 style={{ marginTop: 22 }}>Solicite o dossiê comercial e comece a <span className="grad-text">viralizar</span> esta semana.</h2>
              <p>Preencha os dados abaixo. Nossa equipe retorna com o plano recomendado para o seu volume de imóveis.</p>
              {done ? (
                <div style={{ marginTop: 32, color: "#fff", fontWeight: 600 }}>Recebido. Nossa equipe entra em contato em breve.</div>
              ) : (
                <form className="lead-form" onSubmit={onSubmit}>
                  <input name="nome" type="text" placeholder="Nome" required />
                  <input name="whatsapp" type="tel" placeholder="WhatsApp" required />
                  <input name="tipo_imovel" type="text" placeholder="Tipo de imóvel" className="full" required />
                  <select name="imoveis_por_mes" className="full" required defaultValue="">
                    <option value="" disabled>Quantos imóveis você anuncia por mês?</option>
                    <option>Até 10</option>
                    <option>De 11 a 40</option>
                    <option>De 41 a 100</option>
                    <option>Mais de 100</option>
                  </select>
                  <button type="submit" disabled={submitting}>{submitting ? "Enviando..." : "Solicitar Dossiê Comercial →"}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">Corretor IA Studio</div>
          <div className="footer-links">
            <a href="#solucao">Solução</a>
            <a href="#planos">Planos</a>
            <a href="#faq">Perguntas</a>
          </div>
          <div className="footer-copy">© 2026 · Influenciadores de IA para o mercado de alto padrão</div>
        </div>
      </footer>

      <div className={`sticky-cta${stickyShow ? " show" : ""}`}>
        <a href="#lead">Solicitar Dossiê →</a>
      </div>
    </>
  );
}

const PAGE_CSS = `
:root{
  --bg:#FFFFFF; --bg-soft:#FAFAF9; --ink:#0E0C10; --ink-soft:#6B6870;
  --wine:#9A1F44; --wine-2:#C4356B; --gold:#E8B94D; --gold-2:#F3D48A;
  --line:#ECEAE7; --glass: rgba(255,255,255,0.6);
  --grad: linear-gradient(120deg, var(--wine) 0%, var(--wine-2) 45%, var(--gold) 100%);
}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0; background:var(--bg); color:var(--ink); font-family:'Inter',sans-serif; line-height:1.6; -webkit-font-smoothing:antialiased; overflow-x:hidden;}
@media (prefers-reduced-motion: reduce){ *{animation-duration:.01ms !important; transition-duration:.01ms !important;} }
h1,h2,h3,h4{font-family:'Bricolage Grotesque',sans-serif; margin:0; letter-spacing:-0.02em; line-height:1.05;}
.grad-text{background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent;}
a{color:inherit;} img{max-width:100%; display:block;}
.wrap{max-width:1200px; margin:0 auto; padding:0 28px;}
:focus-visible{outline:2px solid var(--wine); outline-offset:3px;}

header.nav{position:sticky; top:0; z-index:60; background:rgba(255,255,255,0.75); backdrop-filter:blur(16px); border-bottom:1px solid var(--line);}
.nav-inner{max-width:1200px; margin:0 auto; padding:16px 28px; display:flex; align-items:center; justify-content:space-between;}
.brand{font-family:'Bricolage Grotesque',sans-serif; font-weight:700; font-size:19px; display:flex; align-items:center; gap:8px;}
.brand .dot{width:8px; height:8px; border-radius:50%; background:var(--grad);}
nav.links{display:flex; gap:32px; font-size:14.5px; font-weight:500; color:var(--ink-soft);}
nav.links a{text-decoration:none; transition:color .2s;}
nav.links a:hover{color:var(--ink);}
@media (max-width:860px){nav.links{display:none;}}
.nav-cta{background:var(--ink); color:#fff; font-size:13.5px; font-weight:600; padding:11px 20px; border-radius:100px; text-decoration:none; transition:transform .25s;}
.nav-cta:hover{transform:scale(1.04);}

.hero{position:relative; padding:88px 0 60px; overflow:hidden;}
.blob{position:absolute; border-radius:50%; filter:blur(90px); opacity:.35; z-index:0;}
.blob1{width:520px; height:520px; background:var(--gold); top:-180px; right:-160px;}
.blob2{width:460px; height:460px; background:var(--wine-2); bottom:-200px; left:-160px; opacity:.22;}
.hero-grid{position:relative; z-index:1; display:grid; grid-template-columns:1.05fr .95fr; gap:56px; align-items:center;}
.badge-row{display:flex; align-items:center; gap:10px; margin-bottom:24px;}
.pill{display:inline-flex; align-items:center; gap:8px; background:var(--bg-soft); border:1px solid var(--line); padding:8px 16px; border-radius:100px; font-size:13px; font-weight:600;}
.pill .pulse{width:7px; height:7px; border-radius:50%; background:var(--wine); animation:pulse 1.8s infinite;}
@keyframes pulse{0%,100%{opacity:1; transform:scale(1);} 50%{opacity:.4; transform:scale(1.4);}}
.hero h1{font-size:clamp(38px, 5.2vw, 68px); font-weight:700;}
.hero-sub{margin-top:24px; font-size:18px; color:var(--ink-soft); max-width:520px;}
.hero-ctas{display:flex; gap:14px; margin-top:36px; flex-wrap:wrap;}
.btn-primary{background:var(--grad); color:#fff; font-weight:700; font-size:15px; padding:17px 30px; border-radius:100px; text-decoration:none; box-shadow:0 16px 32px -12px rgba(154,31,68,.45); transition:transform .25s, box-shadow .25s; display:inline-flex; align-items:center; gap:8px;}
.btn-primary:hover{transform:translateY(-2px) scale(1.02); box-shadow:0 20px 40px -12px rgba(154,31,68,.55);}
.btn-ghost{background:#fff; border:1.5px solid var(--line); color:var(--ink); font-weight:600; font-size:15px; padding:17px 26px; border-radius:100px; text-decoration:none; transition:border-color .25s, transform .25s;}
.btn-ghost:hover{border-color:var(--ink); transform:translateY(-2px);}
.trust-row{display:flex; align-items:center; gap:18px; margin-top:40px;}
.avatars{display:flex;}
.avatars div{width:34px; height:34px; border-radius:50%; border:2px solid #fff; margin-left:-10px; background:var(--grad); display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:700;}
.avatars div:first-child{margin-left:0;}
.trust-text{font-size:13.5px; color:var(--ink-soft);}
.trust-text b{color:var(--ink);}

.phone-stage{position:relative; display:flex; justify-content:center;}
.phone{width:280px; height:570px; border-radius:44px; background:#111; padding:12px; box-shadow:0 40px 80px -30px rgba(0,0,0,.4), 0 0 0 1px rgba(0,0,0,.05); position:relative; z-index:2; transform:rotate(-2deg);}
.phone-screen{width:100%; height:100%; border-radius:34px; overflow:hidden; position:relative; background:linear-gradient(160deg,#3a0d1f 0%, #9A1F44 40%, #E8B94D 100%);}
.phone-video{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:1;}
.phone-scrim{position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%); z-index:2;}
.phone-topbar{position:absolute; top:14px; left:14px; right:14px; display:flex; gap:5px; z-index:3;}
.phone-topbar div{height:3px; flex:1; background:rgba(255,255,255,.35); border-radius:2px; overflow:hidden;}
.phone-topbar div::after{content:''; display:block; height:100%; width:70%; background:#fff;}
.phone-tag{position:absolute; top:30px; left:16px; display:flex; align-items:center; gap:8px; z-index:3;}
.phone-tag .av{width:26px; height:26px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; color:var(--wine);}
.phone-tag span{color:#fff; font-size:12px; font-weight:700; text-shadow:0 1px 4px rgba(0,0,0,.3);}
.phone-caption{position:absolute; bottom:26px; left:16px; right:16px; z-index:3;}
.phone-caption p{color:#fff; font-size:14.5px; font-weight:600; line-height:1.4; text-shadow:0 2px 8px rgba(0,0,0,.35); margin:0 0 12px;}
.phone-cta-chip{display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,.18); backdrop-filter:blur(6px); color:#fff; font-size:11.5px; font-weight:700; padding:8px 14px; border-radius:100px;}

.float-chip{position:absolute; background:#fff; border:1px solid var(--line); border-radius:16px; padding:12px 16px; box-shadow:0 20px 40px -20px rgba(0,0,0,.25); z-index:3; display:flex; align-items:center; gap:10px; font-size:13px; font-weight:700;}
.float-chip .ic{width:30px; height:30px; border-radius:9px; background:var(--bg-soft); display:flex; align-items:center; justify-content:center; font-size:15px;}
.chip-a{top:8%; left:-6%; animation:floaty 5s ease-in-out infinite;}
.chip-b{bottom:14%; right:-8%; animation:floaty 5.5s ease-in-out infinite reverse;}
@keyframes floaty{0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);}}
@media (max-width:980px){.hero-grid{grid-template-columns:1fr;} .phone-stage{margin-top:20px;} .chip-a,.chip-b{display:none;}}

.marquee-wrap{border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:22px 0; overflow:hidden; background:var(--bg-soft);}
.marquee-track{display:flex; gap:48px; width:max-content; animation:scroll 28s linear infinite;}
@keyframes scroll{from{transform:translateX(0);} to{transform:translateX(-50%);}}
.marquee-item{display:flex; align-items:center; gap:10px; font-size:14px; font-weight:700; color:var(--ink-soft); white-space:nowrap;}
.marquee-item .av2{width:28px; height:28px; border-radius:50%; background:var(--grad); display:flex; align-items:center; justify-content:center; color:#fff; font-size:10px;}

.section{padding:120px 0;}
.eyebrow{font-size:13px; font-weight:700; color:var(--wine); text-transform:uppercase; letter-spacing:.08em; display:inline-flex; align-items:center; gap:8px;}
.eyebrow::before{content:''; width:18px; height:2px; background:var(--gold); border-radius:2px;}
.section-head{max-width:660px; margin-bottom:60px;}
.section-head h2{font-size:clamp(30px,4.2vw,48px); margin-top:16px; font-weight:700;}
.section-head p{margin-top:16px; color:var(--ink-soft); font-size:16.5px;}

.pillars{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.pillar{background:#fff; border:1px solid var(--line); border-radius:24px; padding:36px 30px; transition:transform .3s, box-shadow .3s, border-color .3s;}
.pillar:hover{transform:translateY(-8px); box-shadow:0 30px 60px -30px rgba(0,0,0,.18); border-color:transparent;}
.pillar .icon{width:52px; height:52px; border-radius:16px; background:var(--grad); display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:22px;}
.pillar h3{font-size:22px; font-weight:700;}
.pillar p{color:var(--ink-soft); font-size:14.8px; margin-top:12px;}
.pillar .no{font-size:13px; color:#B5B0A8; margin-top:18px; padding-top:16px; border-top:1px dashed var(--line); font-style:italic;}
@media (max-width:900px){.pillars{grid-template-columns:1fr;}}

.stat-section{background:var(--ink); border-radius:32px; padding:64px 48px; color:#fff; position:relative; overflow:hidden;}
.stat-section::before{content:''; position:absolute; width:400px; height:400px; background:var(--grad); filter:blur(120px); opacity:.35; top:-150px; right:-100px;}
.stat-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:40px; position:relative; z-index:1;}
.stat-num{font-size:56px; font-weight:800; font-family:'Bricolage Grotesque',sans-serif;}
.stat-label{font-size:14.5px; color:#B8B4C0; margin-top:8px; max-width:220px;}
.stat-source{margin-top:36px; font-size:12.5px; color:#8A8592; position:relative; z-index:1;}
@media (max-width:860px){.stat-grid{grid-template-columns:1fr; gap:32px;} .stat-section{padding:48px 28px;}}

.cost-cards{display:grid; grid-template-columns:1fr 1fr; gap:24px;}
.cost-card{border-radius:24px; padding:36px;}
.cost-card.old{background:var(--bg-soft); border:1px solid var(--line);}
.cost-card.new{background:var(--ink); color:#fff; box-shadow:0 30px 60px -24px rgba(154,31,68,.35);}
.cost-card h4{font-size:14px; text-transform:uppercase; letter-spacing:.06em; font-weight:700; color:var(--ink-soft);}
.cost-card.new h4{color:#B8B4C0;}
.cost-row{display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid rgba(0,0,0,.06); font-size:15px;}
.cost-card.new .cost-row{border-bottom:1px solid rgba(255,255,255,.08);}
.cost-row:last-of-type{border-bottom:none;}
.cost-row span:last-child{font-weight:700;}
.cost-card.old .cost-row span:last-child{color:var(--ink-soft);}
.cost-card.new .cost-row span:last-child{color:var(--gold-2);}
@media (max-width:860px){.cost-cards{grid-template-columns:1fr;}}

.cast-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:20px;}
@media (max-width:640px){.cast-grid{grid-template-columns:repeat(2,1fr); gap:12px;}}
.cast-card{border-radius:22px; overflow:hidden; position:relative; height:340px; background:linear-gradient(160deg, var(--wine) 0%, var(--wine-2) 55%, var(--gold) 130%); transition:transform .3s;}
.cast-video{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;}
.cast-scrim{position:absolute; inset:0; z-index:1; background:linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,.65) 100%);}
.cast-card:hover{transform:translateY(-8px);}
.cast-card:nth-child(2){background:linear-gradient(160deg,#3a2a52,#7b4fa8,var(--gold-2));}
.cast-card:nth-child(3){background:linear-gradient(160deg,#1f3a52,#3d7ea6,var(--gold-2));}
.cast-card:nth-child(4){background:linear-gradient(160deg,#402a1f,#a65f3d,var(--gold-2));}
.cast-card:nth-child(5){background:linear-gradient(160deg,#3a1f38,#a63d8f,var(--gold-2));}
.cast-card:nth-child(6){background:linear-gradient(160deg,#1f3a2c,#3da672,var(--gold-2));}
.cast-card:nth-child(7){background:linear-gradient(160deg,#3a301f,#a68b3d,var(--gold-2));}
.cast-card:nth-child(8){background:linear-gradient(160deg,#241f3a,#5a3da6,var(--gold-2));}
.cast-inner{position:absolute; inset:0; padding:18px; display:flex; flex-direction:column; justify-content:space-between; z-index:2;}
.cast-top-row{display:flex; justify-content:space-between; align-items:flex-start;}
.cast-index2{color:rgba(255,255,255,.75); font-size:11.5px; font-weight:700;}
.cast-role2{color:rgba(255,255,255,.85); font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; background:rgba(255,255,255,.18); padding:5px 10px; border-radius:100px; backdrop-filter:blur(4px);}
.cast-name2{color:#fff; font-size:21px; font-weight:700; font-family:'Bricolage Grotesque',sans-serif;}
.cast-bio2{color:rgba(255,255,255,.85); font-size:12.5px; margin-top:6px; line-height:1.4;}

.method-row{display:grid; grid-template-columns:repeat(4,1fr); gap:24px; position:relative;}
.method-row::before{content:''; position:absolute; top:26px; left:60px; right:60px; height:2px; background:var(--line); z-index:0;}
.method-card{position:relative; z-index:1;}
.method-badge{width:52px; height:52px; border-radius:50%; background:var(--grad); color:#fff; font-weight:800; font-family:'Bricolage Grotesque',sans-serif; font-size:18px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; box-shadow:0 12px 24px -10px rgba(154,31,68,.4);}
.method-card h4{font-size:17.5px; font-weight:700;}
.method-card p{font-size:14px; color:var(--ink-soft); margin-top:8px;}
@media (max-width:900px){.method-row{grid-template-columns:1fr; gap:36px;} .method-row::before{display:none;}}

.plans{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.plan{border-radius:28px; padding:38px 32px; border:1px solid var(--line); background:#fff; display:flex; flex-direction:column; position:relative; transition:transform .3s, box-shadow .3s;}
.plan:hover{transform:translateY(-6px); box-shadow:0 30px 60px -30px rgba(0,0,0,.15);}
.plan.featured{background:var(--ink); color:#fff; border-color:transparent; box-shadow:0 30px 70px -20px rgba(154,31,68,.4);}
.plan.featured .plan-desc, .plan.featured li{color:#C6C2CC;}
.plan.featured .plan-price{color:#fff;}
.plan.featured li::before{color:var(--gold-2);}
.plan-badge{position:absolute; top:-14px; left:32px; background:var(--grad); color:#fff; font-size:11.5px; font-weight:700; padding:7px 16px; border-radius:100px;}
.plan h3{font-size:22px; font-weight:700;}
.plan-price{font-family:'Bricolage Grotesque',sans-serif; font-size:40px; font-weight:800; margin:16px 0 2px;}
.plan-price span{font-size:14px; font-family:'Inter',sans-serif; font-weight:500; color:var(--ink-soft);}
.plan-desc{font-size:14px; color:var(--ink-soft); margin-bottom:24px; font-weight:600;}
.plan ul{list-style:none; padding:0; margin:0 0 30px; display:flex; flex-direction:column; gap:13px;}
.plan li{font-size:14.5px; padding-left:24px; position:relative;}
.plan li::before{content:'✓'; position:absolute; left:0; color:var(--wine); font-weight:800;}
.plan-cta{margin-top:auto; text-align:center; padding:15px; border-radius:100px; text-decoration:none; font-weight:700; font-size:14.5px; border:1.5px solid var(--ink); transition:all .25s;}
.plan-cta:hover{background:var(--ink); color:#fff;}
.plan.featured .plan-cta{border-color:#fff; color:#fff; background:transparent;}
.plan.featured .plan-cta:hover{background:#fff; color:var(--ink);}
@media (max-width:900px){.plans{grid-template-columns:1fr;}}

.client-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.client-card{background:var(--bg-soft); border-radius:24px; padding:32px; border:1px solid var(--line);}
.client-card .icon{font-size:26px; margin-bottom:16px;}
.client-card h4{font-size:20px; font-weight:700;}
.client-card ul{list-style:none; padding:0; margin:16px 0 0; display:flex; flex-direction:column; gap:10px;}
.client-card li{font-size:14px; color:var(--ink-soft); padding-left:18px; position:relative;}
.client-card li::before{content:''; position:absolute; left:0; top:8px; width:6px; height:6px; border-radius:50%; background:var(--wine);}
@media (max-width:900px){.client-grid{grid-template-columns:1fr;}}

.faq-item{border-bottom:1px solid var(--line);}
.faq-q{width:100%; text-align:left; background:none; border:none; cursor:pointer; padding:24px 0; display:flex; justify-content:space-between; align-items:center; font-size:17px; font-weight:700; font-family:'Bricolage Grotesque',sans-serif; color:var(--ink);}
.faq-q .plus{font-size:22px; color:var(--wine); transition:transform .3s; flex:none; margin-left:16px;}
.faq-item.open .plus{transform:rotate(45deg);}
.faq-a{max-height:0; overflow:hidden; transition:max-height .35s ease;}
.faq-a p{font-size:15px; color:var(--ink-soft); padding-bottom:24px; margin:0; max-width:680px;}

.final-cta{background:var(--ink); border-radius:40px; padding:90px 48px; text-align:center; color:#fff; position:relative; overflow:hidden; margin:0 28px;}
.final-cta::before{content:''; position:absolute; width:600px; height:600px; background:var(--grad); filter:blur(140px); opacity:.4; top:-250px; left:50%; transform:translateX(-50%);}
.final-cta-inner{position:relative; z-index:1;}
.final-cta h2{font-size:clamp(30px,5vw,54px); max-width:760px; margin:0 auto;}
.final-cta p{color:#B8B4C0; margin-top:18px; font-size:16px; max-width:520px; margin-left:auto; margin-right:auto;}
.lead-form{max-width:560px; margin:44px auto 0; text-align:left; display:grid; grid-template-columns:1fr 1fr; gap:12px;}
.lead-form input, .lead-form select{background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.18); color:#fff; padding:15px 18px; border-radius:14px; font-family:'Inter',sans-serif; font-size:14.5px;}
.lead-form input::placeholder{color:#8A8592;}
.lead-form .full{grid-column:1/-1;}
.lead-form select option{color:#000;}
.lead-form button{grid-column:1/-1; background:var(--grad); border:none; color:#fff; padding:17px; border-radius:100px; font-weight:700; font-size:15px; cursor:pointer; transition:transform .25s;}
.lead-form button:hover{transform:scale(1.01);}
.lead-form button:disabled{opacity:.7; cursor:wait;}
@media (max-width:600px){.lead-form{grid-template-columns:1fr;} .final-cta{margin:0 14px; padding:64px 24px; border-radius:28px;}}

footer{padding:48px 28px;}
.footer-inner{max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; border-top:1px solid var(--line); padding-top:32px;}
.footer-brand{font-family:'Bricolage Grotesque',sans-serif; font-weight:700; font-size:16px;}
.footer-links{display:flex; gap:22px; font-size:13.5px; color:var(--ink-soft);}
.footer-links a{text-decoration:none;}
.footer-copy{font-size:12.5px; color:#B5B0A8;}

.reveal{opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease;}
.reveal.visible{opacity:1; transform:translateY(0);}

.sticky-cta{position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(140%); z-index:70; transition:transform .4s ease;}
.sticky-cta.show{transform:translateX(-50%) translateY(0);}
.sticky-cta a{background:var(--ink); color:#fff; font-weight:700; font-size:14px; padding:15px 26px; border-radius:100px; text-decoration:none; box-shadow:0 20px 40px -14px rgba(0,0,0,.4); display:flex; align-items:center; gap:8px;}
`;
