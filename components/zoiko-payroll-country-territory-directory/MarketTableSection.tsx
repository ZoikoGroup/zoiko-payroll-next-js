"use client";

import { useState, useMemo } from "react";
import Reveal from "@/components/ui/Reveal";
import { Search, RotateCcw } from "lucide-react";

export interface MarketEntry {
  id: string;
  name: string;
  type: string;
  code: string;
  region: string;
  status: "Available" | "Available w/ conditions" | "Not currently available" | "Under review" | "Verification required";
  scope: string;
  verifiedDate: string;
}

export const marketDirectoryData: MarketEntry[] = [
  {
    id: "argentina",
    name: "Argentina",
    type: "Country",
    code: "AR",
    region: "Latin America",
    status: "Not currently available",
    scope: "Zoiko Payroll does not currently publish production availability for this jurisdiction.",
    verifiedDate: "Aug 14, 2024",
  },
  {
    id: "australia",
    name: "Australia",
    type: "Country",
    code: "AU",
    region: "Asia Pacific",
    status: "Available",
    scope: "Tax calculation, PAYG withholding and Single Touch Payroll reporting.",
    verifiedDate: "Sep 10, 2024",
  },
  {
    id: "brazil",
    name: "Brazil",
    type: "Country",
    code: "BR",
    region: "Latin America",
    status: "Available w/ conditions",
    scope: "eSocial-aligned payroll and INSS contribution calculations.",
    verifiedDate: "Jul 29, 2024",
  },
  {
    id: "california",
    name: "California",
    type: "State / Subnational",
    code: "US-CA",
    region: "North America",
    status: "Available",
    scope: "State disability tax and local City and County wage supplement reporting.",
    verifiedDate: "Sep 11, 2024",
  },
  {
    id: "canada",
    name: "Canada",
    type: "Country",
    code: "CA",
    region: "North America",
    status: "Available",
    scope: "Federal and provincial payroll, statutory deductions and Tax Forms support.",
    verifiedDate: "Sep 15, 2024",
  },
  {
    id: "china",
    name: "China",
    type: "Country",
    code: "CN",
    region: "Asia Pacific",
    status: "Under review",
    scope: "Availability scoping evaluated for statutory payroll support.",
    verifiedDate: "Jul 03, 2024",
  },
  {
    id: "colombia",
    name: "Colombia",
    type: "Country",
    code: "CO",
    region: "Latin America",
    status: "Under review",
    scope: "Availability scoping evaluated for statutory payroll support.",
    verifiedDate: "Jun 30, 2024",
  },
  {
    id: "france",
    name: "France",
    type: "Country",
    code: "FR",
    region: "Europe",
    status: "Available w/ conditions",
    scope: "Bulletin de paie generation and URSSAF-aligned contribution calculation.",
    verifiedDate: "Aug 26, 2024",
  },
  {
    id: "germany",
    name: "Germany",
    type: "Country",
    code: "DE",
    region: "Europe",
    status: "Available",
    scope: "Lohnsteuer calculation, social insurance and statutory reporting.",
    verifiedDate: "Sep 12, 2024",
  },
  {
    id: "india",
    name: "India",
    type: "Country",
    code: "IN",
    region: "Asia Pacific",
    status: "Available",
    scope: "PF, ESI, professional tax and statutory challan generation.",
    verifiedDate: "Sep 14, 2024",
  },
  {
    id: "ireland",
    name: "Ireland",
    type: "Country",
    code: "IE",
    region: "Europe",
    status: "Available",
    scope: "PAYE/PRSI calculations and Revenue-aligned reporting.",
    verifiedDate: "Sep 9, 2024",
  },
  {
    id: "italy",
    name: "Italy",
    type: "Country",
    code: "IT",
    region: "Europe",
    status: "Under review",
    scope: "Availability scoping evaluated for statutory payroll support.",
    verifiedDate: "Jul 20, 2024",
  },
  {
    id: "japan",
    name: "Japan",
    type: "Country",
    code: "JP",
    region: "Asia Pacific",
    status: "Available w/ conditions",
    scope: "Social insurance and resident tax withholding calculation.",
    verifiedDate: "Aug 18, 2024",
  },
  {
    id: "mexico",
    name: "Mexico",
    type: "Country",
    code: "MX",
    region: "Latin America",
    status: "Available",
    scope: "IMSS and local tax calculation and CFDI digital receipt generation.",
    verifiedDate: "Sep 8, 2024",
  },
  {
    id: "netherlands",
    name: "Netherlands",
    type: "Country",
    code: "NL",
    region: "Europe",
    status: "Available",
    scope: "Loonsomopgave and standard wage tax withholding calculation.",
    verifiedDate: "Sep 14, 2024",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    type: "Country",
    code: "NZ",
    region: "Asia Pacific",
    status: "Available",
    scope: "PAYE and KiwiSaver contribution calculation.",
    verifiedDate: "Sep 5, 2024",
  },
  {
    id: "nigeria",
    name: "Nigeria",
    type: "Country",
    code: "NG",
    region: "Middle East & Africa",
    status: "Not currently available",
    scope: "Zoiko Payroll does not currently publish production availability for this jurisdiction.",
    verifiedDate: "Apr 20, 2024",
  },
  {
    id: "ontario",
    name: "Ontario",
    type: "Province / Subnat.",
    code: "CA-ON",
    region: "North America",
    status: "Available",
    scope: "Employer Health Tax and provincial statutory holiday calculation.",
    verifiedDate: "Sep 11, 2024",
  },
  {
    id: "philippines",
    name: "Philippines",
    type: "Country",
    code: "PH",
    region: "Asia Pacific",
    status: "Available w/ conditions",
    scope: "SSS, PhilHealth and Pag-IBIG contribution calculation.",
    verifiedDate: "Aug 9, 2024",
  },
  {
    id: "portugal",
    name: "Portugal",
    type: "Country",
    code: "PT",
    region: "Europe",
    status: "Available",
    scope: "IRS withholding and Social Security contribution calculation.",
    verifiedDate: "Sep 6, 2024",
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico",
    type: "Territory",
    code: "PR",
    region: "North America",
    status: "Verification required",
    scope: "Payroll and statutory contribution calculation for the territory.",
    verifiedDate: "Nov 3, 2024",
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    type: "Country",
    code: "SA",
    region: "Middle East & Africa",
    status: "Under review",
    scope: "Availability scoping evaluated for statutory payroll support.",
    verifiedDate: "Jul 4, 2024",
  },
  {
    id: "singapore",
    name: "Singapore",
    type: "Country",
    code: "SG",
    region: "Asia Pacific",
    status: "Available",
    scope: "CPF contribution calculation and IRAS digital reporting.",
    verifiedDate: "Sep 8, 2024",
  },
  {
    id: "south-africa",
    name: "South Africa",
    type: "Country",
    code: "ZA",
    region: "Middle East & Africa",
    status: "Available w/ conditions",
    scope: "UIF and PAYE calculation with SARS-aligned reporting.",
    verifiedDate: "Aug 12, 2024",
  },
  {
    id: "spain",
    name: "Spain",
    type: "Country",
    code: "ES",
    region: "Europe",
    status: "Available w/ conditions",
    scope: "IRPF tax calculation and Seguridad Social contribution reporting.",
    verifiedDate: "Aug 22, 2024",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    type: "Country",
    code: "CH",
    region: "Europe",
    status: "Verification required",
    scope: "Cantonal payroll and social insurance calculation.",
    verifiedDate: "Apr 2, 2024",
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    type: "Country",
    code: "AE",
    region: "Middle East & Africa",
    status: "Available",
    scope: "WPS-aligned wage processing and end-of-service gratuity calculation.",
    verifiedDate: "Sep 9, 2024",
  },
  {
    id: "uk",
    name: "United Kingdom",
    type: "Country",
    code: "GB",
    region: "Europe",
    status: "Available",
    scope: "PAYE, NI calculation and real-time calculation and reporting.",
    verifiedDate: "Sep 16, 2024",
  },
  {
    id: "us",
    name: "United States",
    type: "Country",
    code: "US",
    region: "North America",
    status: "Available",
    scope: "Federal and state payroll calculation, filing generation and direct deposit across supported states.",
    verifiedDate: "Sep 15, 2024",
  },
];

function getStatusBadge(status: MarketEntry["status"]) {
  switch (status) {
    case "Available":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-100/80 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Available
        </span>
      );
    case "Available w/ conditions":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-amber-100/80 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
          Available w/ conditions
        </span>
      );
    case "Not currently available":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/70 bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
          Not currently available
        </span>
      );
    case "Under review":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/70 bg-purple-100/80 px-2.5 py-0.5 text-xs font-semibold text-purple-800">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
          Under review
        </span>
      );
    case "Verification required":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200/70 bg-rose-100/80 px-2.5 py-0.5 text-xs font-semibold text-rose-800">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
          Verification required
        </span>
      );
  }
}

export default function MarketTableSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("a-z");

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedStatus("all");
    setSelectedRegion("all");
    setSelectedType("all");
    setSelectedSort("a-z");
  };

  const filteredMarkets = useMemo(() => {
    return marketDirectoryData
      .filter((item) => {
        // Search filter
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchCode = item.code.toLowerCase().includes(q);
          const matchRegion = item.region.toLowerCase().includes(q);
          const matchScope = item.scope.toLowerCase().includes(q);
          if (!matchName && !matchCode && !matchRegion && !matchScope) {
            return false;
          }
        }
        // Status filter
        if (selectedStatus !== "all" && item.status !== selectedStatus) {
          return false;
        }
        // Region filter
        if (selectedRegion !== "all" && item.region !== selectedRegion) {
          return false;
        }
        // Type filter
        if (selectedType !== "all") {
          if (selectedType === "country" && item.type !== "Country") return false;
          if (selectedType === "subnational" && !item.type.includes("Subnational") && !item.type.includes("Subnat")) return false;
          if (selectedType === "territory" && item.type !== "Territory") return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (selectedSort === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (selectedSort === "z-a") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
  }, [searchTerm, selectedStatus, selectedRegion, selectedType, selectedSort]);

  return (
    <section id="all-markets" className="w-full max-w-full min-w-0 overflow-hidden bg-[#F5F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        {/* Header */}
        <Reveal>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
              / MARKET TABLE
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl lg:text-[34px]">
              Search, filter and browse published markets.
            </h2>
          </div>
        </Reveal>

        {/* Filter Controls Bar */}
        <Reveal delay={60}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xs lg:flex-row lg:items-center sm:p-3.5">
            {/* Search Input */}
            <div className="relative w-full flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search markets..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2 pl-3.5 pr-9 text-xs text-slate-800 placeholder-slate-400 transition-colors focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
              />
              <Search
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
            </div>

            {/* Filter Dropdowns & Reset - Responsive grid on mobile, inline flex on desktop */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:gap-3">
              {/* Dropdown 1: Status */}
              <div className="w-full lg:min-w-[130px]">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
                >
                  <option value="all">All statuses</option>
                  <option value="Available">Available</option>
                  <option value="Available w/ conditions">Available w/ conditions</option>
                  <option value="Not currently available">Not currently available</option>
                  <option value="Under review">Under review</option>
                  <option value="Verification required">Verification required</option>
                </select>
              </div>

              {/* Dropdown 2: Region */}
              <div className="w-full lg:min-w-[125px]">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
                >
                  <option value="all">All regions</option>
                  <option value="Asia Pacific">Asia Pacific</option>
                  <option value="Europe">Europe</option>
                  <option value="Latin America">Latin America</option>
                  <option value="Middle East & Africa">Middle East & Africa</option>
                  <option value="North America">North America</option>
                </select>
              </div>

              {/* Dropdown 3: Type */}
              <div className="w-full lg:min-w-[110px]">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
                >
                  <option value="all">All types</option>
                  <option value="country">Country</option>
                  <option value="subnational">State / Province</option>
                  <option value="territory">Territory</option>
                </select>
              </div>

              {/* Dropdown 4: Sort */}
              <div className="w-full lg:min-w-[110px]">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors focus:border-[#0A78C2] focus:bg-white focus:outline-none sm:text-sm"
                >
                  <option value="a-z">Sort: A–Z</option>
                  <option value="z-a">Sort: Z–A</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={resetFilters}
                className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 active:translate-y-0 sm:col-span-1 sm:text-sm"
              >
                <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                <span>Reset all</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Counter & Status indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p className="font-medium">
            Showing all <span className="font-bold text-slate-800">{filteredMarkets.length}</span> {filteredMarkets.length === 1 ? "entry" : "entries"}
          </p>
          <p className="text-[11.5px] text-slate-400">
            Live update by validation date
          </p>
        </div>

        {/* The Markets Table */}
        <Reveal delay={120}>
          <div className="mt-3 w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <div className="w-full max-w-full overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-50/70 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-5 py-3.5 sm:px-6">Market</th>
                    <th scope="col" className="px-5 py-3.5 sm:px-6">Region</th>
                    <th scope="col" className="px-5 py-3.5 sm:px-6">Availability</th>
                    <th scope="col" className="px-5 py-3.5 sm:px-6">Published Scope</th>
                    <th scope="col" className="px-5 py-3.5 sm:px-6 whitespace-nowrap">Last Verified</th>
                    <th scope="col" className="px-5 py-3.5 sm:px-6 text-right"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredMarkets.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                        No markets match your current filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredMarkets.map((market) => (
                      <tr
                        key={market.id}
                        className="transition-colors hover:bg-slate-50/60"
                      >
                        {/* Market Name & Type */}
                        <td className="px-5 py-4 sm:px-6">
                          <div className="font-bold text-[#082F49] text-[13px] sm:text-sm">
                            {market.name}
                          </div>
                          <div className="mt-0.5 text-[11px] text-slate-400">
                            {market.type} · {market.code}
                          </div>
                        </td>

                        {/* Region */}
                        <td className="px-5 py-4 font-medium text-slate-600 sm:px-6 whitespace-nowrap">
                          {market.region}
                        </td>

                        {/* Availability Badge */}
                        <td className="px-5 py-4 sm:px-6 whitespace-nowrap">
                          {getStatusBadge(market.status)}
                        </td>

                        {/* Published Scope */}
                        <td className="px-5 py-4 leading-relaxed text-slate-600 sm:px-6 max-w-xs md:max-w-md">
                          {market.scope}
                        </td>

                        {/* Last Verified */}
                        <td className="px-5 py-4 whitespace-nowrap text-slate-500 sm:px-6">
                          {market.verifiedDate}
                        </td>

                        {/* Action link */}
                        <td className="px-5 py-4 text-right whitespace-nowrap sm:px-6">
                          <button
                            type="button"
                            className="font-semibold text-[#0A78C2] transition-colors hover:text-[#0863A0] hover:underline"
                          >
                            View details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
