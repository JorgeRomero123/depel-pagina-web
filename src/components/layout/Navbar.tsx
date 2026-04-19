"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getImagePath } from "@/lib/basePath";
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
      {/* Top info strip — coordinates + certifications */}
      <div
        className={cn(
          "border-b transition-colors duration-300",
          isScrolled ? "border-neutral-border" : "border-white/5"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-2.5">
          <div
            className={cn(
              "flex items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase transition-colors duration-300",
              useLightText ? "text-[var(--color-accent)]/90" : "text-neutral-muted"
            )}
          >
            <div className="hidden sm:flex items-center gap-6 md:gap-10">
              <span className="whitespace-nowrap">★ EST. 1999</span>
              <span className="hidden md:inline whitespace-nowrap">Jiutepec · Morelos · MX</span>
              <span className="hidden lg:inline whitespace-nowrap">18.8833°N · 99.1761°W</span>
            </div>
            <div className="sm:hidden whitespace-nowrap">★ EST. 1999 · JIUTEPEC MX</div>
            <div className="flex items-center gap-4 md:gap-8">
              <span className="hidden md:inline whitespace-nowrap">DC3 · NOM-001-SEDE · NOM-029-STPS</span>
              <span className="md:hidden whitespace-nowrap">DC3 · NOM</span>
              <span
                className={cn(
                  "whitespace-nowrap",
                  useLightText ? "text-white/60" : "text-neutral-muted/70"
                )}
              >
                [ ES ]
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={getImagePath("/images/logo-depel.png")}
              alt="DEPEL Ingeniería Eléctrica"
              className="h-10 w-auto"
            />
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
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold uppercase tracking-widest transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full",
                    isActive ? "after:w-full after:bg-accent" : "after:w-0 after:bg-accent",
                    useLightText
                      ? "text-white/90 hover:text-white"
                      : isActive
                        ? "text-primary"
                        : "text-neutral-dark hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+527772187383"
              className="flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-semibold text-neutral-dark transition-colors hover:bg-accent-alt"
            >
              <Phone className="h-4 w-4" />
              777 218 7383
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
            href="tel:+527772187383"
            className="flex items-center gap-2 bg-accent px-6 py-3 text-base font-semibold text-neutral-dark"
          >
            <Phone className="h-5 w-5" />
            777 218 7383
          </a>
        </nav>
      )}
    </header>
  );
}
