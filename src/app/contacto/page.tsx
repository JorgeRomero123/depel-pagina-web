import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contáctenos para una evaluación sin compromiso. Jiutepec, Morelos, México. WhatsApp: ${WHATSAPP_DISPLAY}.`,
};

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Calle Francisco González Bocanegra #78, Col. El Porvenir, Jiutepec, Morelos",
    href: "https://maps.google.com/?q=18.9193975,-99.1799282",
    external: true,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Sábado: 08:00 – 17:00",
    href: null,
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contacto
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-dark max-w-3xl">
            Hablemos de su proyecto
          </h1>
          <p className="mt-6 text-lg text-neutral-muted max-w-2xl leading-relaxed">
            Evaluación sin compromiso. Le respondemos en menos de 24 horas por
            WhatsApp o correo.
          </p>
        </div>
      </section>

      {/* Contact info + CTAs */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div>
              <h2 className="text-xs uppercase tracking-wider text-neutral-muted font-semibold mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-muted font-semibold">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="text-neutral-dark font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-dark font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: direct CTAs */}
            <div className="bg-neutral-light border border-neutral-border p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-neutral-dark">
                Escríbanos directamente
              </h2>
              <p className="mt-3 text-neutral-muted leading-relaxed">
                La forma más rápida de obtener una cotización es por WhatsApp.
                También puede enviarnos un correo y le respondemos el mismo día
                hábil.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-whatsapp px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp · {WHATSAPP_DISPLAY}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-between gap-3 bg-neutral-dark px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    {CONTACT_EMAIL}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-6 text-sm text-neutral-muted">
                Para una cotización rápida, comparta: ubicación del proyecto,
                tipo de trabajo (eléctrico, civil, mecánico) y fecha estimada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-80 lg:h-96 bg-neutral-border">
        <iframe
          title="Ubicación DEPEL en Jiutepec, Morelos"
          src="https://maps.google.com/maps?q=18.9193975,-99.1799282&t=&z=17&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
