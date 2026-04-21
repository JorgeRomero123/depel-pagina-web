"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";

const stats = [
  { value: "25+", label: "AÑOS DE EXPERIENCIA" },
  { value: "200+", label: "PROYECTOS ENTREGADOS" },
  { value: "100%", label: "CUMPLIMIENTO NOM" },
  { value: "DC3", label: "PERSONAL CERTIFICADO" },
];

export function Hero() {
  return (
    <section
      data-dark-hero
      className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background photo — COLOR treatment, darkened with navy overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getImagePath("/images/hero/hero-main.jpg")}')`,
          }}
        />
        {/* Navy color overlay — darkens toward navy, preserves hue */}
        <div className="absolute inset-0 bg-[var(--color-navy)]/70 mix-blend-multiply" />
        {/* Left-to-right gradient for copy legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)]/95 via-[var(--color-navy)]/75 to-[var(--color-navy)]/30" />
        {/* Faint vertical grid rules for the blueprint feel */}
        <div className="absolute inset-0 hero-grid opacity-60" />
      </div>

      {/* Main hero content — top padding leaves room for fixed info-strip + navbar */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-32 md:pt-36 pb-10 md:pb-14">
        {/* Floating coordinates badge — desktop only */}
        <div
          aria-hidden="true"
          className="hidden xl:flex absolute top-36 right-10 flex-col items-end gap-1 font-mono text-[11px] text-white/40 tracking-[0.18em]"
        >
          <span>N 18°53&apos;00&quot;</span>
          <span>W 99°10&apos;34&quot;</span>
          <div className="mt-2 h-16 w-px bg-white/20" />
        </div>

        {/* Section index label */}
        <div className="flex items-center gap-4 font-mono text-[11px] sm:text-xs tracking-[0.24em] text-[var(--color-accent)] uppercase mb-8 md:mb-12">
          <span className="h-px w-8 sm:w-14 bg-[var(--color-accent)]/60" />
          <span>[ 001 ]</span>
          <span className="text-white/70">Especialistas en Media y Baja Tensión</span>
        </div>

        {/* Big stacked headline */}
        <h1
          id="hero-heading"
          className="font-[family-name:var(--font-barlow)] font-black uppercase leading-[0.88] tracking-[-0.015em]"
        >
          <span className="block text-[clamp(3.25rem,11vw,10.5rem)] text-white">
            Ingeniería
          </span>
          <span className="block text-[clamp(3.25rem,11vw,10.5rem)] text-[var(--color-accent)]">
            Eléctrica
          </span>
          <span className="block text-[clamp(3.25rem,11vw,10.5rem)] text-white">
            Industrial
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 md:mt-10 max-w-xl text-base md:text-lg leading-relaxed text-white/75">
          Proyectos llave en mano para planta farmacéutica e industrial en
          Morelos y el centro de México. Certificación DC3. Cumplimiento
          NOM.
        </p>

        {/* CTAs */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/contacto"
            className="group inline-flex items-center justify-between gap-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-alt)] px-7 py-4 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] transition-colors min-w-0 sm:min-w-[280px]"
          >
            <span className="flex items-center gap-3">
              <Play className="h-3 w-3 fill-current" />
              Solicitar Cotización
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white hover:bg-white/5 px-7 py-4 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>

      {/* Stats band — anchored to the bottom of the hero */}
      <div className="relative border-t border-white/10 bg-[var(--color-navy-deep)]/60 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-6 md:py-8 ${i % 2 === 1 ? "pl-6" : "pr-6"} lg:px-8`}
              >
                <dt className="font-[family-name:var(--font-barlow)] text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-accent)] leading-none">
                  {stat.value}
                </dt>
                <dd className="mt-2 md:mt-3 font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-white/55 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
