import React from "react";
import Avatar from "../Avatar";
import image from "@/image/RightArrow.svg";
import Menu from "@/image/post/menu.svg";
import { format, render, cancel, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { urlFor } from "@/app/service/sanityImage";
type Props = {
  createdAt: string;
  username: string;
  userImage: string;
  id: string;
};
export default function PostHeader({
  createdAt,
  username,
  userImage,
  id,
}: Props) {
  const as = format(createdAt);
  return (
    <div className=" flex justify-between items-center pl-1 pb-3">
      <div className="flex items-center gap-4">
        <Avatar size={"sm"} border={false} image={userImage} />

        <p className=" text-sm">{username}</p>
        <p className="text-sm">&#183;&nbsp;&nbsp;{as}</p>
      </div>
      <Menu />
    </div>
  );
}
