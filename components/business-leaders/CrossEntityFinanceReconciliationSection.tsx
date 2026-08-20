const stats = [
  { value: "17", label: "Legal entities", color: "text-white" },
  { value: "9", label: "Markets", color: "text-white" },
  { value: "1", label: "Reconciliation gap", color: "text-[#F2B866]" },
  { value: "USD", label: "Reporting currency", color: "text-white" },
];

export default function CrossEntityFinanceReconciliationSection() {
  return (
    <section className="relative overflow-hidden bg-[#082F49] py-20 sm:py-28">
      <img
        src="/images/business-leaders/cross-entity-finance-reconciliation.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #082F49 0%, rgba(11,31,63,0.88) 60%, rgba(8,47,73,0.94) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[#8FB4FF] uppercase">
            Cross-Entity &amp; Finance / Reconciliation
          </p>
          <h2 className="mt-2.5 text-[1.4rem] leading-[1.2] font-extrabold tracking-tight text-white lg:text-[22.5px]">
            Group visibility is not group authority.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-white/72">
            A structured Group → Region → Entity hierarchy — never a
            decorative map or a global compliance score.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[14px] border border-white/20 bg-white/8 px-[22px] pt-[21px] pb-[22px] text-center"
            >
              <p className={`text-[24px] font-extrabold ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-[12px] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
