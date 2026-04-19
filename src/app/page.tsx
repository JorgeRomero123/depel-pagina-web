import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TurnkeyProcess } from "@/components/sections/TurnkeyProcess";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TurnkeyProcess />
      <WhyChooseUs />
      <ProjectsShowcase />
      <Testimonials />
      <CTASection />
    </>
  );
}
