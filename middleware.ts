import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  

  const maintenanceMode = process.env.MAINTENANCE_MODE
    ? process.env.MAINTENANCE_MODE === 'true'
    : true

  
  const pathname = request.nextUrl.pathname
  if (pathname === '/maintenance.html') {
    return NextResponse.next()
  }

  if (maintenanceMode) {
    
    const htmlResponse = await fetch(new URL('/maintenance.html', request.url))
    const html = await htmlResponse.text()

    return new NextResponse(html, {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/html',
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
