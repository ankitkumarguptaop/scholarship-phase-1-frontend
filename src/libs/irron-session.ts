import { SessionOptions } from "iron-session";


export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD as string,
  cookieName: "scholarship_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 60*30, // 10 seconds
  },
};

export type sessionData = {
  applicant_uuid: string;
  advisor_uuid: string;
  email: string;
  token: string;
  uuid: string;
  id: number;
  updated_at: string; 
};

export interface SessionData {
  applicantData: sessionData | null;
  headquarter: string;
  isLoggedIn: boolean;
}