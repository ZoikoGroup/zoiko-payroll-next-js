import type { Metadata } from "next";
import {
  HeroSection,
  BrowseSection,
  HowToUseSection,
  GuideDirectorySection,
  CanonicalGuideHeaderSection,
  AuthorityRailSection,
  ModulesSection,
  ImplementationSection,
  RolesSection,
  SourcesSection,
  FastPathsSection,
  RelatedGuidesSection,
  TrustSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/global-payroll-jurisdiction-guides";

export const metadata: Metadata = {
  title: "Jurisdiction Guides | Zoiko Payroll",
  description:
    "Reviewed, market-specific payroll guidance with current availability, approved local requirements and implementation scope one clear authority link away.",
};

export default function JurisdictionGuidesPage() {
  return (
    <>
      <HeroSection />
      <BrowseSection />
      <HowToUseSection />
      <GuideDirectorySection />
      <CanonicalGuideHeaderSection />
      <AuthorityRailSection />
      <ModulesSection />
      <ImplementationSection />
      <RolesSection />
      <SourcesSection />
      <FastPathsSection />
      <RelatedGuidesSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
