"use client";
import { configureStore } from "@reduxjs/toolkit";
import applicantLoginReducer from "../features/login/login.slice";




export const store = configureStore({
  reducer: {
    login:  applicantLoginReducer,
    
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: false, // stringify the state
    }),
});

export type AppStore = typeof store;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
