import {
  SolutionsHeroSection,
  SolutionNavigatorSection,
  ByPayrollFootprintSection,
  ByOrganizationStageSection,
  MultiEntityOrganizationsSection,
  ByTeamSection,
  ConnectedOperatingSpineSection,
  GlobalOperatingModelSection,
  TrustIntegrationsProofSection,
  SolutionsFAQAndCTABannerSection,
} from "@/components/solutions";

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHeroSection />
      <SolutionNavigatorSection />
      <ByPayrollFootprintSection />
      <ByOrganizationStageSection />
      <MultiEntityOrganizationsSection />
      <ByTeamSection />
      <ConnectedOperatingSpineSection />
      <GlobalOperatingModelSection />
      <TrustIntegrationsProofSection />
      <SolutionsFAQAndCTABannerSection />
    </main>
  );
}
