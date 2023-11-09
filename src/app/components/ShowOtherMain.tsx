"use client";
import React from "react";
import NavItemUser from "./ui/NavItemUser";
import useSWR from "swr";
import { UserData } from "../type/user";
import { ScaleLoader } from "react-spinners";
import FollowUserCarousel from "./FollowUserCarousel";

export default function ShowOtherMain() {
  const { data: LoginUserInfo, isLoading } = useSWR<UserData>("api/me");

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ScaleLoader />
        </div>
      ) : (
        (!LoginUserInfo || LoginUserInfo.following.length === 0) && (
          <>팔로워가없어...</>
        )
      )}
      {LoginUserInfo && LoginUserInfo.following.length > 0 && (
        <NavItemUser
          onClick={() => null}
          description={LoginUserInfo.id}
          title={LoginUserInfo.name}
          image={LoginUserInfo.image}
          text="팔로우"
        />
      )}
    </>
  );
}
