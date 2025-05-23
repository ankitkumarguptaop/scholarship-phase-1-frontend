import { RESPONSE_CODES } from "@/common/status-code";
import axiosInstance from "@/libs/axios";

import { NextRequest } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { application_uuid: string } }) {
  try {
    const { application_uuid } = await params;

    const response = await axiosInstance.get(
      `scholarships/applications/${application_uuid}/personal-details`
    );

    return new Response(
      JSON.stringify({
        message: "Personal details fetched successfully",
        data: response.data,
      }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error fetching personal details:", error);
    return new Response(JSON.stringify("Internal Server Error"), {
      status: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      headers: { "Content-Type": "application/json" },
    });
  }
}
