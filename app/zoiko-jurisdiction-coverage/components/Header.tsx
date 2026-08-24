import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="relative h-10 w-full bg-sky-950">
        <div className="absolute left-[57px] top-[9px] flex h-5 w-12 items-center justify-center rounded-sm border border-stone-100/25">
          <span className="text-xs leading-4 tracking-wide text-sky-100">NEW</span>
        </div>
        <div className="absolute left-[116px] top-[10.5px] w-96 text-center text-xs font-normal leading-5 text-slate-50">
          A practical guide to managing payroll across multiple jurisdictions.
        </div>
        <div className="absolute left-[530px] top-[10px] w-28 border-b border-stone-100/40">
          <div className="absolute left-0 top-[1px] w-28 text-center text-xs leading-5 text-slate-50">
            Read the guide →
          </div>
        </div>
        <div className="absolute left-[38px] top-[9.25px] text-base leading-4 text-stone-100/60">
          ×
        </div>
        <div className="absolute right-[160px] top-[9.75px] w-20 border-b border-stone-100/40">
          <div className="absolute left-0 top-[1px] text-xs leading-4 text-stone-100/75">
            System status
          </div>
        </div>
        <div className="absolute right-[60px] top-[9.75px] w-16 border-b border-stone-100/40">
          <div className="absolute left-0 top-[1px] text-xs leading-4 text-stone-100/75">
            Help Center
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="relative h-20 w-full border-b border-slate-200 bg-slate-50">
        <Image
          className="absolute left-[98px] top-[11px]"
          src="/zoiko.png"
          alt="Zoiko Payroll"
          width={149}
          height={53}
          priority
        />
        <nav className="absolute left-[308px] top-[21px] flex h-8 items-center gap-0">
          {["Product", "Solutions", "Global Payroll", "Pricing", "Resources", "Company"].map(
            (item) => (
              <div key={item} className="flex items-center">
                <span className="px-4 text-sm font-medium leading-5 text-sky-950">
                  {item}
                </span>
                <svg className="h-2.5 w-2.5 opacity-60" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 4L5 7L8 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-sky-950"
                  />
                </svg>
              </div>
            )
          )}
        </nav>
        <div className="absolute right-[130px] top-[27px] text-sm font-medium leading-5 text-sky-950">
          Sign in
        </div>
        <div className="absolute right-[30px] top-[16px] flex h-11 w-32 items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 via-sky-600 to-sky-950">
          <span className="text-sm font-semibold leading-5 text-white">Book a demo</span>
        </div>
        <div className="absolute right-[70px] top-[19px] flex h-10 w-16 items-center justify-center rounded-lg border border-slate-200">
          <span className="text-sm leading-5 text-slate-600">EN</span>
          <svg className="ml-1 h-2.5 w-2.5" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 4L5 7L8 4"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-600"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
