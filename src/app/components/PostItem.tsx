"use client";
import React from "react";
import PostHeader from "./post/PostHeader";
import PostContent from "./post/PostContent";
import PostFooter from "./post/PostFooter";
import { FullPost, SimplePost } from "@/model/post";
type Props = {
  postData: SimplePost;
  priority?: boolean;
};
export default function PostItem({
  postData: {
    comments,
    createdAt,
    id,
    image,
    likes,
    text,
    userImage,
    username,
  },
  priority,
}: Props) {
  console.log(priority);
  const headerData = { createdAt, username, userImage, id };
  const contentData = { image, priority };
  const footerData = { likes, comments, username, text };
  return (
    <article className=" w-[470px] pb-4 mb-5 border-b-[1px] border-solid border-gray-300">
      <PostHeader {...headerData} />
      <PostContent {...contentData} />
      <PostFooter {...footerData} />
    </article>
  );
}
