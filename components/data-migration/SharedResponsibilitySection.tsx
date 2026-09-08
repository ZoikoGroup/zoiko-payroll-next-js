import React from "react";
import { Check } from "lucide-react";
import { SectionHeading, Card } from "./Primitives";

const groups = [
  {
    title: "Customer responsibilities",
    items: [
      "Source data",
      "Validation review",
      "Business approval",
      "Data ownership",
    ],
  },
  {
    title: "Zoiko responsibilities",
    items: [
      "Mapping",
      "Migration pipeline",
      "Security",
      "Validation support",
      "Reconciliation",
    ],
  },
] as const;

export default function SharedResponsibilitySection() {
  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-11">
        <SectionHeading
          eyebrow="Shared responsibility"
          title="Clear ownership on both sides"
        />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.title} className="flex flex-col gap-5 p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
