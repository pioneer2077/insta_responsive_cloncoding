"use client";
import React from "react";
import Avatar from "./Avatar";
import ColorButton from "./ui/ColorButton";
import NavItemUser from "./ui/NavItemUser";
import { useSession } from "next-auth/react";
import { User } from "@/model/user";
type Props = {
  user: User;
};
export default function ShowMeMain({
  user: { name, username, email, image },
}: Props) {
  return (
    <NavItemUser
      onClick={() => null}
      discription={email}
      title={username}
      image={image}
      text="전환"
    />
  );
}
// import React from "react";

// export default function ShowMeMain() {
//   return <div>ShowMeMain</div>;
// }
