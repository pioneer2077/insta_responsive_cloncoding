import { Instagram, Instagram_logo } from "@/image/nav";
import Link from "next/link";
import React from "react";
import ListArray from "./ListArray";

export default function desktopNavbar() {
  return (
    <div>
      <div className=" h-[70px] flex items-center justify-start pl-3 mb-5 pt-4">
        <Link href={"/"}>
          <Instagram className=" max-desktop:hidden" />
          <Instagram_logo className=" hidden max-desktop:block" />
        </Link>
      </div>
      <ListArray />
    </div>
  );
}
