import { handleProfile } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export async function GET(req: any, res: any) {
	try {
		const data = await handleProfile(req, res);
		return new NextResponse(JSON.stringify(await data.json()), { status: 200 });
	} catch (error) {
		return new NextResponse(JSON.stringify({
			error: 'User is not authenticated',
		}), { status: 401 });
	}
}