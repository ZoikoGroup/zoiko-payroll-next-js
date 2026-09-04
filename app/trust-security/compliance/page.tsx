import {
  ComplianceSection,
  DirectAnswerSection,
  AssuranceExplorerSection,
  EvidenceCardSystemSection,
  Soc1AssuranceSection,
  Soc2IsoEvidenceSection,
  PrivacyMappingSection,
  PayrollAssuranceTableSection,
  ContinuitySection,
  EvidenceAccessWorkflowSection,
  FaqSection,
  ReadyToGoFurtherSection,
} from "@/components/compliance";

export default function CompliancePage() {
  return (
    <main>
      <ComplianceSection />
      <DirectAnswerSection />
      <AssuranceExplorerSection />
      <EvidenceCardSystemSection />
      <Soc1AssuranceSection />
      <Soc2IsoEvidenceSection />
      <PrivacyMappingSection />
      <PayrollAssuranceTableSection />
      <ContinuitySection />
      <EvidenceAccessWorkflowSection />
      <FaqSection />
      <ReadyToGoFurtherSection />
    </main>
  );
}
