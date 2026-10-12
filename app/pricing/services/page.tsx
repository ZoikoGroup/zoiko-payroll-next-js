import {
  ServicesCommercialScopeSection,
  DirectAnswerSection,
  ServiceStatusLegendSection,
  EveryPaidPlanIncludesSection,
  OptionalServicePortfolioSection,
  ManagedPayrollOperationsSection,
  IncludedByPlanSection,
  FAQAndFinalCTASection,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <main>
      <ServicesCommercialScopeSection />
      <DirectAnswerSection />
      <ServiceStatusLegendSection />
      <EveryPaidPlanIncludesSection />
      <OptionalServicePortfolioSection />
      <ManagedPayrollOperationsSection />
      <IncludedByPlanSection />
      <FAQAndFinalCTASection />
    </main>
  );
}
