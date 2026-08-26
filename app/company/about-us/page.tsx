import type { Metadata } from "next";
import {
  HeroSection,
  WhyExistsSection,
  MissionVisionSection,
  WhatItIsSection,
  WhoServesSection,
  DifferentiationSection,
  GlobalDesignSection,
  TrustSecuritySection,
  StandaloneSection,
  OwnershipSection,
  PrinciplesSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Zoiko Payroll | Global Payroll Platform",
  description:
    "About Zoiko Payroll and our mission to provide a secure global payroll platform with controlled workflows, reporting, approvals & multi-jurisdiction support.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <WhyExistsSection />
      <MissionVisionSection />
      <WhatItIsSection />
      <WhoServesSection />
      <DifferentiationSection />
      <GlobalDesignSection />
      <TrustSecuritySection />
      <StandaloneSection />
      <OwnershipSection />
      <PrinciplesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
