type MediaCardProps = {
  src: string;
  alt: string;
  label: string;
  value: string;
};

/** Section photo with the floating white stat pill that sits over its lower edge. */
export default function MediaCard({ src, alt, label, value }: MediaCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] shadow-[0px_24px_60px_-26px_rgba(8,19,43,0.32)]">
      <img src={src} alt={alt} loading="lazy" className="h-auto w-full object-cover" />
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 shadow-[0px_12px_30px_-12px_rgba(8,19,43,0.40)]">
        <span className="text-xs leading-4 text-slate-500">{label}</span>
        <span className="font-mono text-base font-bold leading-6 text-slate-900">{value}</span>
      </div>
    </div>
  );
}
