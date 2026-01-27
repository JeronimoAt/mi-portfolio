import { site, projects, testimonials } from "@/lib/data";
import Reveal from "./components/Reveal";


function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      {kicker ? <p className="text-sm text-white/60">{kicker}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-2xl text-white/70">{desc}</p> : null}
    </div>
  );
}

function Header() {
  const nav = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-card)] bg-black/60 backdrop-blur-xl">
      <Container>

        
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="font-semibold text-white">
            {site.name}
            <span className="text-white/50">.dev</span>
          </a>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90"
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>{site.role}</Pill>
              <Pill>{site.location}</Pill>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Construyo sistemas web para encontrar{" "}
              <span className="text-white/70">claridad y rendimiento</span> en tu negocio.
            </h1>

            <p className="mt-4 max-w-xl text-white/70">
              Desarrollo backends en .NET, bases en SQL Server y busco modernidad en frontends. Sistemas escalables y fáciles de mantener.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-4 py-2 font-medium text-black hover:bg-white/90"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
              >
                Contacto
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6 shadow-lg">
            <p className="text-sm text-white/60">Stack principal</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["C#", ".NET", "EF Core", "SQL Server", "APIs", "HTML/CSS/JS"].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/70">
                Disponible para: <span className="text-white">freelance / part-time / proyectos</span>
              </p>
              <p className="mt-2 text-sm text-white/60">
                Respuesta en 24–48 hs. Hablemos por WhatsApp o por mail.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          kicker="About"
          title="Sobre mí"
          desc="Me gusta construir software con bases sólidas: arquitectura en capas, validaciones de negocio, DTOs y APIs claras."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Back-end", desc: "APIs en .NET con repositorios/servicios, reglas de negocio y endpoints prolijos." },
            { title: "Base de datos", desc: "SQL Server, modelado, constraints, queries y performance cuando hace falta." },
            { title: "Producto", desc: "Pienso en UX, flujos reales y mantenimiento: que sea simple para el usuario y para el equipo." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6">
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-white/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Projects" title="Proyectos" desc="Una selección de cosas que construí (o estoy construyendo)." />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <span className="text-white/50 group-hover:text-white/80">↗</span>
              </div>
              <p className="mt-2 text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Testimonials" title="Referencias" desc="Si todavía no tenés testimonios, acá podemos poner “Logros” o “Resultados”." />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6">
              <p className="text-white/80">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
              <p className="text-sm text-white/60">{t.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Contact" title="Contacto" desc="Dejame tu mensaje y me contacto con vos. También me podés escribir al WhatsApp." />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6">
            <p className="text-white/70">
              Email:{" "}
              <a className="text-white underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-white/70">
              WhatsApp:{" "}
              <a className="text-white underline" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                +{site.whatsapp}
              </a>
            </p>
            <p className="mt-6 text-sm text-white/60">
            </p>
          </div>

          <form
  action="https://formspree.io/f/xreqerdp"
  method="POST"
  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-xl p-6"
>
  <input type="hidden" name="_subject" value="Nuevo mensaje desde jeronimoat.dev" />
  <input type="hidden" name="_redirect" value="https://jeronimoat.dev/gracias" />

  <div className="grid gap-4">
    <div>
      <label className="block text-sm text-white/70 mb-2">Nombre</label>
      <input
        name="name"
        required
        className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
        placeholder="Tu nombre"
      />
    </div>

    <div>
      <label className="block text-sm text-white/70 mb-2">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
        placeholder="tu@email.com"
      />
    </div>

    <div>
      <label className="block text-sm text-white/70 mb-2">Mensaje</label>
      <textarea
        name="message"
        required
        rows={6}
        className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
        placeholder="Contame lo que necesitas."
      />
    </div>

    {/* anti-spam honeypot */}
    <input type="text" name="_gotcha" className="hidden" />

    <button
      type="submit"
      className="mt-2 rounded-xl bg-white px-4 py-3 font-medium text-black hover:bg-white/90 transition"
    >
      Enviar
    </button>
  </div>


          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-white/70 hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-white/70 hover:text-white" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <Reveal>
  <About />
</Reveal>

<Reveal delayMs={100}>
  <Projects />
</Reveal>

<Reveal delayMs={150}>
  <Testimonials />
</Reveal>

<Reveal delayMs={200}>
  <Contact />
</Reveal>

    </main>
  );
}

