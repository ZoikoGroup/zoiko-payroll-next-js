import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function SecurityTrustBridgeSection() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Content */}
          <Reveal>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
                / SECURITY & TRUST BRIDGE
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px] lg:leading-[1.2]">
                Evaluate payroll workflows with security and trust in view.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                This Product Tour uses synthetic data throughout. For verified access, audit, privacy and assurance information, see the dedicated Security and Trust destination.
              </p>
              <div className="mt-7">
                <Link
                  href="/trust-security"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white px-5 py-2.5 text-sm font-semibold text-[#082F49] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A78C2] hover:text-[#0A78C2] active:translate-y-0"
                >
                  Explore Security and Trust
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
              <img
                src="/images/Zoiko-Payroll-Product-Tour/ppt3.png"
                alt="Security and Trust verification on payroll dashboard"
                className="h-[280px] w-full object-cover sm:h-[340px] scale-[1.12]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
