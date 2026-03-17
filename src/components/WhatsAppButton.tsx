"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/527773198115?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110"
      style={{ animation: "bounce-subtle 3s ease-in-out infinite" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
