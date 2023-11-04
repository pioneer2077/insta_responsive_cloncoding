import React from "react";
import Avatar from "./Avatar";
type Props = {
  image?: string;
  title: string;
  description: string;
};
export default function UserButton({ description, image, title }: Props) {
  return (
    <div className=" flex items-center">
      <Avatar big={false} border={false} image={image} />
      <div className=" pl-3">
        <p className=" text-sm font-semibold">{title}</p>
        <p className=" text-sm leading-4 font-medium text-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
