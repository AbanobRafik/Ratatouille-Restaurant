import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../redux/order/orderSlice";

export const useUpdateOrderStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.order.updateStatus);
  const handleUpdateOrderStatus = (orderId, nextStatus) =>
    dispatch(updateOrderStatus({ orderId, status: nextStatus }));
  return { handleUpdateOrderStatus, status };
};
