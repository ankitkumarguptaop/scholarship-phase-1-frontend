import axiosInstance from "@/libs/axios";
import { getIronSession } from "iron-session";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/libs/irron-session";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await axiosInstance.post("scholarships/applicants/login", {
      access_token: body.token,
    });



    if (response.status === 201) {
      const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
      session.isLoggedIn = true;
      session.applicantData = response.data ?? null;
      await session.save();
   
    } else {
      console.log("Login failed");
    }

    return new Response(
      JSON.stringify({ message: "Token validate successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
