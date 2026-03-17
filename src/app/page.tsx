import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TurnkeyProcess } from "@/components/sections/TurnkeyProcess";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TurnkeyProcess />
      <ProjectsShowcase />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
