import React from "react";
import ShowMeMain from "./ShowMeMain";
import ShowOtherMain from "./ShowOtherMain";
import { User } from "@/model/user";
type Props = {
  user: User;
};
export default function SideBar({ user }: Props) {
  return (
    <div className=" ml-16">
      <div>
        <ShowMeMain user={user} />
      </div>
      <div className=" pt-5">
        <p className=" pb-4 text-sm text-gray font-semibold">
          회원님을 위한 추천
        </p>
        <ShowOtherMain />
      </div>
    </div>
  );
}
