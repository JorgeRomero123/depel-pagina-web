import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-depel.png"
                alt="DEPEL"
                width={40}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-wide">DEPEL</span>
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Ingeniería eléctrica industrial de confianza. Proyectos llave en mano
              desde la ingeniería hasta la puesta en marcha.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Instalaciones Eléctricas</li>
              <li>Mantenimiento Preventivo</li>
              <li>Mantenimiento Correctivo</li>
              <li>Asesorías Técnicas</li>
              <li>Energías Alternativas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Jiutepec, Morelos, México
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+527773198115" className="hover:text-white transition-colors">
                  (777) 319 8115
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:jonathan.depel@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jonathan.depel@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                Lun - Sáb: 08:00 - 17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} DEPEL Ingeniería. Todos los derechos reservados.
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
