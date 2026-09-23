"use client";

import React from "react";
import Link from "next/link";

export default function ReadyToGoFurther() {
  return (
    <>
      <section className="w-full bg-[#0A3856] px-14 py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-3.5 px-24">
          {/* Eyebrow */}
          <div className="flex h-5 items-center justify-center gap-1.5">
            <div className="flex h-5 flex-col items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#8FD3F4]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#8FD3F4]">
              Ready to go further?
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-[640px] max-w-full flex-col items-center justify-start">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-white">
              See the full workflow in a product tour.
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-wrap items-start justify-center gap-3.5 pt-3">
            <Link
              href="#workflow"
              className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3FA9E0] to-[#0E75B5] px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity hover:opacity-90"
            >
              <span className="text-center font-['Inter'] text-sm font-bold leading-6 text-white">
                See the workflow
              </span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 transition-colors hover:bg-white/10"
            >
              <span className="text-center font-['Inter'] text-sm font-bold leading-6 text-white">
                Book a demo
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* White space below CTA */}
      <div className="h-3 w-full bg-white" />
    </>
  );
}