import { getImagePath } from "@/lib/basePath";

export function ImageBreak() {
  return (
    <section className="w-full h-[50vh] lg:h-[60vh] relative overflow-hidden" aria-hidden="true">
      {/* bg-fixed breaks on iOS/mobile — use a scaled static image instead */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed scale-110 lg:scale-100"
        style={{
          backgroundImage: `url('${getImagePath("/images/about/industrial-plant.jpg")}')`,
        }}
      />
      <div className="absolute inset-0 bg-neutral-dark/30" />
    </section>
  );
}
