'use server';

import { signOut } from '@base/auth';

export const logout = async () => {
	await signOut();
};
