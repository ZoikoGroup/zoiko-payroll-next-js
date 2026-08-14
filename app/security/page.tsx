import type { Metadata } from "next";
import {
  HeroSection,
  ProblemsSection,
  ArchitectureSection,
  IdentitySection,
  ApprovalSeparationSection,
  DataProtectionSection,
  AuditabilitySection,
  IntegrationSecuritySection,
  DataResidencySection,
  ResilienceSection,
  EnterpriseReviewSection,
  FaqSection,
  CtaSection,
} from "@/components/security";

export const metadata: Metadata = {
  title: "Payroll Security & Trust | Zoiko Payroll",
  description:
    "Scoped access, separated decision rights, purpose-bound data controls, export governance and attributable audit evidence — labeled by what actually backs each control.",
};

export default function SecurityPage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ArchitectureSection />
      <IdentitySection />
      <ApprovalSeparationSection />
      <DataProtectionSection />
      <AuditabilitySection />
      <IntegrationSecuritySection />
      <DataResidencySection />
      <ResilienceSection />
      <EnterpriseReviewSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
