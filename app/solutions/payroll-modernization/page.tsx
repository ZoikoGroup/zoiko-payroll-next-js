import type { Metadata } from "next";
import {
  HeroSection,
  RoadmapSection,
  ControlCenterSection,
  OperatingModelSection,
  MigrationSection,
  WorkflowSection,
  ValidationSection,
  CutoverSection,
  SecurityReadinessSection,
  AdoptionSection,
  ValueEvidenceSection,
  FindSolutionSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-modernization";

export const metadata: Metadata = {
  title: "Payroll Modernization | Zoiko Payroll",
  description:
    "Replace fragmented or legacy payroll through governed change — controlled data preparation, validation, parallel testing, a recorded cutover decision and continuous improvement.",
};

export default function PayrollModernizationPage() {
  return (
    <>
      <HeroSection />
      <RoadmapSection />
      <ControlCenterSection />
      <OperatingModelSection />
      <MigrationSection />
      <WorkflowSection />
      <ValidationSection />
      <CutoverSection />
      <SecurityReadinessSection />
      <AdoptionSection />
      <ValueEvidenceSection />
      <FindSolutionSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
