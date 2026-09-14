import { Trash2 } from "lucide-react";
export default function AdminOrderActions({ onDelete, disabled }) {
  return (
    <button
      type="button"
      onClick={onDelete}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-xs font-semibold uppercase tracking-[.12em] text-red-700 transition hover:bg-red-50 disabled:cursor-wait disabled:opacity-60"
    >
      <Trash2 size={14} /> {disabled ? "Removing..." : "Delete"}
    </button>
  );
}
