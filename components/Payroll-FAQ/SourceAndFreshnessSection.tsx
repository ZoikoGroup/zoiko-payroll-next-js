import React from 'react';

interface StatusBadge {
  label: string;
  description: string;
  badgeBg: string;
  badgeTextColor: string;
}

interface HandoffCard {
  title: string;
  description: string;
  linkText?: string;
}

const statusBadges: StatusBadge[] = [
  {
    label: "Current",
    description: "Reviewed and accurate as published",
    badgeBg: "bg-gray-200",
    badgeTextColor: "text-gray-600",
  },
  {
    label: "Under review",
    description: "Flagged after a linked source changed",
    badgeBg: "bg-orange-100",
    badgeTextColor: "text-yellow-700",
  },
  {
    label: "Withheld",
    description: "Removed from display until corrected",
    badgeBg: "bg-rose-200",
    badgeTextColor: "text-pink-800",
  },
];

const handoffCards: HandoffCard[] = [
  {
    title: "Authority link",
    description: "Current detail lives elsewhere → View current Product Documentation.",
  },
  {
    title: "Live-state handoff",
    description: "Answer cannot own live status → Check System Status.",
  },
  {
    title: "Jurisdiction handoff",
    description: "Local rules/coverage matter → Choose a jurisdiction.",
  },
  {
    title: "Commercial handoff",
    description: "Current price/contract detail needed → View Pricing / Talk to Sales.",
  },
  {
    title: "Support handoff",
    description: "Existing-customer problem → Go to Help Center.",
  },
  {
    title: "Learning handoff",
    description: "Needs procedural depth → Read the Payroll Guide.",
  },
  {
    title: "Definition handoff",
    description: "Term confusion → Open Payroll Glossary.",
  },
  {
    title: "Change handoff",
    description: "Current release/history → Review Release Notes.",
  },
];

export const SourceAndFreshnessSection: React.FC = () => {
  return (
    <section className="w-full bg-indigo-50/60 border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Source &amp; freshness
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            How answers are reviewed, corrected and<br className="hidden sm:inline" />
            scoped.
          </h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            A stale or superseded answer never silently remains &quot;Current.&quot; Every FAQ record carries the same visible states.
          </p>
        </div>

        {/* Status Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statusBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-3.5 flex items-center space-x-3 shadow-xs"
            >
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${badge.badgeBg} ${badge.badgeTextColor}`}
              >
                {badge.label}
              </span>
              <span className="text-sky-950 text-xs leading-snug">
                {badge.description}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="bg-sky-100/80 rounded-xl border-l-4 border-l-sky-600 border-y border-r border-sky-200 p-5">
          <p className="text-sky-950 text-sm leading-relaxed">
            <strong className="font-bold">Answers are approved, not generated.</strong>{' '}
            <span className="font-normal text-sky-950/90">
              Public answer text comes from editorially reviewed FAQ records. Search retrieves and ranks approved records — it never invents an answer.
            </span>
          </p>
        </div>

        {/* Handoff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {handoffCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-4 space-y-2 shadow-xs transition-shadow hover:shadow-md"
            >
              <h3 className="text-sky-600 text-xs font-extrabold uppercase tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
