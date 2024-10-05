import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function NotFoundPage() {
	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<h1 className="text-3xl font-bold">404 - Page Not Found</h1>
			<p className="text-lg">
				The page you are looking for does not exist. It may have been removed, had its name changed, or is
				temporarily unavailable.
			</p>
			<div className="flex gap-4">
				<Link href="/" className={buttonVariants()}>
					Go Home
				</Link>
			</div>
		</section>
	);
}
