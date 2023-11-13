import React from "react";
import Avatar from "../Avatar";
import image from "@/image/RightArrow.svg";
import Menu from "@/image/post/menu.svg";
import { format, render, cancel, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { urlFor } from "@/app/service/sanityImage";
import AvatarHeader from "../ui/AvatarHeader";
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
  return <AvatarHeader date={as} userImage={userImage} username={username} />;
}
