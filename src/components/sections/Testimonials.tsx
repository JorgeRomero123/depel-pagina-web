"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    quote:
      "DEPEL demostró profesionalismo y compromiso en la instalación eléctrica de nuestra planta. Cumplieron con los tiempos y las normas de seguridad. Su equipo estuvo presente en cada etapa del proyecto y resolvieron los imprevistos con rapidez.",
    name: "Ing. Carlos Martínez",
    role: "Gerente de Planta",
    company: "Farmacéutica del Centro",
  },
  {
    quote:
      "El mantenimiento preventivo que nos brinda DEPEL ha reducido significativamente nuestros tiempos de inactividad. Llevamos más de 5 años trabajando juntos y la calidad del servicio se ha mantenido constante. Un equipo verdaderamente confiable.",
    name: "Lic. María Fernández",
    role: "Directora de Operaciones",
    company: "Industrias del Sur",
  },
  {
    quote:
      "La instalación de paneles solares fue impecable. Redujimos nuestro costo energético en un 40% en el primer año gracias a su asesoría. El retorno de inversión fue más rápido de lo que esperábamos.",
    name: "Ing. Roberto Sánchez",
    role: "Director General",
    company: "Manufacturas Morelos",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-neutral-dark"
        >
          Testimonios
        </h2>
        <p className="mt-3 text-neutral-muted">
          Lo que dicen quienes ya trabajan con nosotros.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Left: name selector */}
          <div className="flex flex-row lg:flex-col gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left px-5 py-4 border-l-2 transition-all duration-200",
                  i === active
                    ? "border-accent bg-primary-50"
                    : "border-transparent hover:bg-neutral-offwhite"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-bold",
                    i === active ? "text-primary" : "text-neutral-dark"
                  )}
                >
                  {t.name}
                </p>
                <p className="text-xs text-neutral-muted hidden sm:block">
                  {t.company}
                </p>
              </button>
            ))}
          </div>

          {/* Right: active quote */}
          <div className="flex items-center">
            <blockquote className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl leading-snug text-neutral-dark font-medium">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-accent" />
                <div>
                  <p className="text-sm font-bold text-neutral-dark">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-neutral-muted">
                    {testimonials[active].role},{" "}
                    {testimonials[active].company}
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
