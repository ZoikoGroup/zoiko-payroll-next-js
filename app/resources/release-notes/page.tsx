import type { Metadata } from "next";
import {
  HeroSection,
  LatestReleasesSection,
  SearchFilterSection,
  TimelineSection,
  ActionRequiredSection,
  ProductAreasSection,
  DeprecationsSection,
  CorrectionsSection,
  ReleaseDetailSection,
  AuthorityRoutingSection,
  FinalCtaSection,
} from "@/components/release-notes";

export const metadata: Metadata = {
  title: "Release Notes | Zoiko Payroll",
  description:
    "Review verified Zoiko Payroll changes with clear applicability, rollout state, impact, limitations and links to the current guidance that governs what to do next.",
};

export default function ReleaseNotesPage() {
  return (
    <>
      <HeroSection />
      <LatestReleasesSection />
      <SearchFilterSection />
      <TimelineSection />
      <ActionRequiredSection />
      <ProductAreasSection />
      <DeprecationsSection />
      <CorrectionsSection />
      <ReleaseDetailSection />
      <AuthorityRoutingSection />
      <FinalCtaSection />
    </>
  );
}
