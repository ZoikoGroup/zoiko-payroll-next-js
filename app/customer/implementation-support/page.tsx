import {
  ImplementationSupportHero,
  ImplementationLifecycleSection,
  SupportByWorkstreamSection,
  BlockersAndSeveritySection,
  ProjectSnapshotSection,
  OpenCasesAndSupportIntakeSection,
  ReadinessGateSection,
  SecureEvidenceExchangeSection,
  CutoverCommandCenterSection,
  EscalationAndHandoverSection,
  FAQSection,
  CTASection,
} from "@/components/implementation-support";

export default function ImplementationSupportPage() {
  return (
    <main>
      <ImplementationSupportHero />
      <ImplementationLifecycleSection />
      <SupportByWorkstreamSection />
      <BlockersAndSeveritySection />
      <ProjectSnapshotSection />
      <OpenCasesAndSupportIntakeSection />
      <ReadinessGateSection />
      <SecureEvidenceExchangeSection />
      <CutoverCommandCenterSection />
      <EscalationAndHandoverSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
