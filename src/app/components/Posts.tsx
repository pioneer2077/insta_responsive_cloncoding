"use client";
import React from "react";
import PostItem from "./PostItem";
import useSWR from "swr";
import { urlFor } from "../service/sanityImage";
import { SimplePost } from "@/model/post";

export default function Posts() {
  const { data: postsData, isLoading } = useSWR<SimplePost[]>("api/posts");

  return (
    <section className="w-full flex-col flex items-center mt-10">
      {isLoading && <p>로딩중</p>}
      {postsData && postsData.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : postsData && postsData.length > 0 ? (
        postsData.map((post: SimplePost, i: number) => {
          return (
            <PostItem postData={post} key={postsData[i].id} priority={i < 2} />
          );
        })
      ) : null}
    </section>
  );
}
