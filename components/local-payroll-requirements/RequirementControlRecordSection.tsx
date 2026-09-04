import React from 'react';

export default function RequirementControlRecordSection() {
  const records = [
    {
      title: "IDENTITY",
      description: "Stable ID, jurisdiction/entity context, schema version."
    },
    {
      title: "GOVERNANCE",
      description: "Approved category, applicability status, primary owner."
    },
    {
      title: "EFFECTIVE DATES",
      description: "Activation date, sunset date, effective date range."
    },
    {
      title: "EVIDENCE",
      description: "Authoritative references, source-issuing agency, status approved."
    },
    {
      title: "CONFIGURATION MAPPING",
      description: "Links to the downstream payroll configuration schemas."
    },
    {
      title: "VALIDATION & APPROVAL STATE",
      description: "Status, reviewer sign-off, compliance clearance."
    },
    {
      title: "AUDIT METHODS",
      description: "Compliance checks, automated validation rules, test coverage."
    },
    {
      title: "NOT SELF-INTERPRETING",
      description: "Requires explicit verification — never assumes regulatory compliance."
    }
  ];

  return (
    <section 
      className="w-full px-28 py-20 border-t border-slate-200 flex flex-col justify-start items-center gap-10 bg-[#0F2B3E] bg-cover bg-center"
      style={{ backgroundImage: `url('/ee.png')` }}
    >
      {/* Header */}
      <div className="w-full max-w-[1200px] px-8 mx-auto flex flex-col justify-start items-start gap-3.5">
        <div className="text-sky-400 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
          / REQUIREMENT CONTROL RECORD
        </div>
        <h2 className="text-white text-3xl font-extrabold font-['Inter'] leading-10">
          The canonical object behind every row in the workspace
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1200px] px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {records.map((item, index) => (
          <div 
            key={index} 
            className="px-5 py-5 bg-white/10 rounded-xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200/30 flex flex-col justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-sky-300 text-xs font-bold font-['Inter'] tracking-wide">
                {item.title}
              </span>
            </div>
            <p className="text-stone-300 text-xs font-normal font-['Inter'] leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}