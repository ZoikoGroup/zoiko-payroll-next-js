import type { Metadata } from "next";
import {
  GuideHero,
  GuideMeaning,
  GuideFinder,
  IdentityAmbiguity,
  GuideAnatomy,
  MarketContext,
  AuthorityHandoff,
  SourcesFreshness,
  SearchStates,
  GuideFaqCta,
} from "@/components/zoiko-payroll-jurisdiction-guides";

export const metadata: Metadata = {
  title: "Zoiko Payroll Jurisdiction Guides | Zoiko Payroll",
  description:
    "Country and territory payroll guides with jurisdiction finder, market context, authority handoff and evidence governance.",
};

export default function ZoikoPayrollJurisdictionGuidesPage() {
  return (
    <div className="relative w-full bg-white">
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
    </div>
  );
}
