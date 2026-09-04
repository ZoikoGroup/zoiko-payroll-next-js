import type { Metadata } from "next";
import {
  Hero,
  StatsBar,
  AvailabilityStateContract,
  SearchCanonicalization,
  CoverageSnapshot,
  CoverageWorkspace,
  JurisdictionDetail,
  MarketComparison,
  EvidenceGovernance,
  TrustBoundaryFaqCta,
} from "@/components/zoiko-jurisdiction-coverage";

export const metadata: Metadata = {
  title: "Zoiko Payroll Jurisdiction Coverage | Zoiko Payroll",
  description:
    "Coverage snapshot, availability states, evidence governance and market comparison across jurisdictions — with canonical search and detailed jurisdiction records.",
};

export default function ZoikoJurisdictionCoveragePage() {
  return (
    <div className="relative w-full bg-slate-50">
      <Hero />
      <StatsBar />
      <AvailabilityStateContract />
      <SearchCanonicalization />
      <CoverageSnapshot />
      <CoverageWorkspace />
      <JurisdictionDetail />
      <MarketComparison />
      <EvidenceGovernance />
      <TrustBoundaryFaqCta />
    </div>
  );
}
