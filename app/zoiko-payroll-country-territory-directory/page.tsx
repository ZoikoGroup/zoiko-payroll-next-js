import type { Metadata } from "next";
import {
  DirectoryHero,
  StatusLegendSection,
  MarketTableSection,
  BrowseByRegionSection,
  MaintenanceGovernanceSection,
  DirectoryFaqSection,
  DirectoryCtaSection,
} from "@/components/zoiko-payroll-country-territory-directory";

export const metadata: Metadata = {
  title: "Country & Territory Directory | Zoiko Payroll",
  description:
    "Find current payroll availability by market. Search countries, territories, states and provinces to see Zoiko Payroll's current published status, documented scope, service boundaries and last verification date.",
};

export default function ZoikoPayrollCountryTerritoryDirectoryPage() {
  return (
    <div className="flex w-full max-w-full min-w-0 flex-col overflow-x-hidden">
      <DirectoryHero />
      <StatusLegendSection />
      <MarketTableSection />
      <BrowseByRegionSection />
      <MaintenanceGovernanceSection />
      <DirectoryFaqSection />
      <DirectoryCtaSection />
    </div>
  );
}
