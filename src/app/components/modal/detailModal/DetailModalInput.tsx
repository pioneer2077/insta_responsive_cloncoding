import React from "react";
import ActionBar from "../../ActionBar";
import CommentForm from "../../CommentForm";
type Props = {
  inputData: {
    likes: string[];
    username: string;
    text: string;
    comments: number;
  };
};
export default function DetailModalInput({
  inputData: { likes, username, text, comments },
}: Props) {
  return (
    <div>
      <ActionBar />
      <div className=" pl-1 flex flex-col gap-1">
        <p className=" text-sm font-bold ">좋아요 {likes.length ?? 0}개</p>
      </div>
      <div className=" ml-1 flex items-center w-full">
        <CommentForm />
      </div>
    </div>
  );
}
