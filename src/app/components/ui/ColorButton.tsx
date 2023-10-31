import React from "react";
import clsx from "clsx";
type Props = {
  onClick: () => void;
  text: string;
  buttonColor: "blue" | "white";
};
export default function ColorButton({ onClick, text, buttonColor }: Props) {
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
      {text}
    </button>
  );
}
