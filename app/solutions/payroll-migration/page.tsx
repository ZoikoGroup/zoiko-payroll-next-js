import type { Metadata } from "next";
import {
  HeroSection,
  RiskControlSection,
  PhasesSection,
  ControlCenterSection,
  CutoverSection,
  SecurityRolesSection,
  GuidedRouteSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-migration";

export const metadata: Metadata = {
  title: "Payroll Migration | Zoiko Payroll",
  description:
    "Migrate approved payroll data, configuration and retained history through controlled mapping, validation, reconciliation and a human-authorized cutover decision.",
};

export default function PayrollMigrationPage() {
  return (
    <>
      <HeroSection />
      <RiskControlSection />
      <PhasesSection />
      <ControlCenterSection />
      <CutoverSection />
      <SecurityRolesSection />
      <GuidedRouteSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
