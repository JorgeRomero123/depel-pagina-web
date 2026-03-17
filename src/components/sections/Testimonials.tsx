"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          title="Lo que Dicen Nuestros Clientes"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <Quote className="mx-auto h-10 w-10 text-primary/20 mb-6" />

          {/* Testimonial */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonios de clientes"
            className="relative min-h-[200px]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonio ${index + 1} de ${testimonials.length}`}
                className={cn(
                  "absolute inset-0 transition-all duration-500 text-center",
                  index === current
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 pointer-events-none"
                )}
              >
                <blockquote className="text-lg md:text-xl text-neutral-dark leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-bold text-neutral-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-muted">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="p-2 rounded-full border border-neutral-border hover:bg-neutral-offwhite transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-muted" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-neutral-border hover:bg-neutral-muted"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="p-2 rounded-full border border-neutral-border hover:bg-neutral-offwhite transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-neutral-muted" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
