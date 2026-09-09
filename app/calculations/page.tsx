import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhatGetsCalculatedSection,
  ContextSection,
  CalculationTraceSection,
  RecalculationSection,
  RetroScenariosSection,
  MultiEntitySection,
  ControlBoundarySection,
  FaqSection,
  CtaSection,
} from "@/components/calculations";

export const metadata: Metadata = {
  title: "Calculations | Zoiko Payroll",
  description:
    "Turn approved payroll inputs into explainable pay results. Apply effective-dated rules, calculate gross-to-net, see what changed, and keep the evidence.",
};

export default function CalculationsPage() {
  return (
    <>
      <HeroSection />
      <DirectAnswerSection />
      <WhatGetsCalculatedSection />
      <ContextSection />
      <CalculationTraceSection />
      <RecalculationSection />
      <RetroScenariosSection />
      <MultiEntitySection />
      <ControlBoundarySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
