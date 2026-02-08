// Before next js this was called "middleware":

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

// This function will run before every page request or API request.
export const proxy = async (request: NextRequest) => {
  // Getting the "session" iam in
  const session = await getSession();
  // Getting the "page" iam in
  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
  if (isDashboardPage && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const isSignInPage = request.nextUrl.pathname.startsWith("/dashboard");
    const isSignUpPage = request.nextUrl.pathname.startsWith("/dashboard")

  if ((isSignInPage || isSignUpPage) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
};
