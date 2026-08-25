import type { Metadata } from "next";
import {
  HeroSection,
  BrowseByAreaSection,
  ServiceStatusSection,
  CurrentAnswerSection,
  IssueFamiliesSection,
  SupportProgressionSection,
  VerifiedAccessSection,
  SecurityPrivacySection,
  SearchGovernanceSection,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Zoiko Payroll",
  description:
    "Resolve payroll questions and reach the right support path — source-grounded help articles, system status, and verified support access.",
};

export default function HelpCenterPage() {
  return (
    <>
      <HeroSection />
      <BrowseByAreaSection />
      <ServiceStatusSection />
      <CurrentAnswerSection />
      <IssueFamiliesSection />
      <SupportProgressionSection />
      <VerifiedAccessSection />
      <SecurityPrivacySection />
      <SearchGovernanceSection />
    </>
  );
}
