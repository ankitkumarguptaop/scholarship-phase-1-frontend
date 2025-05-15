import { personalDataSchema } from "@/features/personal-detail/personal-details.type";
import axios from "axios";

export const createPersonalDetailsService = async (data:personalDataSchema ) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applications`,
    { data }
  );
};
