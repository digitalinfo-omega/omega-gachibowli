import AwardsSection from "@/components/layout/AwardsSection";
import CancerCentresCarousel from "@/components/layout/CancerCentresCarousel";
import CentresInHyderabad from "@/components/layout/CentresInHyderabad";
import FaqSection from "@/components/layout/FaqSection";
import HealthcareAppSection from "@/components/layout/HealthcareAppSection";
import HeroSection from "@/components/layout/HeroSection";
import InternationalPatients from "@/components/layout/InternationalPatients";
import LeadershipSection from "@/components/layout/LeadershipSection";
import MarqueeLoop from "@/components/layout/MarqueeLoop";
import MedicalSpecialities from "@/components/layout/MedicalSpecialities";
import ModernMachine from "@/components/layout/ModernMachine";
import NextStepHealth from "@/components/layout/NextStepHealth";
import SpecializedCare from "@/components/layout/SpecializedCare";
import { StandalonePopupExample } from "@/components/layout/StandalonePopupExample";
import SurvivorCarousel from "@/components/layout/SurvivorCarousel";
import WhyChooseOmega from "@/components/layout/WhyChooseOmega";
import WhyChooseUs from "@/components/layout/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NextStepHealth />
      <WhyChooseUs />
      <CancerCentresCarousel />
      <MedicalSpecialities />
      <ModernMachine />
      <WhyChooseOmega />
      <SurvivorCarousel />
      <InternationalPatients />
      <SpecializedCare />
      <StandalonePopupExample />
      <CentresInHyderabad />
      <MarqueeLoop />
      <HealthcareAppSection />
      <LeadershipSection />
      <AwardsSection />
      <FaqSection />
    </main>
  );
}
