import AwardsSection from "@/components/layout/AwardsSection";
import CancerCentresCarousel from "@/components/layout/CancerCentresCarousel";
import CentresInHyderabad from "@/components/layout/CentresInHyderabad";
import FaqSection from "@/components/layout/FaqSection";
import HealthcareAppSection from "@/components/layout/HealthcareAppSection";
import InternationalPatients from "@/components/layout/InternationalPatients";
import LeadershipSection from "@/components/layout/LeadershipSection";
import MedicalSpecialities from "@/components/layout/MedicalSpecialities";
import NextStepHealth from "@/components/layout/NextStepHealth";
import SpecializedCare from "@/components/layout/SpecializedCare";
import WhyChooseOmega from "@/components/layout/WhyChooseOmega";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NextStepHealth />
      <CancerCentresCarousel />
      <MedicalSpecialities />
      <WhyChooseOmega />
      <AwardsSection />
      <InternationalPatients />
      <SpecializedCare />
      <CentresInHyderabad />
      <HealthcareAppSection />
      <LeadershipSection />
      <FaqSection />
    </main>
  );
}
