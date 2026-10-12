import {
  IdentityAccessIntegrationsSection,
  FitCapabilityConfidenceSection,
  CapabilityMatrixSection,
  StateContractSection,
  AuthVsAuthzSection,
  ProvisioningMappingSection,
  JitFirstLoginSection,
  DeprovisioningSessionSection,
  AccessReviewConnectionHealthSection,
  ImplementationSection,
  IdentityAccessFaqSection,
  ValidateIntegrationCtaSection,
} from "@/components/identity-access";

export default function IdentityAccessPage() {
  return (
    <main>
      <IdentityAccessIntegrationsSection />
      <FitCapabilityConfidenceSection />
      <CapabilityMatrixSection />
      <StateContractSection />
      <AuthVsAuthzSection />
      <ProvisioningMappingSection />
      <JitFirstLoginSection />
      <DeprovisioningSessionSection />
      <AccessReviewConnectionHealthSection />
      <ImplementationSection />
      <IdentityAccessFaqSection />
      <ValidateIntegrationCtaSection />
    </main>
  );
}
