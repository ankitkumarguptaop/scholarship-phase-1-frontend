import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createAddressDetailsType,
  getAddressDetailsType,
  CreateAddressDetailsSchema,
} from "./address-details.type";
import { createAddressDetailsService } from "@/services/create-address-details.service";
import { getAddressDetailsService } from "@/services/get-address-details.service";

export const getAddressDetailsAction = createAsyncThunk<
  CreateAddressDetailsSchema,
  number
>(getAddressDetailsType, async (payload, { rejectWithValue }) => {
  try {
    const response = await getAddressDetailsService(payload);
    const data = response.data;
    console.log(" response data:", data);
    return data;
  } catch (error: any) {
    console.error(" error:", error);
    return rejectWithValue(error.response?.data || "failed");
  }
});

export const createAddressDetailsAction = createAsyncThunk<
  Partial<CreateAddressDetailsSchema>,
  CreateAddressDetailsSchema
>(createAddressDetailsType, async (payload, { rejectWithValue }) => {
  console.log("payload --->", payload);
  try {
    const response = await createAddressDetailsService(payload);
    const data = response.data;
    console.log(" response data:", data);
    return data;
  } catch (error: any) {
    console.error(" error:", error);
    return rejectWithValue(error.response?.data || " failed");
  }
});
