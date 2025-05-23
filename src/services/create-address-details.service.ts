import { CreateAddressDetailsSchema } from "@/features/address-detail/address-details.type";
import axios from "axios";

export const createAddressDetailsService = async (data: CreateAddressDetailsSchema ) => {
  return await axios.put(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applications/${data.application_id}/address-details`,
    { data }
  );
};
