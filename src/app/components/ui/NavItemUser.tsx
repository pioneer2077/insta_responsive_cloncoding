import React from "react";
import Avatar from "../Avatar";
import ColorButton from "./ColorButton";
import UserButton from "../UserButton";
type Props = {
  image?: string;
  title: string;
  description: string;
  onClick: () => void;
  text: "전환" | "팔로우";
};
export default function NavItemUser({
  description,
  title,
  image,
  text,
}: Props) {
  const props = { description, title, image };
  return (
    <div className=" flex items-center  py-1 px-4 justify-between ">
      <UserButton {...props} />
      <ColorButton
        buttonColor="white"
        onClick={() => null}
        text={text}
        textSize="sm"
      />
    </div>
  );
}
