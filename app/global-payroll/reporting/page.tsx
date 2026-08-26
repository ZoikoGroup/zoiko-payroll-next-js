import type { Metadata } from "next";
import {
  HeroSection,
  AuthorityBoundarySection,
  ScopeModelSection,
  ReportingCenterSection,
  MetricRegistrySection,
  SnapshotsSection,
  ExportSection,
  FaqSection,
  CtaSection,
} from "@/components/global-reporting";

export const metadata: Metadata = {
  title: "Global Payroll Reporting | Zoiko Payroll",
  description:
    "Governed operational reporting across permitted entities and jurisdictions — resolved scope, versioned metric definitions, source quality, revisions and controlled export.",
};

export default function GlobalReportingPage() {
  return (
    <>
      <HeroSection />
      <AuthorityBoundarySection />
      <ScopeModelSection />
      <ReportingCenterSection />
      <MetricRegistrySection />
      <SnapshotsSection />
      <ExportSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
