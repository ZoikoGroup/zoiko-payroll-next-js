import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ServiceStatusLegend,
  FloorSection,
  OptionalServicePortfolio,
  ResponsibilitySection,
  IncludedByPlanSection,
  FaqSection,
  CtaSection,
} from "@/components/included-optional-services";

export const metadata: Metadata = {
  title: "Included & Optional Services | Zoiko Payroll",
  description:
    "Know what's included with Zoiko Payroll, what can be added, and who's responsible — by plan, entity and jurisdiction.",
};

export default function IncludedOptionalServicesPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <ServiceStatusLegend />
      <FloorSection />
      <OptionalServicePortfolio />
      <ResponsibilitySection />
      <IncludedByPlanSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
