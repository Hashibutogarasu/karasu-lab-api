import { AuthProvider } from "@propelauth/nextjs/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function AppProvider({ children }: { children: React.ReactNode }) {
	return <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
		<UserProvider>
			{children}
		</UserProvider>
	</AuthProvider>;
}