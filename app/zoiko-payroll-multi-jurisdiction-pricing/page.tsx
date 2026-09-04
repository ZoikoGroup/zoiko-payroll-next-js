import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  DeliveryModelSection,
  PlanCapacitySection,
  CommercialModelSection,
  CountingRuleSection,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-payroll-multi-jurisdiction-pricing";

export const metadata: Metadata = {
  title: "Multi-Jurisdiction Pricing | Zoiko Payroll",
  description:
    "Understand how multi-jurisdiction payroll pricing works — plan capacity, worker-month usage, jurisdiction activation, local services and third-party costs, never collapsed into one country fee.",
};

export default function MultiJurisdictionPricingPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <DeliveryModelSection />
      <PlanCapacitySection />
      <CommercialModelSection />
      <CountingRuleSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
