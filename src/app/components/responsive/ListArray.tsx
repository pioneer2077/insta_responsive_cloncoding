import ROUTES from "@/app/routes";
import { INavItem } from "@/app/type/nav";
import {
  AddPost,
  Clicked_Home_icon,
  Clicked_Search_Icon,
  Home_icon,
  Search,
} from "@/image/nav";
import React from "react";
import NavItem from "../NavItem";

export default function ListArray() {
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
    <ul className="">
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
  );
}
