/* eslint-disable @typescript-eslint/no-unused-vars */

import NextAuth from 'next-auth';
import authConfig from '@/auth.config';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: '/',
		signOut: '/',
	},
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		if (user) {
	// 			token.id = user.user.id;
	// 			token.email = user.user.email;
	// 			token.role = user.user.role;
	// 			token.token = user.token;
	// 		}

	// 		return token;
	// 	},
	// 	async session({ session, token }: { session: any; token: any }) {
	// 		session.user = {
	// 			id: token.id,
	// 			email: token.email,
	// 			role: token.role,
	// 			token: token.token,
	// 		};

	// 		return session;
	// 	},
	// 	async redirect({ url, baseUrl }) {
	// 		return `${baseUrl}`;
	// 	},
	// },
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			session.user = token as any;
			return session;
		},
		async redirect({ url, baseUrl }) {
			return `${baseUrl}`;
		},
	},
	session: { strategy: 'jwt' },
	...authConfig,
});
