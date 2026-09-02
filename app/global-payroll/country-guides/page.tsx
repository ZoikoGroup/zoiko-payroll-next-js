import {
  GlobalPayrollGuidesSection,
  FeaturedGuidesSection,
  BrowseByRegionSection,
  GuideIndexSection,
  PopularPayrollTopicsSection,
  RecentlyReviewedSection,
  GovernanceAndSourceHierarchySection,
  FAQSection,
  PayrollRequirementsCTASection,
} from "@/components/country-guides";

export default function CountryTerritryGuidesPage() {
  return (
    <main>
      <GlobalPayrollGuidesSection />
      <FeaturedGuidesSection />
      <BrowseByRegionSection />
      <GuideIndexSection />
      <PopularPayrollTopicsSection />
      <RecentlyReviewedSection />
      <GovernanceAndSourceHierarchySection />
      <FAQSection />
      <PayrollRequirementsCTASection />
    </main>
  );
}
