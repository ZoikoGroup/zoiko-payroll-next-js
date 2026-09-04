import type { Metadata } from "next";
import {
  HelpHeroSection,
  SystemStatusBanner,
  BrowseByProductArea,
  StartWithYourIssue,
  CurrentHelpAnswer,
  SupportProgression,
  VerifiedSupportAccess,
  SecurityPrivacy,
  SearchResultsGovernance,
  HelpCtaBanner,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Zoiko Payroll",
  description:
    "Resolve payroll questions and reach the right support path. Search, browse by product area, or submit a verified support case.",
};

export default function HelpCenterPage() {
  return (
    <>
      <HelpHeroSection />
      <BrowseByProductArea />
      <SystemStatusBanner />
      <CurrentHelpAnswer />
      <StartWithYourIssue />
      <SupportProgression />
      <VerifiedSupportAccess />
      <SecurityPrivacy />
      <SearchResultsGovernance />
      <HelpCtaBanner />
    </>
  );
}
