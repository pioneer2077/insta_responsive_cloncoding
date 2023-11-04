import { User } from "@/model/user";
import NextAuth from "next-auth";
import { decl } from "postcss";
declare module "next-auth" {
  interface Session {
    user: User;
  }
}
