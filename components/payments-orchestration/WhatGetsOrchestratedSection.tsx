export default function WhatGetsOrchestrated() {
  const obligations = [
    {
      title: "Worker net pay",
      description: "Amount, currency, date, destination.",
    },
    {
      title: "Statutory obligations",
      description: "Jurisdiction refs. where supported.",
    },
    {
      title: "Benefits & garnishments",
      description: "Only where the service supports them.",
    },
    {
      title: "Funding",
      description: "Aggregated by entity, currency, date.",
    },
    {
      title: "Routing",
      description: "Approved live channels only.",
    },
    {
      title: "Bank-ready outputs",
      description: "Validated files with audit evidence.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-40 flex justify-center items-center gap-14">
        {/* Left Image Side */}
        <div className="flex-1 min-h-96 flex flex-col justify-center items-start">
          <div className="w-full h-96 relative rounded-[20px] flex flex-col justify-center items-start overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src="oi.png"
              alt="Reviewing payment obligations"
            />
          </div>
        </div>

        {/* Right Content Side */}
        <div className="flex-1 flex flex-col justify-start items-start gap-2">
          <div className="w-full inline-flex justify-start items-center gap-2">
            <div className="w-4 h-px bg-sky-600" />
            <div className="text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              WHAT GETS ORCHESTRATED
            </div>
          </div>
          <div className="w-full pt-px flex flex-col justify-start items-start">
            <div className="w-full text-slate-900 text-4xl font-extrabold font-['Inter'] leading-9">
              Every obligation type,<br />coordinated on its own terms
            </div>
          </div>
          <div className="w-full pb-[0.59px] flex flex-col justify-start items-start">
            <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-6">
              Only approved live channels — never an invented rail or provider.
            </div>
          </div>

          {/* Obligations Grid */}
          <div className="w-full pt-3 grid grid-cols-2 gap-3">
            {obligations.map((item, index) => (
              <div
                key={index}
                className="w-full p-3.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-[2.75px]"
              >
                <div className="w-full inline-flex justify-start items-center gap-1.5">
                  <img
                    src="blue.png"
                    alt="check"
                    className="w-2.5 h-2.5 object-contain shrink-0"
                  />
                  <div className="w-full text-slate-900 text-sm font-semibold font-['Inter'] leading-5 truncate">
                    {item.title}
                  </div>
                </div>
                <div className="w-full pb-[0.75px] flex flex-col justify-start items-start">
                  <div className="w-full text-gray-500 text-xs font-normal font-['Inter'] leading-5 truncate">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}