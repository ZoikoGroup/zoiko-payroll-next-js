import React from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "./Primitives";

const columns = [
  {
    title: "Zoiko Payroll Provides",
    headerClass: "bg-linear-to-r from-blue-600 to-blue-500",
    items: [
      "Learning paths",
      "Sandbox practice",
      "Assessments",
      "Training plans",
      "Learning resources",
    ],
  },
  {
    title: "Customer provides",
    headerClass: "bg-slate-900",
    items: [
      "Learner assignment",
      "Business ownership",
      "Attendance",
      "Role approval",
      "Readiness sign-off",
    ],
  },
] as const;

export default function SharedResponsibilitySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Shared responsibility"
          title={
            <>
              What Zoiko provides. What your
              <br className="hidden sm:block" /> team owns.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className={`px-7 py-5 ${column.headerClass}`}>
                <h3 className="text-base font-semibold text-white">
                  {column.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-4 p-7">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-blue-600"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
