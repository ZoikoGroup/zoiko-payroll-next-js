import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Payroll processing",
    description:
      "See how deductions and adjustments flow into a payroll cycle.",
    link: "Explore Payroll Processing →",
    image: "/images/deductions-and-adjustments/processing.png",
  },
  {
    title: "Payroll approvals",
    description:
      "Understand how finalization and sign-off integrate where supported.",
    link: "Explore Approvals →",
    image: "/images/deductions-and-adjustments/approvals.png",
  },
  {
    title: "Records and reports",
    description:
      "See how change history surfaces in traceable payroll records.",
    link: "Explore Records and Reports →",
    image: "/images/deductions-and-adjustments/reports.png",
  },
];

export default function RelatedProductPaths() {
  return (
    <section className="w-full bg-color-grey-94-4 py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-7 px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-4">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-xs bg-color-azure-43" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-color-azure-43">
              Related product paths
            </div>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-color-azure-17-4">
              Adjacent workflow depth — without
              <br />
              duplicating those pages.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-color-grey-91-6 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-color-grey-91-7 to-color-azure-85-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card content */}
              <div className="flex min-h-[176px] w-full flex-col justify-between p-5">
                {/* Title */}
                <div className="w-full pb-2">
                  <h3 className="font-['Inter'] text-base font-bold leading-6 text-color-azure-17-4">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="w-full pb-3.5">
                  <p className="font-['Inter'] text-xs font-normal leading-5 text-color-grey-39">
                    {card.description}
                  </p>
                </div>

                {/* Link */}
                <div className="w-full">
                  <span className="font-['Inter'] text-xs font-bold leading-5 text-color-azure-43">
                    {card.link}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}