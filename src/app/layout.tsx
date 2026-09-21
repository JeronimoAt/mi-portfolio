import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeronimoat.dev"),
  title: {
    default: "Jerónimo Ahumada Torres — Desarrollador .NET Junior",
    template: "%s | jeronimoat.dev",
  },
  description:
    "Portfolio de Jerónimo Ahumada Torres, desarrollador .NET Junior en Córdoba. Proyectos con C#, ASP.NET Core, EF Core y SQL Server.",
  keywords: [
    "Desarrollador .NET",
    "C#",
    "SQL Server",
    "ASP.NET",
    "Desarrollador Junior",
    "Software",
    "Córdoba",
    "Argentina",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jerónimo Ahumada Torres — Desarrollador .NET Junior",
    description:
      "Proyectos con C#, ASP.NET Core, EF Core y SQL Server.",
    url: "https://jeronimoat.dev",
    siteName: "Jerónimo Ahumada Torres",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jerónimo Ahumada Torres — Desarrollador .NET Junior",
    description:
      "Portfolio y proyectos desarrollados con .NET y SQL Server.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
