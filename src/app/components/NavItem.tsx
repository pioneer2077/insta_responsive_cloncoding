import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type Props = {
  href: string;
  title: string;
  icon: React.ReactNode;
  clickedIcon?: React.ReactNode;
};
export default function NavItem({ href, icon, title, clickedIcon }: Props) {
  const pathname = usePathname();
  return (
    <li className=" flex w-full h-14 ">
      <div className=" flex w-full pl-3 my-1 rounded-md items-center justify-start hover:bg-secondary cursor-pointer">
        <Link href={href} className=" flex">
          {pathname === href ? clickedIcon : icon}
          <p className=" pl-4  max-desktop:hidden ">{title}</p>
        </Link>
      </div>
    </li>
  );
}
