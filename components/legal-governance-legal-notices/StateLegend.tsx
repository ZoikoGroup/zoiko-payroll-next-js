"use client";

import React from "react";

const states = [
  {
    dot: "bg-[#4F8065]",
    label: "Active current",
  },
  {
    dot: "bg-[#1598D4]",
    label: "Approved scheduled",
  },
  {
    dot: "bg-[#9A7628]",
    label: "Corrected",
  },
  {
    dot: "bg-[#8796A5]",
    label: "Superseded",
  },
  {
    dot: "bg-[#A96863]",
    label: "Withdrawn",
  },
  {
    dot: "bg-[#64727D]",
    label: "Archived / source stale",
  },
];

export default function StateLegend() {
  return (
    <section className="w-full bg-[#F1F7FC]">
      <div
        className="
          w-full
          max-w-[1320px]
          mx-auto
          px-5
          sm:px-8
          md:px-12
          lg:px-24
          py-12
          sm:py-16
          lg:py-20
          flex
          flex-col
          items-center
          gap-4
        "
      >
        {/* Heading */}
        <div className="w-full max-w-[680px] flex flex-col items-center gap-4">
          
          {/* Section Label */}
          <div className="inline-flex justify-center items-center gap-1.5">
            <div className="h-5 py-[3px] flex flex-col justify-center items-center">
              <div className="w-1.5 h-3.5 bg-[#1598D4] rounded-xs" />
            </div>

            <div
              className="
                text-center
                text-[#1598D4]
                text-xs
                font-bold
                font-['Inter']
                uppercase
                leading-5
                tracking-wider
              "
            >
              Notice state legend
            </div>
          </div>

          {/* Title */}
          <div className="w-full flex flex-col items-center">
            <h2
              className="
                text-center
                text-[#0A2E4B]
                text-2xl
                sm:text-3xl
                font-extrabold
                font-['Inter']
                leading-8
                sm:leading-10
              "
            >
              Current, superseded, corrected and stale
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              are never blended.
            </h2>
          </div>
        </div>

        {/* State Legend */}
        <div
          className="
            w-full
            pt-3
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-2
          "
        >
          {states.map((state) => (
            <div
              key={state.label}
              className="
                w-full
                min-h-11
                px-3.5
                py-3
                bg-white
                rounded-[10px]
                border
                border-[#DDE7EF]
                flex
                items-center
                gap-2.5
              "
            >
              {/* Status Dot */}
              <div
                className={`
                  shrink-0
                  size-2.5
                  rounded-full
                  ${state.dot}
                `}
              />

              {/* State Text */}
              <div className="flex flex-col items-start">
                <div
                  className="
                    text-[#0A2E4B]
                    text-xs
                    font-bold
                    font-['Inter']
                    leading-5
                  "
                >
                  {state.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="w-full flex flex-col items-center mt-1">
          <p
            className="
              max-w-[900px]
              text-center
              text-[#718496]
              text-xs
              font-normal
              font-['Inter']
              leading-5
            "
          >
            A draft-internal record is never public and never indexed.
            Superseded and corrected records always link to their current
            replacement.
          </p>
        </div>
      </div>
    </section>
  );
}