import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill, { type AvailabilityState } from "./StatusPill";

const states: { state: AvailabilityState; label: string; detail: string }[] = [
  {
    state: "available",
    label: "Available",
    detail: "Current, verified service in this market.",
  },
  {
    state: "limited",
    label: "Limited availability",
    detail: "Scoped service — limitations shown before conversion.",
  },
  {
    state: "partner",
    label: "Partner-supported",
    detail: "Delivered through an approved partner arrangement.",
  },
  {
    state: "planned",
    label: "Planned",
    detail: "Not current service — never shown as available today.",
  },
  {
    state: "unavailable",
    label: "Unavailable",
    detail: "No current service in this market.",
  },
  {
    state: "review",
    label: "Needs review",
    detail: "Evidence stale or conflicting — no positive claim shown.",
  },
  {
    state: "na",
    label: "Not applicable",
    detail: "Outside current directory scope or jurisdiction type.",
  },
];

export default function AvailabilityLegendSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Availability state legend</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
            Availability, evidence freshness and future state stay separate contracts.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((item) => (
              <li
                key={item.state}
                className="rounded-[10px] border border-slate-200 bg-white px-4 py-4"
              >
                <StatusPill state={item.state} label={item.label} />
                <p className="mt-3 text-xs leading-5 text-slate-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
