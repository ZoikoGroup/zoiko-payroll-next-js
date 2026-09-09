import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhatGetsOrchestratedSection,
  PrimaryProductProofSection,
  FundingAuthorizationSection,
  RoutingCurrenciesFxSection,
  StatusExceptionsSection,
  ReconciliationSection,
  CoverageSecurityAiSection,
  FaqSection,
  CtaSection,
} from "@/components/payments-orchestration";

export const metadata: Metadata = {
  title: "Payments Orchestration | Zoiko Payroll",
  description:
    "Move approved payroll into controlled, traceable payments — coordinate funding and authorization, route through supported channels, and track outcomes through reconciliation.",
};

export default function PaymentsOrchestrationPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <WhatGetsOrchestratedSection />
      <PrimaryProductProofSection />
      <FundingAuthorizationSection />
      <RoutingCurrenciesFxSection />
      <StatusExceptionsSection />
      <ReconciliationSection />
      <CoverageSecurityAiSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}