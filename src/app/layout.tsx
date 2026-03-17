import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DEPEL | Ingenieria Electrica Industrial",
    template: "%s | DEPEL",
  },
  description:
    "Ingenieria electrica industrial, instalaciones en media y baja tension, mantenimiento preventivo y correctivo, energias alternativas. Jiutepec, Morelos, Mexico.",
  keywords: [
    "ingenieria electrica",
    "instalaciones electricas industriales",
    "mantenimiento electrico",
    "proyectos llave en mano",
    "paneles solares",
    "Jiutepec",
    "Morelos",
    "DEPEL",
  ],
  openGraph: {
    title: "DEPEL | Ingenieria Electrica Industrial",
    description:
      "Proyectos llave en mano en ingenieria electrica industrial. Desde la ingenieria hasta la puesta en marcha.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
