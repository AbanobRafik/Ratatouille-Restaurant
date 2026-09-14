import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserOrders } from "../redux/order/orderSlice";

export const useGetUserOrders = () => {
  const dispatch = useDispatch();

  const { orders, state, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return { orders, state, error };
};
