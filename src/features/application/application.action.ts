import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  applicantData,
  loginType,
  statusType,
  updateStatusType,
} from "./application.type";
import { applicantLoginService } from "@/services/login.service";
import { updateApplicationStatusService } from "@/services/application-status-update.service";
import { enqueueSnackbar } from "notistack";

export const applicantLoginAction = createAsyncThunk<applicantData, string>(
  loginType,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await applicantLoginService(payload);
      const data: applicantData = response.data;
      console.log("login response data:", data);
      enqueueSnackbar(data.message, {
        variant: "success",
      });
      return data;
    } catch (error: any) {
      enqueueSnackbar(error.response?.data.message || "Internal Server Error", {
        variant: "error",
      });
      return rejectWithValue(error.response?.data.message || " failed");
    }
  }
);

export const applicationStatusUpdateAction = createAsyncThunk<
  applicantData,
  updateStatusType
>(statusType, async (payload, { rejectWithValue }) => {
  try {
    const response = await updateApplicationStatusService(payload);
    const data: applicantData = response.data;
    console.log(" response data:", data);
    return data;
  } catch (error: any) {
    console.error("error:", error);
    return rejectWithValue(error.response?.data || " failed");
  }
});
