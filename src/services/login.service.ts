import axios from "axios";

export const applicantLoginService = async (token: string) => {
console.log('✌️token --->', token);
  return await axios.post(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/applicant/login`,
    {token}
  );
};