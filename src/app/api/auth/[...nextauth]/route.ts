

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ROUTES from "@/constants/routes";


const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!adminUsername || !adminPassword || !process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing environment variables for authentication");
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
       
        if (!credentials) return null;

        const { username, password } = credentials;

      
        if (username === adminUsername && password === adminPassword) {
         
          return { id: "1", name: "Admin" };
        }

     
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, 
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: ROUTES.AUTH_SIGNIN,
  },
});

export { handler as GET, handler as POST };
