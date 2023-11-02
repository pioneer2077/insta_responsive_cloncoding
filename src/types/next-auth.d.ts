import NextAuth, { DefaultSession } from "next-auth";
import { decl } from "postcss";
declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}
