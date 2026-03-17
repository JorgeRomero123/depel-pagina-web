import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-secondary to-secondary-dark text-white"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Listo para su proximo proyecto electrico?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Contactenos para una evaluacion sin compromiso. Estamos listos para
          ayudarle.
        </p>

        {/* Phone */}
        <div className="mt-8 flex items-center justify-center gap-2 text-2xl md:text-3xl font-barlow font-bold">
          <Phone className="h-7 w-7" />
          <a href="tel:+527773198115" className="hover:text-accent transition-colors">
            (777) 319 8115
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-neutral-dark hover:bg-accent-alt transition-colors"
          >
            Solicitar Cotizacion
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="https://wa.me/527773198115?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-7 py-3.5 text-base font-semibold text-white hover:brightness-110 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
