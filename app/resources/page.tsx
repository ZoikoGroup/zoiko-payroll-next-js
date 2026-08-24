import type { Metadata } from "next";
import {
  HeroSection,
  AuthorityBoundarySection,
  TaskRoutingSection,
  ResourceFamiliesSection,
  TopicCollectionsSection,
  FeaturedResourceSection,
  FreshnessSection,
  SearchResolutionSection,
  ResultAnatomySection,
  RankingSection,
  FastPathsSection,
  FaqSection,
  ConversionSection,
  CtaSection,
} from "@/components/resource-center";

export const metadata: Metadata = {
  title: "Resource Center | Zoiko Payroll",
  description:
    "Search and browse Zoiko Payroll guides, product documentation, help, release notes, system status, jurisdiction guidance and videos — every result showing its source, scope and reviewed date.",
};

export default function ResourceCenterPage() {
  return (
    <>
      <HeroSection />
      <AuthorityBoundarySection />
      <TaskRoutingSection />
      <ResourceFamiliesSection />
      <TopicCollectionsSection />
      <FeaturedResourceSection />
      <FreshnessSection />
      <SearchResolutionSection />
      <RankingSection />
      <ResultAnatomySection />
      <FastPathsSection />
      <ConversionSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
