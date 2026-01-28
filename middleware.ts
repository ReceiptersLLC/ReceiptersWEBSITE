import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Determine request path early and allow common assets/endpoints to bypass middleware
  const pathname = request.nextUrl.pathname
  if (
    pathname === '/maintenance.html' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Maintenance mode is enabled
  const maintenanceMode = true

  if (maintenanceMode) {
    // Try to fetch the public maintenance page; if that fails, use a small inline fallback HTML
    let html = ''
    try {
      const origin = request.nextUrl.origin
      const htmlResponse = await fetch(new URL('/maintenance.html', origin).toString())
      if (!htmlResponse.ok) throw new Error('Failed to fetch maintenance page')
      html = await htmlResponse.text()
    } catch (err) {
      // Fallback HTML ensures the live server shows the maintenance message instead of a 500
      html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Service Unavailable</title></head>
<body>
  <h1>Service Unavailable</h1>
  <p>We are currently performing maintenance. Please check back later.</p>
</body>
</html>`
      console.error('Maintenance page fetch failed, using fallback HTML:', err)
    }

    return new NextResponse(html, {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
