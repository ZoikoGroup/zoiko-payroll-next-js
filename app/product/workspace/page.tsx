import {
  PayrollWorkspaceSection,
  DirectAnswerWorkspaceSection,
  PayrollCommandCenterSection,
  GovernedWorkflowSection,
  GlobalReadyOperatingModelSection,
  ConnectedPayrollEcosystemBanner,
  ConnectedEcosystemCardsSection,
  TrustSecurityAuditabilitySection,
  FAQAndCTASection,
} from "@/components/workspace";

export default function WorkSpacePage() {
  return (
    <main>
      <PayrollWorkspaceSection />
      <DirectAnswerWorkspaceSection />
      <PayrollCommandCenterSection />
      <GovernedWorkflowSection />
      <GlobalReadyOperatingModelSection />
      <ConnectedPayrollEcosystemBanner />
      <ConnectedEcosystemCardsSection />
      <TrustSecurityAuditabilitySection />
      <FAQAndCTASection />
    </main>
  );
}
