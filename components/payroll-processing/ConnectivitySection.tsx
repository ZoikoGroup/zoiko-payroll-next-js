import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const categories = [
  {
    initials: "HR",
    initialsClass: "bg-blue-600 text-white",
    name: "HRIS / HCM",
    status: "Inbound · Connected",
  },
  {
    initials: "FN",
    initialsClass: "bg-violet-600 text-white",
    name: "Finance / ERP",
    status: "Outbound · Needs attention",
  },
  {
    initials: "TA",
    initialsClass: "bg-green-600 text-white",
    name: "Time & attendance",
    status: "Inbound · Connected",
  },
  {
    initials: "ID",
    initialsClass: "bg-slate-900 text-white",
    name: "Identity",
    status: "Bidirectional · Connected",
  },
];

export default function ConnectivitySection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          eyebrow={"Exports · Reconciliation · Integrations"}
          title="Downstream connectivity, with direction and status visible."
          media={{
            src: "/images/payroll-processing/connectivity.png",
            alt: "Team collaborating around connected systems and screens",
            label: "Categories connected",
            value: "4",
          }}
        />

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${category.initialsClass}`}
                    aria-hidden="true"
                  >
                    {category.initials}
                  </span>
                  <span className="text-sm font-bold leading-5 text-slate-900">{category.name}</span>
                </div>
                <p className="mt-3.5 font-mono text-xs leading-4 text-slate-500">{category.status}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
