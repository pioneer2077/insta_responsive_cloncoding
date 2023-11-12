"use client";
import React from "react";
import DetailModalHeader from "./DetailModalHeader";
import DetailModalComments from "./DetailModalComments";
import DetailModalInput from "./DetailModalInput";
import DetailModalContents from "./DetailModalContents";
import { SimplePost } from "@/model/post";
type Props = {
  postData: SimplePost;
};
export default function DetailPostModal({
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
}: Props) {
  return (
    <div className=" flex h-screen w-screen flex-col justify-center items-center">
      <div
        className={calculateModalHeight(700)}
        onClick={(e) => e.stopPropagation()}
      >
        <DetailModalContents image={image} />

        <div className="h-full flex flex-col  min-w-[400px] max-w-[500px]  max-tablet:hidden  shrink  bg-secondary rounded-r-sm">
          <DetailModalHeader />
          <DetailModalComments />
          <DetailModalInput />
        </div>
      </div>
    </div>
  );
}

function calculateModalHeight(height?: number): string {
  return ` h-full  flex justify-center mx-16  my-6 overflow-hidden `;
}
