"use client";
import React from "react";
import Avatar from "./Avatar";
import useSWR from "swr";
import { User } from "@/model/user";
import axios from "axios";
import { getProfile } from "@/fetcher/user";
import dotenv from "dotenv";
import { ScaleLoader } from "react-spinners";
import FollowUserCarousel from "./FollowUserCarousel";

dotenv.config();
type Props = {
  user: User;
};
export default function FollowingBar({
  user: { image, name, email, username },
}: Props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: followUserData,
    error,
    isLoading,
  } = useSWR(
    "https://fgty6diy.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%22user%22]",
    fetcher
  );

  return (
    <div className=" h-full w-full">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ScaleLoader />
        </div>
      ) : followUserData ? (
        <div className=" pt-4">
          <FollowUserCarousel user={followUserData.result} />
        </div>
      ) : null}
    </div>
  );
}
