import { configureStore } from "@reduxjs/toolkit";
import praoNavbarReducer from "./features/praoNavbarSlice";

export const store = configureStore({
  reducer: {
    praoNavbar: praoNavbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
