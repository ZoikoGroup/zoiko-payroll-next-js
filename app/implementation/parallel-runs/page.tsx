import {
  ProvePayrollAccuracyHeroSection,
  ValidationPrinciplesSection,
  ParallelPayrollMeaningSection,
  ParallelCyclePlannerSection,
  PayrollValidationLifecycleSection,
  ValidationReadinessChecklistSection,
  PayrollComparisonSection,
  InvestigateWorkspaceSection,
  ThreeValidationsSection,
  ValidationSuccessSection,
  ValidationWavesSection,
  GovernanceRecordsSection,
  ValidationFaqSection,
  LaunchConfidenceCtaSection,
} from "@/components/parallel-runs";

export default function ParallelRunsPage() {
  return (
    <main>
      <ProvePayrollAccuracyHeroSection />
      <ValidationPrinciplesSection />
      <ParallelPayrollMeaningSection />
      <ParallelCyclePlannerSection />
      <PayrollValidationLifecycleSection />
      <ValidationReadinessChecklistSection />
      <PayrollComparisonSection />
      <InvestigateWorkspaceSection />
      <ThreeValidationsSection />
      <ValidationSuccessSection />
      <ValidationWavesSection />
      <GovernanceRecordsSection />
      <ValidationFaqSection />
      <LaunchConfidenceCtaSection />
    </main>
  );
}
