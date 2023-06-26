import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userImageRed: "",
    userNameReg: "",
  },
  reducers: {
    getImage: (state) => {
      state.userImageRed;
    },
    putImage: (state, action) => {
      state.userImageRed = action.payload;
    },
    putName: (state, action) => {
      state.userNameReg = action.payload;
    },
    getName: (state) => {
      state.userNameReg;
    },
  },
});

export const { getImage, putImage, getName, putName } = userSlice.actions;

export default userSlice.reducer;
