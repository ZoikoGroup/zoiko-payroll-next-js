import type { Metadata } from "next";
import {
  HeroSection,
  BrowseModesSection,
  SearchMatchingSection,
  MarketIndexSection,
  AvailabilityLegendSection,
  MarketSummarySection,
  ComparisonSection,
  HandoffsSection,
  FaqSection,
  CtaSection,
} from "@/components/country-territory-directory";

export const metadata: Metadata = {
  title: "Country & Territory Directory | Zoiko Payroll",
  description:
    "Search current payroll availability and documented scope by country and territory, then open the authoritative coverage record before making a payroll or implementation decision.",
};

export default function CountryTerritoryDirectoryPage() {
  return (
    <>
      <HeroSection />
      <BrowseModesSection />
      <SearchMatchingSection />
      <AvailabilityLegendSection />
      <MarketIndexSection />
      <MarketSummarySection />
      <ComparisonSection />
      <HandoffsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
