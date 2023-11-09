import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByUsername } from "@/app/service/user";
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response("Authentication required", { status: 401 });
  }
  return getUserByUsername(user.username).then((res) => NextResponse.json(res));
}
