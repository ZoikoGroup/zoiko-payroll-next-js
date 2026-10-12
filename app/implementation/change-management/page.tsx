import type { Metadata } from "next";
import {
  ChangeHero,
  WhyItMattersSection,
  DisciplineSection,
  ChangeJourneySection,
  StakeholderEcosystemSection,
  ImpactAssessmentSection,
  GovernanceSection,
  CommunicationSection,
  GoLiveHypercareSection,
  SharedResponsibilitySection,
  ChangeFaqSection,
  ChangeCta,
} from "@/components/change-management";

export const metadata: Metadata = {
  title: "Payroll Change Management | Zoiko Payroll",
  description:
    "Prepare stakeholders, communicate with clarity, and reinforce adoption through every stage of payroll transformation — from discovery to long-term adoption.",
};

export default function ChangeManagementPage() {
  return (
    <main className="bg-slate-50">
      <ChangeHero />
      <WhyItMattersSection />
      <DisciplineSection />
      <ChangeJourneySection />
      <StakeholderEcosystemSection />
      <ImpactAssessmentSection />
      <GovernanceSection />
      <CommunicationSection />
      <SharedResponsibilitySection />
      <GoLiveHypercareSection />
      <ChangeFaqSection />
      <ChangeCta />
    </main>
  );
}
