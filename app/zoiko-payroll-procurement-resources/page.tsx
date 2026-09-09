import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  QuickLinksSection,
  AccessClassificationSection,
  ProcurementPackSection,
  ResourceCategoriesSection,
  ProcurementProcessSection,
  DocumentFreshnessSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-payroll-procurement-resources";

export const metadata: Metadata = {
  title: "Procurement Resources | Zoiko Payroll",
  description:
    "Access the commercial, legal, privacy, security, implementation and supplier-onboarding resources used to procure Zoiko Payroll — all in one governed place.",
};

export default function ProcurementResourcesPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <QuickLinksSection />
      <AccessClassificationSection />
      <ProcurementPackSection />
      <ResourceCategoriesSection />
      <ProcurementProcessSection />
      <DocumentFreshnessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
