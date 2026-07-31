import {
  HeroSection,
  TrustProofSection,
  WorkflowSection,
  CapabilitiesSection,
  JurisdictionSection,
  RoleOutcomesSection,
  IntegrationsSection,
  SecuritySection,
  StandaloneVsOneSection,
  ImplementationSection,
  CustomerEvidenceSection,
  PricingResourcesSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustProofSection />
      <WorkflowSection />
      <CapabilitiesSection />
      <JurisdictionSection />
      <RoleOutcomesSection />
      <IntegrationsSection />
      <SecuritySection />
      <StandaloneVsOneSection />
      <ImplementationSection />
      <CustomerEvidenceSection />
      <PricingResourcesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
