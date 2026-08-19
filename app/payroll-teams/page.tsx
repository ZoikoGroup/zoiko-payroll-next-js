import type { Metadata } from "next";
import {
  HeroSection,
  FrictionSection,
  HandoffsSection,
  ControlCenterSection,
  InputReadinessSection,
  ExceptionSection,
  ReviewApprovalSection,
  CompletionSection,
  IntegrationHealthSection,
  RoleArchitectureSection,
  ImplementationSection,
  FindSolutionSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-teams";

export const metadata: Metadata = {
  title: "Payroll for Payroll Teams | Zoiko Payroll",
  description:
    "Bring preparation, validation, exceptions, reviews, approvals, completion and records into one controlled payroll operating workflow.",
};

export default function PayrollTeamsPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <FrictionSection />
      {/* 3 */} <HandoffsSection />
      {/* 4 */} <ControlCenterSection />
      {/* 5 */} <InputReadinessSection />
      {/* 6 */} <ExceptionSection />
      {/* 7 */} <ReviewApprovalSection />
      {/* 8 */} <CompletionSection />
      {/* 9 */} <IntegrationHealthSection />
      {/* 10 */} <RoleArchitectureSection />
      {/* 11 */} <ImplementationSection />
      {/* 12 */} <FindSolutionSection />
      {/* 13 */} <FaqSection />
      {/* 14 */} <CtaSection />
    </>
  );
}
