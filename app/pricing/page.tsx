import {
  PlansAndPricingSection,
  FourPlansSection,
  PlanFitNavigatorSection,
  ComparePlansSection,
  ServicePacksSection,
  ExploreProfessionalSection,
  UpgradeAndDowngradeAssuranceSection,
  PayrollIntegrityAndTrustSection,
  ZoikoOneAndEnterpriseSection,
  FaqAnswerEngineSection,
} from "@/components/pricing";

export default function PricingPage() {
  return (
    <main>
      <PlansAndPricingSection />
      <FourPlansSection />
      <PlanFitNavigatorSection />
      <ComparePlansSection />
      <ServicePacksSection />
      <ExploreProfessionalSection />
      <UpgradeAndDowngradeAssuranceSection />
      <PayrollIntegrityAndTrustSection />
      <ZoikoOneAndEnterpriseSection />
      <FaqAnswerEngineSection />
    </main>
  );
}
