import { signIn, signOut } from 'next-auth/react';

export interface AdminSignInPayload {
  username: string;
  password: string;
  redirectTo?: string;
}

export async function adminSignIn(payload: AdminSignInPayload): Promise<void> {
  await signIn('credentials', {
    username: payload.username,
    password: payload.password,
    callbackUrl: payload.redirectTo ?? '/',
  });
}

export async function adminSignOut(redirectTo?: string): Promise<void> {
  await signOut({ callbackUrl: redirectTo ?? '/' });
}
