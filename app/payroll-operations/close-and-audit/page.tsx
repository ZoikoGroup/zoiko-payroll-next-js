import {
  PayrollCloseAuditHeroSection,
  DirectAnswerPayrollCloseSection,
  CloseReadinessControlRoomSection,
  ReconciliationMatrixSection,
  ReopenGovernanceSection,
  ExceptionsWorkbenchSection,
  AuditTrailEvidenceSection,
  GlobalMultiEntityOperatingModelSection,
  RolesSecurityAIGuardrailsSection,
  CloseAuditFAQSection,
} from "@/components/close-and-audit";

export default function CloseAndAuditPage() {
  return (
    <main>
      <PayrollCloseAuditHeroSection />
      <DirectAnswerPayrollCloseSection />
      <CloseReadinessControlRoomSection />
      <ReconciliationMatrixSection />
      <ReopenGovernanceSection />
      <ExceptionsWorkbenchSection />
      <AuditTrailEvidenceSection />
      <GlobalMultiEntityOperatingModelSection />
      <RolesSecurityAIGuardrailsSection />
      <CloseAuditFAQSection />
    </main>
  );
}
