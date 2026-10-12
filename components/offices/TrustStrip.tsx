import React from "react";
import Link from "next/link";
import { Check, Clock, Accessibility, Map } from "lucide-react";

const assurances = [
  {
    icon: Check,
    title: "Verified directory",
    description: "Every listing resolves from an approved office record.",
  },
  {
    icon: Clock,
    title: "Reviewed regularly",
    description: "Currentness metadata shown only when governed.",
  },
  {
    icon: Accessibility,
    title: "Accessibility, when verified",
    description: "Shown only where confirmed office data exists.",
  },
  {
    icon: Map,
    title: "Map is a convenience layer",
    description: "The registry — not the map — is the source of truth.",
  },
] as const;

export default function TrustStrip() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-6 text-center"
            >
              <Icon className="h-5 w-5 text-[#0F172A]" strokeWidth={2} />
              <h3 className="text-sm font-bold text-[#0F172A]">{title}</h3>
              <p className="text-xs leading-5 text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>

        <Link
          href="#office-results"
          className="text-sm font-bold text-[#0A78C3] hover:text-[#08608F]"
        >
          View all locations →
        </Link>
      </div>
    </section>
  );
}
