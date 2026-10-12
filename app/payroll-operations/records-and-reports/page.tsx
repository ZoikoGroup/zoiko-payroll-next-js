import {
  PayrollRecordsReportingSection,
  RecordLifecycleSection,
  RecordClassesTaxonomySection,
  RecordsControlCenterSection,
  ReportCatalogReportingSection,
  TraceabilityVersionComparisonSection,
  ExportSecureDistributionSection,
  GlobalReportingSecurityPrivacySection,
  AIAssistedReportingSection,
  FAQRecordsReportsSection,
  CTASection,
} from "@/components/records-and-reports";

export default function RecordsAndReportsPage() {
  return (
    <main>
      <PayrollRecordsReportingSection />
      <RecordLifecycleSection />
      <RecordClassesTaxonomySection />
      <RecordsControlCenterSection />
      <ReportCatalogReportingSection />
      <TraceabilityVersionComparisonSection />
      <ExportSecureDistributionSection />
      <GlobalReportingSecurityPrivacySection />
      <AIAssistedReportingSection />
      <FAQRecordsReportsSection />
      <CTASection />
    </main>
  );
}
