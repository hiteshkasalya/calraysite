export default function BrandMark({ size = 64, className = "", label = "CalRay", subtitle = "AI calorie and fitness tracker coach" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_20px_50px_rgba(18,18,18,0.08)]"
        style={{ width: size, height: size }}
      >
        <img src="/calray-logo.jpeg?v=20260415" alt="CalRay logo" className="h-full w-full object-contain" />
      </div>

      {label ? (
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-[#151515]">{label}</p>
          {subtitle ? <p className="hidden text-xs uppercase tracking-[0.24em] text-[#6b6f72] sm:block">{subtitle}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
