"use client";
import { Instagram, Instagram_logo } from "@/image/nav";
import Link from "next/link";
import React from "react";
import ListArray from "./ListArray";

export default function desktopNavbar() {
  const [foldNave, setFoldNave] = React.useState(false);
  const toggleFoldNav = () => {
    setFoldNave(!foldNave);
  };
  return (
    <div>
      <div className=" h-[70px] flex items-center justify-start pl-3 mb-5 pt-4">
        <Link href={"/"}>
          <Instagram className={toggleNavIcon(foldNave, "icon")} />
          <Instagram_logo className={toggleNavIcon(foldNave, "logo")} />
        </Link>
      </div>
      <ListArray />
    </div>
  );
}

function toggleNavIcon(foldNave: boolean, logoOrIcon: "logo" | "icon") {
  if (foldNave) {
    if (logoOrIcon === "logo") {
      return "block  hidden max-desktop:block";
    } else {
      return "hidden max-desktop:hidden";
    }
  } else {
    if (logoOrIcon === "logo") {
      return "hidden hidden max-desktop:block";
    } else {
      return "block max-desktop:hidden";
    }
  }
}
