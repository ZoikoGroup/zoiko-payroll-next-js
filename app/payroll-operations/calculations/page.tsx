import {
  CalculationsHeroSection,
  PayrollCalculationFlow,
  WhatGetsCalculatedSection,
  ContextEffectiveDatingSection,
  CalculationTraceSection,
  RecalculationSection,
  RetroAndSpecialScenariosSection,
  MultiEntityJurisdictionSection,
  ControlBoundaryAiSection,
  FaqAndCtaSection,
} from "@/components/calculations";

export default function CalculationsPage() {
  return (
    <main>
      <CalculationsHeroSection />
      <PayrollCalculationFlow />
      <WhatGetsCalculatedSection />
      <ContextEffectiveDatingSection />
      <CalculationTraceSection />
      <RecalculationSection />
      <RetroAndSpecialScenariosSection />
      <MultiEntityJurisdictionSection />
      <ControlBoundaryAiSection />
      <FaqAndCtaSection />
    </main>
  );
}
