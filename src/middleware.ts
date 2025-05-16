import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";
import { sessionOptions, SessionData } from "@/libs/irron-session";

const PROTECTED_ROUTES = ["/welcome", "/personal-details"];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionData>(request, res, sessionOptions);

  const pathname = request.nextUrl.pathname;
  const isProtected = PROTECTED_ROUTES.some((path) => pathname.startsWith(path));

  if (isProtected && (!session.isLoggedIn || !session.applicantData)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    pathname.startsWith("/welcome") &&
    (session.applicantData?.status === "ONGOING" ||
      session.applicantData?.status === "COMPLETED")
  ) {
    return NextResponse.redirect(new URL("/personal-details", request.url));
  }

  return res;
}

export const config = {
  matcher: ["/welcome", "/personal-details"],
};
