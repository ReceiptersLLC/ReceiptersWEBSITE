import { NextRequest, NextResponse } from 'next/server';
import { REGION_COOKIE, isRegion, regionFromCountry } from '@/lib/region';

// Shows which country version this visitor gets, so the setup can be checked after a deploy.
export function GET(request: NextRequest) {
  const country = request.headers.get('cloudfront-viewer-country');
  const chosen = request.cookies.get(REGION_COOKIE)?.value;
  return NextResponse.json(
    {
      countryDetected: country ?? null,
      region: isRegion(chosen) ? chosen : regionFromCountry(country),
      chosenByVisitor: isRegion(chosen),
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
