import {
  InputsValidationHeroSection,
  DirectAnswerSection,
  SourceProvenanceSection,
  ControlFrameworkSection,
  SeverityExceptionWorkbenchSection,
  SafeCorrectionsSection,
  AiAutomationGuardrailsSection,
  MultiEntityJurisdictionSection,
  IngestionDataOperationsSection,
  TrustSection,
  FaqAndCtaSection,
} from "@/components/inputs-validation";

export default function InputsValidationPage() {
  return (
    <main>
      <InputsValidationHeroSection />
      <DirectAnswerSection />
      <SourceProvenanceSection />
      <ControlFrameworkSection />
      <SeverityExceptionWorkbenchSection />
      <SafeCorrectionsSection />
      <AiAutomationGuardrailsSection />
      <MultiEntityJurisdictionSection />
      <IngestionDataOperationsSection />
      <TrustSection />
      <FaqAndCtaSection />
    </main>
  );
}
