"use client";

import React from "react";
import {
  CreditCard,
  Shield,
  CircleHelp,
  LockKeyhole,
  Search,
  Mail,
 Info,

} from "lucide-react";

const categories = [
  {
    title: "Operator & corporate",
    description: "Legal entity and operator disclosures.",
    icon: CreditCard,
  },
  {
    title: "Intellectual property",
    description: "Trademark and copyright notices.",
    icon: Shield,
  },
  {
    title: "Third-party & open-source",
    description: "Attribution and license notices.",
    icon: CircleHelp,
  },
  {
    title: "Product & service",
    description: "Availability and illustrative-content notices.",
    icon: LockKeyhole,
  },
  {
    title: "Regional & jurisdictional",
    description: "Approved scope-specific disclosures.",
    icon: Search,
  },
  {
    title: "Electronic notices",
    description: "Formal delivery and communication notices.",
    icon: Mail,
  },
  {
    title: "Other approved notices",
    description: (
      <>
        No public notice is currently published in
        <br className="hidden sm:block" />
        this category.
      </>
    ),
    icon: Info,

  },
];

const CategoryNavigator = () => {
  return (
    <section className="w-full bg-[#F4F8FB]">
      <div
        className="
          w-full
          max-w-[1320px]
          mx-auto
          px-5
          sm:px-8
          md:px-12
          lg:px-24
          py-14
          sm:py-16
          lg:py-20
          flex
          flex-col
          items-center
          gap-7
        "
      >
        {/* Header */}
        <div className="w-full max-w-[680px] flex flex-col items-start gap-4">
          
          {/* Category Navigator Label */}
          <div className="w-full flex justify-center items-center gap-1.5">
            <div className="h-5 py-[3px] flex flex-col justify-center items-center">
              <div className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs" />
            </div>

            <div
              className="
                text-center
                text-[#0A8FD0]
                text-xs
                font-bold
                font-['Inter']
                uppercase
                leading-5
                tracking-wider
              "
            >
              Category navigator
            </div>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h2
              className="
                text-center
                text-[#0A2E4B]
                text-2xl
                sm:text-3xl
                font-extrabold
                font-['Inter']
                leading-9
                sm:leading-10
              "
            >
              Find the relevant notice without scanning a
              <br className="hidden sm:block" />
              legal wall.
            </h2>
          </div>
        </div>

        {/* Category Cards */}
        <div
          className="
            w-full
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  w-full
                  min-h-[176px]
                  p-4
                  bg-white
                  rounded-xl
                  border
                  border-[#DCE6ED]
                  flex
                  flex-col
                  items-center
                  justify-start
                  gap-[5px]
                "
              >
                {/* Icon container */}
                <div
                  className="
                    w-9
                    h-9
                    shrink-0
                    bg-[#E5F1F9]
                    rounded-lg
                    flex
                    justify-center
                    items-center
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#0A8FD0]"
                  />
                </div>

                {/* Title */}
                <div className="w-full pt-1.5 flex flex-col items-center">
                  <div
                    className="
                      text-center
                      text-[#0A2E4B]
                      text-xs
                      font-bold
                      font-['Inter']
                      leading-5
                    "
                  >
                    {category.title}
                  </div>
                </div>

                {/* Description */}
                <div className="w-full flex flex-col items-center">
                  <div
                    className="
                      text-center
                      text-[#8295A4]
                      text-xs
                      font-normal
                      font-['Inter']
                      leading-4
                    "
                  >
                    {category.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigator;