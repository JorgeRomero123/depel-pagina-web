"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section
      data-dark-hero
      className="relative min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url('${getImagePath("/images/hero/hero-main.jpg")}')`,
        }}
      />
      <div className="absolute inset-0 bg-neutral-dark/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
          >
            Ingeniería Eléctrica
            <br />
            Industrial
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
            Proyectos llave en mano en media y baja tensión.
            Certificación DC3, cumplimiento NOM.
            Jiutepec, Morelos.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
            >
              Solicitar Cotización
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+527772187383"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              (777) 218 7383
            </a>
          </div>

          {/* Trust markers */}
          <div className="mt-12 flex gap-8 text-base md:text-lg text-white/60 uppercase tracking-wider font-semibold">
            <span>+25 años</span>
            <span>+200 proyectos</span>
            <span>NOM &middot; DC3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
