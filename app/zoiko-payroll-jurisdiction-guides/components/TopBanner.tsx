export default function TopBanner() {
  return (
    <div className="w-full h-10 bg-sky-950 flex items-center justify-center relative">
      <div className="absolute left-[38px] top-[9px] text-stone-100/60 text-base leading-4">×</div>
      <div className="absolute left-[57px] top-[9px] h-5 rounded-sm outline outline-1 outline-offset-[-1px] outline-stone-100/25 flex items-center justify-center px-1">
        <span className="text-sky-100 text-xs leading-4 tracking-wide">NEW</span>
      </div>
      <div className="text-slate-50 text-xs leading-5 ml-[116px]">
        A practical guide to managing payroll across multiple jurisdictions.
      </div>
      <div className="ml-2 border-b border-stone-100/40">
        <span className="text-slate-50 text-xs leading-5">Read the guide →</span>
      </div>
      <div className="absolute right-[160px] top-[10px] border-b border-stone-100/40">
        <span className="text-stone-100/75 text-xs leading-4">System status</span>
      </div>
      <div className="absolute right-[60px] top-[10px] border-b border-stone-100/40">
        <span className="text-stone-100/75 text-xs leading-4">Help Center</span>
      </div>
    </div>
  );
}
