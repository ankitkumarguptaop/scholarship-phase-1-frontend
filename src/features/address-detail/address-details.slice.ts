import { createAddressDetailsAction, getAddressDetailsAction } from "./address-details.action";
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

export const addressdetailsSlice = createAppSlice({
  name: "addressDetails",
  initialState,
  reducers: {
    removeError: (state: any) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getAddressDetailsAction.pending, (state: any) => {
        state.getLoading = true;
      })
      .addCase(getAddressDetailsAction.fulfilled, (state: any ,action:any) => {
        state.data=action.payload.data
        state.getLoading = false;
      })
      .addCase(getAddressDetailsAction.rejected, (state: any, action: any) => {
        state.getLoading = false;
        state.error = action.error?.message || null;
      })
      .addCase(createAddressDetailsAction.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(createAddressDetailsAction.fulfilled, (state: any) => {
        state.isLoading = false;
      })
      .addCase(createAddressDetailsAction.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      });
  },
});

export const { removeError } = addressdetailsSlice.actions;
export default addressdetailsSlice.reducer;
