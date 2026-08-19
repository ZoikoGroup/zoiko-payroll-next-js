import type { Metadata } from "next";
import {
  HeroSection,
  ConditionsSection,
  ControlCenterSection,
  GovernanceSection,
  ApprovalsSection,
  ReportingSection,
  CadenceSection,
  FindSolutionSection,
  ImplementationSection,
  FaqSection,
  CtaSection,
} from "@/components/international-groups";

export const metadata: Metadata = {
  title: "International Group Payroll | Zoiko Payroll",
  description:
    "Bring legal entities, payroll groups, local providers, approvals and reporting into one governed operating view — while preserving market-specific responsibility.",
};

export default function InternationalGroupsPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <ConditionsSection />
      {/* 3 */} <ControlCenterSection />
      {/* 4 */} <ImplementationSection />
      {/* 5 */} <ApprovalsSection />
      {/* 6 */} <ReportingSection />
      {/* 7 */} <GovernanceSection />
      {/* 8 */} <CadenceSection />
      {/* 9 */} <FindSolutionSection />
      {/* 10 */} <FaqSection />
      {/* 11 */} <CtaSection />
    </>
  );
}
