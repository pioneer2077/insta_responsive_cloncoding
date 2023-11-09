"use client";
import React from "react";

import NavItemUser from "./ui/NavItemUser";

import useSWR from "swr";
import { UserData } from "../type/user";

export default function ShowMeMain() {
  const { data: LoginUserInfo, isLoading } = useSWR<UserData>("api/me");

  return !LoginUserInfo ? (
    <>스켈레톤</>
  ) : (
    <NavItemUser
      onClick={() => null}
      description={LoginUserInfo.id}
      title={LoginUserInfo.name}
      image={LoginUserInfo.image}
      text="전환"
    />
  );
}
