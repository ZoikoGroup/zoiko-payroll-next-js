import Image from "next/image";
import Reveal from "../ui/Reveal";

const features = [
  {
    icon: "/Border (1).png",
    title: "Payroll calculations",
    description: (
      <>
        Gross-to-net capability for your<br />
        activated jurisdiction scope.
      </>
    ),
  },
  {
    icon: "/Border (2).png",
    title: "Approvals & close",
    description: (
      <>
        Core authorization workflow with<br />
        immutable close history.
      </>
    ),
  },
  {
    icon: "/Border (3).png",
    title: "Security foundation",
    description: (
      <>
        Authentication, MFA, encryption, role<br />
        controls and logging as baseline.
      </>
    ),
  },
  {
    icon: "/Border (4).png",
    title: "Employee records",
    description: (
      <>
        Authorized access to payslips and<br />
        payroll history.
      </>
    ),
  },
];

export default function FloorSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wide text-sky-600">
                <span aria-hidden="true">/</span>
                The floor, not the upsell
              </p>
              <h2 className="mt-5 font-['Inter'] text-3xl font-extrabold leading-9 text-sky-950">
                What every paid plan includes.
              </h2>
            </div>

            {/* Right note — lg:pt-[28px] matches top-[28.25px] from Figma */}
                     <div className="flex items-start pt-2 lg:pt-[28px]">
              <p className="whitespace-nowrap font-['Inter'] text-sm font-light leading-5 text-slate-500">
                Statutory accuracy, security and audit history<br />are never premium upgrades.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {/* gap-8 = 32px matches Figma card spacing */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex h-36 flex-col rounded-xl bg-[#FFFFFF] p-[19px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]"
              >
                {/* Icon — size-9 = 36×36px matching Figma */}
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={36}
                  height={36}
                  className="shrink-0"
                />

                {/* Title — mt-3 = 12px gap from icon bottom (67 - 55 = 12px) */}
                <h3 className="mt-3 font-['Inter'] text-sm font-extrabold leading-5 text-sky-950">
                  {f.title}
                </h3>

                {/* Description — mt-[7px] gap from title bottom (94.25 - 87 = 7.25px) */}
                <p className="mt-[7px] font-['Inter'] text-xs font-normal leading-4 text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}