"use client";

import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function SystemStatusBanner() {
  return (
    <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-32">
      <div className="mx-auto max-w-[1180px] px-8 flex flex-col gap-6">
        <Reveal>
          <div className="max-w-[660px] flex flex-col gap-3">
            <div className="relative flex items-center h-5 pl-6">
              <div className="w-4 h-0.5 absolute left-0 top-[9px] bg-[#2F6FED]" />
              <span className="text-[#2F6FED] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wide">
                Service-health interruption
              </span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-8 sm:leading-9 whitespace-nowrap">
              System Status owns current and historical service health
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="px-5 py-4 bg-[#E7F6EE] rounded-xl border border-[#BFE3D0] flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-[5px]" />
              <div className="flex flex-col">
                <span className="text-slate-900 text-sm font-semibold leading-5">
                  All systems operational
                </span>
                <span className="text-slate-500 text-xs leading-5">
                  No active incidents affecting your search.
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="px-3.5 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-900 text-xs font-semibold leading-5"
            >
              Check System Status →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}