import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const collections = [
  {
    title: "Payroll Operations Fundamentals",
    description: "Operating model, roles, calendar/cutoff concepts, cycle governance.",
    handoff: "Owned by Payroll Guides",
    image: "/z1.png",
  },
  {
    title: "Processing and Validation",
    description: "Inputs, validations, exceptions, review questions.",
    handoff: "Payroll Guides + product handoffs",
    image: "/z2.png",
  },
  {
    title: "Approvals and Controls",
    description: "Decision rights, SoD, material-change review, evidence.",
    handoff: "Payroll Guides + Payroll Approvals",
    image: "/z3.png",
  },
  {
    title: "Deductions, Adjustments and Corrections",
    description: "Process governance and review considerations, not local legal conclusions.",
    handoff: "Payroll Guides + local/product handoffs",
    image: "/z4.png",
  },
  {
    title: "Payroll Records and Evidence",
    description: "Record ownership, evidence quality, retrieval and privacy questions.",
    handoff: "Payroll Guides + Security/Trust/Product",
    image: "/z5.png",
  },
  {
    title: "Reporting and Reconciliation",
    description: "Variance/reconciliation concepts, defined metrics, operating close.",
    handoff: "Payroll Guides + Reporting handoff",
    image: "/z6.png",
  },
  {
    title: "Implementation and Change",
    description: "Discovery, migration-readiness, testing, cutover/governance questions.",
    handoff: "Payroll Guides + Implementation handoff",
    image: "/z7.png",
  },
  {
    title: "Growing and Global Payroll",
    description: "Scaling questions; specialized cross-border material stays in Global Payroll.",
    handoff: "Introductory guides + Global Payroll Resources",
    image: "/z8.png",
  },
];

export default function GuideCollectionsSection() {
  return (
    <section className="bg-indigo-50 border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Guide collections</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            Stable thematic collections — never empty<br />SEO archives.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, i) => (
            <Reveal key={collection.title} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <div className="h-[88px] w-full rounded-lg bg-[#E1EEF9] overflow-hidden">
                  <img src={collection.image} alt={collection.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                  {collection.title}
                </h3>
                <p className="mt-2 text-xs font-jakarta text-[#4E6172] leading-4 flex-1">
                  {collection.description}
                </p>
                <div className="mt-4 border-t border-slate-200 pt-3">
                  <p className="text-xs font-jakarta text-[#959595] leading-4">
                    {collection.handoff}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}