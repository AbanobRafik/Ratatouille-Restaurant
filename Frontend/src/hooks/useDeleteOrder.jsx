import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../redux/order/orderSlice";

export const useDeleteOrder = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.order.deleteStatus);
  const handleDeleteOrder = (orderId) => dispatch(deleteOrder(orderId));
  return { handleDeleteOrder, status };
};
