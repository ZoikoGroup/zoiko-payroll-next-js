import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const featuredGuides = [
  {
    type: "Checklist",
    picture: "/12.png",
    title: "Payroll Operations Checklist: From Inputs\nto Close",
    description:
      "A self-review checklist structuring the full cycle from\ninput readiness to close — with no compliance scoring.",
    scope: "General operations",
    reviewed: "Jul 2026",
    handoff: "Product workflow details: Product Documentation",
  },
  {
    type: "Guide",
    picture: "/13.png",
    title: "Designing Payroll Review and Approval Controls",
    description:
      "How to structure separation of duties, material-change\nreview and sign-off evidence in a payroll operating\nmodel.",
    scope: "Payroll leader",
    reviewed: "Jun 2026",
    handoff: "Current approval behavior: Payroll Approvals",
  },
  {
    type: "Guide",
    picture: "/13.png",
    title: "Payroll Reporting and Reconciliation Guide",
    description:
      "General concepts for structuring post-run\nreconciliation, variance review and recurring reporting\nquestions.",
    scope: "Finance / controller",
    reviewed: "Aug 2026",
    handoff: "Current reports/exports: Reporting / Product Documentation",
  },
];

export default function FeaturedGuidesSection() {
  return (
    <section className="bg-[#F4F8FB] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Featured payroll guides</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            A small, current editorial set — not a popularity<br />ranking.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredGuides.map((guide, i) => (
            <Reveal key={guide.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-extrabold font-jakarta uppercase tracking-wide ${
                      guide.type === "Checklist"
                        ? "bg-[#E1EEF9] text-[#0A2E4B]"
                        : "bg-[#E1EEF9] text-[#0A2E4B]"
                    }`}
                  >
                    {guide.type}
                  </span>
                  <span className="rounded-[20px] bg-[#E1E8F0] px-3 py-1 text-xs font-bold font-jakarta text-[#4E6172]">
                    Current
                  </span>
                </div>

                <div className="mt-4 h-[110px] rounded-[10px] bg-[#E1EEF9] overflow-hidden">
                  {guide.picture ? (
                    <img src={guide.picture} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>

                <h3 className="mt-5 text-base font-bold font-jakarta text-[#0A2E4B] leading-5" style={{ whiteSpace: "pre-line" }}>
                  {guide.title}
                </h3>
                <p className="mt-2.5 text-xs font-jakarta text-[#4E6172] leading-5 flex-1" style={{ whiteSpace: "pre-line" }}>
                  {guide.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-xs font-jakarta text-[#959595] leading-4">
                  <span>{guide.scope}</span>
                  <span>·</span>
                  <span>Reviewed {guide.reviewed}</span>
                </div>

                <div className="mt-4 rounded-md bg-indigo-50 px-3 py-2">
                  <p className="text-xs font-bold font-jakarta text-[#0A2E4B] leading-4">
                    <span className="text-[#0A8FD0]">→</span> {guide.handoff}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-4 text-xs font-bold font-jakarta text-[#0A8FD0] leading-5 hover:underline"
                >
                  Read the guide →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs font-jakarta text-[#959595] leading-4">
          Synthetic editorial examples shown for design purposes — not yet publication-approved.
        </p>
      </div>
    </section>
  );
}