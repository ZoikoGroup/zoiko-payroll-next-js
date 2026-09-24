"use client";

import React from "react";
import {
  Mail,
  CircleHelp,
  Shield,
  BriefcaseBusiness,
  MessageSquare,
} from "lucide-react";

const contactRoutes = [
  {
    title: "Sales",
    description: "Evaluate Zoiko Payroll or book a demo",
    icon: Mail,
  },
  {
    title: "Support",
    description: "Product or account help",
    icon: CircleHelp,
  },
  {
    title: "Privacy",
    description: "Personal-data and privacy-rights requests",
    icon: Shield,
  },
  {
    title: "Press",
    description: "Media and press inquiries",
    icon: BriefcaseBusiness,
  },
  {
    title: "General",
    description: "Questions that don't fit elsewhere",
    icon: MessageSquare,
  },
];

export default function ContactZoikoPayroll() {
  return (
    <section className="w-full bg-[#eef3f7] px-4 py-12 sm:px-6 md:px-10 lg:px-14 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 lg:px-24">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-3">
            {/* Label */}
            <div className="relative h-5 w-full">
              <div className="absolute left-0 top-[3px] h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

              <div className="absolute left-[13px] top-[-0.5px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
                Contact Zoiko Payroll
              </div>
            </div>

            {/* Heading */}
            <div className="w-full pt-[3px]">
              <h1 className="m-0 font-['Inter'] text-3xl font-extrabold leading-9 text-[#103653] sm:text-4xl sm:leading-10">
                Reach the right team.
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-[600px] pt-[3px]">
              <p className="m-0 font-['Inter'] text-sm font-normal leading-6 text-[#636f78] sm:text-base sm:leading-7">
                Choose the reason you&apos;re contacting us and we&apos;ll route
                you to the right Zoiko Payroll team for sales, support,
                privacy, press, or general inquiries.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-wrap items-start gap-3 pt-3.5">
              <button
                type="button"
                className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#0099e5] to-[#006fae] px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
              >
                Book a demo
              </button>

              <button
                type="button"
                className="flex items-center justify-center rounded-lg border border-[#d9e1e7] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-opacity duration-200 hover:opacity-70"
              >
                Choose a contact route
              </button>
            </div>

            {/* Security Note */}
            <div className="w-full max-w-[460px] pt-1">
              <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#7c96aa]">
                Please do not send payroll records, tax IDs, bank details,
                passwords, authentication codes, or other sensitive payroll
                data through a general contact form.
              </p>
            </div>

            {/* Existing Customer */}
            <div className="w-full pt-0.5">
              <p className="m-0 font-['Inter'] text-xs leading-5">
                <span className="font-normal text-[#636f78]">
                  Existing customer?{" "}
                </span>

                <button
                  type="button"
                  className="font-bold text-[#0099e5] transition-opacity duration-200 hover:opacity-70"
                >
                  Go to Help Center →
                </button>
              </p>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="w-full flex-1 rounded-2xl border border-[#d9e1e7] bg-white px-5 py-5 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] lg:max-w-[528px]">
            {/* Card Heading */}
            <div className="w-full pb-[0.59px]">
              <p className="m-0 font-['Inter'] text-xs font-bold uppercase leading-4 tracking-tight text-[#7c96aa]">
                Choose your reason for contact
              </p>
            </div>

            {/* Contact Routes */}
            <div className="mt-5 flex w-full flex-col">
              {contactRoutes.map((route, index) => {
                const Icon = route.icon;

                return (
                  <button
                    key={route.title}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors duration-200 hover:bg-[#f5f9fc] ${
                      index === 0 ? "pt-2.5" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e9f0f8]">
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#0099e5]"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="font-['Inter'] text-xs font-bold leading-5 text-[#103653]">
                        {route.title}
                      </div>

                      <div className="font-['Inter'] text-xs font-normal leading-4 text-[#7c96aa]">
                        {route.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}