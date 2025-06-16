import { DefaultSession } from 'next-auth';
// import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: {
			id: number;
			email: string;
			token?: string;
			// role: string;
		} & DefaultSession['user'];
	}
	// interface User {
	// 	token: string;
	// 	user: {
	// 		id: number;
	// 		email: string;
	// 		role: string;
	// 	};
	// }

	// 	interface User extends DefaultUser {
	// 		token: string;
	// 		user: {
	// 			id: number;
	// 			email: string;
	// 			role: string;
	// 		};
	// 	}
	// }

	// declare module 'next-auth/jwt' {
	// 	interface JWT extends DefaultJWT {
	// 		id?: number;
	// 		email?: string;
	// 		role?: string;
	// 		token?: string;
	// 	}
}
