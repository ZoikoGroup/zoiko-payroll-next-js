import {
  GlobalPayrollCoverageHero,
  CoverageDefinitionsSection,
  JurisdictionDirectorySection,
  JurisdictionQuickViewSection,
  JurisdictionComparisonSection,
  WhereTruthLivesSection,
  FAQJurisdictionSection,
  ConfirmPayrollFootprintSection,
} from "@/components/jurisdiction-directory";

export default function JurisdictionDirectoryPage() {
  return (
    <main>
      <GlobalPayrollCoverageHero />
      <CoverageDefinitionsSection />
      <JurisdictionDirectorySection />
      <JurisdictionQuickViewSection />
      <JurisdictionComparisonSection />
      <WhereTruthLivesSection />
      <FAQJurisdictionSection />
      <ConfirmPayrollFootprintSection />
    </main>
  );
}
