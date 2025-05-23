import { RESPONSE_CODES } from "@/common/status-code";
import axiosInstance from "@/libs/axios";

import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { application_uuid: string } }
) {
  try {
    const { application_uuid } = await params;

    const response = await axiosInstance.get(
      `scholarship-applications/${application_uuid}/address-details`
    );
    console.log("--?response", response.data);
    return new Response(
      JSON.stringify({
        message: "Address details fetched successfully",
        data: response?.data,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { application_uuid: string } }
) {
  try {
    const { application_uuid } = await params;
    const body = await request.json();

    const data = body?.data;
    const response = await axiosInstance.put(
      `scholarship-applications/${application_uuid}/address-details`,
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
