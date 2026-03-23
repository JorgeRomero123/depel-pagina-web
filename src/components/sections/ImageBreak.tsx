export function ImageBreak() {
  return (
    <section className="w-full h-[50vh] lg:h-[60vh] relative" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/about/industrial-plant.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-neutral-dark/30" />
    </section>
  );
}
