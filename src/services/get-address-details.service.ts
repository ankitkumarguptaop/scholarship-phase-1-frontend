import axios from "axios";

export const getAddressDetailsService = async (application_id: number) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applications/${application_id}/address-details`,
  );
};