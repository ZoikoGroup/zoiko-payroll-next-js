import Reveal from "../ui/Reveal";

export default function GovernanceSection() {
  return (
    <section className="w-full bg-[#F9FAFB] border-t border-gray-50 py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left image card with overlays */}
              <div className="w-full flex-1 relative bg-white/0 rounded-2xl shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)] overflow-hidden flex flex-col justify-center items-start">
                <img
                  src="/da.png"
                  alt="Domain owners reviewing a proposed connection"
                  className="w-full h-[360px] object-cover"
                />
                
                {/* Top-left badge */}
                <div className="absolute left-[18px] top-[18px] px-3 pt-2 pb-2.5 bg-white/95 rounded-[10px] backdrop-blur-[3px] shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.30)] flex flex-col justify-start items-start">
                  <span className="text-sky-950 text-xs font-bold font-['Inter'] leading-4">
                    Purpose reviewed
                  </span>
                </div>

                {/* Bottom-right badge */}
                <div className="absolute right-[18px] bottom-[18px] sm:left-[395.70px] sm:top-[306.75px] px-3 pt-2 pb-2.5 bg-white/95 rounded-[10px] backdrop-blur-[3px] shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.30)] flex flex-col justify-start items-start">
                  <span className="text-sky-950 text-xs font-bold font-['Inter'] leading-4">
                    Authority confirmed
                  </span>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 flex flex-col justify-start items-start gap-4">
                <div>
                  <span className="text-xs font-bold uppercase leading-4 tracking-wider text-sky-600">
                    / Governance in practice
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold font-['Inter'] leading-9 text-[#0A3050] whitespace-nowrap">
                  Every connection decision has a named<br />
                  owner in the room.
                </h2>

                <p className="max-w-[640px] text-base font-normal font-['Inter'] leading-6 text-gray-600">
                  Domain owners — not a shared database — decide what, if anything, connects. That review happens before enablement, not after.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 pt-1 pb-1.5 bg-[#E6F2FA] rounded-[20px] text-[#1483C7] text-xs font-bold font-['Inter'] leading-4">
                    Reviewed per domain
                  </span>
                  <span className="px-2.5 pt-1 pb-1.5 bg-[#E6F2FA] rounded-[20px] text-[#1483C7] text-xs font-bold font-['Inter'] leading-4">
                    Evidence required
                  </span>
                  <span className="px-2.5 pt-1 pb-1.5 bg-[#E6F2FA] rounded-[20px] text-[#1483C7] text-xs font-bold font-['Inter'] leading-4">
                    No default access
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}