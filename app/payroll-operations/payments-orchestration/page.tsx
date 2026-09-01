import {
  PaymentsOrchestrationHeroSection,
  PaymentsLifecycleSection,
  WhatGetsOrchestratedSection,
  PrimaryProductProofSection,
  FundingAndAuthorizationSection,
  RoutingCurrenciesFxSection,
  StatusAndExceptionsSection,
  ReconciliationSection,
  CoverageSecurityAiSection,
  PaymentsOrchestrationFaqSection,
  PaymentsCallToActionSection,
} from "@/components/payments-orchestration";

export default function PaymentsOrchestrationPage() {
  return (
    <main>
      <PaymentsOrchestrationHeroSection />
      <PaymentsLifecycleSection />
      <WhatGetsOrchestratedSection />
      <PrimaryProductProofSection />
      <FundingAndAuthorizationSection />
      <RoutingCurrenciesFxSection />
      <StatusAndExceptionsSection />
      <ReconciliationSection />
      <CoverageSecurityAiSection />
      <PaymentsOrchestrationFaqSection />
      <PaymentsCallToActionSection />
    </main>
  );
}
