"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { getImagePath } from "@/lib/basePath";
import { SectionLabel } from "@/components/ui/SectionHeading";

const VIDEO_SRC = "/video/depel-nave-industrial.mp4";
const POSTER_SRC = "/video/depel-nave-poster.jpg";

const specs = [
  { label: "Alcance", value: "Nave completa" },
  { label: "Sistemas", value: "Iluminación · Fuerza · Datos" },
  { label: "Ubicación", value: "Morelos, México" },
];

export function VideoShowcase() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // El <video> vive siempre en el DOM con preload="none": no descarga los 13 MB
  // hasta que se llama play(). Llamarlo DENTRO del gesto del clic es lo que
  // conserva el permiso de reproducción — montarlo después lo pierde.
  function handlePlay() {
    setStarted(true);
    videoRef.current?.play().catch(() => {
      // Si el navegador la bloquea, quedan los controles nativos a la vista.
    });
  }

  return (
    <section
      data-dark-hero
      className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white py-20 lg:py-28"
      aria-labelledby="video-heading"
    >
      {/* Retícula de plano, como en el hero */}
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="002" label="Obra Ejecutada / Video" dark />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2
            id="video-heading"
            className="font-[family-name:var(--font-barlow)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(2.5rem,5.5vw,5rem)]"
          >
            Véalo Encendido.
          </h2>
          <p className="max-w-md text-base sm:text-lg text-white/70 leading-relaxed">
            Recorrido en dron por una nave industrial que cableamos completa:
            desde el encendido de la iluminación hasta el directorio rotulado
            del tablero principal.
          </p>
        </div>

        {/* Reproductor */}
        <div className="relative w-full aspect-video bg-[var(--color-navy-deep)] border border-white/10 overflow-hidden">
          <video
            ref={videoRef}
            className="h-full w-full"
            src={getImagePath(VIDEO_SRC)}
            poster={getImagePath(POSTER_SRC)}
            controls={started}
            playsInline
            preload="none"
          />

          {!started && (
            <button
              type="button"
              onClick={handlePlay}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label="Reproducir video: recorrido por instalación eléctrica industrial en Morelos"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${getImagePath(POSTER_SRC)}')`,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[var(--color-navy-deep)]/35 transition-colors duration-300 group-hover:bg-[var(--color-navy-deep)]/20"
              />

              {/* Botón de reproducción */}
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Play
                    className="h-8 w-8 sm:h-10 sm:w-10 text-[var(--color-navy-deep)] translate-x-0.5"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </span>
              </span>

              {/* Duración */}
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 font-[family-name:var(--font-mono)] text-[11px] sm:text-xs tracking-[0.2em] text-white/80 bg-[var(--color-navy-deep)]/70 px-3 py-1.5"
              >
                1:00
              </span>
            </button>
          )}
        </div>

        {/* Ficha técnica bajo el video */}
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {specs.map((s) => (
            <div key={s.label} className="bg-[var(--color-navy)] px-6 py-5">
              <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {s.label}
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-barlow)] font-bold uppercase text-lg sm:text-xl tracking-wide text-white">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
