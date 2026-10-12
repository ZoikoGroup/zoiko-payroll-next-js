import {
  FinanceERPIntegrationsHero,
  FitAvailabilitySection,
  ChartOfAccountsMappingSection,
  HowPayrollAccountingFlowsSection,
  SupportedFinanceERPSystemsSection,
  CorrectionsReversalsSection,
  SecurityConnectionHealthSection,
  CustomFitRequestSection,
  FAQSection,
  ReadyToGoFurtherCTA,
} from "@/components/finance-erp";

export default function FinanceErpPage() {
  return (
    <main>
      <FinanceERPIntegrationsHero />
      <FitAvailabilitySection />
      <ChartOfAccountsMappingSection />
      <HowPayrollAccountingFlowsSection />
      <SupportedFinanceERPSystemsSection />
      <CorrectionsReversalsSection />
      <SecurityConnectionHealthSection />
      <CustomFitRequestSection />
      <FAQSection />
      <ReadyToGoFurtherCTA />
    </main>
  );
}
