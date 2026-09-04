import Reveal from "../ui/Reveal";

const paths = [
  {
    label: "Path A",
    title: "Use Zoiko Payroll independently.",
    description: (
      <>
        Current payroll use, product controls, support and operational truth remain
        <br />
        payroll-specific — no suite required.
      </>
    ),
    tags: ["No Zoiko One required", "Standalone support"],
    highlight: false,
  },
  {
    label: "Path B",
    title: "Evaluate Zoiko One.",
    description: (
      <>
        Move into relationship, authority, access, data, workflow and evaluation detail —
        <br />
        a decision, not a default.
      </>
    ),
    tags: ["Approved connections only", "Evidence-backed"],
    highlight: true,
  },
];

export default function DirectAnswerSection() {
  return (
    <section className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[1220px]">
            {/* Eyebrow */}
            <div>
              <span className="text-xs font-bold uppercase leading-4 tracking-wider text-sky-600">
                / Direct answer
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-9 text-sky-950">
              What is Zoiko One?
            </h2>
            <p className="mt-5 max-w-[640px] text-base leading-6 text-gray-600">
              Zoiko One is the approved, selected connected-suite relationship
              between Zoiko Payroll and other Zoiko products, enabled only where
              explicitly configured for your organization.
            </p>

            {/* Path cards */}
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {paths.map((path) => (
                <div
                  key={path.label}
                  className={`flex flex-col gap-1.5 rounded-2xl p-6 outline outline-offset-[-2px] ${
                    path.highlight
                      ? "bg-[#F8FCFFB8] outline-[3px] outline-[#4FA3D1]"
                      : "bg-[#F8FCFFB8] outline-2 outline-slate-200"
                  }`}
                >
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-600">
                    {path.label}
                  </span>
                  <h3 className="pb-[0.69px] text-lg font-bold leading-6 text-sky-950">
                    {path.title}
                  </h3>
                  <div className="text-sm font-normal text-gray-600 leading-5">
                    {path.description}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 pb-2.5">
                    {path.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] bg-sky-100 px-2.5 pt-1 pb-1.5 text-xs font-bold leading-4 text-sky-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}