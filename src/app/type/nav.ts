import React from "react";
import ROUTES from "../routes";
export interface INavItem {
  href: string;
  icon: React.ReactNode;
  clickedIcon: React.ReactNode;
  title: string;
}
