import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="relative w-full py-20 bg-slate-900 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/iu.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient Overlay matching Figma colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,43,62,0.92)] via-[rgba(8,30,44,0.86)] to-[rgba(15,43,62,0.94)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1100px] px-6 flex flex-col justify-center items-center gap-3.5">
        <Reveal>
          <div className="w-full flex flex-col justify-center items-center text-center">
            <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-extrabold font-['Inter'] leading-tight sm:whitespace-nowrap">
              From approved payroll to governed payment execution
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="pt-2.5 flex justify-center items-center gap-3 flex-wrap">
            {/* Primary Button */}
            <Link
              href="/book-a-demo"
              className="flex min-h-12 items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-500 px-6 py-3 text-sm font-semibold leading-5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>

            {/* Secondary Button */}
            <Link
              href="/book-a-demo"
              className="flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold leading-5 text-white outline outline-1 outline-offset-[-1px] outline-white/30 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start free trial
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="w-full flex flex-col justify-center items-center pt-1">
            <p className="text-center text-xs font-normal leading-5">
              <span className="text-white/60 font-['Inter']">Complex procurement? </span>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-1 font-semibold text-blue-300 font-['Inter'] hover:underline"
              >
                <span>Talk to sales</span>
                <Image
                  src="/arr.png"
                  alt=""
                  width={10}
                  height={10}
                  className="size-2.5 object-contain inline-block ml-0.5"
                />
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}