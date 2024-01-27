// pages/_middleware.ts or app/_middleware.ts
import { getCookie } from 'cookies-next';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const username = getCookie('username', { req: request });

    // Perform your check and redirect
    if (!username && url.pathname.startsWith('/app/admin')) {
        url.pathname = '/login';  // Redirect to the login page
        return NextResponse.redirect(url);
    }

    // Continue with the request if the check passes
    return NextResponse.next();
}
