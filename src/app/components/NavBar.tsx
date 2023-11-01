"use client";
import Link from "next/link";
import React, { useState } from "react";
import ColorButton from "./ui/ColorButton";
import { INavItem } from "../type/nav";
import {
  AddPost,
  Clicked_Home_icon,
  Clicked_Search_Icon,
  Home_icon,
  Instagram,
  Instagram_logo,
  Search,
  Nav_hamburger,
} from "@/image/nav/index";
import NavItem from "./NavItem";
import ROUTES from "../routes";
import { signIn, signOut, useSession } from "next-auth/react";
import SvgButton from "./ui/SvgButton";

export default function NavBar() {
  const { data: session, status } = useSession();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
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
      {(session === null && (
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
      )) || (
        <nav className=" sticky top-0 left-0 border-r p-3 h-screen max-w-244px max-tablet:hidden max-desktop:max-w-72px">
          {/* <nav className=" bg-secondary flex-col justify-between fixed top-0 left-0 z-10 border-r px-3 py-3  min-h-100vh max-tablet:hidden desktop:min-w-244px"> */}

          <div className="">
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
                  />
                );
              })}
            </ul>
            {isMenuVisible && (
              <div className=" absolute max-lap:ml-20 w-60 bg-secondary ">
                <ul>
                  <ColorButton
                    buttonColor="white"
                    onClick={signOut}
                    text="로그아웃"
                  />
                </ul>
              </div>
            )}
            <div className="bottom-0 pb-3">
              <SvgButton
                title="더보기"
                onClick={toggleMenu}
                svg={<Nav_hamburger />}
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
