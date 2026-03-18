import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";

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
  metadataBase: new URL("https://www.depel.com.mx"),
  title: {
    default: "DEPEL | Ingeniería Eléctrica Industrial en Morelos, México",
    template: "%s | DEPEL Ingeniería Eléctrica",
  },
  description:
    "Ingeniería eléctrica industrial, instalaciones en media y baja tensión, mantenimiento preventivo y correctivo, energías alternativas. Jiutepec, Morelos, México.",
  keywords: [
    "ingeniería eléctrica",
    "instalaciones eléctricas industriales",
    "mantenimiento eléctrico",
    "proyectos llave en mano",
    "paneles solares",
    "Jiutepec",
    "Morelos",
    "DEPEL",
    "instalaciones a prueba de explosión",
    "subestaciones eléctricas",
    "certificación DC3",
    "NOM",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DEPEL | Ingeniería Eléctrica Industrial",
    description:
      "Proyectos llave en mano en ingeniería eléctrica industrial. Desde la ingeniería hasta la puesta en marcha. Jiutepec, Morelos.",
    locale: "es_MX",
    type: "website",
    siteName: "DEPEL Ingeniería",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEPEL | Ingeniería Eléctrica Industrial",
    description:
      "Proyectos llave en mano en ingeniería eléctrica industrial. Jiutepec, Morelos, México.",
  },
  robots: {
    index: true,
    follow: true,
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
        <StructuredData />
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
