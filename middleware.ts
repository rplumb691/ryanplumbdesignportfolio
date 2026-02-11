import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "portfolio_auth";
const PUBLIC_PATHS = ["/unlock", "/api/unlock"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  if (PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.get(AUTH_COOKIE)?.value === "true";

  if (hasSession) {
    if (pathname === "/unlock") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/";
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/public") || pathname.match(/\.(\w+)$/)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/unlock", request.url);
  if (pathname && pathname !== "/") {
    loginUrl.searchParams.set("redirectTo", `${pathname}${request.nextUrl.search}`);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
