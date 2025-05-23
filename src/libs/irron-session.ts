import { ScholarshipApplicationStatus } from "@/features/application/application.type";
import { SessionOptions } from "iron-session";


export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD as string,
  cookieName: "scholarship_session",
  cookieOptions: {
    maxAge: 60*30, // 30 mints 
  },
};

export type sessionData = {
  applicant_uuid: string;
  advisor_uuid: string;
  uuid: string;
  id: number;
  updated_at: string; 
  status: ScholarshipApplicationStatus;
  applicant: {
    name: string;
    last_name: string;
    email: string;
  }
};

export interface SessionData {
  applicantData: sessionData | null;
  headquarter: string;
  isLoggedIn: boolean;
}