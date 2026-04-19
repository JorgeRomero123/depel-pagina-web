import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { getImagePath } from "@/lib/basePath";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const services = [
  "Ingeniería eléctrica",
  "Instalaciones MT/BT",
  "Mantenimiento",
  "Paneles solares",
  "Subestaciones",
];

const certifications = ["DC3", "NOM-001", "NOM-029", "IMSS"];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Top meta row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/50">
          <span>Tweaks · DEPEL</span>
          <span>v1.0</span>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-[var(--color-accent)]">
                <img
                  src={getImagePath("/images/logo-depel.png")}
                  alt=""
                  className="h-6 w-auto"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-[family-name:var(--font-barlow)] font-black text-white text-lg tracking-wide">
                  DEPEL
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Ing. Eléctrica · MX
                </span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-white/60 leading-relaxed">
              Ingeniería eléctrica industrial llave en mano en Morelos y el
              centro de México. Desde 1999, sin subcontratos, sin excusas.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/50 mb-5">
              Sitemap
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-barlow)] font-black uppercase text-white hover:text-[var(--color-accent)] transition-colors text-base tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/50 mb-5">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/50 mb-5">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <a
                  href="https://maps.google.com/?q=18.9193975,-99.1799282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Calle Francisco González Bocanegra #78, Col. El Porvenir, Jiutepec, Morelos
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <a
                  href="tel:+527772187383"
                  className="hover:text-white transition-colors font-[family-name:var(--font-mono)]"
                >
                  777 · 218 · 7383
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <a
                  href="mailto:jonathan.depel@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jonathan.depel@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                Lun – Sáb · 08:00 – 17:00
              </li>
            </ul>
          </div>
        </div>

        {/* Certification chips */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/50 mr-2">
            Certificaciones
          </span>
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center border border-white/20 px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-white/80"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white/40">
          <p>
            © {new Date().getFullYear()} DEPEL Ingeniería · Todos los derechos reservados
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="hover:text-white transition-colors"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
