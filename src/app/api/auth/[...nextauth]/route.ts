import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";
dotenv.config();
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
