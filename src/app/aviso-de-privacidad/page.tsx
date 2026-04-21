import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de DEPEL Ingeniería conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Legal
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-dark">
          Aviso de Privacidad
        </h1>
        <p className="mt-4 text-sm text-neutral-muted">
          Última actualización: marzo 2026
        </p>

        <div className="mt-12 space-y-8 text-neutral-dark text-sm leading-relaxed [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-neutral-dark [&_h2]:mt-10 [&_h2]:mb-3">
          <p>
            En cumplimiento con lo dispuesto por la Ley Federal de Protección
            de Datos Personales en Posesión de los Particulares (LFPDPPP), su
            Reglamento y los Lineamientos del Aviso de Privacidad, DEPEL
            Ingeniería (en adelante &ldquo;DEPEL&rdquo;), con domicilio en
            Jiutepec, Morelos, México, es responsable del tratamiento de sus
            datos personales.
          </p>

          <h2>Datos personales que recabamos</h2>
          <p>
            Para las finalidades señaladas en el presente aviso de privacidad,
            podemos recabar los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Número telefónico</li>
            <li>Nombre de la empresa u organización</li>
            <li>Información relacionada con su proyecto o solicitud</li>
          </ul>

          <h2>Finalidades del tratamiento</h2>
          <p>Sus datos personales serán utilizados para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Atender sus solicitudes de cotización e información</li>
            <li>Dar seguimiento a proyectos y servicios contratados</li>
            <li>Contactarle en relación con nuestros servicios</li>
            <li>Elaborar propuestas técnicas y económicas</li>
          </ul>

          <h2>Transferencia de datos</h2>
          <p>
            DEPEL no transferirá sus datos personales a terceros sin su
            consentimiento, salvo las excepciones previstas en el artículo 37
            de la LFPDPPP.
          </p>

          <h2>Derechos ARCO</h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse
            al tratamiento de sus datos personales (derechos ARCO). Para
            ejercer cualquiera de estos derechos, puede enviar una solicitud
            al correo electrónico:{" "}
            <a
              href="mailto:jonathan.depel@gmail.com"
              className="text-primary hover:text-primary-light transition-colors font-medium"
            >
              jonathan.depel@gmail.com
            </a>
          </p>
          <p>Su solicitud deberá contener:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo del titular</li>
            <li>Descripción clara de los datos sobre los que busca ejercer sus derechos</li>
            <li>Cualquier documento que facilite la localización de sus datos</li>
          </ul>
          <p>
            DEPEL responderá a su solicitud en un plazo máximo de 20 días
            hábiles contados a partir de la fecha de recepción.
          </p>

          <h2>Uso de cookies</h2>
          <p>
            Este sitio web puede utilizar cookies y tecnologías similares con
            fines analíticos para mejorar la experiencia de navegación. Usted
            puede desactivar las cookies a través de la configuración de su
            navegador.
          </p>

          <h2>Modificaciones al aviso de privacidad</h2>
          <p>
            DEPEL se reserva el derecho de modificar el presente aviso de
            privacidad. Cualquier cambio será publicado en esta página. Le
            recomendamos revisarla periódicamente.
          </p>

          <h2>Contacto</h2>
          <p>
            Si tiene preguntas sobre este aviso de privacidad o sobre el
            tratamiento de sus datos personales, puede contactarnos en:
          </p>
          <ul className="list-none space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jonathan.depel@gmail.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                jonathan.depel@gmail.com
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/527772187364"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                777 218 7364
              </a>
            </li>
            <li>
              <strong>Domicilio:</strong>{" "}
              <a
                href="https://maps.google.com/?q=18.9193975,-99.1799282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Calle Francisco González Bocanegra #78, Col. El Porvenir, Jiutepec, Morelos, México
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
