import {
  MultiJurisdictionPricingSection,
  DirectAnswerPricingSection,
  DeliveryModelSection,
  PlanJurisdictionCapacitySection,
  CommercialModelSection,
  CountingRuleSection,
  FaqSection,
  FinalStepSection,
} from "@/components/multi-jurisdiction-pricing";

export default function MultiJurisdictionPage() {
  return (
    <main>
      <MultiJurisdictionPricingSection />
      <DirectAnswerPricingSection />
      <DeliveryModelSection />
      <PlanJurisdictionCapacitySection />
      <CommercialModelSection />
      <CountingRuleSection />
      <FaqSection />
      <FinalStepSection />
    </main>
  );
}
