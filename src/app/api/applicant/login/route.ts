import axiosInstance from "@/libs/axios";
import { getIronSession } from "iron-session";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/libs/irron-session";
import { RESPONSE_CODES } from "@/common/status-code";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await axiosInstance.post("scholarships/applicants/login", {
      access_token: body.token,
    });

    if (response.status === 200) {
      const session = await getIronSession<SessionData>(
        await cookies(),
        sessionOptions
      );
      session.isLoggedIn = true;
      session.applicantData = response.data ?? null;
      await session.save();
    } else {
      return new Response(JSON.stringify({ message: response.data.detail }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: response.data.message }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      headers: { "Content-Type": "application/json" },
    });
  }
}
