"use client";
import React from "react";
import useSWR from "swr";
import dotenv from "dotenv";
import { ScaleLoader } from "react-spinners";
import FollowUserCarousel from "./FollowUserCarousel";
import { UserData } from "../type/user";

dotenv.config();

export default function FollowingBar() {
  const { data, isLoading } = useSWR<UserData>("api/me");
  return (
    <div className=" h-28 w-full">
      <div className=" h-full w-full">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ScaleLoader />
          </div>
        ) : (
          (!data || data.following.length === 0) && <>팔로워가없어...</>
        )}
        {data && data.following.length > 0 && (
          <FollowUserCarousel user={data.following} />
        )}
      </div>
    </div>
  );
}
