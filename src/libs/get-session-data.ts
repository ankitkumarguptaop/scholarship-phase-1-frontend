"use server"

import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/irron-session";
import { cookies } from "next/headers";

async function  GetSession() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );
return session.applicantData
}


export default GetSession