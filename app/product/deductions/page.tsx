import type { Metadata } from "next";
import {
  HeroSection,
  ProblemsSection,
  ChangeTypesSection,
  LifecycleSection,
  WorkspaceSection,
  RecurringChangesSection,
  ValidationSection,
  ApprovalLinkageSection,
  ImportsSection,
  MultiEntitySection,
  ReportingRetentionSection,
  FaqSection,
} from "@/components/deductions";

export const metadata: Metadata = {
  title: "Payroll Deductions and Adjustments | Zoiko Payroll",
  description:
    "Create, validate, review and approve recurring deductions, one-time deductions, reimbursements and corrections — with effective dates, duplicate prevention and attributable change history.",
};

export default function DeductionsPage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ChangeTypesSection />
      <LifecycleSection />
      <WorkspaceSection />
      <RecurringChangesSection />
      <ValidationSection />
      <ApprovalLinkageSection />
      <ImportsSection />
      <MultiEntitySection />
      <ReportingRetentionSection />
      <FaqSection />
    </>
  );
}
