import type { Metadata } from "next";
import {
  HeroSection,
  StatsBandSection,
  OperatingRealitySection,
  ResponsibilitySection,
  AlignmentCenterSection,
  ChangeObjectSection,
  TimingLawSection,
  ExceptionSection,
  ReviewApprovalSection,
  EmployeeRecordsSection,
  CorrectionsSection,
  IntegrationsSection,
  SecuritySection,
  CtaSection,
} from "@/components/hr-teams";

export const metadata: Metadata = {
  title: "Payroll for HR Teams | Zoiko Payroll",
  description:
    "A controlled view of payroll-relevant changes, effective dates and record status — while calculation and approval stay with payroll.",
};

export default function HrTeamsPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <StatsBandSection />
      {/* 3 */} <OperatingRealitySection />
      {/* 4 */} <ResponsibilitySection />
      {/* 5 */} <AlignmentCenterSection />
      {/* 6 */} <ChangeObjectSection />
      {/* 7 */} <TimingLawSection />
      {/* 8 */} <ExceptionSection />
      {/* 9 */} <ReviewApprovalSection />
      {/* 10 */} <EmployeeRecordsSection />
      {/* 11 */} <CorrectionsSection />
      {/* 12 */} <IntegrationsSection />
      {/* 13 */} <SecuritySection />
      {/* 14 */} <CtaSection />
    </>
  );
}
