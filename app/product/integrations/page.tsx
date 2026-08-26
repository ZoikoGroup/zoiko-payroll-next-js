import type { Metadata } from "next";
import {
  HeroSection,
  StakeholdersSection,
  FitGapSection,
  ArchitectureSection,
  IntegrationHubSection,
  LifecycleSection,
  CategoryFlowSection,
  CategoryScopeSection,
  DataContractsSection,
  RuntimeSection,
  SecuritySection,
  ZoikoOneSection,
  ImplementationSection,
  EvidenceSection,
  ApisSection,
  FaqSection,
  CtaSection,
} from "@/components/integrations";

export const metadata: Metadata = {
  title: "Payroll Integrations & Interoperability | Zoiko Payroll",
  description:
    "Connect Zoiko Payroll with approved HRIS, finance/ERP, time, payment, identity and developer systems — with explicit direction, versioned mappings, monitored failures and recorded ownership.",
};

export default function IntegrationsPage() {
  return (
    <>
      <HeroSection />
      <StakeholdersSection />
      <FitGapSection />
      <ArchitectureSection />
      <IntegrationHubSection />
      <LifecycleSection />

      <CategoryFlowSection
        eyebrow="Category · HRIS / HCM"
        heading="Workforce categories, mapped and validated."
        badge="Inbound"
        title="Bring approved employment context into payroll."
        description="Where supported, an approved HR system provides worker and employment context, identifiers and effective dates. Source ownership stays visible throughout."
        points={[
          "Field-level mapping against the HR system of record",
          "Validation before data enters the payroll workflow",
          "Correction flow when source data changes",
        ]}
        flow={[
          { label: "HR system of record" },
          { label: "Validation & effective dates", active: true },
          { label: "Payroll input boundary" },
        ]}
        connectors={["inbound · mapped", ""]}
      />

      <CategoryFlowSection
        badge="Outbound · Reconciliation"
        title="Accounting context without overclaiming posting."
        description="Approved payroll outcomes or accounting context move outbound only where specifically supported — general-ledger posting is never assumed for every connector."
        points={[
          "Versioned mapping and batch status visibility",
          "Cost-center / journal context where verified",
          "Reconciliation against accepted outcomes",
        ]}
        flow={[
          { label: "Approved payroll outcome" },
          { label: "Batch / cost-center context", active: true },
          { label: "Finance / ERP system" },
        ]}
        connectors={["outbound · versioned mapping", "reconciliation"]}
        reversed
        tinted
      />

      <CategoryScopeSection />
      <ApisSection />
      <DataContractsSection />
      <RuntimeSection />
      <SecuritySection />
      <ZoikoOneSection />
      <ImplementationSection />
      <EvidenceSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
