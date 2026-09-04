import React from 'react';
import Image from 'next/image';

export default function TrustIntegrationsSection() {
  const categories = [
    "HRIS / HCM",
    "Finance / ERP",
    "Time / attendance",
    "Payment / bank / provider",
    "Identity",
    "Tax / filing provider",
    "Developer API / webhooks",
  ];

  const requiredControls = [
    "Source ownership & identifiers",
    "Versioned mapping & freshness",
    "Partial-failure handling & reconciliation",
    "Authentication / least privilege",
    "Retry / idempotency & audit",
  ];

  const securityPrivacy = [
    "Role- and scope-based access; approved MFA/SSO only",
    "Public UI shows source class/freshness — sensitive evidence stays restricted",
    "Employee data minimized; no hosting/residency inferred from jurisdiction names",
    "Retention follows approved policy; material actions logged",
  ];

  return (
    <section 
      className="w-full px-28 py-20 border-t border-slate-200 flex flex-col justify-start items-center gap-6 bg-[#0F2B3E] bg-cover bg-center"
      style={{ backgroundImage: `url('/sss.png')` }}
    >
      {/* Top Header & Image Row */}
      <div className="w-full max-w-[1200px] px-8 mx-auto inline-flex justify-between items-center gap-6 flex-wrap lg:flex-nowrap">
        <div className="flex-1 max-w-[640px] inline-flex flex-col justify-start items-start gap-3.5">
          <div className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
            / Trust, integrations &amp; implementation readiness
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="self-stretch text-white text-3xl font-extrabold font-['Inter'] leading-10">
              Trusted Integrations, Secure Connections, Ready for Implementation
            </h2>
          </div>
        </div>

        <div className="flex-1 h-64 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start overflow-hidden relative w-full">
          <div className="self-stretch h-64 relative overflow-hidden w-full">
            <Image 
              src="/cl.png" 
              alt="Integration and security preview" 
              fill 
              className="object-cover object-center absolute -top-4 left-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="w-full max-w-[1200px] px-8 mx-auto flex flex-col justify-start items-start gap-6">
        {/* Categories Badges */}
        <div className="self-stretch inline-flex justify-start items-start gap-2.5 flex-wrap content-start">
          {categories.map((cat, idx) => (
            <div key={idx} className="px-4 pt-2 pb-2.5 bg-white/20 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start">
              <span className="justify-center text-cyan-200 text-xs font-semibold font-['Inter'] leading-5">{cat}</span>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="self-stretch inline-flex justify-center items-stretch gap-6 flex-wrap lg:flex-nowrap">
          {/* Required Integration Controls Card */}
          <div className="flex-1 px-6 py-6 bg-white/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
              <h3 className="self-stretch justify-center text-sky-400 text-sm font-bold font-['Inter'] leading-5">
                Required integration controls
              </h3>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              {requiredControls.map((item, idx) => (
                <div key={idx} className="self-stretch inline-flex justify-start items-center gap-1.5">
                  <span className="justify-center text-sky-400 text-xs font-extrabold font-['Inter'] leading-4">✓</span>
                  <span className="justify-center text-stone-300 text-xs font-normal font-['Inter'] leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Privacy Card */}
          <div className="flex-1 px-6 pt-6 pb-12 bg-white/20 rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
              <h3 className="self-stretch justify-center text-sky-400 text-sm font-bold font-['Inter'] leading-5">
                Security &amp; privacy
              </h3>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              {securityPrivacy.map((item, idx) => (
                <div key={idx} className="self-stretch inline-flex justify-start items-center gap-1.5">
                  <span className="justify-center text-sky-400 text-xs font-extrabold font-['Inter'] leading-4">✓</span>
                  <span className="justify-center text-stone-300 text-xs font-normal font-['Inter'] leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}