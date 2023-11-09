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
        <div className=" flex justify-center border-b">
          <div className=" w-screen lap:max-w-1152px flex justify-between h-14 items-center px-5">
            <div className=" flex h-full w-40 text-3xl items-center">
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
      ) : (
        // <nav className=" fixed top-0 left-0 border-r p-3 h-screen max-w-244px max-tablet:hidden max-desktop:max-w-px">
        <div>
          <nav className="border-[1px] h-full border-[#dbdbdb] border-solid border-t-0 border-b-0 border-l-0 fixed top-0 left-0 bottom-0 px-3 py-3  min-h-100vh max-tablet:hidden desktop:min-w-244px justify-between">
            <div>
              <div className=" h-[70px] flex items-center justify-start pl-3 mb-5">
                <Link href={"/"}>
                  <Instagram className=" max-desktop:hidden" />
                  <Instagram_logo className=" hidden max-desktop:block" />
                </Link>
              </div>
              <ul className="">
                {listArray.map(
                  ({ clickedIcon, href, icon, title }: INavItem) => {
                    return (
                      <NavItem
                        key={title}
                        href={href}
                        title={title}
                        icon={icon}
                        clickedIcon={clickedIcon}
                      />
                    );
                  }
                )}
              </ul>
            </div>
            {isMenuVisible && (
              <div className=" absolute ml-64 max-lap:ml-20 w-60 bg-secondary ">
                <ul>
                  <ColorButton
                    buttonColor="white"
                    onClick={signOut}
                    text="로그아웃"
                  />
                </ul>
              </div>
            )}
            <div className="">
              <SvgButton
                title="더보기"
                onClick={toggleMenu}
                svg={<Nav_hamburger />}
              />
              {user && (
                <Link href={`/user/${user.username}`}>
                  <Avatar big={false} border={true} image={user.image} />
                </Link>
              )}
            </div>
          </nav>
          <div className=" bg-white z-10 justify-between items-center w-full  hidden max-tablet:flex border-[1px] border-[#dbdbdb] border-solid border-t-0 border-r-0 border-l-0  px-3 py-3">
            <Instagram />
            <div>
              <div>검색창</div>
              <div>하트</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
