import React from "react";
import Image from "next/image";

const categories = [
  {
    image: "employee-records",
    title: "Employee records",
    description: "Personal, employment and organizational details.",
  },
  {
    image: "payroll-components",
    title: "Payroll components",
    description: "Earnings, deductions and calculation rules.",
  },
  {
    image: "tax-statutory",
    title: "Tax & statutory data",
    description: "Filing details and jurisdiction-specific settings.",
  },
  {
    image: "ytd-balances",
    title: "YTD balances",
    description: "Year-to-date earnings, tax and deduction totals.",
  },
  {
    image: "payroll-history",
    title: "Payroll history",
    description: "Prior pay periods retained for reference or reporting.",
  },
  {
    image: "time-leave",
    title: "Time & leave",
    description: "Attendance, absence and accrual balances.",
  },
  {
    image: "bank-payment",
    title: "Bank & payment data",
    description: "Payment instructions handled under restricted access.",
  },
  {
    image: "documents",
    title: "Documents",
    description: "Payslips, contracts and supporting records.",
  },
] as const;

export default function MigratableDataSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            What data can be migrated
          </h2>
          <p className="text-base leading-8 text-slate-700">
            Each category is profiled and mapped independently, so nothing moves
            without a defined target.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0px_8px_24px_-8px_rgba(15,23,42,0.10)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={`/images/data-migration/${category.image}.png`}
                  alt=""
                  width={229}
                  height={100}
                  className="aspect-[229/100] h-auto w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-1 pb-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
