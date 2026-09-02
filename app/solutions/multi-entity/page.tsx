import {
  MultiEntityPayrollSection,
  MultiEntityControlProblemSection,
  EntityArchitectureSection,
  MultiEntityControlCenterSection,
  StandardizeVsLocalizeSection,
  CoordinatedPayrollCyclesSection,
  EntityReadinessSection,
  GovernanceAndFundingSection,
  FinanceAndReportingSection,
  DeliveryAndIntegrationsSection,
  FAQAndCTASection,
} from "@/components/multi-entity";

export default function MultiEntityPage() {
  return (
    <main>
      <MultiEntityPayrollSection />
      <MultiEntityControlProblemSection />
      <EntityArchitectureSection />
      <MultiEntityControlCenterSection />
      <StandardizeVsLocalizeSection />
      <CoordinatedPayrollCyclesSection />
      <EntityReadinessSection />
      <GovernanceAndFundingSection />
      <FinanceAndReportingSection />
      <DeliveryAndIntegrationsSection />
      <FAQAndCTASection />
    </main>
  );
}
