import type { Metadata } from "next";
import {
  HeroSection,
  ProblemsSection,
  LifecycleSection,
  ApprovalCenterSection,
  DecisionWorkspaceSection,
  DecisionRightsSection,
  DelegationSection,
  VersionBindingSection,
  AuditSecuritySection,
  SafeAlternativesSection,
  ImplementationSection,
  FaqSection,
  CtaSection,
} from "@/components/payroll-approvals";

export const metadata: Metadata = {
  title: "Payroll Approvals & Decision Rights | Zoiko Payroll",
  description:
    "Governed payroll approvals with visible decision rights, version-bound sign-off, separation of duties, delegation, escalation and a reconstructable audit history.",
};

export default function PayrollApprovalsPage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <LifecycleSection />
      <ApprovalCenterSection />
      <DecisionWorkspaceSection />
      <DecisionRightsSection />
      <DelegationSection />
      <VersionBindingSection />
      <SafeAlternativesSection />
      <AuditSecuritySection />
      <ImplementationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
