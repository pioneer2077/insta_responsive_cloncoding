"use client";
import React from "react";
import useSWR from "swr";
import { User } from "@/model/user";
import dotenv from "dotenv";
import { ScaleLoader } from "react-spinners";
import FollowUserCarousel from "./FollowUserCarousel";

dotenv.config();

export default function FollowingBar() {
  const { data, isLoading } = useSWR("api/me");
  return (
    <div className=" h-28 w-full">
      <div className=" h-full w-full">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ScaleLoader />
          </div>
        ) : data ? (
          <div className="h-full w-full pt-4 ">
            <FollowUserCarousel user={data.following} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
