import Reveal from "../ui/Reveal";

const stats = [
  { value: "128", label: "Ready changes" },
  { value: "14", label: "Needs payroll review" },
  { value: "6", label: "Records pending publication" },
  { value: "3", label: "Integration exceptions" },
];

export default function StatsBandSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-0 sm:px-6 ${
                  index < stats.length - 1 ? "lg:border-r lg:border-slate-200" : ""
                }`}
              >
                <p className="text-3xl font-bold leading-10 text-sky-950">{stat.value}</p>
                <p className="text-xs leading-5 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
