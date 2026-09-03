import {
  PlansHeroSection,
  DirectAnswerSection,
  ThreeAxisModelSection,
  PlanOverviewSection,
  PlanFitNavigatorSection,
  ServiceModelSelectorSection,
  PlanDeliveryCompatibilitySection,
  ServiceModelDetailSection,
  OptionalServiceLayersSection,
  ManagedPayrollSection,
  FinancialBoundariesSection,
  ResponsibilityMatrixSection,
  MixedModelPortfolioSection,
  TrustProcurementSection,
  PlansFAQSection,
} from "@/components/plans-and-service-models";

export default function PlansAndServiceModelsPage() {
  return (
    <main>
      <PlansHeroSection />
      <DirectAnswerSection />
      <ThreeAxisModelSection />
      <PlanOverviewSection />
      <PlanFitNavigatorSection />
      <ServiceModelSelectorSection />
      <PlanDeliveryCompatibilitySection />
      <ServiceModelDetailSection />
      <OptionalServiceLayersSection />
      <ManagedPayrollSection />
      <FinancialBoundariesSection />
      <ResponsibilityMatrixSection />
      <MixedModelPortfolioSection />
      <TrustProcurementSection />
      <PlansFAQSection />
    </main>
  );
}
