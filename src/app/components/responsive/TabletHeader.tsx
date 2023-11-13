import { Instagram } from "@/image/nav";
import React from "react";

export default function TabletHeader() {
  return (
    <div className=" fixed bg-white z-10 justify-between items-center w-full  hidden max-tablet:flex border-[1px] border-[#dbdbdb] border-solid border-t-0 border-r-0 border-l-0  px-3 py-3">
      <Instagram />
      <div>
        <div>검색창</div>
        <div>하트</div>
      </div>
    </div>
  );
}
