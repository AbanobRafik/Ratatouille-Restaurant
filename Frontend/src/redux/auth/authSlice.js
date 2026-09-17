import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/API";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await API.post("/auth/register", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await API.post("/auth/login", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const checkUser = createAsyncThunk("auth/check", async (_, thunkAPI) => {
  try {
    const response = await API.get("/auth/me");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await API.post("/auth/logout");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

const initialState = {
  user: null,
  status: "idle",
  initialized: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.user = payload;
      state.initialized = true;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload.message || "Registration failed";
    });
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.user = payload.user;
      state.initialized = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    // Check
    builder.addCase(checkUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(checkUser.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.user = payload.user;
      state.initialized = true;
    });
    builder.addCase(checkUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = null;
      state.user = null;
      state.initialized = true;
    });
    // Logout
    builder.addCase(logoutUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.status = "idle";
      state.user = null;
    });
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
