export const site = {
  name: "Jerónimo Ahumada Torres",
  shortName: "JA",
  role: "Desarrollador .NET Junior",
  location: "Córdoba, Argentina",
  email: "ahumadajero@gmail.com",
  whatsapp: "5493525531252",
  github: "https://github.com/JeronimoAt",
  linkedin: "https://www.linkedin.com/in/jeronimo-ahumada-torres-b458b9b7/",
};

export const skills = [
  {
    title: "Back-end",
    items: ["C#", ".NET 8", "ASP.NET Core", "REST APIs", "EF Core"],
  },
  {
    title: "Datos",
    items: ["SQL Server", "Modelado relacional", "Consultas SQL", "Validaciones"],
  },
  {
    title: "Front-end y herramientas",
    items: ["JavaScript", "HTML", "CSS", "Next.js", "Git", "Postman", "Swagger"],
  },
];

export const projects = [
  {
    title: "APPquiler",
    eyebrow: "Proyecto personal · En desarrollo",
    description:
      "Sistema de gestión inmobiliaria para administrar contratos, cobros, recibos, gastos y liquidaciones desde un único lugar.",
    highlights: [
      "API REST con reglas de negocio y DTOs",
      "Gestión de contratos, pagos y comprobantes",
      "Dashboard con información operativa",
    ],
    stack: [".NET 8", "EF Core", "SQL Server", "JavaScript"],
  },
  {
    title: "INMOSOFT",
    eyebrow: "Proyecto académico · Código disponible",
    description:
      "Aplicación inmobiliaria desarrollada en equipo para resolver consultas, seguimiento de deuda y visualización de indicadores.",
    highlights: [
      "Arquitectura con controllers, services y repositories",
      "Persistencia y consultas sobre SQL Server",
      "Interfaz web y gráficos para el dashboard",
    ],
    stack: ["ASP.NET Core", "C#", "SQL Server", "Chart.js"],
    href: "https://github.com/JeronimoAt/PII-2025",
  },
  {
    title: "Portfolio personal",
    eyebrow: "Proyecto personal · Sitio publicado",
    description:
      "Sitio responsive creado para presentar mi perfil, experiencia práctica y proyectos de forma clara y accesible.",
    highlights: [
      "Diseño responsive y accesible",
      "SEO y metadatos para compartir",
      "Despliegue continuo con GitHub y Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/JeronimoAt/mi-portfolio",
  },
];

export const experience = [
  {
    period: "Actualidad",
    title: "Desarrollo de proyectos propios y académicos",
    subtitle: ".NET · SQL Server · Aplicaciones web",
    description:
      "Diseño APIs, modelo bases de datos y construyo interfaces para convertir necesidades reales en soluciones que se puedan probar y mejorar.",
  },
  {
    period: "Experiencia profesional",
    title: "Administración inmobiliaria",
    subtitle: "Procesos · Clientes · Documentación",
    description:
      "Gestiono documentación, contratos, pagos y cobranzas, con seguimiento de propietarios e inquilinos. Ese conocimiento del negocio guía los sistemas que desarrollo.",
  },
  {
    period: "En curso",
    title: "Tecnicatura Universitaria en Programación",
    subtitle: "UTN Facultad Regional Córdoba",
    description:
      "Formación en programación, bases de datos, resolución de problemas y construcción de software mantenible.",
  },
];
