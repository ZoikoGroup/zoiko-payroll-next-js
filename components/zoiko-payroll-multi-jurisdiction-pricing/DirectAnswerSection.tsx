import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function DirectAnswerSection() {
  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left heading area */}
            <div className="lg:col-span-2">
              <Eyebrow>Direct answer</Eyebrow>

              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                Multi-country pricing isn&apos;t a per-country<br />surcharge.
              </h2>

              <div className="mt-8 flex h-[123px] w-[1136px] items-center rounded-2xl border border-[#DCE6EC] border-l-4 border-l-[#0A78C3] bg-white px-8 shadow-sm shadow-[#082F49]/4">
                <div className="w-[1062.48px] h-16 justify-center">
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">The recurring product model is governed by your selected plan and Billable Worker-Month usage. Each new production jurisdiction may also require a one-<br/>time activation and optional local services — like managed payroll, filings or partner-supported delivery. </span>
                  <span className="text-sky-950 text-sm font-bold font-['Inter'] leading-5">Core</span>
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5"> supports 1 production jurisdiction,<br/></span>
                  <span className="text-sky-950 text-sm font-bold font-['Inter'] leading-5">Professional</span>
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5"> up to 3, </span>
                  <span className="text-sky-950 text-sm font-bold font-['Inter'] leading-5">Business</span>
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5"> up to 10, and </span>
                  <span className="text-sky-950 text-sm font-bold font-['Inter'] leading-5">Enterprise</span>
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5"> uses contracted capacity — subject to the controlled commercial definition.</span>
                </div>
              </div>
            </div>

            {/* Right note */}
            <div className="flex items-start pt-2 lg:pt-[65px]">
              <p className="w-max text-sm leading-5 text-[#5B6B7A]">
                One flat &quot;country fee&quot; would hide more than it<br />explains.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}