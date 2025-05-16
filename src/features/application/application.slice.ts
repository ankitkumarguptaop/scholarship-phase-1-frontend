import { createSlice } from "@reduxjs/toolkit";
import {
  applicantLoginAction,
  applicationStatusUpdateAction,
} from "./application.action";
import { redirect } from "next/navigation";
import { enqueueSnackbar } from "notistack";
const initialState = {
  isLoading: false,
  error: null,
};

export const applicantLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    removeError: (state: any) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(applicantLoginAction.pending, (state: any) => {
      
        state.isLoading = true;
      })
      .addCase(applicantLoginAction.fulfilled, (state: any) => {
         enqueueSnackbar("Invalid Access Token !", {
          variant: "error",
         
        });
        state.isLoading = false;
        redirect("/welcome");
      })
      .addCase(applicantLoginAction.rejected, (state: any, action: any) => {
        state.isLoading = false;
        enqueueSnackbar("Invalid Access Token !", {
          variant: "error",
         
        });
        state.error = action.error?.message || null;
      })
      .addCase(applicationStatusUpdateAction.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(applicationStatusUpdateAction.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(
        applicationStatusUpdateAction.rejected,
        (state: any, action: any) => {
          state.isLoading = false;
          state.error = action.error?.message || null;
        }
      );
  },
});

export const { removeError } = applicantLoginSlice.actions;
export default applicantLoginSlice.reducer;
