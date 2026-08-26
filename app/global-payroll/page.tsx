import Header from "./jurisdiction-coverage/components/Header";
import HeroSection from "./components/HeroSection";
import GlobalVsLocal from "./components/GlobalVsLocal";
import JurisdictionAvailability from "./components/JurisdictionAvailability";
import WorkforceScenarios from "./components/WorkforceScenarios";
import ProductProof from "./components/ProductProof";
import SearchInteraction from "./components/SearchInteraction";
import ScopeHierarchy from "./components/ScopeHierarchy";
import CloseReadiness from "./components/CloseReadiness";
import LocalRequirements from "./components/LocalRequirements";
import ReportingTrust from "./components/ReportingTrust";
import Implementation from "./components/Implementation";
import Footer from "./jurisdiction-coverage/components/Footer";

export default function ZoikoGlobalPayrollOverviewPage() {
  return (
    <div className="relative w-full bg-slate-50">
      <Header />
      <HeroSection />
      <GlobalVsLocal />
      <JurisdictionAvailability />
      <WorkforceScenarios />
      <ProductProof />
      <SearchInteraction />
      <ScopeHierarchy />
      <CloseReadiness />
      <LocalRequirements />
      <ReportingTrust />
      <Implementation />
      <Footer />
    </div>
  );
}
