import { withApiAuthRequired, } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = withApiAuthRequired(function api() {
  return new NextResponse("Hello from an authenticated API route");
});