import React from 'react';

export default function ReadyToMapSection() {
  const links = [
    "Compliance Workflows",
    "Multi-Entity Payroll",
    "Global Reporting",
    "Implementation and Migration",
    "Jurisdiction Guides"
  ];

  return (
    <section className="w-full px-28 py-16 bg-[#0A2E4B] flex flex-col justify-start items-center border-t border-slate-200">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-3.5 mx-auto">
        {/* Subtitle */}
        <div className="text-center text-[#9FC7E3] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
          / Ready to map your local payroll requirements?
        </div>

        {/* Main Heading */}
        <div className="w-full max-w-[720px] flex flex-col justify-start items-center text-center">
          <h2 className="text-white text-3xl font-extrabold font-['Inter'] leading-10">
            Keep local payroll precision inside one global<br />control model.
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 pb-4 inline-flex justify-center items-center gap-3.5 flex-wrap">
          <button className="px-5 pt-2.5 pb-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] flex justify-center items-center text-white text-sm font-bold font-['Inter'] leading-5 hover:opacity-90 transition-opacity">
            Review a jurisdiction
          </button>
          <button className="px-5 pt-2.5 pb-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center text-white text-sm font-bold font-['Inter'] leading-5 hover:bg-white/10 transition-colors">
            Book a demo
          </button>
        </div>

        {/* Bottom Navigation Links */}
        <div className="w-full pt-6 border-t border-white/10 inline-flex justify-center items-center gap-6 flex-wrap">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-[#9FC7E3] text-xs font-normal font-['Inter'] leading-5 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}