import { createSlice } from "@reduxjs/toolkit";
import { createPersonalDetailsAction, getPersonalDetailsAction } from "./personal-details.action";
import { act } from "react";
import { personalDataSchema } from "./personal-details.type";

const initialState :{
  data:any,
  isLoading:boolean,
  error:any
} = {
  data: null,
  isLoading: false,
  error: null,
};

export const personaldetailsSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    removeError: (state: any) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getPersonalDetailsAction.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getPersonalDetailsAction.fulfilled, (state: any ,action:any) => {
        state.data=action.payload.data
        state.isLoading = false;
      })
      .addCase(getPersonalDetailsAction.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      })
      .addCase(createPersonalDetailsAction.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(createPersonalDetailsAction.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(createPersonalDetailsAction.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      });
  },
});

export const { removeError } = personaldetailsSlice.actions;
export default personaldetailsSlice.reducer;
