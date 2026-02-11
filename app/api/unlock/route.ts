import { NextResponse } from "next/server";

const PASSWORD = process.env.PORTFOLIO_PASSWORD ?? "RyanPlumb";
const COOKIE_NAME = "portfolio_auth";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");

  const safeRedirect =
    typeof redirectTo === "string" && redirectTo.startsWith("/") ? redirectTo : "/";

  if (typeof password === "string" && password === PASSWORD) {
    const response = NextResponse.redirect(new URL(safeRedirect || "/", request.url));
    response.cookies.set({
      name: COOKIE_NAME,
      value: "true",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: MAX_AGE,
    });
    return response;
  }

  const errorUrl = new URL("/unlock", request.url);
  errorUrl.searchParams.set("error", "1");
  if (safeRedirect && safeRedirect !== "/") {
    errorUrl.searchParams.set("redirectTo", safeRedirect);
  }
  return NextResponse.redirect(errorUrl);
}
