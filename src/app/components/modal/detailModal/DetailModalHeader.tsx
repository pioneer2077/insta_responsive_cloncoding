import React from "react";
import PostHeader from "../../post/PostHeader";
import AvatarHeader from "../../ui/AvatarHeader";
import { format } from "timeago.js";
type Props = {
  headerData: {
    createdAt: string;
    username: string;
    userImage: string;
    id: string;
  };
};
export default function DetailModalHeader({
  headerData: { createdAt, id, userImage, username },
}: Props) {
  const date = format(createdAt);

  const headerData = { username, userImage, id };
  return (
    <div className="pt-2 pl-2 pr-2 mb-5 border-b-[1px] border-solid border-gray-300">
      <AvatarHeader {...headerData} />
    </div>
  );
}
