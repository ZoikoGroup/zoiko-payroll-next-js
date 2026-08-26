import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  UnderstandNumberSection,
  RouterSection,
  ReconciliationSection,
  ExportGuidanceSection,
  GlobalReportingSection,
  AuditEvidenceSection,
  ImplementationSection,
  CollectionsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/resources-reporting";

export const metadata: Metadata = {
  title: "Payroll Reporting Resources | Zoiko Payroll",
  description:
    "Understand payroll reporting concepts, reconciliation and safe exports — then move to the current Product, Global Payroll or Trust authority for the decision you need to make.",
};

export default function ReportingResourcesPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <UnderstandNumberSection />
      <RouterSection />
      <ReconciliationSection />
      <ExportGuidanceSection />
      <GlobalReportingSection />
      <AuditEvidenceSection />
      <ImplementationSection />
      <CollectionsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
