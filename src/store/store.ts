"use client";
import { configureStore } from "@reduxjs/toolkit";
import applicantLoginReducer from "../features/login/login.slice";
import personaldetailsReducer from "../features/personal-detail/personal-details.slice"




export const store = configureStore({
  reducer: {
    login:  applicantLoginReducer,
    personalDetails : personaldetailsReducer
    
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: false, // stringify the state
    }),
});

export type AppStore = typeof store;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
