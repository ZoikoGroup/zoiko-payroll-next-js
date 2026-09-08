import type { Metadata } from "next";
import {
  TrainingHero,
  TrainingPrinciplesSection,
  WhatTrainingMeansSection,
  WhoNeedsTrainingSection,
  LearningJourneySection,
  LearningPathsSection,
  CoreCurriculumSection,
  DeliveryModesSection,
  SandboxPracticeSection,
  AssessmentsSection,
  TrainingPlanBuilderSection,
  LocalizedLearningSection,
  ReadinessGateSection,
  OngoingLearningSection,
  SharedResponsibilitySection,
  TrainingFaqSection,
  TrainingCta,
} from "@/components/training";

export const metadata: Metadata = {
  title: "Payroll Training | Zoiko Payroll",
  description:
    "Role-based learning, hands-on sandbox practice, and proficiency evidence that prepare every payroll role for production responsibility before go-live.",
};

export default function TrainingPage() {
  return (
    <main className="bg-slate-50">
      <TrainingHero />
      <TrainingPrinciplesSection />
      <WhatTrainingMeansSection />
      <WhoNeedsTrainingSection />
      <LearningJourneySection />
      <LearningPathsSection />
      <CoreCurriculumSection />
      <LocalizedLearningSection />
      <SandboxPracticeSection />
      <AssessmentsSection />
      <TrainingPlanBuilderSection />
      <DeliveryModesSection />
      <ReadinessGateSection />
      <OngoingLearningSection />
      <SharedResponsibilitySection />
      <TrainingFaqSection />
      <TrainingCta />
    </main>
  );
}
