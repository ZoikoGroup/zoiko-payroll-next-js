import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const controls = [
  { title: "Role-based access", detail: "Scoped to purpose only." },
  { title: "Data minimization", detail: "Only what purpose requires." },
  { title: "Purpose-bound detail", detail: "Masking and progressive reveal." },
  { title: "Scoped exports", detail: "Permission and purpose retained." },
  { title: "Audit evidence", detail: "Every change, mapping and approval." },
  { title: "Least privilege", detail: "Encryption and logging by default." },
];

const handoffs = [
  { route: "HR → Payroll", detail: "Authorized changes and context." },
  { route: "Payroll → HR", detail: "Needs-context requests and status." },
  { route: "Payroll → Employee", detail: "Current record and correction route." },
  { route: "HR/Payroll → Finance", detail: "Approved outcome only." },
];

export default function SecuritySection() {
  return (
    <section className="bg-[#0E2A42] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Security, privacy & handoffs"
            title="Governance built into every handoff."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <div
                key={control.title}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black leading-5 text-sky-300" aria-hidden="true">
                    ✓
                  </span>
                  <h3 className="text-sm font-bold leading-5 text-white">{control.title}</h3>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-300">{control.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {handoffs.map((handoff) => (
              <div key={handoff.route}>
                <p className="text-xs font-bold leading-5 text-white">{handoff.route}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{handoff.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
