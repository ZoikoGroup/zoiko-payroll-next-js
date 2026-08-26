import type { Metadata } from "next";
import {
  HeroSection,
  ProblemsSection,
  ContextModelSection,
  WorkspaceSection,
  SummaryReportsSection,
  TrendsSection,
  ReconciliationSection,
  AuditSection,
  ExportsSection,
  PrivacySection,
  ImplementationSection,
  FaqSection,
  CtaSection,
  EntityViewsSection,
  RolesSection,
} from "@/components/reporting";

export const metadata: Metadata = {
  title: "Payroll Reporting and Analytics | Zoiko Payroll",
  description:
    "Payroll summaries, entity and jurisdiction views, reconciliation, audit evidence and controlled exports — every metric carrying its period, scope, source, currency and freshness.",
};

export default function ReportingPage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ContextModelSection />
      <WorkspaceSection />
      <SummaryReportsSection />
      <EntityViewsSection />
      <TrendsSection />
      <ReconciliationSection />
      <AuditSection />
      <RolesSection />
      <ExportsSection />
      <PrivacySection />
      <ImplementationSection />
      <FaqSection />
      <CtaSection />
      
      
    </>
  );
}
