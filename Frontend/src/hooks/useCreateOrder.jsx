import { useDispatch } from "react-redux";
import { createOrder } from "../redux/order/orderSlice";
import { useNavigate } from "react-router";

export const useCreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    const orderCreate = await dispatch(createOrder());

    if (createOrder.fulfilled.match(orderCreate)) {
      navigate("/orders");
    }
  };

  return handleCreateOrder;
};
