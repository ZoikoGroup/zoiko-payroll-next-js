import {
  PayrollAdministratorHelpSection,
  KnownIssueSystemStatusSection,
  AdministratorAccessSecuritySection,
  PayrollReadinessSection,
  InputsValidationDiagnosticsSection,
  CalculationsApprovalsSection,
  PaymentsFilingsSection,
  CloseAuditReportsSection,
  IntegrationsMultiEntitySection,
  CreateSupportCaseSection,
  FAQPayrollAdminSection,
  ReadyToGoFurtherSection,
} from "@/components/administrator-help";

export default function AdminHelpPage() {
  return (
    <main>
      <PayrollAdministratorHelpSection />
      <KnownIssueSystemStatusSection />
      <AdministratorAccessSecuritySection />
      <PayrollReadinessSection />
      <InputsValidationDiagnosticsSection />
      <CalculationsApprovalsSection />
      <PaymentsFilingsSection />
      <CloseAuditReportsSection />
      <IntegrationsMultiEntitySection />
      <CreateSupportCaseSection />
      <FAQPayrollAdminSection />
      <ReadyToGoFurtherSection />
    </main>
  );
}
