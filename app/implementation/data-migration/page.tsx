import type { Metadata } from "next";
import {
  MigrationHero,
  MigrationPillarsStrip,
  DefinitionSection,
  MigratableDataSection,
  DataQualitySection,
  StrategySection,
  CutoverSection,
  SourceLandscapeSection,
  ReconciliationSection,
  ExceptionManagementSection,
  SecurityWorkspaceSection,
  GovernanceSection,
  GlobalReachSection,
  SharedResponsibilitySection,
  MigrationFaqSection,
  MigrationCta,
} from "@/components/data-migration";

export const metadata: Metadata = {
  title: "Payroll Data Migration | Zoiko Payroll",
  description:
    "A governed migration path from your legacy HRIS and payroll systems into Zoiko Payroll — every record profiled, mapped, validated and reconciled before it goes live.",
};

export default function DataMigrationPage() {
  return (
    <main className="bg-slate-50">
      <MigrationHero />
      <MigrationPillarsStrip />
      <DefinitionSection />
      <MigratableDataSection />
      <DataQualitySection />
      <StrategySection />
      <CutoverSection />
      <SourceLandscapeSection />
      <ReconciliationSection />
      <ExceptionManagementSection />
      <SecurityWorkspaceSection />
      <GovernanceSection />
      <GlobalReachSection />
      <SharedResponsibilitySection />
      <MigrationFaqSection />
      <MigrationCta />
    </main>
  );
}
