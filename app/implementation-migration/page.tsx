import {
  ImplementationHeroSection,
  ControlCenterSection,
  OperatingModelSection,
  SixPhaseLifecycleSection,
  ProofSurfaceSection,
  ScopeManifestSection,
  VarianceGovernanceSection,
  LaunchGovernanceSection,
  CutoverRecoverySection,
  ImplementationFaqSection,
  ImplementationCtaSection,
} from "@/components/implementation-migration";

export default function ImplementationMigrationPage() {
  return (
    <main>
      <ImplementationHeroSection />
      <ControlCenterSection />
      <OperatingModelSection />
      <SixPhaseLifecycleSection />
      <ProofSurfaceSection />
      <ScopeManifestSection />
      <VarianceGovernanceSection />
      <LaunchGovernanceSection />
      <CutoverRecoverySection />
      <ImplementationFaqSection />
      <ImplementationCtaSection />
    </main>
  );
}
