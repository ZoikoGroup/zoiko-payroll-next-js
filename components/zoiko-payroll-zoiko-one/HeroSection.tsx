import Reveal from "../ui/Reveal";

const checkmarks = [
  "Zoiko Payroll can operate fully independently.",
  "Zoiko One is an optional connected-suite pathway.",
  "Any connection is governed, selected and evidence-backed.",
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0C2232] to-[#0E4553] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Left content */}
            <div className="flex-1">
              <div>
                <span className="text-xs font-bold uppercase leading-4 tracking-wider text-blue-400">
                  / Zoiko One
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-10 text-white">
                Standalone when you need it.
                <br />
                Connected when it helps
              </h1>
              <p className="mt-5 max-w-[640px] text-base leading-6 font-normal text-[#B8B8B8]">
                Zoiko Payroll is a complete, independent product. Zoiko One is
                an optional connected-suite pathway — evaluated, selected and
                evidence-backed, never assumed.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                {checkmarks.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <img
                      src="/tick.png"
                      alt=""
                      className="mt-0.5 w-[12px] h-[21px] shrink-0 object-contain"
                    />
                    <span className="text-sm leading-5 text-[#B8B8B8]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#zoiko-one-relationship"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-700 to-blue-400 px-5 py-3 text-xs font-bold leading-5 text-white shadow-[0px_10px_24px_-10px_rgba(20,131,199,0.55)] outline outline-1 outline-offset-[-1px] outline-black/0 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Understand the Zoiko One relationship
                </a>
              </div>
            </div>

            {/* Right image card */}
            <div className="w-full max-w-[524px] overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <img
                src="/im.png"
                alt="Zoiko One relationship diagram"
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}