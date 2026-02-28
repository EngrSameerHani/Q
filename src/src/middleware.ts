import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const user = req.cookies.get('user')?.value;
    const userRole = user ? JSON.parse(user).roles[0].name : null;
    const { pathname } = req.nextUrl;
    const url = req.nextUrl.clone();

    // If the user is not logged in:
    if (!userRole) {
        // Prevent access to /admin and /consultant-dashboard routes.
        if (pathname.startsWith('/admin') || pathname.startsWith('/consultant-dashboard')) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    // For admin users: when on the login page (or root) redirect to /admin.
    if (userRole === 'admin') {
        if (pathname === '/login' || pathname === '/register') {
            url.pathname = '/admin';
            return NextResponse.redirect(url);
        }
        // Allow admin to navigate anywhere.
        return NextResponse.next();
    }

    // For consultant users: when on the login page (or root) redirect to /consultant-dashboard.
    if (userRole === 'consultant') {
        if (pathname === '/login' || pathname === '/register') {
            url.pathname = '/consultant-dashboard';
            return NextResponse.redirect(url);
        }
        // Allow consultant to navigate anywhere.
        return NextResponse.next();
    }

    // For patient users:
    if (userRole === 'patient') {
        // Prevent access to /admin and /consultant-dashboard routes.
        if (pathname.startsWith('/admin') || pathname.startsWith('/consultant-dashboard')) {
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
        // When on the login page, redirect to home page.
        if (pathname === '/login' || pathname === '/register') {
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
        // Allow access to all other routes.
        return NextResponse.next();
    }

    // For any other cases, allow the request.
    return NextResponse.next();
}

// Configure the middleware to run on all routes.
export const config = {
    matcher: '/:path*',
};
