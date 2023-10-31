"use client";
import Link from "next/link";
import React from "react";
import { INavItem } from "../type/nav";
import ColorButton from "./ui/ColorButton";
import {
  AddPost,
  Clicked_Home_icon,
  Clicked_Search_Icon,
  Home_icon,
  Instagram,
  Instagram_logo,
  Search,
} from "@/image/nav/index";
import NavItem from "./NavItem";
import ROUTES from "../routes";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const listArray: INavItem[] = [
    {
      title: "홈",
      href: ROUTES.HOME.HOME,
      icon: <Home_icon />,
      clickedIcon: <Clicked_Home_icon />,
    },
    {
      title: "검색",
      href: ROUTES.SEARCH.HOME,
      icon: <Search />,
      clickedIcon: <Clicked_Search_Icon />,
    },
    {
      title: "탐색",
      href: ROUTES.POST.HOME,
      icon: <AddPost />,
      clickedIcon: <AddPost />,
    },
  ];
  return (
    <>
      {(false && (
        <nav className=" fixed top-0 left-0 z-10 border px-3 py-2 box-border min-h-100vh max-tablet:hidden desktop:min-w-244px border-y-0">
          <div className=" w-full h-24 flex items-center justify-start pl-3">
            <Link href={"/"}>
              <Instagram className=" max-desktop:hidden" />
              <Instagram_logo className=" hidden max-desktop:block" />
            </Link>
          </div>
          <ul className="min-w-48px ">
            {listArray.map(({ clickedIcon, href, icon, title }: INavItem) => {
              return (
                <NavItem
                  key={title}
                  href={href}
                  title={title}
                  icon={icon}
                  clickedIcon={clickedIcon}
                  path={href}
                />
              );
            })}
          </ul>
        </nav>
      )) || (
        <div className=" flex justify-center border-b">
          <div className=" w-screen lap:max-w-1152px flex justify-between h-14 items-center px-5">
            <div className=" flex h-full w-40 bg-amber-300 text-3xl items-center">
              <Instagram />
            </div>
            <div className=" flex">
              <ColorButton
                buttonColor="blue"
                onClick={() => {
                  signIn();
                }}
                text="로그인"
              />
              <ColorButton
                buttonColor="white"
                onClick={() => null}
                text="가입하기"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}