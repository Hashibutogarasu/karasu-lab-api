import { auth0 } from '@/utils/supabase';
import { withApiAuthRequired, } from '@auth0/nextjs-auth0';
import { getAccessToken } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';

const GET = withApiAuthRequired(async function GET(req) {
  const res = new NextResponse();
  const { accessToken } = await getAccessToken(req, res);
  return NextResponse.json({
    token: accessToken,
  });
});

export { GET };