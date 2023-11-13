import React from "react";
import Avatar from "../Avatar";
import Menu from "@/image/post/Menu.svg";
type Props = {
  username: string;
  userImage: string;
  date?: string;
};
export default function AvatarHeader({ username, userImage, date }: Props) {
  return (
    <div className=" flex justify-between items-center pl-1 pb-3">
      <div className="flex items-center gap-4">
        <Avatar size={"sm"} border={false} image={userImage} />
        <p className=" text-sm">{username}</p>
        {date ?? <p className="text-sm">&#183;&nbsp;&nbsp;{date}</p>}
      </div>
      <Menu />
    </div>
  );
}
