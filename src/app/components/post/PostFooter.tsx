"use client";
import React, { useState } from "react";
import CommentForm from "../CommentForm";
import ActionBar from "../ActionBar";
import Modal from "../modal/Modal";
import { createPortal } from "react-dom";
import DetailPostModal from "../modal/detailModal/DetailPostModal";
import { SimplePost } from "@/model/post";
import PostModal from "../modal/detailModal/PostModal";
type Props = {
  postData: SimplePost;
};
export default function PostFooter({
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
  const [showModal, setShowModal] = useState(false);
  const props = {
    comments,
    createdAt,
    id,
    image,
    likes,
    text,
    userImage,
    username,
  };
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
      {showModal && (
        // <Modal
        //   children={<DetailPostModal postData={props} />}
        //   isOpen={showModal}
        //   onClose={() => setShowModal(false)}
        // />
        <Modal>
          <PostModal onClose={() => setShowModal(false)}>
            <DetailPostModal postData={props} />
          </PostModal>
        </Modal>
      )}
    </div>
  );
}
