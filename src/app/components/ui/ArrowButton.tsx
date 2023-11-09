import React from "react";
import LeftArrow from "@/image/LeftArrow.svg";
import RightArrow from "@/image/RightArrow.svg";
import clsx from "clsx";

type Props = {
  onClick?: () => void;
  direction: "left" | "right";
};
export default function ArrowButton({ onClick, direction }: Props) {
  return (
    <button
      className={clsx({
        "left-[590px]": direction === "right",
        "right-[590px]": direction === "left",
        "mb-3 absolute text-2xl  rounded-full cursor-pointer": true,
      })}
      onClick={onClick}
    >
      {direction === "left" ? (
        <LeftArrow className=" fill-white h-6 w-6" />
      ) : (
        <RightArrow className=" fill-white h-6 w-6" />
      )}
    </button>
  );
}
