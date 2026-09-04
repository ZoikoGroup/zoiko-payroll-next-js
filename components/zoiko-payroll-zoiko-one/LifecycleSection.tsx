import Reveal from "../ui/Reveal";

const steps = [
  { num: "01", title: "Purpose", desc: "Why a connection is proposed." },
  { num: "02", title: "Authority", desc: "Which domain owner approves it." },
  { num: "03", title: "Mapping", desc: "What data/fields are in scope." },
  { num: "04", title: "Validation", desc: "Tested before enablement." },
  { num: "05", title: "Enablement", desc: "Turned on for your account." },
  { num: "06", title: "Monitoring", desc: "Health tracked continuously." },
  { num: "07", title: "Reconciliation", desc: "Outcomes verified, not assumed." },
  { num: "08", title: "Change control", desc: "Changes go through the same gate." },
];

export default function LifecycleSection() {
  return (
    <section className="w-full relative py-20">
      <img
        src="/se1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-28">
        <Reveal>
          <div className="mx-auto max-w-[1220px]">
            {/* Eyebrow */}
            <div className="flex items-center">
              <span className="text-xs font-bold uppercase leading-4 tracking-wider text-[#1483C7]">
                / How approved connections work
              </span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold leading-9 text-white">
              The Company-level lifecycle — not the implementation manual.
            </h2>
        <p className="mt-2.5 max-w-[640px] text-base leading-6 text-[#A9A9A9]">
  Every connection shown here is backed by an active, approved capability/relationship record. Field mappings, permissions
  <br />
  and failure handling live in Product &gt; Zoiko One Integration.
</p>

            {/* Steps grid - row 1 */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {steps.slice(0, 4).map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col gap-1 rounded-xl bg-[#FFFFFF26] p-3.5 border border-[#E2E9F1] shadow-sm"
                >
                  <span className="text-xs font-bold leading-4 text-[#4FA3D1]">
                    {step.num}
                  </span>
                  <p className="text-xs font-extrabold leading-5 text-white">
                    {step.title}
                  </p>
                  <p className="text-xs font-normal leading-4 text-gray-400">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Steps grid - row 2 */}
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {steps.slice(4, 8).map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col gap-1 rounded-xl bg-[#FFFFFF26] p-3.5 border border-[#E2E9F1] shadow-sm"
                >
                  <span className="text-xs font-bold leading-4 text-[#4FA3D1]">
                    {step.num}
                  </span>
                  <p className="text-xs font-extrabold leading-5 text-white">
                    {step.title}
                  </p>
                  <p className="text-xs font-normal leading-4 text-gray-400">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}