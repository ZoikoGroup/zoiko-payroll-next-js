import {
  TimeAttendanceIntegrationsHero,
  FitAndAvailabilitySection,
  WhatConnectsSection,
  TimeStateContractSection,
  PayPeriodCutoffSection,
  WorkerMatchingSection,
  ApprovalFinalizationSection,
  ValidationExceptionsSection,
  GovernedStagesSection,
  SupportedSystemsSection,
  CustomFitRequestSection,
  FAQSection,
  ReadyToGoFurtherSection,
} from "@/components/time-attandance";

export default function TimeAndAttendancePage() {
  return (
    <main>
      <TimeAttendanceIntegrationsHero />
      <FitAndAvailabilitySection />
      <WhatConnectsSection />
      <TimeStateContractSection />
      <PayPeriodCutoffSection />
      <WorkerMatchingSection />
      <ApprovalFinalizationSection />
      <ValidationExceptionsSection />
      <GovernedStagesSection />
      <SupportedSystemsSection />
      <CustomFitRequestSection />
      <FAQSection />
      <ReadyToGoFurtherSection />
    </main>
  );
}
