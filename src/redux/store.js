import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";
import meditationSlice from "./meditationSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    meditation: meditationSlice,
    user:userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
