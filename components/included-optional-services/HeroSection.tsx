import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const checklistRow1 = [
  { icon: "/SVG (18).png", text: "Core payroll controls included" },
  { icon: "/SVG (19).png", text: "Optional services clearly labeled" },
];

const checklistRow2 = [
  { icon: "/SVG (20).png", text: "No hidden responsibility model" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left content */}
            <div>
              {/* Eyebrow — slash */}
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Services &amp; commercial scope
              </p>

              {/* Heading */}
              <h1 className="mt-5 max-w-lg font-['Inter'] text-4xl font-extrabold leading-10 text-sky-950">
                Know what&apos;s included. Add<br />
                only what you need.
              </h1>

              {/* Description */}
              <div className="mt-6 w-[559.90px] max-w-full font-['Inter'] text-base font-normal leading-6 text-slate-600">
                Zoiko Payroll separates the platform from operational services, so you<br />
                can see what&apos;s included, what can be added, and who&apos;s responsible — by<br />
                plan, entity and jurisdiction.
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-[50px] w-[199px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2C90D0] to-[#117DC5] font-['Inter'] text-sm font-bold text-white shadow-[0px_6px_16px_rgba(17,125,197,0.28)] transition-opacity hover:opacity-90"
                >
                  Request Custom Quote
                </Link>
                <Link
                  href="#services-portfolio"
                  className="inline-flex h-12 items-center rounded-[10px] border border-[#DCE6EC] bg-white px-6 font-['Inter'] text-sm font-bold text-sky-950 transition-colors hover:bg-slate-50"
                >
                  Check Services Portfolio
                </Link>
              </div>

              {/* Checklist — row 1 & row 2 mapped precisely to Figma coordinates/layout */}
              <div className="mt-8 flex flex-col gap-3">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-12 gap-y-3">
                  {checklistRow1.map((item) => (
                    <div key={item.text} className="flex items-center gap-[8px]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={14}
                        height={14}
                        className="shrink-0"
                      />
                      <span className="whitespace-nowrap font-['Inter'] text-xs font-semibold leading-5 text-[#7C8CA0]">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-[8px]">
                  <Image
                    src={checklistRow2[0].icon}
                    alt=""
                    width={14}
                    height={14}
                    className="shrink-0"
                  />
                  <span className="font-['Inter'] text-xs font-semibold leading-5 text-[#7C8CA0]">
                    {checklistRow2[0].text}
                  </span>
                </div>
              </div>
            </div>

            {/* Right image — cb.png */}
            <div className="hidden lg:block">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-[0px_8px_24px_rgba(8,47,73,0.08)]">
                <Image
                  src="/cb.png"
                  alt="Included and optional services overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}