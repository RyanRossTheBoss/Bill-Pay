import PayHereSection from "@/sections/PayHereSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";
import WhoWeAreSection from "@/sections/WhoWeAreSection";
import AboutUsSection from "@/sections/AboutUsSection";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <PayHereSection />
      <WhatWeDoSection />
      <WhoWeAreSection />
      <ServicesSection />
      <AboutUsSection />
    </main>
  );
}
