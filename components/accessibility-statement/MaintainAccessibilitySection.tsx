import React from "react";
import SectionShell from "./SectionShell";

interface Practice {
  area: string;
  description: string;
}

const practices: Practice[] = [
  {
    area: "Design",
    description:
      "Accessible-by-default components and documented interaction patterns for new product surfaces.",
  },
  {
    area: "Engineering",
    description:
      "Automated accessibility checks in the build pipeline, alongside manual review for complex interactions.",
  },
  {
    area: "Content",
    description:
      "Plain-language, structured content with meaningful headings, labels and alternative text.",
  },
  {
    area: "Testing",
    description:
      "Periodic manual testing with keyboard navigation and screen readers ahead of major releases.",
  },
];

export default function MaintainAccessibilitySection() {
  return (
    <SectionShell id="maintenance" title="How we maintain accessibility">
      <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {practices.map((practice) => (
          <div key={practice.area} className="border-b border-slate-200 py-5">
            <dt className="text-sm font-bold leading-5 text-sky-950">
              {practice.area}
            </dt>
            <dd className="mt-2 text-xs leading-5 text-gray-600">
              {practice.description}
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
