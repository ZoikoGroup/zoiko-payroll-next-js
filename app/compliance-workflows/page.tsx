import type { Metadata } from "next";
import {
  HeroSection,
  AuthorityBoundarySection,
  LifecycleSection,
  ControlCenterSection,
  WorkflowRecordSection,
  DecisionApprovalSection,
  ExceptionsSection,
  FreshnessSection,
  RolesIntegrationsSection,
  AuditSecuritySection,
  CtaSection,
} from "@/components/compliance-workflows";

export const metadata: Metadata = {
  title: "Payroll Compliance Workflows | Zoiko Payroll",
  description:
    "Coordinate jurisdiction-specific payroll compliance review, documentation, evidence, exceptions and decisions in one controlled workflow — with clear ownership from trigger to re-review.",
};

export default function ComplianceWorkflowsPage() {
  return (
    <>
      <HeroSection />
      <AuthorityBoundarySection />
      <LifecycleSection />
      <ControlCenterSection />
      <WorkflowRecordSection />
      <DecisionApprovalSection />
      <ExceptionsSection />
      <FreshnessSection />
      <RolesIntegrationsSection />
      <AuditSecuritySection />
      <CtaSection />
    </>
  );
}
