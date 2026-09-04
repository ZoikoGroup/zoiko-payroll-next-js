import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const layers = [
  { num: "1", label: "Plan capacity" },
  { num: "2", label: "Worker-month usage" },
  { num: "3", label: "Jurisdiction activation" },
  { num: "4", label: "Local recurring services" },
  { num: "5", label: "Third-party / local costs" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FA] py-14 sm:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: copy */}
          <Reveal>
            <Eyebrow>Multi-jurisdiction pricing</Eyebrow>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] text-[#082F49] sm:text-4xl">
              Scale across jurisdictions<br />
              without losing sight of what<br />
              you&apos;re paying for.<br />
            </h1>

            <div className="mt-6 w-[564.22px] h-24 justify-center text-slate-600 text-base font-normal font-['Inter'] leading-6">
              Zoiko Payroll separates plan capacity, worker-month subscription,<br/>
              jurisdiction activation, recurring local services and third-party costs —<br/>
              so expanding into a new jurisdiction changes only the commercial layers<br/>
              that scope actually requires.
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book-a-demo"
                className="bg-gradient-to-r from-[#2C90D0] to-[#117DC5] flex min-h-12 items-center justify-center rounded-[10px] px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-600/28 transition-all duration-200 hover:-translate-y-0.5"
              >
                Build your jurisdiction scope
              </Link>
              <Link
                href="#jurisdiction-capacity"
                className="flex min-h-12 items-center justify-center rounded-[10px] border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
              >
                Check jurisdiction availability
              </Link>
            </div>

            <div className="mt-6 w-[512.40px] h-9 justify-center text-slate-500 text-xs font-light font-['Inter'] leading-5">
              Monetary prices, currencies, taxes and local service availability resolve from the approved<br/>
              catalog, coverage registry and order form.
            </div>
          </Reveal>

          {/* Right: pricing breakdown card */}
          <Reveal delay={140}>
            <div className="rounded-2xl bg-white shadow-lg shadow-[#082F49]/8 ring-1 ring-slate-200 overflow-hidden">
              {/* Globe image visual */}
              <div className="relative h-44 w-full">
                <Image
                  src="/globe.png"
                  alt="Globe network visualization"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Layer list */}
              <div className="space-y-0 px-6 pb-6 pt-5">
                {layers.map((layer, i) => (
                  <div
                    key={layer.num}
                    className={`flex items-center gap-3 py-3 ${
                      i < layers.length - 1 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#E4F1FA]">
                      <span className="text-xs font-extrabold leading-4 text-[#0A78C3]">
                        {layer.num}
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-[#082F49]">
                      {layer.label}
                    </span>
                    <span className="ml-auto flex shrink-0 items-center">
                      <Image
                        src="/arrow.png"
                        alt="Arrow"
                        width={13}
                        height={20}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}