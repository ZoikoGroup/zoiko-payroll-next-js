import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const waves = [
  {
    wave: "Wave 1 — DACH",
    jurisdictions: "DE, AT — 2 entities",
    owner: "M. Weber",
    status: { label: "Stabilizing", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
  },
  {
    wave: "Wave 2 — LATAM",
    jurisdictions: "MX, BR — 4 entities",
    owner: "C. Alvarez",
    status: { label: "Awaiting decision", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
  },
  {
    wave: "Wave 3 — Nordics / APAC",
    jurisdictions: "SE, NO, DK, SG, JP",
    owner: "A. Lindqvist",
    status: { label: "In progress · blocked", style: "bg-rose-200 text-pink-800 outline-rose-300" },
  },
];

export default function CutoverWavesSection() {
  return (
    <section className="bg-indigo-50 px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-start gap-6">
            {/* Left: text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 h-5">
                <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                  / Cutover, rollback, stabilization + multi-market waves
                </span>
              </div>
              <h2 className="pt-3.5 text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
                Safe cutover. Accountable recovery.
              </h2>
              <p className="mt-4 max-w-xl text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
                Every cutover runbook defines preconditions, ordered actions,
                stop conditions, freeze windows, activation authority and
                rollback criteria in advance.
              </p>
            </div>

            {/* Right: image card */}
            <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/s1.png"
                  alt="Stabilization & support handoff"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Wave table */}
        <Reveal delay={80} className="mt-4">
          <div className="overflow-hidden rounded-xl bg-white pt-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
            {/* Header */}
            <div className="flex">
              {["Wave", "Jurisdictions / entities", "Owner", "Status"].map(
                (h) => (
                  <div
                    key={h}
                    className={`bg-indigo-50 px-3.5 py-2.5 ${
                      h === "Wave"
                        ? "w-80"
                        : h === "Jurisdictions / entities"
                          ? "w-80"
                          : h === "Owner"
                            ? "w-44"
                            : "w-72"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase text-sky-950">
                      {h}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Rows */}
            {waves.map((w, i) => (
              <div key={w.wave} className={`flex ${i > 0 ? "border-t border-slate-200" : ""}`}>
                <div className="w-80 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{w.wave}</span>
                </div>
                <div className="w-80 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">
                    {w.jurisdictions}
                  </span>
                </div>
                <div className="w-44 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{w.owner}</span>
                </div>
                <div className="w-72 px-3.5 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold outline outline-1 outline-offset-[-1px] ${w.status.style}`}>
                    {w.status.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={100} className="mt-3">
          <p className="text-xs leading-5 text-gray-400">
            Later waves are never auto-approved by earlier wave success — each
            carries its own scope, owner and readiness state.
          </p>
        </Reveal>
      </div>
    </section>
  );
}