import type { Metadata } from "next";
import {
  ReadinessHero,
  ReadinessPrinciplesSection,
  WhatReadinessMeansSection,
  ReadinessDimensionsSection,
  InteractiveAssessmentSection,
  ResultsDashboardSection,
  ImplementationGatesSection,
  PriorityRegisterSection,
  CommonGapsSection,
  AssessmentOutputsSection,
  RolloutPlanningSection,
  ReadinessFaqSection,
  ReadinessCta,
} from "@/components/readiness-assessment";

export const metadata: Metadata = {
  title: "Payroll Readiness Assessment | Zoiko Payroll",
  description:
    "Identify implementation blockers, readiness gaps, country dependencies, governance decisions, and operational preparation before global payroll implementation begins.",
};

export default function ReadinessAssessmentPage() {
  return (
    <main className="bg-slate-50">
      <ReadinessHero />
      <ReadinessPrinciplesSection />
      <WhatReadinessMeansSection />
      <ReadinessDimensionsSection />
      <InteractiveAssessmentSection />
      <ResultsDashboardSection />
      <ImplementationGatesSection />
      <PriorityRegisterSection />
      <CommonGapsSection />
      <AssessmentOutputsSection />
      <RolloutPlanningSection />
      <ReadinessFaqSection />
      <ReadinessCta />
    </main>
  );
}
