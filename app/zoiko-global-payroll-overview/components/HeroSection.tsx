import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-32 py-16 bg-gradient-to-b from-white to-white border-b border-slate-100">
      <div className="w-full max-w-[1180px] mx-auto px-8">
        {/* Desktop: side-by-side, Mobile: stacked */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-start">
            {/* Label */}
            <div className="w-full pt-[1.62px] flex flex-col items-start gap-3.5">
              <div className="w-60 h-5 relative">
                <div className="absolute left-0 top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
                  / Global Payroll Management
                </div>
              </div>

              <div className="text-sky-950 text-5xl font-extrabold leading-[56.16px]">
                Global payroll<br />control, built around<br />local requirements.
              </div>

              <div className="w-full max-w-[640px] pt-1.5 text-slate-600 text-base leading-6">
                One operating model for every market you run payroll in — with
                <br />local calculations, rules, entity ownership, calendars and current
                <br />availability kept explicit, not hidden underneath it.
              </div>

              {/* CTAs */}
              <div className="w-full pt-4 pb-5 flex items-start gap-3.5 flex-wrap">
                <div className="px-5 py-3 bg-gradient-to-b from-[#2E91D1] to-[#0B4E7D] rounded-[10px] shadow-[0px_6px_16px_0px_rgba(11,94,153,0.28)] flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">Book a demo</span>
                </div>
                <div className="px-5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-center">
                  <span className="text-sky-950 text-sm font-semibold">Check jurisdiction availability</span>
                </div>
              </div>

              {/* Pillars */}
              <div className="w-full pt-5 border-t border-slate-200 flex items-start gap-6 flex-wrap">
                {[
                  { label: "Global view", icon: "/b1.png" },
                  { label: "Local precision", icon: "/b2.png" },
                  { label: "Availability truth", icon: "/b3.png" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <Image src={item.icon} alt={item.label} width={16} height={16} className="w-4 h-4" />
                    <span className="text-slate-600 text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Image + Stats */}
          <div className="w-[519px] h-[420px] relative bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <Image src="/99.png" alt="Global payroll" width={519} height={420} className="w-full h-full object-cover" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-[20px] left-[20px] w-[479px] h-[81px] rounded-xl backdrop-blur-[3px] flex items-start justify-start gap-5 px-6 py-0" style={{ backgroundColor: '#082F49B8' }}>
              {[
                { val: "14", label: "Jurisdictions in scope" },
                { val: "6", label: "Lifecycle stages" },
                { val: "100%", label: "Evidence-tracked" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-px">
                  <div className="text-white text-xl font-extrabold leading-8 pt-[10px]">{s.val}</div>
                  <div className="text-slate-300 text-xs leading-4 pt-[10px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
