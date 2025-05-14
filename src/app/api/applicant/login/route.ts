import axiosInstance from "@/libs/axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("✌️body --->", body);

    const response = await axiosInstance.post("scholarships/applicants/login", {
      access_token: body.token,
    });

    console.log(response.data);

    if (response.status === 201) {
    
    } else {
      console.log("Login failed");
    }

    return new Response(JSON.stringify({ message: "Token validate successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
