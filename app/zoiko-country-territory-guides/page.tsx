import type { Metadata } from "next";
import {
  HeroSection,
  TrustBar,
  FeaturedGuides,
  BrowseByRegion,
  AllGuides,
  PopularTopics,
  RecentlyReviewed,
  GovernanceSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-country-territory-guides";

export const metadata: Metadata = {
  title: "Country & Territory Payroll Guides | Zoiko Payroll",
  description:
    "Explore source-backed payroll guidance for countries and territories around the world, including payroll cycles, taxes and contributions, filings, payments, authorities, and year-end considerations.",
};

export default function ZoikoCountryTerritoryGuidesPage() {
  return (
    <div className="relative w-full bg-[#F5F8FA]">
      <HeroSection />
      <TrustBar />
      <FeaturedGuides />
      <BrowseByRegion />
      <AllGuides />
      <PopularTopics />
      <RecentlyReviewed />
      <GovernanceSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
