import { useDispatch } from "react-redux";
import { getCart } from "../redux/cart/cartSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useGetCart = () => {
  const dispatch = useDispatch();
  const { cart, status } = useSelector((state) => state.cart);
  const error = useSelector((state) => state.cart.error);
  

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return { cart, status , error};
};
