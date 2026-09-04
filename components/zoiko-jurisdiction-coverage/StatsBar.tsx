export default function StatsBar() {
  const stats = [
    { value: "11", label: "Available today" },
    { value: "2", label: "Limited availability" },
    { value: "1", label: "Partner-supported" },
    { value: "Aug 18, 2026", label: "Registry last refreshed" },
  ];

  return (
    <div className="w-full border-t border-white/10 bg-sky-950 px-8">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between py-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <div className="text-2xl font-extrabold leading-9 text-white">
              {stat.value}
            </div>
            <div className="text-xs leading-4 text-slate-400">{stat.label}</div>
          </div>
        ))}
        <div className="border-b border-white/30 pb-0.5">
          <span className="text-sm font-bold leading-5 text-blue-200">
            Explore the coverage workspace →
          </span>
        </div>
      </div>

    </div>
  );
}
