"use client";

import React from "react";
import Image from "next/image";

interface StepItem {
  title: string;
  description: string;
}

const journeySteps: StepItem[] = [
  {
    title: "Challenge & customer need",
    description: "What prompted the search for a new payroll operating model.",
  },
  {
    title: "Approach & what changed",
    description: "The configuration and rollout approach taken.",
  },
  {
    title: "Implementation journey",
    description: "Key milestones from kickoff to go-live.",
  },
  {
    title: "Outcome evidence",
    description: "Approved, sourced results with full methodology.",
  },
  {
    title: "Lessons & considerations",
    description:
      "What the customer would tell a peer considering the same path.",
  },
];

export default function StoryDetailExperienceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Main Section Header */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              STORY DETAIL EXPERIENCE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            The richest proof surface — challenge to outcome, fully sourced
          </h2>

          {/* Sub-label */}
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            ILLUSTRATIVE STRUCTURE — NOT A REAL CUSTOMER STORY
          </p>
        </div>

        {/* Feature Hero Card with Image Background */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066] min-h-[220px] sm:min-h-[260px] p-8 sm:p-12 text-white shadow-xl flex items-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/resources/18.png"
              alt="Story detail presentation background"
              fill
              className="object-cover object-center opacity-10"
              priority
            />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                CHALLENGE TO OUTCOME
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
              Every section of a story detail page is sourced and reviewed.
            </h3>
          </div>
        </div>

        {/* At a Glance & Customer Voice 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* At a Glance Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold text-[#07243B] tracking-tight">
              At a glance
            </h3>

            <div className="divide-y divide-slate-100 text-xs font-medium">
              <div className="py-2.5 flex items-center justify-between first:pt-0">
                <span className="text-slate-500">Organization</span>
                <span className="text-slate-400">Example Organization</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">Scope</span>
                <span className="text-slate-400">Multi-entity, EU & UK</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-500">Status</span>
                <span className="bg-[#E3F0E7] text-[#20502F] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Published, current
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between last:pb-0">
                <span className="text-slate-500">Last reviewed</span>
                <span className="text-slate-400">Aug 2026</span>
              </div>
            </div>
          </div>

          {/* Approved Customer Voice Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-[#07243B] tracking-tight">
              Approved customer voice
            </h3>

            <p className="text-xs text-slate-500 font-medium italic leading-relaxed pt-1">
              &ldquo;Illustrative quote fragment shown here — every published
              quote resolves to exact approved wording and attribution.&rdquo;
            </p>
          </div>
        </div>

        {/* Implementation Journey Timeline */}
        <div className="space-y-8 pt-4">
          <h3 className="text-center text-sm font-bold text-[#07243B]">
            Implementation journey
          </h3>

          <div className="max-w-xl mx-auto relative pl-6 space-y-6 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-4">
                {/* Custom Target Dot Node */}
                <div className="absolute -left-[23px] top-0.5 bg-white rounded-full p-0.5">
                  <div className="w-4 h-4 rounded-full border-2 border-[#3D9BD6] bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3D9BD6]" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Footer Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              className="bg-white border border-slate-200/80 text-[#07243B] text-xs font-bold px-5 py-2.5 rounded-full shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Systems & Integrations (where approved)
            </button>
            <button
              type="button"
              className="bg-white border border-slate-200/80 text-[#07243B] text-xs font-bold px-5 py-2.5 rounded-full shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Sources & corrections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
