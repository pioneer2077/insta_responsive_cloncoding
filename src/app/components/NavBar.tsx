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
import Avatar from "./Avatar";
import Menu from "./menu/Menu";
import TabletHeader from "./responsive/TabletHeader";
import ListArray from "./responsive/ListArray";
import DesktopNavbar from "./responsive/desktopNavbar";
import UnauthenticatedHomeNav from "./responsive/UnauthenticatedHomeNav";
export default function NavBar() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
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
      {status === "unauthenticated" ? (
        <UnauthenticatedHomeNav />
      ) : (
        <div>
          <nav className="border-[1px] h-full border-[#dbdbdb] border-solid border-t-0 border-b-0 border-l-0 fixed top-0 left-0 bottom-0 px-3 py-3  min-h-100vh max-tablet:hidden desktop:min-w-244px justify-between">
            <DesktopNavbar />
            {isMenuVisible && <Menu />}
            <div className="">
              <SvgButton
                hoverEffect="bg"
                title="더보기"
                onClick={toggleMenu}
                svg={<Nav_hamburger />}
              />
              {user && (
                <Link href={`/user/${user.username}`}>
                  <Avatar size={"md"} border={true} image={user.image} />
                </Link>
              )}
            </div>
          </nav>
          <TabletHeader />
        </div>
      )}
    </>
  );
}
