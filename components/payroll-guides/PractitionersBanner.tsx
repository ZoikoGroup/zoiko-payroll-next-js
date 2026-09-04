import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { value: "8", label: "Topic collections" },
  { value: "6", label: "Roles routed" },
  { value: "0", label: "Hidden compliance scores" },
];

export default function PractitionersBanner() {
  return (
    <section className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] bg-[#0A8FD0] p-10">
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <img src="/gra.png" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="relative">
              <Eyebrow tone="light" className="text-blue-300">
                Built by practitioners, reviewed on a cadence
              </Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-white leading-9">
                Every guide carries a reviewed date —<br />not a one-time publish and forget.
              </h2>
              <p className="mt-4 max-w-[549px] text-base font-jakarta text-[#C3D7E6] leading-6">
                Payroll Guides is maintained as a living library. Content owners are named, review
                cycles are scheduled, and corrections are versioned rather than silently edited.
              </p>

              <div className="mt-10 flex flex-wrap gap-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold font-jakarta text-blue-300 leading-10">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-jakarta text-[#B9CDDD] leading-4">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}