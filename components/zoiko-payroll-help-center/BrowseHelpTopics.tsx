"use client";

import Image from "next/image";
import React from "react";

const topics = [
  {
    image: "/images/zoiko-payroll-help-center/image1.png",
    title: "Getting started",
    description: "First sign-in, setup and orientation.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image2.png",
    title: "Account & access",
    description: "Sign-in, password and permission help.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image3.png",
    title: "Payroll processing",
    description: "Running and managing payroll cycles.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image4.png",
    title: "Approvals",
    description: "Review stages and decision rights.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image5.png",
    title: "Integrations",
    description: "Connecting approved HR, finance and time systems.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image6.png",
    title: "Records & reports",
    description: "Payslips, statements and payroll reports.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image7.png",
    title: "Billing & subscription",
    description: "Plans, entitlement and invoicing questions.",
  },
  {
    image: "/images/zoiko-payroll-help-center/image8.png",
    title: "Troubleshooting",
    description: "Error recovery and known-issue guidance.",
  },
];

export default function BrowseHelpTopics() {
  return (
    <section className="w-full bg-[#eef6fc] px-4 py-14 sm:px-6 md:px-10 lg:px-14 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <span className="text-center text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Browse help topics
            </span>
          </div>

          {/* Heading */}
          <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
            A registry-driven taxonomy — never an
            <br className="hidden sm:block" />
            empty topic.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full pt-2">
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, index) => (
              <div
                key={topic.title}
                className="flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#d9e1e7] bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]"
              >
                {/* Image */}
                <div className="relative h-[170px] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#e9eef2] to-[#dcecf7]">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    priority={index < 4}
                    className="object-cover"
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      25vw
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="m-0 pb-2 font-['Inter'] text-base font-bold leading-6 text-[#103653]">
                      {topic.title}
                    </h3>

                    <p className="m-0 max-w-[240px] pb-5 font-['Inter'] text-xs font-normal leading-5 text-[#636f78]">
                      {topic.description}
                    </p>
                  </div>

                  {/* Browse */}
                  <button
                    type="button"
                    className="w-fit border-0 bg-transparent p-0 font-['Inter'] text-xs font-bold leading-5 text-[#0099e5] transition-opacity duration-200 hover:opacity-70"
                  >
                    Browse →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex w-full flex-col items-center">
          <p className="m-0 text-center font-['Inter'] text-[10px] font-normal leading-5 text-[#8b9ba8] sm:text-xs">
            Illustrative topic cards for this design template — rendered only
            from the approved Help Taxonomy Registry in production.
          </p>
        </div>
      </div>
    </section>
  );
}