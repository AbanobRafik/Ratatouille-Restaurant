import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import dishReducer from "./dish/dishSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dishes: dishReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
