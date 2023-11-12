"use client";
import React from "react";
import DetailModalHeader from "./DetailModalHeader";
import DetailModalComments from "./DetailModalComments";
import DetailModalInput from "./DetailModalInput";
import DetailModalContents from "./DetailModalContents";
import { SimplePost } from "@/model/post";
import useSWR from "swr";
type Props = {
  postData: SimplePost;
};
export default function DetailPostModal({
  postData: { createdAt, id, image, likes, text, userImage, username },
}: Props) {
  const headerData = { createdAt, username, userImage, id };
  const InputData = { likes, username, text };
  const { data } = useSWR(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log("🚀 ~ file: DetailPostModal.tsx:19 ~ data:", data);
  return (
    <div className=" flex h-full w-auto flex-col justify-center items-center bg-primary">
      <div className="h-full flex justify-center mx-16  my-6 ">
        <DetailModalContents image={image} />
        <div className="h-full flex flex-col  max-tablet:hidden  shrink  bg-secondary rounded-r-sm">
          <DetailModalHeader headerData={headerData} />
          <DetailModalComments />
          <DetailModalInput inputData={InputData} />
        </div>
      </div>
    </div>
  );
}

function calculateModalHeight(height?: number): string {
  return ` h-full  flex justify-center mx-16  my-6 overflow-hidden `;
}
