import type { Metadata } from "next";
import {
  HeroSection,
  PillarsSection,
  LifecycleSection,
  WorkspaceSection,
  SetupSection,
  CalculationSection,
  ReviewApprovalSection,
  CompletionSection,
  ConnectivitySection,
  VersionHistorySection,
  ImplementationTourSection,
  GovernanceSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-processing";

export const metadata: Metadata = {
  title: "Payroll Processing | Zoiko Payroll",
  description:
    "Run every payroll cycle from prepared inputs to an approved, final version — prepare, calculate, validate, review, approve and complete, with exceptions, ownership and authorization visible at every stage.",
};

export default function PayrollProcessingPage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <LifecycleSection />
      <WorkspaceSection />
      <SetupSection />
      <CalculationSection />
      <ReviewApprovalSection />
      <CompletionSection />
      <ConnectivitySection />
      <GovernanceSection />
      <VersionHistorySection />
      <ImplementationTourSection />
      
      <FaqSection />
      <CtaSection />
    </>
  );
}
