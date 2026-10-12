import {
  IntegrationSupportSection,
  SecurityDiversionSection,
  SelfServiceAndReadinessSection,
  SecureSupportIntakeSection,
  ImpactOwnershipRoutingSection,
  CaseStateSection,
  CaseTimelineSection,
  DiagnosticEvidenceSection,
  ResolutionKnowledgeFaqSection,
  SupportFirstCtaSection,
} from "@/components/integration-support";

export default function IntegrationSupportPage() {
  return (
    <main>
      <IntegrationSupportSection />
      <SecurityDiversionSection />
      <SelfServiceAndReadinessSection />
      <SecureSupportIntakeSection />
      <ImpactOwnershipRoutingSection />
      <CaseStateSection />
      <CaseTimelineSection />
      <DiagnosticEvidenceSection />
      <ResolutionKnowledgeFaqSection />
      <SupportFirstCtaSection />
    </main>
  );
}
