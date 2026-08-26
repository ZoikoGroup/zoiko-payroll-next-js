import {
  LocalPayrollRequirementsSection,
  LocalPayrollComplexitySection,
  GlobalContractSection,
  LocalRequirementsWorkspaceSection,
  RequirementControlRecordSection,
  ChangeControlTimelineSection,
  GlobalDecisionRightsSection,
  AvailabilityWorkflowSection,
  TrustIntegrationsSection,
  FAQSection,
  CallToActionSection,
} from "@/components/payroll-requirements";

export default function PayrollRequiremntsPage() {
  return (
    <main>
      <LocalPayrollRequirementsSection />
      <LocalPayrollComplexitySection />
      <GlobalContractSection />
      <LocalRequirementsWorkspaceSection />
      <RequirementControlRecordSection />
      <ChangeControlTimelineSection />
      <GlobalDecisionRightsSection />
      <AvailabilityWorkflowSection />
      <TrustIntegrationsSection />
      <FAQSection />
      <CallToActionSection />
    </main>
  );
}
