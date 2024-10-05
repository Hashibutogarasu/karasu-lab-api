"use client";

import React, { useState } from 'react';
import '@/styles/globals.css';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function ProfilePage() {
	const { user } = useUser();
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState('');
	const [copied, setCopied] = useState(false);
	const [data, setData] = useState<string>();

	React.useEffect(() => {
		if (user) {
			setLoading(false);
		}

		fetch('/api/auth/token')
			.then(async (res) => {
				const data = await res.json();
				setToken(data.token);
			});
	}, [user]);

	async function copyToken() {
		navigator.clipboard.writeText(token);
		setCopied(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setCopied(false);
	}

	async function testAPI() {
		const res = await fetch('https://api.karasu256.com/private', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		const data = await res.json();
		setData(JSON.stringify(data, null, 2));
	}

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
							className={buttonVariants()}>
							Log out
						</Link>
						<div className="h-4" />
						{
							token ?
								(
									<>
										<h2 className="text-2xl font-bold">Your Token</h2>
										<pre style={{ whiteSpace: 'pre-wrap' }}>{token}</pre>
										<div className="h-4" />
										<Link
											rel="noreferrer"
											href="#"
											onClick={copyToken}
											className={buttonVariants()}
										>
											{copied ? 'Copied!' : 'Copy token'}
										</Link>
										<div className="h-4" />
										<Link
											rel="noreferrer"
											href="#"
											onClick={testAPI}
											className={buttonVariants()}
										>
											Test API
										</Link>
										<pre>{data}</pre>
									</>
								) : <>
									<h2 className="text-2xl font-bold">No token found</h2>
								</>
						}
					</div>
				)
			}
		</section>
	);
}


export default withPageAuthRequired(ProfilePage);