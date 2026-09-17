import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { useSelector } from "react-redux";

export const useAddCart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleAddToCart = (cart) => {
    if (!user) {
      return false;
    }

    dispatch(addToCart(cart));
    return true;
  };
  return handleAddToCart;
};
