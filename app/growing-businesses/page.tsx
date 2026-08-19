import type { Metadata } from "next";
import {
  HeroSection,
  GrowthSignalsSection,
  ControlCenterSection,
  ProgressionSection,
  RolesSection,
  IntegrationsSection,
  BoundariesSection,
  FaqSection,
  CtaSection,
} from "@/components/growing-businesses";

export const metadata: Metadata = {
  title: "Payroll for Growing Businesses | Zoiko Payroll",
  description:
    "As headcount, changes and systems increase, Zoiko Payroll keeps every pay run controlled — from validated inputs through review, approval, records and reporting.",
};

export default function GrowingBusinessesPage() {
  return (
    <>
      {/* 1 */} <HeroSection />
      {/* 2 */} <GrowthSignalsSection />
      {/* 3 */} <ControlCenterSection />
      {/* 4 */} <ProgressionSection />
      {/* 5 */} <RolesSection />
      {/* 6 */} <IntegrationsSection />
      {/* 7 */} <BoundariesSection />
      {/* 8 */} <FaqSection />
      {/* 9 */} <CtaSection />
    </>
  );
}
