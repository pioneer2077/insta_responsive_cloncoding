import React from "react";
import clsx from "clsx";
type Props = {
  onClick: () => void;
  text: string;
  buttonColor: "blue" | "white";
  textSize?: "sm" | "md";
};
export default function ColorButton({
  onClick,
  text,
  buttonColor,
  textSize,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx({
        "bg-primary rounded-md px-4 py-1.5 font-medium text-sm text-white cursor-pointer":
          buttonColor === "blue",
        "rounded-md px-4 py-1.5 font-medium text-sm text-blue cursor-pointer":
          buttonColor === "white",
      })}
    >
      {textSize === "sm" ? <p className=" text-xs">{text}</p> : <p>{text}</p>}
    </button>
  );
}
