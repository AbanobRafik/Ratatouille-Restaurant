import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/API";

const initialState = {
  cart: null,
  status: "idle",
  error: null,
};

export const getCart = createAsyncThunk("/cart", async (_, thunkAPI) => {
  try {
    const response = await API.get("/api/cart");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addToCart = createAsyncThunk(
  "/cart/addToCart",
  async (cart, thunkAPI) => {
    try {
      const response = await API.post("/api/cart/addToCart", cart);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const removeFromCart = createAsyncThunk(
  "/cart/removeFromCart",
  async (dishId, thunkAPI) => {
    try {
      const response = await API.delete(`/api/cart/removeFromCart/${dishId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.cart = payload;
      state.error = null;
    });
    builder.addCase(getCart.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });

    builder.addCase(addToCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.cart = payload.cart;
    });
    builder.addCase(addToCart.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });

    builder.addCase(removeFromCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeFromCart.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.cart = payload.cart;
    });
    builder.addCase(removeFromCart.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default cartSlice.reducer;
