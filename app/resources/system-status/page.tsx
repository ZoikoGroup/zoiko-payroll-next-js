import type { Metadata } from "next";
import {
  HeroSection,
  ScheduledMaintenanceSection,
  DependenciesSection,
  ComponentHealthSection,
  ActiveIncidentsSection,
  HistoryArchiveSection,
  GetUpdatesSection,
  HowStatusWorksSection,
  GovernanceSection,
  FaqSection,
} from "@/components/system-status";

export const metadata: Metadata = {
  title: "System Status | Zoiko Payroll",
  description:
    "See current service health, active incidents, scheduled maintenance and historical updates for Zoiko Payroll.",
};

export default function SystemStatusPage() {
  return (
    <>
      <HeroSection />
      <ScheduledMaintenanceSection />
      <DependenciesSection />
      <ComponentHealthSection />
      <ActiveIncidentsSection />
      <HistoryArchiveSection />
      <GetUpdatesSection />
      <HowStatusWorksSection />
      <GovernanceSection />
      <FaqSection />
    </>
  );
}
