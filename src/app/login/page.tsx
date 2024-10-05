"use client";

import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginPage() {
	const router = useRouter();

	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<h1 className="text-3xl font-bold">Login</h1>
			<p>
				Login to access your account.
			</p>

			<Link
				rel="noreferrer"
				href="/api/auth/login"
				className={buttonVariants()}
			>
				Log in
			</Link>
		</section>
	);
}
