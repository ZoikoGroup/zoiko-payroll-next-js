import type { Metadata } from "next";
import {
  HeroSection,
  OperatingModelSection,
  LifecycleNavSection,
  StageSections,
  ExceptionLoopSection,
  RolesSection,
  EvidenceSection,
  SystemBoundarySection,
  OutcomesSection,
  JurisdictionModelSection,
  StandaloneSection,
  ImplementationSection,
  NextPathsSection,
  FaqSection,
} from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "How Zoiko Payroll Works | Payroll Lifecycle Explained",
  description:
    "See how Zoiko Payroll works: the six-stage payroll lifecycle — Prepare, Calculate, Validate, Review, Approve, Complete — with roles, approvals, evidence and integrations.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection />
      <OperatingModelSection />
      <LifecycleNavSection />
      <StageSections />
      <ExceptionLoopSection />
      <RolesSection />
      <EvidenceSection />
      <SystemBoundarySection />
      <OutcomesSection />
      <JurisdictionModelSection />
      <StandaloneSection />
      <ImplementationSection />
      <NextPathsSection />
      <FaqSection />
    </>
  );
}
