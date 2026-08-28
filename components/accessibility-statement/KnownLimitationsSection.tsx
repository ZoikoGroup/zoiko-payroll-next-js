"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Limitation {
  title: string;
  status: "In progress" | "Planned";
  impact: string;
  alternative: string;
}

const limitations: Limitation[] = [
  {
    title:
      "Legacy exported payslip PDFs (pre-Jan 2026) may have incomplete reading order",
    status: "In progress",
    impact:
      "Screen reader users may hear payslip figures announced out of sequence, or without a clear association between a label and its amount.",
    alternative:
      "Request the same payslip as an accessible HTML or tagged PDF export through the feedback form below, or by emailing accessibility@zoikopayroll.com. Payslips generated from Jan 2026 onward are produced with a corrected reading order.",
  },
  {
    title:
      "Some data-table filters are not fully operable with voice control software",
    status: "In progress",
    impact:
      "Voice control users may be unable to open or clear certain column filters by voice command, because those controls do not expose a matching visible name.",
    alternative:
      "The same filtering is available through keyboard operation and through saved views. Contact us and we can apply a saved view to your account while the control is being corrected.",
  },
  {
    title:
      "Marketing website video content does not yet have synchronized captions on all videos",
    status: "Planned",
    impact:
      "Some older marketing videos have no synchronized captions, so audio-only information in those videos is not available to everyone.",
    alternative:
      "A text transcript is available on request for any marketing video. Captions are being added across the remaining library; product walkthroughs inside the console are captioned.",
  },
];

const statusStyles: Record<Limitation["status"], string> = {
  "In progress": "bg-orange-100 text-yellow-800",
  Planned: "bg-blue-50 text-sky-700",
};

export default function KnownLimitationsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="limitations"
      aria-labelledby="limitations-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[904px] px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h2
            id="limitations-heading"
            className="text-xl font-bold leading-7 text-sky-950"
          >
            Known limitations &amp; accessible alternatives
          </h2>
          <Link
            href="#feedback"
            className="text-sm font-bold leading-5 text-sky-700 hover:text-sky-900"
          >
            Request an accessible alternative →
          </Link>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          We document known barriers honestly rather than collapsing this list
          to look more complete than it is.
        </p>

        <ul className="mt-6 space-y-3">
          {limitations.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `limitation-panel-${index}`;
            const buttonId = `limitation-button-${index}`;

            return (
              <li
                key={item.title}
                className="overflow-hidden rounded-[10px] border border-slate-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sky-700"
                  >
                    {/* Title and status pill share a wrapping row so the pill
                        drops below the title on narrow screens. */}
                    <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-sm font-bold leading-5 text-sky-950">
                        {item.title}
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold leading-4 ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-base leading-6 text-slate-500"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-slate-200 px-4 py-4"
                  >
                    <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                      What you may experience
                    </p>
                    <p className="mt-1.5 text-sm leading-5 text-gray-600">
                      {item.impact}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                      Accessible alternative
                    </p>
                    <p className="mt-1.5 text-sm leading-5 text-gray-600">
                      {item.alternative}
                    </p>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <Link
          href="#feedback"
          className="mt-6 inline-block text-sm font-bold leading-5 text-sky-700 hover:text-sky-900"
        >
          Request an accessible alternative →
        </Link>
      </div>
    </section>
  );
}
