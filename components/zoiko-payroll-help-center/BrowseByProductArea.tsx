"use client";

import Image from "next/image";
import React from "react";

const productAreas = [
  {
    image: "/images/zoiko-payroll-help-center/image1.png",
    title: "Payroll Workspace",
    description: "Help for the operating center for payroll cycles.",
    linkText: "Browse Payroll Workspace help →",
  },
  {
    image: "/images/zoiko-payroll-help-center/image6.png",
    title: "Records and Reports",
    description: "Help for payslips, statements and reporting.",
    linkText: "Browse Records and Reports help →",
  },
  {
    image: "/images/zoiko-payroll-help-center/image5.png",
    title: "Integrations",
    description: "Help for approved system connections.",
    linkText: "Browse Integrations help →",
  },
];

export default function BrowseByProductArea() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Browse by product area
            </div>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Approved product-support routing —
              <br className="hidden sm:block" />
              scope, not marketing.
            </h2>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productAreas.map((product) => (
            <div
              key={product.title}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#d9e1e7] bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]"
            >
              {/* Image */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#e9eef2] to-[#dcecf7]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[180px] flex-1 flex-col justify-between p-5">
                <div>
                  {/* Title */}
                  <div className="pb-2">
                    <h3 className="m-0 font-['Inter'] text-base font-bold leading-6 text-[#103653]">
                      {product.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="pb-3.5">
                    <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#636f78]">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Browse Link */}
                <div>
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-left font-['Inter'] text-xs font-bold leading-5 text-[#0099e5] transition-opacity duration-200 hover:opacity-70"
                  >
                    {product.linkText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}