export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: "DEPEL Ingeniería",
    description:
      "Ingeniería eléctrica industrial, instalaciones en media y baja tensión, mantenimiento preventivo y correctivo, energías alternativas.",
    url: "https://www.depel.com.mx",
    telephone: "+527773198115",
    email: "jonathan.depel@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jiutepec",
      addressRegion: "Morelos",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.88,
      longitude: -99.21,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "State",
      name: "Morelos",
      containedInPlace: {
        "@type": "Country",
        name: "México",
      },
    },
    serviceType: [
      "Instalaciones eléctricas industriales",
      "Mantenimiento eléctrico preventivo",
      "Mantenimiento eléctrico correctivo",
      "Energías alternativas",
      "Paneles solares",
      "Proyectos llave en mano",
    ],
    knowsAbout: [
      "NOM (Normas Oficiales Mexicanas)",
      "Certificación DC3",
      "Media tensión",
      "Baja tensión",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
