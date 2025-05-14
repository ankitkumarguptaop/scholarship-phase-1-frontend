
import { createSlice } from "@reduxjs/toolkit";
import { applicantLoginAction } from "./login.action";
import { signUpUser } from "../scholarship-application/scholarship-application.action";

interface User {
  name: string;
  email: string;
  token: string;
  role: string;
  profilePic?: string;
}

interface AuthState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
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
        state.isLoading = false;
      })
      .addCase(applicantLoginAction.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      })
    
  },
});

export const { removeError } = applicantLoginSlice.actions;
export default applicantLoginSlice.reducer;