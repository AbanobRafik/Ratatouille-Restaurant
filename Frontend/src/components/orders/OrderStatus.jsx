import { CheckCircle2, Clock3, Flame } from "lucide-react";

const statusStyles = {
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
};

export default function OrderStatus({ status }) {
  const statusConfig = statusStyles[status] || statusStyles.pending;
  const Icon = statusConfig.icon;

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${statusConfig.className}`}
    >
      <Icon size={14} strokeWidth={2} />
      {statusConfig.label}
    </span>
  );
}
