import React from "react";
import SvgButton from "./ui/SvgButton";
import Like from "@/image/post/Like.svg";
import Reply from "@/image/post/Reply.svg";
import Share from "@/image/post/Share.svg";
import BookMark from "@/image/post/BookMark.svg";
export default function ActionBar() {
  return (
    <>
      <div className="px-2 flex justify-between items-center">
        <div className="flex -ml-[10px]  justify-start ">
          <SvgButton
            hoverArea="md"
            onClick={() => null}
            hoverEffect="svg"
            transition="size"
            svg={<Like className=" h-6 w-6" />}
          />
          <SvgButton
            hoverArea="md"
            onClick={() => null}
            hoverEffect="svg"
            transition="size"
            svg={<Reply className=" h-6 w-6" />}
          />
          <SvgButton
            hoverArea="md"
            onClick={() => null}
            hoverEffect="svg"
            transition="size"
            svg={<Share className=" h-6 w-6" />}
          />
        </div>
        <div className=" -mr-3">
          <SvgButton
            hoverArea="md"
            onClick={() => null}
            hoverEffect="svg"
            transition="size"
            svg={<BookMark className=" h-6 w-6" />}
          />
        </div>
      </div>
    </>
  );
}
