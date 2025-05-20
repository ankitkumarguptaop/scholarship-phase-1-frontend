import { createSlice } from "@reduxjs/toolkit";
import { createPersonalDetailsAction, getPersonalDetailsAction } from "./personal-details.action";
import { act } from "react";
import { personalDataSchema } from "./personal-details.type";
import { createAppSlice } from "@/store/create-slice";

const initialState :{
  data:any,
  getLoading:boolean,
  isLoading:boolean
  error:any
} = {
  data: null,
  getLoading: false,
  isLoading:false,
  error: null,
};

export const personaldetailsSlice = createAppSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    removeError: (state: any) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getPersonalDetailsAction.pending, (state: any) => {
        state.getLoading = true;
      })
      .addCase(getPersonalDetailsAction.fulfilled, (state: any ,action:any) => {
        state.data=action.payload.data
        state.getLoading = false;
      })
      .addCase(getPersonalDetailsAction.rejected, (state: any, action: any) => {
        state.getLoading = false;
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
