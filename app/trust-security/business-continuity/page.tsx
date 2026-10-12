import {
  PayrollContinuitySection,
  ContinuityLifecycleSection,
  ServicePrioritizationSection,
  RecoveryObjectivesSection,
  ResilienceControlsSection,
  ExercisesValidationSection,
  IncidentCommunicationsSection,
  OperatingWorkforceSection,
  ProcurementEvidenceSection,
  ContinuityFAQSection,
  PreparednessCtaSection,
} from "@/components/business-continuity";

export default function BusinessContinuityPage() {
  return (
    <main>
      <PayrollContinuitySection />
      <ContinuityLifecycleSection />
      <ServicePrioritizationSection />
      <RecoveryObjectivesSection />
      <ResilienceControlsSection />
      <ExercisesValidationSection />
      <IncidentCommunicationsSection />
      <OperatingWorkforceSection />
      <ProcurementEvidenceSection />
      <ContinuityFAQSection />
      <PreparednessCtaSection />
    </main>
  );
}
