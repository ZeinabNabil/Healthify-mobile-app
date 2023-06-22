import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";
import meditationSlice from "./meditationSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    meditation: meditationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
