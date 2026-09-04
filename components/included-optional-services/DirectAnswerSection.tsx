import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function DirectAnswerSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Direct answer
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                What&apos;s included with Zoiko Payroll?
              </h2>
            </div>
                    <div className="flex items-start pt-2 lg:pt-[65px]">
              <p className="w-max font-light text-sm leading-5 text-[#5B6B7A]">
                One straight answer, before the details.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="rounded-xl bg-[#E4F1FA] px-[26px] py-[24px]">
            <div className="flex items-start gap-[14px]">
              {/* SVG (21).png replacing the info icon */}
              <Image
                src="/SVG (21).png"
                alt=""
                width={20}
                height={20}
                className="mt-0.5 shrink-0"
              />

              <div className="flex flex-col gap-[7px]">
                {/* Bold heading text */}
                <p className="font-['Inter'] text-sm font-bold leading-5 text-sky-950">
                  Every paid plan includes the core payroll platform, plus the
                  security, audit and record foundation to operate your licensed
                  scope.
                </p>

                {/* Body text */}
                <p className="font-['Inter'] text-xs font-normal leading-5 text-slate-600">
                  Operational services — implementation, managed payroll
                  administration, statutory filing or remittance, payment
                  execution, additional jurisdiction activation and specialized<br />
                  integrations — may be included by plan, offered as optional
                  add-ons, or depend on jurisdiction and delivery model.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}