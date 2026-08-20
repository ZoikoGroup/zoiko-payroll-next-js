import Reveal from "../ui/Reveal";

export default function IntegrationsSecuritySection() {
  return (
    <section className="bg-[#f5f6f8] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row gap-[32px] xl:gap-[44px] items-center w-full">
          
          {/* Text (Left) */}
          <Reveal className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                09 — INTEGRATIONS & SECURITY
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[-1.5px] leading-[1.2] m-0">
                Connectors as governed<br className="hidden md:block" />
                contracts, not a logo wall
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[0.78px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                Direction, fields, effective dates, mapping version, health, owner, failures<br className="hidden xl:block" />
                and retry state are visible for every connection in scope.
              </p>
            </div>
          </Reveal>

          {/* Image (Right) */}
          <Reveal delay={120} className="w-full lg:w-[400px] xl:w-[500px] shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-[315px] xl:h-[375px] overflow-hidden relative rounded-[16px] w-full lg:w-[400px] xl:w-[500px]">
              <div className="absolute inset-0 left-[-7.4%] top-[-0.26%] w-[114.4%] h-[101.6%]">
                <img
                  src="http://localhost:3845/assets/95cbcb5d9cd47e111e2e958700fee787d330846a.png"
                  alt="Integrations and security dashboard"
                  loading="lazy"
                  className="absolute inset-0 max-w-none object-cover size-full"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Details Layout: Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full mt-[10px]">
          
          {/* Card 1: HRIS */}
          <Reveal delay={200} className="bg-white border border-[#e3e7ec] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">HRIS / HCM</p>
              <div className="bg-[#e8f5f0] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#0e7c5a] text-[10.5px] m-0 leading-normal">✓ Healthy</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: inbound<br/>
              Fields: employee, contract, absence<br/>
              Mapping v6.1 · effective 01 Jun 2026<br/>
              Last success 18 Aug 05:55 · 4,182 records<br/>
              Support owner: IT · A. Kovač
            </p>
          </Reveal>

          {/* Card 2: Time & Attendance */}
          <Reveal delay={300} className="bg-white border border-[#e3e7ec] border-l-4 border-l-[#b42318] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">Time & Attendance</p>
              <div className="bg-[#fdecea] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#b42318] text-[10.5px] m-0 leading-normal">● Partial failure</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: inbound<br/>
              Fields: hours, shift codes<br/>
              Mapping v3.4 · effective 01 Aug 2026<br/>
              Last success 17 Aug 23:10 · 38 records failed<br/>
              Retry state: queued · reconciliation open
            </p>
          </Reveal>

          {/* Card 3: Finance / ERP */}
          <Reveal delay={400} className="bg-white border border-[#e3e7ec] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">Finance / ERP</p>
              <div className="bg-[#e8f5f0] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#0e7c5a] text-[10.5px] m-0 leading-normal">✓ Healthy</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: outbound<br/>
              Fields: journal lines, cost centres<br/>
              Mapping v4.2 · effective 15 Aug 2026<br/>
              Last success 18 Aug 06:10 · 12 batches<br/>
              Reconciliation: linked
            </p>
          </Reveal>

          {/* Card 4: Payment systems */}
          <Reveal delay={500} className="bg-white border border-[#e3e7ec] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">Payment systems</p>
              <div className="bg-[#f1f3f6] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#4b5563] text-[10.5px] m-0 leading-normal">◇ Scoped</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: outbound<br/>
              Fields: payment instruction refs<br/>
              Availability by jurisdiction<br/>
              Commercial scope documented per market<br/>
              Support owner: Payroll ops
            </p>
          </Reveal>

          {/* Card 5: Identity / SSO */}
          <Reveal delay={600} className="bg-white border border-[#e3e7ec] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">Identity / SSO</p>
              <div className="bg-[#e8f5f0] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#0e7c5a] text-[10.5px] m-0 leading-normal">✓ Healthy</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: bidirectional<br/>
              Fields: identity, group claims<br/>
              Mapping v2.0<br/>
              Access logs retained<br/>
              Support owner: IT security
            </p>
          </Reveal>

          {/* Card 6: APIs & webhooks */}
          <Reveal delay={700} className="bg-white border border-[#e3e7ec] rounded-[12px] p-[16px] flex flex-col gap-[12px] relative h-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-bold text-[#0b1220] text-[13px] m-0 leading-normal">APIs & webhooks</p>
              <div className="bg-[#f1f3f6] px-[8px] py-[3px] rounded-[999px]">
                <p className="font-semibold text-[#4b5563] text-[10.5px] m-0 leading-normal">◇ Documented</p>
              </div>
            </div>
            <p className="font-normal text-[#4b5563] text-[11.5px] leading-[19.55px] m-0 pr-[10px]">
              Direction: both<br/>
              Fields: per documented contract<br/>
              Versioned endpoints, error codes<br/>
              Retry and replay documented<br/>
              Support owner: Integration admin
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
