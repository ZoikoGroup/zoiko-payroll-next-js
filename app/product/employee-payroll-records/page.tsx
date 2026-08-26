import type { Metadata } from "next";
import {
  HeroSection,
  ProblemsSection,
  LifecycleSection,
  SelfServiceSection,
  VersionHistorySection,
  AdminWorkspaceSection,
  PrivacyAuditSection,
  RoleBenefitsSection,
  ImplementationTrustSection,
  FaqSection,
  CtaSection,
} from "@/components/employee-payroll-records";

export const metadata: Metadata = {
  title: "Employee Payroll Records & Payslip Self-Service | Zoiko Payroll",
  description:
    "Give employees secure, permission-controlled access to their payroll records — with a clear current version, visible correction history, audit trail and a way to ask for help.",
};

export default function EmployeePayrollRecordsPage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <LifecycleSection />
      <SelfServiceSection />
      <VersionHistorySection />
      <AdminWorkspaceSection />
      <PrivacyAuditSection />
      <RoleBenefitsSection />
      <ImplementationTrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
