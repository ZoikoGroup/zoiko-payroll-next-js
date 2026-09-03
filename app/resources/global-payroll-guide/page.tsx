import {
  GlobalPayrollHeroSection,
  GuideStatusSection,
  ChooseYourPathSection,
  GlobalVsLocalControlSection,
  OperatingModelLifecycleSection,
  RolesGovernanceSection,
  DataIntegrationsSection,
  ReportingReconciliationSection,
  ImplementationChangeJourneySection,
  EvaluationRisksSection,
  FAQSection,
  CTASection,
} from "@/components/global-payroll-guides";

export default function GlobalPayrollGuidePage() {
  return (
    <main>
      <GlobalPayrollHeroSection />
      <GuideStatusSection />
      <ChooseYourPathSection />
      <GlobalVsLocalControlSection />
      <OperatingModelLifecycleSection />
      <RolesGovernanceSection />
      <DataIntegrationsSection />
      <ReportingReconciliationSection />
      <ImplementationChangeJourneySection />
      <EvaluationRisksSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
