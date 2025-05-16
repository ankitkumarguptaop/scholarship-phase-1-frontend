import axiosInstance from "@/libs/axios";

import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body.data;
console.log('✌️data77 --->', data);
    const response = await axiosInstance.patch(
      "scholarships/applications/status",
      {
        ...data,
      }
    );

    return new Response(
      JSON.stringify({
        message: "status chnaged  successfully",
        data: response.data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify( error ||"Internal Server Error"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
