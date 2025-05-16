// middleware.ts
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";
import { sessionOptions, SessionData } from "@/libs/irron-session";

const PROTECTED_ROUTES = ["/welcome" ,"/personal-details"];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionData>(request, res, sessionOptions);

  const isProtected = PROTECTED_ROUTES.some((path) => request.nextUrl.pathname.startsWith(path));

  if (isProtected && (!session.isLoggedIn || !session.applicantData)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return res;
}

export const config = {
  matcher: ["/welcome" ,"/personal-details"],
};
