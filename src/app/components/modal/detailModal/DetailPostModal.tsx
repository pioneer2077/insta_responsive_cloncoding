"use client";
import React from "react";
import DetailModalHeader from "./DetailModalHeader";
import DetailModalComments from "./DetailModalComments";
import DetailModalInput from "./DetailModalInput";
import DetailModalContents from "./DetailModalContents";
import { FullPost, SimplePost } from "@/model/post";
import useSWR from "swr";
import Avatar from "../../Avatar";
type Props = {
  postData: SimplePost;
};
export default function DetailPostModal({
  postData: { createdAt, id, image, likes, text, userImage, username },
}: Props) {
  const headerData = { createdAt, username, userImage, id };
  const InputData = { likes, username, text };
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className=" min-w-[850px] flex h-full overflow-hidden justify-center items-center ">
      <DetailModalContents image={image} />
      <div className="h-full flex flex-col  bg-white rounded-r-sm basis-2/5 min-w-[405px] max-w-[500px] justify-between">
        <div className="">
          <DetailModalHeader headerData={headerData} />
          <ul>
            {comments &&
              comments.map((comment, index) => {
                return (
                  <li key={index} className=" flex items-center mb-1">
                    <Avatar
                      border={username === comment.username}
                      size="sm"
                      image={comment.userImage}
                    />
                    <div>
                      <span>{comment.username}</span>
                      <span>{comment.comment}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <DetailModalInput inputData={InputData} />
      </div>
    </section>
  );
}
