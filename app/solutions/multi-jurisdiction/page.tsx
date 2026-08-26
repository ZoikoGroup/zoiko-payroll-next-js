import type { Metadata } from "next";
import {
  HeroSection,
  WhyHardSection,
  ControlCenterSection,
  ObjectModelSection,
  GovernanceSection,
  CloseBoardSection,
  ExceptionSection,
  CurrencySection,
  IntegrationsSection,
  WaveSection,
  OperatingModelsSection,
  RoleOutcomesSection,
  CoverageSection,
  PathFinderSection,
  FaqSection,
  CtaSection,
} from "@/components/multi-jurisdiction";

export const metadata: Metadata = {
  title: "Multi-Jurisdiction Payroll | Zoiko Payroll",
  description:
    "Coordinate payroll periods, local configurations, approvals, records, integrations and close status across supported markets — from one governed operating layer, not a generic global dashboard.",
};

export default function MultiJurisdictionPage() {
  return (
    <>
      <HeroSection />
      <WhyHardSection />
      <ControlCenterSection />
      <ObjectModelSection />
      <GovernanceSection />
      <CloseBoardSection />
      <ExceptionSection />
      <CurrencySection />
      <IntegrationsSection />
      <WaveSection />
      <OperatingModelsSection />
      <RoleOutcomesSection />
      <CoverageSection />
      <PathFinderSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
