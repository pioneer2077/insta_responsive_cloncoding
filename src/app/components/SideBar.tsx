import React from "react";
import ShowMeMain from "./ShowMeMain";
import ShowOtherMain from "./ShowOtherMain";
import { User } from "@/model/user";
import useSWR from "swr";

//왜 서버컴포넌트인가? props로 받은 user를 기반으로 그리기 때문에.정적임.
//ShowOtherMain은 동적이므로 클라이언트 컴포넌트임.
export default function SideBar() {
  return (
    <div className=" ml-16">
      <div>
        <ShowMeMain />
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
