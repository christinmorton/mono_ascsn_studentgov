const { NextResponse, NextRequest } = require("next/server");
const { COOKIE_NAME } = require("./utils/constants");

export function middleware(request) {
    console.log("going to dashboard...but")
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if((!request.cookies.has(COOKIE_NAME))) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/dashboard/configure')) {
        if((!request.cookies.has(COOKIE_NAME))) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

        if((!request.cookies.has(COOKIE_NAME))) {
            return NextResponse.redirect(new URL('/auth/register', request.url))
        }

        // if() {}
    }
    
    // if (request.nextUrl.pathname.startsWith('/surveys')) {
    //     if((!request.cookies.has(COOKIE_NAME))) {
    //         return NextResponse.redirect(new URL('/auth/login', request.url))
    //     }
    // }

    // if(request.nextUrl.pathname === '/') {
    //     return NextResponse.redirect(new URL('/dashboard', request.url))
    // }
}

export const config = {
    matcher: ['/dashboard/:path*', '/', '/events/:path*', '/surveys/:path*', '/student-clubs/:path*']
}