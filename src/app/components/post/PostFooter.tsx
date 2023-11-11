"use client";
import React, { useState } from "react";
import CommentForm from "../CommentForm";
import ActionBar from "../ActionBar";
import Modal from "../modal/Modal";
import { createPortal } from "react-dom";
type Props = {
  likes: string[];
  comments: number;
  text: string;
  username: string;
};
export default function PostFooter({ username, comments, likes, text }: Props) {
  const [showModal, setShowModal] = useState(false);
  const portal = document.getElementById("portal");

  return (
    <div>
      <ActionBar />
      <div className=" pl-1 flex flex-col gap-1">
        <p className=" text-sm font-bold ">좋아요 {likes.length ?? 0}개</p>
        <div className=" flex items-center">
          <p className=" text-sm font-semibold">{username}</p>
          &nbsp;
          <p className=" text-sm">{text}</p>
        </div>
        <p
          className=" text-sm text-[#737373] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          댓글 {comments ?? 0}개 모두 보기
        </p>
      </div>
      <div className=" ml-1 flex items-center w-full">
        <CommentForm />
      </div>
      {showModal &&
        createPortal(
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} />,
          portal!
        )}
    </div>
  );
}
