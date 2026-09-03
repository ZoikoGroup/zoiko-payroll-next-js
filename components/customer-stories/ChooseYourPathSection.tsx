"use client";

import React from "react";

export default function ChooseYourPathSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              CHOOSE YOUR PATH
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Context-aware next steps — never one generic sales banner
          </h2>
        </div>

        {/* 2-Column Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Researching or evaluating */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#07243B]">
                Researching or evaluating
              </h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                Continue to product, implementation, security, pricing — or book
                a demo when you&apos;re ready.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] hover:opacity-95 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-xs transition-opacity cursor-pointer"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Card 2: Existing customer */}
          <div className="bg-[#EBF3FB] rounded-2xl p-6 sm:p-8 border border-[#3D9BD6]/40 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#07243B]">
                Existing customer
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Route to documentation, help or support before sales —
                you&apos;re never forced into a demo-first path.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="inline-block bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200/60 text-xs font-bold px-6 py-3 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                Explore documentation
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
          Interested in sharing your own story? Advocacy participation routes
          only through our approved customer program — never assumed or
          auto-enrolled.
        </p>
      </div>
    </section>
  );
}
