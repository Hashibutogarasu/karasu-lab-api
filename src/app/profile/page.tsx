"use client";

import React from 'react';
import '@/styles/globals.css';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfilePage() {
	const { user } = useUser();

	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		if (user) {
			setLoading(false);
		}
	}, [user]);

	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			{
				loading ? (
					user ? (
						<h1 className="text-3xl font-bold">Loading...</h1>
					) : (
						<>
							<h1 className="text-3xl font-bold">You are not logged in</h1>
							<Link
								target="_blank"
								rel="noreferrer"
								href="/api/auth/login"
								className={buttonVariants({ variant: 'outline' })}
							>
								Log in
							</Link>
						</>
					)
				) : !user ? (
					<h1 className="text-3xl font-bold">You are not logged in</h1>
				) : (
					<div>
						<h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
						<p className="text-lg">Your email is {user.email}</p>
						<div className="h-4" />
						<Link
							rel="noreferrer"
							href="/api/auth/logout"
							className={buttonVariants()}
						>
							Log out
						</Link>
					</div>
				)
			}
		</section>
	);
}
