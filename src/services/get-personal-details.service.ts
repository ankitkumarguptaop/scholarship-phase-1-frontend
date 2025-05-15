import axios from "axios";

export const getPersonalDetailsService = async (application_uuid: string) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applications/${application_uuid}`,
  );
};