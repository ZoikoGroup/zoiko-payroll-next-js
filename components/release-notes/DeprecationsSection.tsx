import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { InfoIcon, RefreshIcon, DatabaseIcon, TrashIcon } from "../ui/icons";

const stages = [
  {
    icon: InfoIcon,
    label: "Announcement",
    caption: "Legacy Payslip Template — Jul 2, 2026.",
    current: false,
  },
  {
    icon: RefreshIcon,
    label: "Replacement available",
    caption: "Standard Payslip Export v2 supported now.",
    current: false,
  },
  {
    icon: DatabaseIcon,
    label: "Migration open",
    caption: "Current window — teams migrate now.",
    current: false,
  },
  {
    icon: TrashIcon,
    label: "Removal scheduled",
    caption: "Scheduled — verified date only, no promise of zero downtime.",
    current: true,
  },
];

export default function DeprecationsSection() {
  return (
    <section className="border-t border-[#E1E8F0] bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Deprecations, sunsets &amp; migrations</Eyebrow>
          <h2 className="mt-3.5 max-w-[620px] text-2xl font-extrabold leading-tight sm:text-3xl sm:leading-9 tracking-tight text-[#0A2E4B]">
            Announcement → Migration → Effective/Removal → Current state
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stages.map((stage, index) => {
            const cardFirst = index % 2 === 0;

            const card = (
              <div className="w-full rounded-lg border border-[#E1E8F0] bg-[#F8FAFC] px-4 py-5 text-center">
                <span
                  className={`mx-auto flex size-7 items-center justify-center rounded-full ${
                    stage.current ? "bg-[#0A8FD0]" : "bg-[#0A2E4B]"
                  }`}
                >
                  <stage.icon className="h-4 w-4 text-white" />
                </span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#0A2E4B]">{stage.label}</p>
              </div>
            );

            const caption = (
              <p className="text-center text-xs leading-5 text-[#8592A0]">{stage.caption}</p>
            );

            return (
              <Reveal key={stage.label} delay={index * 80} className="flex flex-col">
                <div className="flex flex-1 items-end justify-center lg:min-h-[104px]">
                  {cardFirst ? card : caption}
                </div>

                <div className="relative flex items-center justify-center py-5">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-2 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-[#CBD5E1] lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className={`relative size-3 rounded-full ${
                      stage.current ? "bg-[#0A8FD0]" : "bg-[#0A2E4B]"
                    }`}
                  />
                </div>

                <div className="flex flex-1 items-start justify-center lg:min-h-[104px]">
                  {cardFirst ? caption : card}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={320} className="mt-14 rounded-r-lg border-l-4 border-[#0A8FD0] bg-[#E8F1FA] px-5 py-4">
          <p className="text-sm leading-6 text-[#334155]">
            Release Notes explains why and when a migration matters.{" "}
            <Link
              href="/resources/documentation"
              className="font-bold text-[#0A2E4B] transition-colors duration-200 hover:text-[#0A8FD0]"
            >
              Product Documentation
            </Link>{" "}
            and{" "}
            <Link
              href="/product/implementation"
              className="font-bold text-[#0A2E4B] transition-colors duration-200 hover:text-[#0A8FD0]"
            >
              Implementation
            </Link>{" "}
            own current tested steps, prerequisites, validation and recovery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
