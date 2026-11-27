import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { REGION_COOKIE, REGION_HEADER, isRegion, regionFromCountry } from '@/lib/region'

const STATEPROOF_HOST = 'getstateproof.com'
const STATEPROOF_HOSTS = ['getstateproof.com', 'www.getstateproof.com']
/** Pages of the StateProof site besides the landing page. */
const STATEPROOF_PAGES = ['/about', '/privacy-notice', '/terms-of-service', '/cookies']
/** Other StateProof domains that send visitors to getstateproof.com. */
const STATEPROOF_REDIRECT_HOSTS = ['stateproof.app', 'www.stateproof.app']

export async function middleware(request: NextRequest) {
  // Determine request path early and allow common assets/endpoints to bypass middleware
  const pathname = request.nextUrl.pathname
  // StateProof domains get their own browser-tab icon instead of the Receipters one.
  if (pathname === '/favicon.ico') {
    const h = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(',')[0].trim().toLowerCase().replace(/:\d+$/, '')
    if (STATEPROOF_HOSTS.includes(h)) return NextResponse.rewrite(new URL('/stateproof/favicon.ico', request.url))
  }
  if (
    pathname === '/maintenance' ||
    pathname === '/maintenance.html' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // StateProof (Receipters LLC's US product) is served from this same app on its own domains.
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(',')[0].trim().toLowerCase().replace(/:\d+$/, '')
  if (STATEPROOF_REDIRECT_HOSTS.includes(host)) {
    return NextResponse.redirect(`https://${STATEPROOF_HOST}${pathname}${request.nextUrl.search}`, 308)
  }
  if (STATEPROOF_HOSTS.includes(host)) {
    if (pathname === '/') return NextResponse.rewrite(new URL('/stateproof', request.url))
    if (STATEPROOF_PAGES.includes(pathname)) return NextResponse.rewrite(new URL(`/stateproof${pathname}`, request.url))
    if (pathname === '/states' || /^\/states\/[a-z-]+$/.test(pathname)) return NextResponse.rewrite(new URL(`/stateproof${pathname}`, request.url))
    // Static files for the page (icon) are allowed; every other address goes to the landing page.
    if (pathname.startsWith('/stateproof/') && /\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next()
    return NextResponse.redirect(`https://${host}/`, 308)
  }

  // Maintenance mode toggle. Off by default; set the MAINTENANCE_MODE environment
  // variable to "true" (and redeploy) to show the maintenance page site-wide.
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  if (maintenanceMode) {
    // Try to fetch the public maintenance page; if that fails, use a small inline fallback HTML
    let html = ''
    try {
      const origin = request.nextUrl.origin
      const htmlResponse = await fetch(new URL('/maintenance', origin).toString())
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

  // Country version: the visitor's own choice if they made one, otherwise their country.
  const chosen = request.cookies.get(REGION_COOKIE)?.value
  const region = isRegion(chosen) ? chosen : regionFromCountry(request.headers.get('cloudfront-viewer-country'))
  const headers = new Headers(request.headers)
  headers.set(REGION_HEADER, region)
  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image).*)',
  ],
}
