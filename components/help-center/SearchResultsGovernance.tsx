"use client";

import Reveal from "../ui/Reveal";
import Image from "next/image";

const searchResult1 = {
  title: 'Why is my payroll run stuck in "Validate"?',
  badge: "Help article",
  badgeColor: "bg-indigo-50 text-blue-600",
  meta: "Applies to: Payroll Processing · Reviewed Jul 2026",
  snippet: "A run stays in Validate until every blocking issue is resolved and owned.",
  linkText: "Open answer",
};

const searchResult2 = {
  title: "Is there a current incident affecting payroll runs?",
  badge: "System Status",
  badgeColor: "bg-orange-100 text-yellow-700",
  meta: "Live/historical health · Authoritative source",
  snippet: "Routes directly to System Status — never inferred from search behavior alone.",
  linkText: "Check System Status",
};

const column1Links = [
  "Access authentication",
  "Managing applications",
  "Administration portal",
];

const column2Links = [
  "User provisioning",
  "Integration setup guide",
  "Directory integration",
];

export default function SearchResultsGovernance() {
  return (
    <section className="bg-white px-32 py-20 border-t border-slate-200">
      <div className="mx-auto max-w-[1180px] px-8 flex flex-col gap-3">
        <Reveal>
          <div className="max-w-[660px] pb-5 flex flex-col gap-3.5">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Search results + content governance
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              Authority badge, applicability and reviewed date every time
            </h2>
          </div>
        </Reveal>

        {/* Search result 1 */}
        <Reveal delay={100}>
          <div className="px-5 pt-4 pb-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1.5">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="text-slate-900 text-sm font-bold leading-5">
                {searchResult1.title}
              </span>
              <span className={`px-2.5 pt-[3px] pb-1 rounded-2xl text-xs font-bold leading-4 ${searchResult1.badgeColor}`}>
                {searchResult1.badge}
              </span>
            </div>
            <span className="text-slate-500 text-xs leading-4">
              {searchResult1.meta}
            </span>
            <p className="pt-px pb-[5px] text-gray-700 text-xs leading-5">
              {searchResult1.snippet}
            </p>
            <span className="text-blue-600 text-xs font-semibold leading-5 cursor-pointer hover:underline inline-flex items-center gap-1.5">
              {searchResult1.linkText}
              <Image src="/arr.png" alt="" width={12} height={12} className="inline-block" />
            </span>
          </div>
        </Reveal>

        {/* Search result 2 */}
        <Reveal delay={150}>
          <div className="px-5 pt-4 pb-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1.5">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="text-slate-900 text-sm font-bold leading-5">
                {searchResult2.title}
              </span>
              <span className={`px-2.5 pt-[3px] pb-1 rounded-2xl text-xs font-bold leading-4 ${searchResult2.badgeColor}`}>
                {searchResult2.badge}
              </span>
            </div>
            <span className="text-slate-500 text-xs leading-4">
              {searchResult2.meta}
            </span>
            <p className="pt-px pb-[5px] text-gray-700 text-xs leading-5">
              {searchResult2.snippet}
            </p>
            <span className="text-blue-600 text-xs font-semibold leading-5 cursor-pointer hover:underline inline-flex items-center gap-1.5">
              {searchResult2.linkText}
              <Image src="/arr.png" alt="" width={12} height={12} className="inline-block" />
            </span>
          </div>
        </Reveal>

        {/* No result */}
        <Reveal delay={200}>
          <div className="px-5 py-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 text-center">
            <span className="text-slate-500 text-xs leading-5">
              No verified answer for &quot;payroll blockchain sync.&quot; Try: browse by product area, Product Documentation, or verified support.
            </span>
          </div>
        </Reveal>

        {/* 3-Column Layout: Column 1 Links, Column 2 Links, Product Documentation */}
        <Reveal delay={250}>
          <div className="self-stretch pt-3 grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start">
            <div className="flex flex-col gap-2">
              {column1Links.map((link) => (
                <div
                  key={link}
                  className="self-stretch px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start cursor-pointer hover:border-blue-600 transition-colors"
                >
                  <span className="justify-center text-gray-700 text-xs font-semibold font-['Inter'] leading-5">
                    {link}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {column2Links.map((link) => (
                <div
                  key={link}
                  className="self-stretch px-3.5 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start cursor-pointer hover:border-blue-600 transition-colors"
                >
                  <span className="justify-center text-gray-700 text-xs font-semibold font-['Inter'] leading-5">
                    {link}
                  </span>
                </div>
              ))}
            </div>

            <div className="self-stretch px-5 py-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-2 h-full">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-900 text-sm font-bold font-['Inter'] leading-5">Product Documentation</div>
              </div>
              <div className="self-stretch pb-[0.69px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-xs font-normal font-['Inter'] leading-5">
                  For product behavior and procedure questions, Documentation<br />
                  is the authoritative source — Help Center routes there rather<br />
                  than duplicating it.
                </div>
              </div>
              <div className="justify-center text-blue-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline inline-flex items-center gap-1.5">
                Open Documentation{" "}
                <Image src="/arr.png" alt="" width={12} height={12} className="inline-block" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}