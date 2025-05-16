"use server"

import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { SessionData, sessionOptions } from "@/libs/irron-session";
import { cookies } from "next/headers";

async function  logout() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );
  session.destroy();
  redirect("/login");
}


export default logout