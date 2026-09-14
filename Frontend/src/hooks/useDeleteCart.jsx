import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";

export const useDeleteCart = () => {
  const dispatch = useDispatch();

  const handleDeleteCart = (dishId) => {
    dispatch(removeFromCart(dishId));
  };

  return handleDeleteCart;
};
