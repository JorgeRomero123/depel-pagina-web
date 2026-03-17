import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 bg-primary-dark"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Hablemos de su proyecto
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Evaluacion sin compromiso. Llamenos directamente o escribanos
            por WhatsApp.
          </p>

          <p className="mt-8 font-barlow text-3xl md:text-4xl font-bold text-white">
            <a
              href="tel:+527773198115"
              className="hover:text-accent transition-colors"
            >
              (777) 319 8115
            </a>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
            >
              Solicitar Cotizacion
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/527773198115?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
