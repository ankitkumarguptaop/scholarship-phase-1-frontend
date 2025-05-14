import { createAsyncThunk } from "@reduxjs/toolkit";
import { applicantData, loginType } from "./login.type";
import { applicantLoginService } from "@/services/login.service";
 
export const applicantLoginAction = createAsyncThunk<applicantData, string>(
  loginType,
  async (payload, { rejectWithValue }) => {
console.log('✌️payload --->', payload);
    try {
      const response = await applicantLoginService(payload);
      const data: applicantData = response.data;
      console.log("Signup response data:", data);
      return data;
    } catch (error: any) {
      console.error("Signup error:", error);
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);
