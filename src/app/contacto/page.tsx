import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
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
            Evaluación sin compromiso. Le respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div>
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

              {/* WhatsApp */}
              <div className="mt-10 pt-8 border-t border-neutral-border">
                <p className="text-sm text-neutral-muted mb-4">
                  ¿Prefiere escribirnos directamente?
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar WhatsApp
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
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
