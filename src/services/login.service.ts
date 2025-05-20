import axios from "axios";

export const applicantLoginService = async (token: string) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applicant/login`,
    { token }
  );
};
