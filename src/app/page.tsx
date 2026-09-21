import type { ReactNode } from "react";
import { experience, projects, site, skills } from "@/lib/data";
import Reveal from "./components/RevealOnScroll";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8">
      {children}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>;
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function Header() {
  const nav = [
    { label: "Perfil", href: "#perfil" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="site-header">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <span className="brand-mark">{site.shortName}</span>
            <span className="hidden sm:inline">{site.name}</span>
          </a>

          <nav aria-label="Navegación principal" className="hidden gap-7 text-sm text-slate-300 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-small button-primary" href={`mailto:${site.email}`}>
            Contactarme
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section scroll-mt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="availability-badge">
              <span className="availability-dot" />
              Buscando mi primera oportunidad en desarrollo
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {site.role} · {site.location}
            </p>
            <h1 className="hero-title">
              Construyo soluciones web con
              <span className="gradient-text"> C#, .NET y SQL Server.</span>
            </h1>
            <p className="hero-copy">
              Soy estudiante de programación con experiencia práctica creando APIs,
              modelando bases de datos y desarrollando sistemas orientados a procesos
              reales. Busco sumarme a un equipo donde pueda aportar, aprender y crecer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proyectos" className="button button-primary">
                Ver mis proyectos
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="button button-secondary">
                GitHub <ArrowIcon />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="button button-ghost">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Resumen profesional">
            <div className="profile-card-glow" />
            <div className="relative">
              <p className="eyebrow">Perfil en 30 segundos</p>
              <ul className="mt-6 space-y-5">
                {[
                  ["01", "Back-end", "APIs REST en ASP.NET Core y C#"],
                  ["02", "Datos", "SQL Server, EF Core y modelado relacional"],
                  ["03", "Producto", "Procesos reales convertidos en software"],
                ].map(([number, title, description]) => (
                  <li key={number} className="profile-item">
                    <span className="profile-number">{number}</span>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/10 pt-6 text-sm text-slate-400">
                Disponible para oportunidades junior en Córdoba o remoto.
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Profile() {
  return (
    <section id="perfil" className="section scroll-mt-20">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Perfil técnico"
            title="Bases sólidas para crecer como desarrollador"
            description="Me interesa entender el problema antes de escribir código. Trabajo con una estructura clara, validaciones de negocio y foco en que la solución sea fácil de mantener."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 90}>
              <article className="skill-card">
                <p className="card-index">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="section section-alt scroll-mt-20">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Proyectos seleccionados"
            title="Aprendizaje aplicado a problemas reales"
            description="Estos proyectos muestran cómo modelo información, organizo reglas de negocio y construyo funcionalidades completas."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 90} className="h-full">
              <article className="project-card">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <Pill key={technology}>{technology}</Pill>
                    ))}
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Ver código <ArrowIcon />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-slate-500">Caso en preparación</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="section scroll-mt-20">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Recorrido"
            title="Experiencia que suma contexto al código"
            description="Combino formación técnica con conocimiento de procesos administrativos e inmobiliarios."
          />
        </Reveal>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 90}>
              <article className="timeline-item">
                <div className="timeline-marker" />
                <p className="text-sm font-semibold text-blue-300">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="section scroll-mt-20">
      <Container>
        <Reveal>
          <div className="contact-panel">
            <div className="max-w-2xl">
              <p className="eyebrow">Contacto</p>
              <h2 className="section-title">¿Buscás un desarrollador junior con iniciativa?</h2>
              <p className="section-copy">
                Estoy abierto a conversar sobre oportunidades en desarrollo .NET, back-end
                o full-stack junior. Puedo contarte en detalle cómo construí cada proyecto.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={`mailto:${site.email}`} className="button button-primary">
                Enviar email
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                WhatsApp <ArrowIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-5">
            <a className="footer-link" href={`mailto:${site.email}`}>Email</a>
            <a className="footer-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="footer-link" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Header />
      <Hero />
      <Profile />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
