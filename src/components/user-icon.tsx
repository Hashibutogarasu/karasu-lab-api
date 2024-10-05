"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { useState } from "react";

export default function UserIcon() {
	const { user, error, isLoading } = useUser();
	const [open, setOpen] = useState(false);

	return (
		<>
			<div>
				<div className="relative">
					{open && (
						<div
							className="absolute right-0 top-8 bg-white shadow-md rounded-md p-2"
							onClick={() => setOpen(false)}
						>
							<ul>
								<li>
									{
										user ? (
											<>
												<a href="/profile" className="text-gray-800 hover:bg-gray-200 block px-2 py-1">
													Profile
												</a>
												<a href="/logout" className="text-gray-800 hover:bg-gray-200 block px-2 py-1">
													Logout
												</a>
											</>
										) : (
											<a href="/login" className="text-gray-800 hover:bg-gray-200 block px-2 py-1">
												Login
											</a>
										)
									}
								</li>
							</ul>
						</div>
					)}
				</div>
				{
					<button onClick={() => setOpen(!open)} className="flex items-center">
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				}
			</div>
		</>
	);
}