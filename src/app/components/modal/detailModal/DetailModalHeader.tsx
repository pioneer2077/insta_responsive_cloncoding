import React from "react";
import PostHeader from "../../post/PostHeader";
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
  const headerData = { createdAt, username, userImage, id };
  return (
    <div className="w-[470px] pt-2 pl-2 pr-2 mb-5 border-b-[1px] border-solid border-gray-300">
      <PostHeader {...headerData}></PostHeader>
    </div>
  );
}
