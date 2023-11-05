"use client";
import React from "react";
import Avatar from "./Avatar";
import useSWR from "swr";
import { User } from "@/model/user";
import axios from "axios";
import { getProfile } from "@/fetcher/user";
import dotenv from "dotenv";
import { ScaleLoader } from "react-spinners";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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
  if (followUserData) {
    console.log(followUserData.result);
  }
  return (
    <div className="px- h-full w-full flex gap-4 items-center overflow-hidden border border-solid border-sl">
      {followUserData ? (
        <Carousel responsive={responsive}>
          {followUserData.result.map((item: any, i: any) => {
            return (
              <button
                key={i}
                className="flex-col h-20 flex justify-around items-center"
              >
                <Avatar
                  big={true}
                  border={true}
                  image={followUserData.result[i].image}
                />
                <p className=" text-xs">{followUserData.result[i].name}</p>
              </button>
            );
          })}
        </Carousel>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <ScaleLoader />
        </div>
      )}
    </div>
  );
}
