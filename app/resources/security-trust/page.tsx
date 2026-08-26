import type { Metadata } from "next";
import {
  HeroSection,
  TrustScopeSection,
  ReviewIntentRouterSection,
  ControlsPreviewSection,
  EvidenceResourcesSection,
  PrivacySection,
  ProcurementSection,
  ResilienceSection,
  FastPathsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/resources-security-trust";

export const metadata: Metadata = {
  title: "Security and Trust Resources | Zoiko Payroll",
  description:
    "Payroll security controls, current trust evidence, privacy and resilience resources, and procurement guidance — with clear scope and an authoritative next step for each question.",
};

export default function SecurityTrustResourcesPage() {
  return (
    <>
      <HeroSection />
      <TrustScopeSection />
      <ReviewIntentRouterSection />
      <ControlsPreviewSection />
      <EvidenceResourcesSection />
      <PrivacySection />
      <ResilienceSection />
      <ProcurementSection />
      <FastPathsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
