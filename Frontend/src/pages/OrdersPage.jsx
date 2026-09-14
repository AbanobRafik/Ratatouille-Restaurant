import EmptyOrders from "../components/orders/EmptyOrders";
import OrderCard from "../components/orders/OrderCard";
import { useGetUserOrders } from "../hooks/useGetAllUserOrders";

export default function OrdersPage() {
  const { orders, state, error } = useGetUserOrders();

  return (
    <main className="min-h-screen bg-[#fffaf4] px-5 pb-20 pt-28 text-[#252525] sm:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e55d38]">
            Your table, followed
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            My Orders
          </h1>

          <p className="mt-5 text-base leading-7 text-black/55">
            Track your delicious orders and their current status.
          </p>
        </div>

        <div className="mt-10">
          {state === "loading" ? (
            <div className="rounded-2xl border border-black/10 bg-white px-6 py-12 text-center">
              <p className="text-sm text-black/55">Loading your orders...</p>
            </div>
          ) : state === "error" ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center">
              <p className="font-medium text-red-800">Something went wrong</p>

              <p className="mt-1 text-sm text-red-700">
                {error?.message || "Failed to load your orders."}
              </p>
            </div>
          ) : orders.length === 0 ? (
            <EmptyOrders />
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
