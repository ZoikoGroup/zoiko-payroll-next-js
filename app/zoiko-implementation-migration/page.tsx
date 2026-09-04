import type { Metadata } from "next";
import {
  HeroSection,
  ControlCenterSection,
  OperatingModelSection,
  SixPhaseLifecycleSection,
  ControlCenterDashboardSection,
  ScopeManifestSection,
  ValidationSection,
  ReadinessGatesSection,
  CutoverWavesSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-implementation-migration";

export const metadata: Metadata = {
  title: "Zoiko Payroll Implementation & Migration | Zoiko Payroll",
  description:
    "Control global payroll implementation from discovery to stabilization — plan markets, entities, requirements, data, integrations, validation, parallel run and cutover through one governed implementation program.",
};

export default function ZoikoImplementationMigrationPage() {
  return (
    <>
      <HeroSection />
      <ControlCenterSection />
      <OperatingModelSection />
      <SixPhaseLifecycleSection />
      <ControlCenterDashboardSection />
      <ScopeManifestSection />
      <ValidationSection />
      <ReadinessGatesSection />
      <CutoverWavesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
