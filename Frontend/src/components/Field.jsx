export function Field({ label, type, placeholder, icon, ...props }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <div className="relative mt-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
          {icon}
        </span>
        <input
          className="w-full rounded-xl border border-black/15 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#e55d38] focus:ring-4 focus:ring-[#e55d38]/10"
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </label>
  );
}
