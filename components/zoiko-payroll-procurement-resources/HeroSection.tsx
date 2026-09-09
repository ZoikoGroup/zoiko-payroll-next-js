import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function HeroSection() {
  return (
    <section className="bg-[#EDF2F5] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: copy */}
            <div className="flex flex-col items-start gap-3.5">
              <Eyebrow className="whitespace-nowrap uppercase tracking-wide border-0 border-l-0 before:hidden">
                / Procurement resources
              </Eyebrow>

              <h1 className="max-w-[600px] text-4xl font-extrabold leading-10 text-azure-16">
                Everything your buying team
                <br />
                needs to evaluate Zoiko Payroll
                <br />
                — in one governed place.
              </h1>

              <p className="max-w-[600px] text-base leading-6 text-azure-38">
                Access the commercial, legal, privacy, security, implementation and
                <br />
                supplier-onboarding resources used to procure Zoiko Payroll. Public
                <br />
                resources are available immediately; sensitive evidence is provided
                <br />
                through controlled access when appropriate.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="#resources"
                  className="flex items-center rounded-[10px] bg-gradient-to-r from-azure-49 to-azure-42 px-5 py-3 text-sm font-bold text-white shadow-[0_6px_16px_rgba(17,125,197,0.28)] outline outline-1 outline-offset-[-1px] outline-black/0 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Check Resources
                </a>
                <a
                  href="#find-solution"
                  className="flex items-center rounded-[10px] bg-white px-5 py-3 text-sm font-bold text-azure-16 outline outline-1 outline-offset-[-1px] outline-azure-89 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Find Solution
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-3">
                <div className="flex items-center gap-2">
                  <img src="SVG (37).png" alt="" className="h-3.5 w-3.5 object-contain" />
                  <span className="whitespace-nowrap text-xs font-semibold leading-5 text-azure-56">
                    Current documents
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="SVG (38).png" alt="" className="h-3.5 w-3.5 object-contain" />
                  <span className="whitespace-nowrap text-xs font-semibold leading-5 text-azure-56">
                    Clear access levels
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="SVG (39).png" alt="" className="h-3.5 w-3.5 object-contain" />
                  <span className="whitespace-nowrap text-xs font-semibold leading-5 text-azure-56">
                    No payroll data required
                  </span>
                </div>
              </div>

              <p className="max-w-[520px] pt-0.5 text-xs leading-5 text-azure-56">
                Availability of specific legal, security, insurance, tax or compliance documents depends on
                <br />
                the applicable contracting entity, market, product scope and approved disclosure policy.
              </p>
            </div>

            {/* Right: hero image card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(8,47,73,0.10)] outline outline-1 outline-offset-[-1px] outline-azure-89">
              <div className="relative h-[457px] w-full bg-azure-89">
                <img
                  src="ti.png"
                  alt="Procurement resources"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}