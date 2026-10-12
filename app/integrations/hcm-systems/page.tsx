import {
  HrisIntegrationHero,
  FitAvailabilitySection,
  IntegrationCategoriesSection,
  SourceOfTruthSection,
  PayrollSafeTimingSection,
  MappingValidationSection,
  ActivationWorkflowSection,
  SecurityPrivacySection,
  SupportedSystemsRegistrySection,
  FAQAndCTASection,
} from "@/components/hcm-systems";

export default function HcmSystemPage() {
  return (
    <main>
      <HrisIntegrationHero />
      <FitAvailabilitySection />
      <IntegrationCategoriesSection />
      <SourceOfTruthSection />
      <PayrollSafeTimingSection />
      <MappingValidationSection />
      <ActivationWorkflowSection />
      <SecurityPrivacySection />
      <SupportedSystemsRegistrySection />
      <FAQAndCTASection />
    </main>
  );
}
