"use client";
import React from "react";
import ColorButton from "../ui/ColorButton";
import { signOut } from "next-auth/react";

export default function Menu() {
  return (
    <div className=" absolute ml-64 max-lap:ml-20 w-60 bg-secondary ">
      <ul>
        <ColorButton buttonColor="white" onClick={signOut} text="로그아웃" />
      </ul>
    </div>
  );
}
