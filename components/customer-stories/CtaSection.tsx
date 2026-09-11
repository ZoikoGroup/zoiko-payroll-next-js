import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="w-full bg-white pb-20 pt-10">
      <Reveal className="mx-auto max-w-[1116px] px-6">
        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-3xl px-6 py-20 md:px-14">
          {/* Background image */}
          <Image
            src="/nv.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          {/* Exact Figma linear overlay: from slate-900/80 via sky-950/70 to sky-600/35 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(42deg, rgba(7, 36, 59, 0.88) 0%, rgba(10, 75, 117, 0.78) 55%, rgba(10, 143, 208, 0.45) 100%)",
            }}
          />
          <div className="relative flex w-full max-w-[640px] flex-col items-center gap-3.5">
            <div className="inline-flex items-center gap-1.5">
              <span className="text-xs font-bold text-blue-300">/</span>
              <span className="text-center text-xs font-bold uppercase leading-5 tracking-wider text-blue-300">
                Ready to go further?
              </span>
            </div>
            <h2 className="text-center text-3xl font-extrabold leading-10 text-white whitespace-nowrap">
              See the proof, then decide what&apos;s next
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-3.5 pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-lg px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundImage: "linear-gradient(78deg,rgba(62,163,224,1),rgba(11,69,115,1))" }}
              >
                <span className="text-center text-sm font-bold leading-6 text-white">Book a demo</span>
              </Link>
              <Link
                href="/global-payroll"
                className="flex items-center justify-center rounded-lg px-6 py-3 outline outline-1 outline-offset-[-1px] outline-white/30 transition-colors duration-200 hover:bg-white/10"
              >
                <span className="text-center text-sm font-bold leading-6 text-white">Explore Global Payroll</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
