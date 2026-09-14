import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/API";

export const getDishes = createAsyncThunk("dish/get", async (_, thunkAPI) => {
  try {
    const response = await API.get("/api/getAll");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  dishes: [],
  status: "idle",
  error: null,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDishes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.dishes = payload.dishes;
    });
    builder.addCase(getDishes.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default dishSlice.reducer;
