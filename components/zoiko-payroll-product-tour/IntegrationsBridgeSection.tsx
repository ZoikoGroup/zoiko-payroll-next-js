import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface ConnectorStatus {
  title: string;
  badge: string;
  badgeType: "success" | "warning";
}

const connectors: ConnectorStatus[] = [
  {
    title: "HR System Connector",
    badge: "Connected",
    badgeType: "success",
  },
  {
    title: "Time System Connector",
    badge: "Requires setup",
    badgeType: "warning",
  },
  {
    title: "Finance System Connector",
    badge: "Connected",
    badgeType: "success",
  },
];

export default function IntegrationsBridgeSection() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Split Hero */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Text */}
          <Reveal>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
                / INTEGRATIONS BRIDGE
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px] lg:leading-[1.2]">
                See where approved systems connect to the payroll workflow.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Representative connection states for HR, time, finance, identity and payment-related systems — only where the current product supports them.
              </p>
              <div className="mt-7">
                <Link
                  href="/integrations"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white px-5 py-2.5 text-sm font-semibold text-[#082F49] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:text-[#0A78C2] active:translate-y-0"
                >
                  Explore Integrations
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
              <img
                src="/images/Zoiko-Payroll-Product-Tour/ppt2.png"
                alt="Approved team members collaborating on payroll integrations"
                className="h-[280px] w-full object-cover sm:h-[340px] scale-[1.12]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* 3 Status Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {connectors.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 60}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-xs transition-all duration-200 hover:shadow-md">
                <h3 className="text-sm font-bold text-[#082F49]">
                  {c.title}
                </h3>
                <div className="mt-2.5">
                  <span
                    className={`inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${
                      c.badgeType === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-amber-200 bg-amber-50 text-amber-700"
                    }`}
                  >
                    {c.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={180}>
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Representative states shown for this tour. See the dedicated Integrations page for the verified provider catalog.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
