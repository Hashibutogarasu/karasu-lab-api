"use client";

import { buttonVariants } from "@/components/ui/button";
import '@/styles/globals.css';
import Link from "next/link";

export default function LogoutPage() {
	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<h1 className="text-3xl font-bold">If you press this button, you will be logged out</h1>
			<div className="h-4" />
			<Link
				rel="noreferrer"
				href="/api/auth/logout"
				className={buttonVariants()}
			>
				Log out
			</Link>
		</section>
	);
}