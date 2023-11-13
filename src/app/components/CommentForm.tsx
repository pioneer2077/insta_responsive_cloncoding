import React from "react";
import ColorButton from "./ui/ColorButton";
import SvgButton from "./ui/SvgButton";
import Emoticon from "@/image/Emoticon.svg";
export default function CommentForm() {
  return (
    <form action="" className=" p-2 flex w-full">
      <input
        className=" placeholder:text-sm placeholder:text-[#737373] outline-none text-sm leading-tight grow"
        type="
          "
        placeholder="댓글 달기..."
      />
      <ColorButton
        buttonColor="white"
        onClick={() => null}
        text="게시"
        textSize="md"
      />
      <div className="">
        <SvgButton onClick={() => null} svg={<Emoticon />}></SvgButton>
      </div>
    </form>
  );
}
