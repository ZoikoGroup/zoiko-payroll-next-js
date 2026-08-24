import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AvailabilityStateContract from "./components/AvailabilityStateContract";
import SearchCanonicalization from "./components/SearchCanonicalization";
import CoverageSnapshot from "./components/CoverageSnapshot";
import CoverageWorkspace from "./components/CoverageWorkspace";
import JurisdictionDetail from "./components/JurisdictionDetail";
import MarketComparison from "./components/MarketComparison";
import EvidenceGovernance from "./components/EvidenceGovernance";
import TrustBoundaryFaqCta from "./components/TrustBoundaryFaqCta";

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
