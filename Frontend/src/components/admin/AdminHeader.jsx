import { CircleCheck, Clock3, Flame, LogOut } from "lucide-react";

export default function AdminHeader({ orders, onLogout }) {
  const counts = orders.reduce((summary, order) => {
    summary[order.status] = (summary[order.status] || 0) + 1;
    return summary;
  }, {});
  return (
    <header className="mb-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e55d38]">
          The pass
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
          Orders, handled.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
          Keep every table moving from first bite to final delivery.
        </p>
      </div>
      <div className="flex flex-col items-stretch gap-3 sm:items-end">
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center justify-center gap-2 self-end rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55d38]"
        >
          <LogOut size={16} />
          Logout
        </button>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Summary
            icon={Clock3}
            label="Pending"
            value={counts.pending || 0}
            className="text-[#b94124] bg-[#e55d38]/10"
          />
          <Summary
            icon={Flame}
            label="Preparing"
            value={counts.preparing || 0}
            className="text-[#6f4b00] bg-[#ffdf4f]/35"
          />
          <Summary
            icon={CircleCheck}
            label="Delivered"
            value={counts.delivered || 0}
            className="text-emerald-700 bg-emerald-50"
          />
        </div>
      </div>
    </header>
  );
}
function Summary({ icon: Icon, label, value, className }) {
  return (
    <div
      className={`min-w-22 rounded-2xl px-3 py-3 sm:min-w-27 sm:px-4 ${className}`}
    >
      <Icon size={16} />
      <p className="mt-2 text-2xl font-semibold text-[#252525]">{value}</p>
      <p className="text-[10px] font-semibold uppercase tracking-[.12em] opacity-70">
        {label}
      </p>
    </div>
  );
}
