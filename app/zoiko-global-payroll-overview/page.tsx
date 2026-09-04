import type { Metadata } from "next";
import {
  HeroSection,
  GlobalVsLocal,
  JurisdictionAvailability,
  WorkforceScenarios,
  ProductProof,
  SearchInteraction,
  ScopeHierarchy,
  CloseReadiness,
  LocalRequirements,
  ReportingTrust,
  Implementation,
} from "@/components/zoiko-global-payroll-overview";

export const metadata: Metadata = {
  title: "Zoiko Global Payroll Overview | Zoiko Payroll",
  description:
    "Global payroll control built around local requirements — jurisdiction availability, workforce scenarios, scope hierarchy and implementation guidance.",
};

export default function ZoikoGlobalPayrollOverviewPage() {
  return (
    <div className="relative w-full bg-slate-50">
      <HeroSection />
      <GlobalVsLocal />
      <JurisdictionAvailability />
      <WorkforceScenarios />
      <ProductProof />
      <ScopeHierarchy />
      <SearchInteraction />
      <CloseReadiness />
      <LocalRequirements />
      <ReportingTrust />
      <Implementation />
    </div>
  );
}
