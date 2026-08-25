import type { Metadata } from "next";
import {
  HeroSection,
  ProductVideosSection,
  BrowseSection,
  SearchResultsSection,
  TaskFirstDiscoverySection,
  TrendingSection,
  ArticleShellSection,
  VersioningSection,
  AuthorityHandoffsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/product-documentation";

export const metadata: Metadata = {
  title: "Product Documentation | Zoiko Payroll",
  description:
    "Search current guidance for payroll processing, approvals, deductions and adjustments, employee payroll records, reporting, integrations, security, implementation and other approved capabilities.",
};

export default function ProductDocumentationPage() {
  return (
    <>
      <HeroSection />
      <ProductVideosSection />
      <BrowseSection />
      <SearchResultsSection />
      <TaskFirstDiscoverySection />
      <TrendingSection />
      <ArticleShellSection />
      <VersioningSection />
      <AuthorityHandoffsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
