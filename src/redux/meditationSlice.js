import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInstructors = createAsyncThunk(
  "meditation/getInstructors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://192.168.1.17:3001/instructors");
      // console.warn(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getTypes = createAsyncThunk(
  "meditation/getTypes",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://192.168.1.17:3001/types");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const meditationSlice = createSlice({
  name: "meditition",
  initialState: {
    instructors: null,
    types: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get instructors
    builder.addCase(getInstructors.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getInstructors.fulfilled, (state, { payload }) => {
      state.instructors = payload;
      state.isLoading = false;
    });

    builder.addCase(getInstructors.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    // Get Types
    builder.addCase(getTypes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getTypes.fulfilled, (state, { payload }) => {
      state.types = payload;
      state.isLoading = false;
    });

    builder.addCase(getTypes.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export const {} = meditationSlice.actions;

export default meditationSlice.reducer;
