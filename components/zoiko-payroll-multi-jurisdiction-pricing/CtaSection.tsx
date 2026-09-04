import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#082F49] px-8 py-12 sm:px-12">
            {/* Decorative radial */}
            <div
              className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(10,120,195,0.25) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Eyebrow tone="light">Final step</Eyebrow>

                <h2 className="mt-5 text-3xl font-extrabold leading-9 text-white">
                  See your multi-jurisdiction<br />scope, clearly.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-6 text-slate-300">
                  Tell us your entities, jurisdictions and delivery models — we&apos;ll show<br />you the commercial layers that actually apply.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* Updated: gradient from #2C90D0 to #117DC5 */}
                  <Link
                    href="/book-a-demo"
                    className="bg-gradient-to-r from-[#2C90D0] to-[#117DC5] flex min-h-12 items-center justify-center rounded-[10px] px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-600/28 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Build your jurisdiction scope
                  </Link>
                  <Link
                    href="/book-a-demo"
                    className="flex min-h-12 items-center justify-center rounded-[10px] border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a demo
                  </Link>
                </div>
              </div>

              {/* ai.png replacing the placeholder visual */}
              <div className="hidden lg:block">
                <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/ai.png"
                    alt="Multi-jurisdiction scope"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}