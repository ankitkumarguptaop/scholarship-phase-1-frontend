import { RESPONSE_CODES } from "@/common/status-code";
import axiosInstance from "@/libs/axios";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body.data;
    const response = await axiosInstance.post(
      "scholarships/applications/personal-details",
      {
        ...data,
      }
    );

    return new Response(
      JSON.stringify({
        message: response.data.message,
      }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      headers: { "Content-Type": "application/json" },
    });
  }
}
