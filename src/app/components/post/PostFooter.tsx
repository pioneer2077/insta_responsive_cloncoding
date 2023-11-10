import React from "react";
import SvgButton from "../ui/SvgButton";
import Like from "@/image/post/Like.svg";
import Reply from "@/image/post/Reply.svg";
import Share from "@/image/post/Share.svg";
import BookMark from "@/image/post/Bookmark.svg";
import ColorButton from "../ui/ColorButton";
import Emoticon from "@/image/Emoticon.svg";
import { Comment } from "@/model/post";
type Props = {
  likes: string[];
  comments: number;
  text: string;
  username: string;
};
export default function PostFooter({ username, comments, likes, text }: Props) {
  return (
    <div>
      <div className="w-[470px] flex justify-between items-center">
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
      <div className=" pl-1 flex flex-col gap-1">
        <p className=" text-sm font-bold ">좋아요 {likes.length ?? 0}개</p>
        <div className=" flex items-center">
          <p className=" text-sm font-semibold">{username}</p>
          &nbsp;
          <p className=" text-sm">{text}</p>
        </div>
        <p className=" text-sm text-[#737373]">
          댓글 {comments ?? 0}개 모두 보기
        </p>
      </div>
      <div className=" ml-1 flex items-center w-full">
        <form action="" className=" flex w-full">
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
      </div>
    </div>
  );
}
