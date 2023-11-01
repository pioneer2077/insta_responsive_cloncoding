import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders, signIn } from "next-auth/react";
import ColorButton from "@/app/components/ui/ColorButton";
import Signin from "@/app/components/Signin";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};
  return (
    <div className=" bg-white left-0 top-0 fixed h-full w-full">
      <div className="w-full h-full ">
        <div className=" w-full h-3/4  flex justify-center items-center">
          <div className="h-96 w-80 bg-primary">
            <Signin providers={providers} />
          </div>
        </div>
        <div className="w-full h-1/4"></div>
      </div>
    </div>
  );
}
