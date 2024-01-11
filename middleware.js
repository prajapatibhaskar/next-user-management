import { NextResponse } from "next/server";

const isLoggedIn = true;

export function middleware(request) {
    if(isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/userslist/:path*', '/api/users/:path*']
}
