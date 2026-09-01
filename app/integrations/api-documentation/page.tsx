import {
  ZoikoPayrollApiHeroSection,
  ApiDocumentationViewer,
  IntegrationOutcomeTaskSection,
  RequestResponseModelSection,
  QuickstartStepsSection,
  AuthenticationEnvironmentsSection,
  CollectionBehaviorSection,
  IdempotencyMutationSafetySection,
  VersioningCodeExamplesSection,
  ApiReferenceBrowserSection,
  ChangelogSection,
  SecuritySandboxSection,
  DeveloperSupportSection,
  FAQSection,
  ReadyToGoFurtherCTA,
} from "@/components/api-documentation";

export default function ApiDocumentationPage() {
  return (
    <main>
      <ZoikoPayrollApiHeroSection />
      <ApiDocumentationViewer />
      <IntegrationOutcomeTaskSection />
      <RequestResponseModelSection />
      <QuickstartStepsSection />
      <AuthenticationEnvironmentsSection />
      <CollectionBehaviorSection />
      <IdempotencyMutationSafetySection />
      <VersioningCodeExamplesSection />
      <ApiReferenceBrowserSection />
      <ChangelogSection />
      <SecuritySandboxSection />
      <DeveloperSupportSection />
      <FAQSection />
      <ReadyToGoFurtherCTA />
    </main>
  );
}
