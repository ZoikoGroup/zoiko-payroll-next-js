import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  VerificationStandardSection,
  PathwaysSection,
  RelationshipNetworkSection,
  RelationshipProfileSection,
  BoundariesSection,
  GovernedStagesSection,
  ResponsibilitiesSection,
  PartnershipInquirySection,
  AuthorityRoutingSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/company-partners";

export const metadata: Metadata = {
  title: "Partners | Zoiko Payroll",
  description:
    "Explore approved Zoiko Payroll partnership pathways, understand what each verified technology, service and ecosystem relationship covers, and route to the right authority.",
};

export default function PartnersPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <VerificationStandardSection />
      <PathwaysSection />
      <RelationshipNetworkSection />
      <RelationshipProfileSection />
      <BoundariesSection />
      <GovernedStagesSection />
      <ResponsibilitiesSection />
      <PartnershipInquirySection />
      <AuthorityRoutingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
