import axiosInstance from "@/libs/axios";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await axiosInstance.post(
      "scholarships/applications/personal-details",
      {
        body,
      }
    );

    return new Response(
      JSON.stringify({
        message: "Token validate successfully",
        data: response.data,
      }),
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
