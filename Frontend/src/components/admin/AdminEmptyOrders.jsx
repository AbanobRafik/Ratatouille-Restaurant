import { ClipboardList } from "lucide-react";
export default function AdminEmptyOrders() {
  return <section className="rounded-3xl border border-black/10 bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(73,43,24,.08)]"><span className="mx-auto grid size-14 place-items-center rounded-full bg-[#ffdf4f] text-[#252525]"><ClipboardList size={24} /></span><h2 className="mt-6 font-serif text-3xl font-semibold">A quiet kitchen</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/55">There are no orders to prepare right now.</p></section>;
}
