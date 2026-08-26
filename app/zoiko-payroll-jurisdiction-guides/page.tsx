import Header from "../global-payroll/jurisdiction-coverage/components/Header";
import GuideHero from "./components/GuideHero";
import GuideMeaning from "./components/GuideMeaning";
import GuideFinder from "./components/GuideFinder";
import IdentityAmbiguity from "./components/IdentityAmbiguity";
import GuideAnatomy from "./components/GuideAnatomy";
import MarketContext from "./components/MarketContext";
import AuthorityHandoff from "./components/AuthorityHandoff";
import SourcesFreshness from "./components/SourcesFreshness";
import SearchStates from "./components/SearchStates";
import GuideFaqCta from "./components/GuideFaqCta";
import Footer from "../global-payroll/jurisdiction-coverage/components/Footer";

export default function ZoikoPayrollJurisdictionGuidesPage() {
  return (
    <div className="relative w-full bg-white">
      <Header />
      <GuideHero />
      <GuideMeaning />
      <GuideFinder />
      <IdentityAmbiguity />
      <GuideAnatomy />
      <MarketContext />
      <AuthorityHandoff />
      <SourcesFreshness />
      <SearchStates />
      <GuideFaqCta />
      <Footer />
    </div>
  );
}
