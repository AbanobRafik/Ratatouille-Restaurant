import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/API";

const initialState = {
  order: null,
  orders: [],
  state: "idle",
  getAllStatus: "idle",
  updateStatus: "idle",
  deleteStatus: "idle",
  error: null,
};

export const createOrder = createAsyncThunk(
  "/order/create",
  async (order, thunkAPI) => {
    try {
      const response = await API.post("/api/order/create", order);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getUserOrders = createAsyncThunk(
  "/order/getMyOrders",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/api/orders/getMyOrders");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/api/orders/getAllOrders");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: err.message },
      );
    }
  },
);

export const updateOrderStatus = createAsyncThunk(
  "order/updateOrderStatus",
  async ({ orderId, status }, thunkAPI) => {
    try {
      const response = await API.put(`/api/order/${orderId}/editStatus`, {
        status,
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: err.message },
      );
    }
  },
);

export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (orderId, thunkAPI) => {
    try {
      const response = await API.delete(`/api/orders/deleteOrder/${orderId}`);
      return { ...response.data, orderId };
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: err.message },
      );
    }
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.state = "loading";
      state.error = null;
    });
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.state = "success";
      state.order = payload.order;
      state.error = null;
    });
    builder.addCase(createOrder.rejected, (state, { payload }) => {
      state.state = "error";
      state.error = payload;
    });

    // get all users orders
    builder.addCase(getUserOrders.pending, (state) => {
      state.state = "loading";
      state.error = null;
    });
    builder.addCase(getUserOrders.fulfilled, (state, { payload }) => {
      state.state = "success";
      state.orders = payload.orders;
      state.error = null;
    });
    builder.addCase(getUserOrders.rejected, (state, { payload }) => {
      state.state = "error";
      state.error = payload;
    });

    // get all orders
    builder.addCase(getAllOrders.pending, (state) => {
      state.getAllStatus = "loading";
      state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, { payload }) => {
      state.getAllStatus = "success";
      state.orders = payload.orders || payload;
      state.error = null;
    });
    builder.addCase(getAllOrders.rejected, (state, { payload }) => {
      state.getAllStatus = "error";
      state.error = payload;
    });

    // update order status
    builder.addCase(updateOrderStatus.pending, (state) => {
      state.updateStatus = "loading";
      state.error = null;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, { meta }) => {
      state.updateStatus = "success";
      const orderId = meta.arg.orderId;
      state.orders = state.orders.map((order) =>
        order._id === orderId
          ? {
              ...order,
              status: meta.arg.status,
            }
          : order,
      );
      state.error = null;
    });
    builder.addCase(updateOrderStatus.rejected, (state, { payload }) => {
      state.updateStatus = "error";
      state.error = payload;
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.deleteStatus = "loading";
      state.error = null;
    });
    builder.addCase(deleteOrder.fulfilled, (state, { payload, meta }) => {
      state.deleteStatus = "success";
      const deletedId = payload.orderId || payload.order?._id || meta.arg;
      state.orders = state.orders.filter((order) => order._id !== deletedId);
      state.error = null;
    });
    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.deleteStatus = "error";
      state.error = payload;
    });
  },
});

export default orderSlice.reducer;
