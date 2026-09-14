import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../redux/order/orderSlice";

export const useGetAllOrders = () => {
  const dispatch = useDispatch();
  const { orders, getAllStatus, error } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return { orders, status: getAllStatus, error };
};
