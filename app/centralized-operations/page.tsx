import type { Metadata } from "next";
import {
  HeroSection,
  FragmentationSection,
  ControlCenterSection,
  HierarchySection,
  CloseOrchestrationSection,
  WorkQueueSection,
  StandardWorkSection,
  ApprovalSection,
  RecordsSection,
  TransitionSection,
  RoleOutcomesSection,
  FaqSection,
  CtaSection,
  IntegrationsSecuritySection,
} from "@/components/centralized-operations";

export const metadata: Metadata = {
  title: "Centralized Payroll Operations | Zoiko Payroll",
  description:
    "Coordinate payroll teams, entities, payroll groups, deadlines, exceptions and approvals from one controlled operating view — while the right people stay accountable for each payroll scope.",
};

export default function CentralizedOperationsPage() {
  return (
    <>
      <HeroSection />
      <FragmentationSection />
      <ControlCenterSection />
      <HierarchySection />
      <CloseOrchestrationSection />
      <WorkQueueSection />
      <StandardWorkSection />
      <ApprovalSection />
      <RecordsSection />
      <IntegrationsSecuritySection />
      <TransitionSection />
      <RoleOutcomesSection />
      <FaqSection />
      <CtaSection />
      
    </>
  );
}
