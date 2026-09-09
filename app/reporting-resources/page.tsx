import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  UnderstandPayrollSection,
  RoutingSection,
  ReconciliationGuidanceSection,
  ExportGuidanceSection,
  GlobalReportingBanner,
  AuditEvidenceSection,
  ImplementationReadinessSection,
  CuratedResourcesSection,
  FaqSection,
  CtaSection,
} from "@/components/reporting-resources";

export const metadata: Metadata = {
  title: "Payroll Reporting Resources | Zoiko Payroll",
  description:
    "Reporting guidance behind payroll insights, exports and reconciliation — scope, definitions, currency, variance and audit evidence explained.",
};

export default function ReportingResourcesPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <UnderstandPayrollSection />
      <RoutingSection />
      <ReconciliationGuidanceSection />
      <ExportGuidanceSection />
      <GlobalReportingBanner />
      <AuditEvidenceSection />
      <ImplementationReadinessSection />
      <CuratedResourcesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
