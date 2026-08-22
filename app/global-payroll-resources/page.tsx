import type { Metadata } from "next";
import {
  HeroSection,
  AuthorityBoundarySection,
  ResourceNavigatorSection,
  CollectionsSection,
  ResourceRecordSection,
  GuidesSection,
  AuthorityHandoffsSection,
  FreshnessSection,
  TrustGovernanceSection,
  FaqSection,
  CtaSection,
} from "@/components/global-payroll-resources";

export const metadata: Metadata = {
  title: "Global Payroll Resources | Zoiko Payroll",
  description:
    "Guides, checklists and playbooks for payroll governance, operating models, implementation, multi-entity coordination and reporting — with scope and reviewed-date context always visible.",
};

export default function GlobalPayrollResourcesPage() {
  return (
    <>
      <HeroSection />
      <AuthorityBoundarySection />
      <ResourceNavigatorSection />
      <CollectionsSection />
      <ResourceRecordSection />
      <GuidesSection />
      <AuthorityHandoffsSection />
      <FreshnessSection />
      <TrustGovernanceSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
