import type { Metadata } from "next";
import {
  HeroSection,
  CoverageDefinitions,
  JurisdictionDirectory,
  QuickViewSection,
  CompareJurisdictions,
  SubJurisdictions,
  FaqSection,
  CtaSection,
} from "@/components/zoiko-jurisdiction-directory";

export const metadata: Metadata = {
  title: "Jurisdiction Directory | Zoiko Payroll",
  description:
    "Search countries and territories to see available payroll capabilities, delivery models, local guidance, and important coverage conditions — all from one governed directory.",
};

export default function ZoikoJurisdictionDirectoryPage() {
  return (
    <div className="w-full bg-gray-50">
      <HeroSection />
      <CoverageDefinitions />
      <JurisdictionDirectory />
      <QuickViewSection />
      <CompareJurisdictions />
      <SubJurisdictions />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
