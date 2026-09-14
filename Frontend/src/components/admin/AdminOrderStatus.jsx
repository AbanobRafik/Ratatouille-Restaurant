import { CheckCircle2, Clock3, Flame, X } from "lucide-react";

const config = {
  pending: {
    label: "Pending",
    icon: Clock3,
    className: "border-[#e55d38]/20 bg-[#e55d38]/10 text-[#b94124]",
  },
  preparing: {
    label: "Preparing",
    icon: Flame,
    className: "border-[#ffdf4f]/60 bg-[#ffdf4f]/25 text-[#6f4b00]",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  canceled: {
    label: "Canceled",
    icon: X,
    className: "border-red-200 bg-red-50 text-red-700",
  },
};

export default function AdminOrderStatus({ status, onChange, disabled }) {
  const current = config[status] || config.pending;
  const Icon = current.icon;
  const currentStatus = config[status] ? status : "pending";

  

  return (
    <div
      className={`relative inline-flex items-center gap-2 rounded-full border px-3 py-2 ${current.className}`}
    >
      <Icon size={15} />

      <select
        aria-label={`Change order status from ${current.label}`}
        value={currentStatus}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className="cursor-pointer appearance-none bg-transparent pr-5 text-xs font-semibold uppercase tracking-[.12em] outline-none disabled:cursor-wait"
      >
        {Object.entries(config).map(([value, item]) => (
          <option key={value} value={value}>
            {item.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 text-[10px]">
        ⌄
      </span>
    </div>
  );
}
