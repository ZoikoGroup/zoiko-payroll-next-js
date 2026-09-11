import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const authorityLinks = [
  { label: "Jurisdiction Coverage", href: "/zoiko-jurisdiction-coverage" },
  { label: "Product Documentation", href: "/resources/documentation" },
  { label: "Integrations & APIs", href: "/integrations" },
  { label: "Security and Trust", href: "/security" },
  { label: "Implementation", href: "/implementation" },
  { label: "Pricing & Procurement", href: "/resources/procurement" },
];

export default function VerifyCurrentSection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[1100px] flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Verify what&apos;s current
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950 whitespace-nowrap">
            A story&apos;s geography is not proof of current availability
          </h2>
          <p className="w-full max-w-[900px] text-center text-base font-normal leading-7 text-gray-600">
            Product use in a story is historical context, not current product authority. For anything that changes over
            <br />
            time, these destinations stay authoritative.
          </p>
        </div>

        {/* Story → authorities flow */}
        <div className="flex flex-col items-center justify-center gap-6 pt-4 lg:flex-row">
          <div className="flex w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-sky-950 px-5 py-4">
            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-wide text-blue-300">
              This story
            </span>
            <span className="text-center text-xs font-bold leading-5 text-white">
              Example Organization
            </span>
          </div>

          <div className="flex shrink-0 items-center justify-center">
            <Image
              src="/flow-arrow.png"
              alt="arrow"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex max-w-[700px] flex-wrap items-center gap-3">
            {authorityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-center rounded-[10px] bg-white px-4 py-3 text-center text-xs font-semibold leading-5 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Related stories note */}
        <div className="flex max-w-[680px] flex-col items-center gap-2 pt-6">
          <h3 className="w-full text-center text-base font-extrabold leading-7 text-sky-950">
            Related stories
          </h3>
          <p className="w-full text-center text-xs font-normal leading-5 text-gray-400">
            Matched by challenge, scope and team — deterministic, never
            behavioral profiling. Up to three shown.
          </p>
        </div>

        <p className="text-center text-xs font-normal leading-5 text-gray-400">
          Low related-story inventory is expected and shown honestly — never
          padded with unrelated stories.
        </p>
      </Reveal>
    </section>
  );
}
