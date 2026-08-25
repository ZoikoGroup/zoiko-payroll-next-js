import type { Metadata } from "next";
import {
  HeroSection,
  PathfinderSection,
  GuidanceScopeSection,
  StageOrientationSection,
  MigrationSection,
  ValidationSection,
  ParallelTestingSection,
  LaunchCutoverSection,
  StabilizationSection,
  ResourcesSection,
  GlobalImplementationSection,
  RiskRoutingSection,
  CurrentProductSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/resources-implementation";

export const metadata: Metadata = {
  title: "Implementation Guidance | Zoiko Payroll",
  description:
    "Practical guidance for preparing data, validating payroll, planning parallel tests, governing cutover and moving into stable operation — routed to the authority that owns each decision.",
};

export default function ResourcesImplementationPage() {
  return (
    <>
      <HeroSection />
      <PathfinderSection />
      <GuidanceScopeSection />
      <StageOrientationSection />
      <MigrationSection />
      <ValidationSection />
      <ParallelTestingSection />
      <LaunchCutoverSection />
      <StabilizationSection />
      <GlobalImplementationSection />
      <RiskRoutingSection />
      <ResourcesSection />
      <CurrentProductSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
