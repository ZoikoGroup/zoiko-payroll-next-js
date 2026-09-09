import Image from "next/image";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { NoteCallout, StatusPill, WindowChrome } from "./shared";

const statuses = [
  {
    title: "Submitted",
    description: "Sent or exported to the provider.",
  },
  {
    title: "Accepted / Processing",
    description: "Externally acknowledged, in progress.",
  },
  {
    title: "Settled",
    description: "Requires verified external evidence.",
  },
  {
    title: "Reconciled",
    description: "Matched back to the obligation.",
  },
];

export default function StatusExceptionsSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1220px] flex-col items-center gap-6">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <Eyebrow center>Status &amp; Exceptions</Eyebrow>
              <h2 className="pt-px text-center text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 font-['Inter']">
                Submitted, Accepted and Settled are not the same thing
              </h2>
              <p className="pb-[0.59px] text-center text-base font-normal leading-6 text-gray-500 font-['Inter']">
                Reconciled means matched to the payroll obligation — not just sent.
              </p>
            </div>

            {/* Status cards */}
            <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-4">
              {statuses.map((status) => (
                <div
                  key={status.title}
                  className="flex flex-col gap-[2.75px] rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
                >
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/blue.png"
                      alt="check"
                      width={10}
                      height={10}
                      className="size-2.5 object-contain shrink-0"
                    />
                    <span className="text-sm font-semibold leading-5 text-slate-900 font-['Inter']">
                      {status.title}
                    </span>
                  </div>
                  <p className="text-xs font-normal leading-5 text-gray-500 font-['Inter']">
                    {status.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Wide photo strip */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-[20px] shadow-sm">
              <Image
                src="/pl.png"
                alt="Status and Exceptions team"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Exception window */}
            <WindowChrome
              title="Exception — PMT-EXC-0117"
              className="w-full max-w-[998px]"
            >
              <div className="flex flex-col gap-2.5 px-6 py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-base font-bold leading-6 text-slate-900 font-['Inter']">
                    Provider rejection — invalid destination
                  </span>
                  <StatusPill variant="blocker" label="Blocker" />
                </div>
                <p className="text-xs font-normal leading-5 text-gray-500 font-['Inter']">
                  Affected: 3 obligations · €4,120 · Owner: Payments Ops · Retry eligible after verification.
                </p>
              </div>
            </WindowChrome>

            {/* Note */}
            <div className="w-full max-w-[700px]">
              <NoteCallout center rounded="md">
                Duplicate risk is always verified before a retry — never a blind resend.
              </NoteCallout>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}