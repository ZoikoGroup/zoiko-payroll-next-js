import type { Metadata } from "next";
import {
  HeroSection,
  TrustModelSection,
  TrustPathRouterSection,
  SecurityControlsSection,
  ControlsInPracticeSection,
  PrivacyLifecycleSection,
  PrivacyAnswersSection,
  EvidenceDirectorySection,
  CommitmentSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/company-trust-center";

export const metadata: Metadata = {
  title: "Security and Trust | Zoiko Payroll",
  description:
    "Verify Zoiko Payroll product controls, assurance evidence, privacy and data handling, resilience and procurement routes — each scoped to what it actually proves.",
};

export default function TrustCenterPage() {
  return (
    <>
      <HeroSection />
      <TrustModelSection />
      <TrustPathRouterSection />
      <ControlsInPracticeSection />
      <SecurityControlsSection />
      <CommitmentSection />
      <PrivacyLifecycleSection />
      <PrivacyAnswersSection />
      <EvidenceDirectorySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
