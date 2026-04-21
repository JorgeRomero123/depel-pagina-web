import { ArrowRight, MessageCircle, Mail, Play } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/basePath";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/contact";

export function CTASection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-navy-deep)] text-white py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Background photo with color treatment + navy overlays */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${getImagePath("/images/about/industrial-plant.jpg")}')`,
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-navy-deep)]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)]/90 via-[var(--color-navy)]/70 to-[var(--color-navy-deep)]/90" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="007" label="Siguiente Paso" dark />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — headline + description */}
          <div>
            <h2
              id="cta-heading"
              className="font-[family-name:var(--font-barlow)] font-black uppercase text-white leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
            >
              Tiene un Proyecto.
              <br />
              Necesita Certeza.
            </h2>
            <p className="mt-8 max-w-md text-white/70 leading-relaxed">
              Cotizaciones en 72 horas. Ingeniería propia. Cumplimiento NOM
              y DC3. Escríbanos por WhatsApp al equipo técnico directo.
            </p>
          </div>

          {/* Right — stacked contact bars */}
          <div className="flex flex-col gap-3">
            <Link
              href="/contacto"
              className="group flex items-center justify-between gap-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-alt)] px-6 py-5 font-[family-name:var(--font-mono)] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] transition-colors"
            >
              <span className="flex items-center gap-3">
                <Play className="h-3 w-3 fill-current" />
                Solicitar Cotización
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border border-white/30 hover:border-white hover:bg-white/5 px-6 py-5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.22em] text-white transition-colors"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4" />
                WhatsApp · {WHATSAPP_DISPLAY}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center justify-between gap-4 border border-white/30 hover:border-white hover:bg-white/5 px-6 py-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-white transition-colors"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
