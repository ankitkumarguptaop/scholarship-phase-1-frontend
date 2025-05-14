
import { createSlice } from "@reduxjs/toolkit";

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

export const scholarshipApplicationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeError: (state: any) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(signUpUser.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(signUpUser.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      })
    
  },
});

export const { removeError } = scholarshipApplicationSlice.actions;
export default scholarshipApplicationSlice.reducer;