import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";
import { sessionOptions, SessionData } from "@/libs/irron-session";
import { SCHOLARSHIP_APPLICATION_STATUS } from "./common/scholarship-application-status";
import { NAVIGATION_ROUTES } from "./common/navigation-routes";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession<SessionData>(
    request,
    res,
    sessionOptions
  );

  const { login, ...protectedRoutes } = NAVIGATION_ROUTES;

  const PROTECTED_ROUTES = Object.values(protectedRoutes);
  
  const pathname = request.nextUrl.pathname;
  const isProtected = PROTECTED_ROUTES.some((path) =>
    pathname.startsWith(path)
  );
  console.log(pathname);
  if (
    session.isLoggedIn &&
    session.applicantData &&
    pathname.startsWith("/login")
  ) {
    return NextResponse.redirect(
      new URL(NAVIGATION_ROUTES.welcome, request.url)
    );
  }

  if (isProtected && (!session.isLoggedIn || !session.applicantData)) {
    return NextResponse.redirect(new URL(NAVIGATION_ROUTES.login, request.url));
  }
  if (
    pathname.startsWith("/welcome") &&
    session.applicantData?.status === SCHOLARSHIP_APPLICATION_STATUS.inProcess
  ) {
    return NextResponse.redirect(
      new URL(NAVIGATION_ROUTES.personal, request.url)
    );
  }

  return res;
}

export const config = {
  matcher: ["/welcome", "/personal-details", "/login"],
};
