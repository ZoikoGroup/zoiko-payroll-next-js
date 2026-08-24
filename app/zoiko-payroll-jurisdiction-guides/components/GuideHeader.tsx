const navItems = ["Product", "Solutions", "Global Payroll", "Pricing", "Resources", "Company"];

export default function GuideHeader() {
  return (
    <div className="w-full h-20 bg-slate-50 border-b border-slate-200 flex items-center relative">
      {/* Logo placeholder */}
      <div className="absolute left-[99px] top-[11px] w-36 h-14 bg-sky-950 rounded-lg flex items-center justify-center">
        <span className="text-white text-sm font-bold">Zoiko</span>
      </div>

      {/* Nav */}
      <div className="absolute left-[308px] top-[21px] flex items-center gap-0">
        {navItems.map((item) => (
          <div key={item} className="flex items-center">
            <span className="text-sky-950 text-sm font-medium leading-5 px-4">{item}</span>
            <div className="w-2.5 h-2.5 opacity-60 overflow-hidden">
              <div className="w-1.5 h-[2.75px] outline outline-1 outline-offset-[-0.46px] outline-sky-950 mt-[4px] ml-[2.75px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="absolute right-[265px] top-[27px] text-sky-950 text-sm font-medium leading-5">
        Sign in
      </div>
      <div className="absolute right-[163px] top-[16px] bg-gradient-to-b from-blue-400 via-sky-600 to-sky-950 rounded-lg flex items-center justify-center px-5 py-2.5 outline outline-1 outline-offset-[-1px] outline-black/0">
        <span className="text-white text-sm font-semibold">Book a demo</span>
      </div>
      <div className="absolute right-[100px] top-[19px] h-9 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-1 px-3">
        <span className="text-slate-600 text-sm leading-5">EN</span>
        <div className="w-2.5 h-2.5 overflow-hidden">
          <div className="w-1.5 h-[2.75px] outline outline-1 outline-offset-[-0.46px] outline-slate-600 mt-[4px] ml-[2.75px]" />
        </div>
      </div>
    </div>
  );
}
