import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useAddCart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAddToCart = (cart) => {
    if (!user) {
      navigate("/login");
    }

    dispatch(addToCart(cart));
  };
  return handleAddToCart;
};
