import { NextResponse } from "next/server";
import React from "react";

const middleware = (request) => {
  console.log("middleware");
  //   if (request.nextUrl.pathname != "/login")
  return NextResponse.redirect(new URL("/login", request.url));
};
export const config = {
  matcher: ["/about/aboutCollage/:path*", "/studentList/:path*"], // for redirecting from /about/aboutCollage path
  matcher: ["/about/:path+", "/studentList/:path*"], // this will also redirecting from /about/aboutCollage path
};
export default middleware;
/*
1 + (Plus Sign): ------------------

Matches one or more segments of a path.
This ensures that there is at least one part of the path present.
For example, /about/:path+ would match:
/about/something
/about/anything/more
But it won’t match /about/ because there’s no path after /about.


2 * (Asterisk Sign):----------------

Matches zero or more segments of a path.
It’s more flexible than + because it can match even when the dynamic segment is missing.
For example, /about/:path* would match:
/about/
/about/something
/about/anything/more
It matches even when there is nothing after /about.
*/
