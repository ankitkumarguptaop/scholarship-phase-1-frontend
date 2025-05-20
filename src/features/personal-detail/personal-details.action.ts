import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPersonalDetailsType,
  getPersonalDetailsType,
  personalDataSchema,
} from "./personal-details.type";
import { getPersonalDetailsService } from "@/services/get-personal-details.service";
import { createPersonalDetailsService } from "@/services/create-personal-details.service";

export const getPersonalDetailsAction = createAsyncThunk<
  personalDataSchema,
  string
>(getPersonalDetailsType, async (payload, { rejectWithValue }) => {
  try {
    const response = await getPersonalDetailsService(payload);
    const data = response.data;
    console.log(" response data:", data);
    return data;
  } catch (error: any) {
    console.error(" error:", error);
    return rejectWithValue(error.response?.data || "failed");
  }
});

export const createPersonalDetailsAction = createAsyncThunk<
  Partial<personalDataSchema>,
  personalDataSchema
>(createPersonalDetailsType, async (payload, { rejectWithValue }) => {
  console.log("✌️payload --->", payload);
  try {
    const response = await createPersonalDetailsService(payload);
    const data = response.data;
    console.log(" response data:", data);
    return data;
  } catch (error: any) {
    console.error(" error:", error);
    return rejectWithValue(error.response?.data || " failed");
  }
});
