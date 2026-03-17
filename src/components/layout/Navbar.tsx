"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const isScrolled = useScrollPosition(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";

  const useLightText = hasDarkHero && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={cn(
                "text-2xl font-bold tracking-wide transition-colors duration-300",
                useLightText ? "text-white" : "text-primary"
              )}
            >
              DEPEL
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-semibold uppercase tracking-widest transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                  useLightText
                    ? "text-white/90 hover:text-white"
                    : "text-neutral-dark hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+527773198115"
              className="flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
            >
              <Phone className="h-4 w-4" />
              777 319 8115
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileOpen ? (
              <X className={cn("h-6 w-6", useLightText ? "text-white" : "text-neutral-dark")} />
            ) : (
              <Menu className={cn("h-6 w-6", useLightText ? "text-white" : "text-neutral-dark")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 top-20 z-40 bg-primary-dark/95 flex flex-col items-center justify-center gap-8 lg:hidden"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-xl font-semibold uppercase tracking-widest text-white/90 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+527773198115"
            className="flex items-center gap-2 bg-accent px-6 py-3 text-base font-semibold text-neutral-dark"
          >
            <Phone className="h-5 w-5" />
            777 319 8115
          </a>
        </nav>
      )}
    </header>
  );
}
