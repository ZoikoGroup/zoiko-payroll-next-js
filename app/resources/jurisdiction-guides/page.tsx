import type { Metadata } from "next";
import {
  HeroSection,
  BrowseByRegionSection,
  HowToUseSection,
  GuideDirectorySection,
  CanonicalGuideSection,
  MarketContextSection,
  SourcesFreshnessSection,
  FastPathsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/jurisdiction-guides";

export const metadata: Metadata = {
  title: "Jurisdiction Guides | Zoiko Payroll",
  description:
    "Explore reviewed market-specific payroll guidance while keeping current availability, approved local requirements and implementation scope one clear authority link away.",
};

export default function JurisdictionGuidesPage() {
  return (
    <>
      <HeroSection />
      <BrowseByRegionSection />
      <HowToUseSection />
      <GuideDirectorySection />
      <CanonicalGuideSection />
      <MarketContextSection />
      <SourcesFreshnessSection />
      <FastPathsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
