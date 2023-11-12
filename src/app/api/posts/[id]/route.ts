import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getUserByUsername } from "@/app/service/user";
import { getPost, getPostsByAuthor } from "@/app/service/posts";
import { authOptions } from "../../auth/[...nextauth]/route";
type Context = {
  params: {
    id: string;
  };
};
export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication required", { status: 401 });
  }
  return getPost(context.params.id).then((res) => NextResponse.json(res));
}
