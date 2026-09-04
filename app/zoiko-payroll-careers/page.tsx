import type { Metadata } from "next";
import {
  HeroSection,
  RigorSection,
  ValuesSection,
  QuoteSection,
  BenefitsSection,
  CareersCTASection,
  TrustSection,
  NewsletterSection,
} from "@/components/zoiko-payroll-careers";

export const metadata: Metadata = {
  title: "Careers | Zoiko Payroll",
  description:
    "Join Zoiko Payroll — we're building the operating layer for global payroll. Explore open roles and help us get payroll right.",
};

export default function ZoikoPayrollCareersPage() {
  return (
    <>
      <HeroSection />
      <RigorSection />
      <ValuesSection />
      <QuoteSection />
      <BenefitsSection />
      <CareersCTASection />
      <TrustSection />
      <NewsletterSection />
    </>
  );
}
