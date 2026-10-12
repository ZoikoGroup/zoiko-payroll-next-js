import type { Metadata } from "next";
import {
  CoverageHero,
  StatusLegendSection,
  FindJurisdictionSection,
  DirectAnswerSection,
  CoverageDirectorySection,
  ServiceBoundaryMatrixSection,
  CoverageDetailPatternSection,
  CurrentnessHandlingSection,
  AuthorityHandoffsSection,
  CoverageFaqSection,
  CoverageReadyCta,
} from "@/components/zoiko-payroll-jurisdiction-coverage";

export const metadata: Metadata = {
  title: "Jurisdiction Coverage | Zoiko Payroll",
  description:
    "See where Zoiko Payroll is currently available — and what that availability includes. Search a jurisdiction, review its current status and service boundaries, and see any material limitations.",
};

export default function ZoikoPayrollJurisdictionCoveragePage() {
  return (
    <div className="flex flex-col">
      <CoverageHero />
      <StatusLegendSection />
      <FindJurisdictionSection />
      <DirectAnswerSection />
      <CoverageDirectorySection />
      <ServiceBoundaryMatrixSection />
      <CoverageDetailPatternSection />
      <CurrentnessHandlingSection />
      <AuthorityHandoffsSection />
      <CoverageFaqSection />
      <CoverageReadyCta />
    </div>
  );
}
