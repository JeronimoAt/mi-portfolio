import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeronimoat.dev"),
  title: {
    default: "Jerónimo Ahumada Torres — Desarrollador Full-Stack .NET",
    template: "%s | jeronimoat.dev",
  },
  description:
    "Desarrollador Full-Stack especializado en .NET, SQL Server y sistemas web orientados a reglas de negocio.",
  keywords: [
    "Desarrollador .NET",
    "C#",
    "SQL Server",
    "ASP.NET",
    "Full Stack",
    "Software",
    "Córdoba",
    "Argentina",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jerónimo Ahumada Torres — Desarrollador Full-Stack .NET",
    description:
      "Sistemas web en .NET, APIs, SQL Server y arquitectura limpia.",
    url: "https://jeronimoat.dev",
    siteName: "Jerónimo Ahumada Torres",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jerónimo Ahumada Torres — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerónimo Ahumada Torres — Desarrollador Full-Stack .NET",
    description:
      "Desarrollador Full-Stack especializado en .NET y SQL Server.",
    images: ["/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
