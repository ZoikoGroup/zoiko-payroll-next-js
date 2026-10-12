import type { Metadata } from "next";
import {
  ServiceTermsHero,
  TermsSummarySection,
  WhatAreServiceTermsSection,
  StandardVsAgreementSection,
  ContractDocumentMapSection,
  TableOfContentsSection,
  TermsSections,
  AgreementStatusSection,
  ServiceTermsFAQSection,
  VersionHistorySection,
  RelatedResourcesSection,
} from "@/components/service-terms";

export const metadata: Metadata = {
  title: "Zoiko Payroll Service Terms | Zoiko Payroll",
  description:
    "The public standard terms and conditions for using Zoiko Payroll services — scope, fees, term, responsibilities, liability and how they relate to your organization's executed agreement.",
};

export default function ServiceTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceTermsHero />
      <TermsSummarySection />
      <WhatAreServiceTermsSection />
      <StandardVsAgreementSection />
      <ContractDocumentMapSection />
      <TableOfContentsSection />
      <TermsSections />
      <AgreementStatusSection />
      <ServiceTermsFAQSection />
      <VersionHistorySection />
      <RelatedResourcesSection />
    </div>
  );
}
