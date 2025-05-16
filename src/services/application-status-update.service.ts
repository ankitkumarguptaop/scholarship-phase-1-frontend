import { updateStatusType } from "@/features/application/application.type";
import axios from "axios";

export const updateApplicationStatusService = async (data:updateStatusType ) => {
  return await axios.patch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applications/status`,
    { data }
  );
};
