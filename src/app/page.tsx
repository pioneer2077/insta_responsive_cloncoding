import { getServerSession } from "next-auth";
import FollowingBar from "./components/FollowingBar";
import SideBar from "./components/SideBar";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Posts from "./components/Posts";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  //로그인 안되어있으면 로그인 페이지로 이동
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className=" max-tablet:ml-0 max-desktop:ml-72px desktop:ml-244px flex justify-center pt-5">
      <div className=" w-[1013px] flex justify-center">
        <div className=" w-630px h-full pt-3">
          <FollowingBar />
          <Posts />
        </div>
        <div className=" w-383px h-full max-lap:hidden  pt-7 ">
          <SideBar />
        </div>
      </div>
    </section>
  );
}
