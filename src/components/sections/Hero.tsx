"use client";

import { ArrowRight, Shield, Award } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/90 via-neutral-dark/70 to-neutral-dark/40" />

      {/* Electrical line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Desde Jiutepec, Morelos para toda la industria
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
          >
            Ingenieria Electrica Industrial{" "}
            <span className="text-accent">de Confianza</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            Proyectos llave en mano: desde la ingenieria hasta la puesta en
            marcha. Instalaciones en media y baja tension con certificacion DC3.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
            >
              Solicitar Cotizacion
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Conocer Servicios
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>Normas NOM</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-secondary" />
              <span>Certificacion DC3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
