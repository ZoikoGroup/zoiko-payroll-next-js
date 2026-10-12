import {
  GlobalPayrollSection,
  ConnectedPayrollSection,
  OperationModelSection,
  ResponsibilityMatrixSection,
  ResponsibilityMatrixTableSection,
  MonthlyPayrollFlowSection,
  GovernanceAndQualitySection,
  PaymentsAndFundingBoundarySection,
  HybridGlobalModelSection,
  ImplementationSection,
  FAQSection,
} from "@/components/partner-supported";

export default function PartnerSupportedPage() {
  return (
    <main>
      <GlobalPayrollSection />
      <ConnectedPayrollSection />
      <OperationModelSection />
      <ResponsibilityMatrixSection />
      <ResponsibilityMatrixTableSection />
      <MonthlyPayrollFlowSection />
      <GovernanceAndQualitySection />
      <PaymentsAndFundingBoundarySection />
      <HybridGlobalModelSection />
      <ImplementationSection />
      <FAQSection />
    </main>
  );
}
