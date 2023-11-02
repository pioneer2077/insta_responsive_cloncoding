import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";
import { createClient } from "next-sanity";
import { addUser } from "@/app/service/user";
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
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
    async signIn({ user: { id, email, image, name } }) {
      // if (!email) return false;
      // addUser({
      //   id,
      //   email,
      //   image,
      //   name: name || "",
      //   username: email.split("@")[0],
      // });
      // console.log(1111);
      const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        apiVersion: "2023-11-25",
        useCdn: false,
        token: process.env.SANITY_SECRET_TOKEN,
      });
      const loginUser = {
        _id: id,
        _type: "user",
        name,
        email,
        image,
        username: email?.split("@")[0] || "",
        following: [],
        followers: [],
        bookmarks: [],
      };
      client.createIfNotExists(loginUser).then((res) => {
        console.log(res);
      });
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
