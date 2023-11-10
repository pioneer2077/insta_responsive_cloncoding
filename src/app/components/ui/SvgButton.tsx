import clsx from "clsx";
import React from "react";

type Props = {
  svg: React.ReactNode;
  onClick: () => void;
  title?: string;
  id?: string;
  hoverEffect?: "bg" | "svg" | "both";
  transition?: "size";
  hoverArea?: "lg" | "md";
};
export default function SvgButton({
  title,
  svg,
  onClick,
  id,
  hoverEffect,
  transition,
  hoverArea,
}: Props) {
  return (
    <button
      id={id}
      className={clsx({
        " hover:text-hoverGray w-auto": hoverEffect === "svg",
        "hover:bg-secondary": hoverEffect === "bg",
        "  delay-100 flex w-full p-3  rounded-md items-center justify-start  cursor-pointer ":
          true,
        // "p-2": hoverArea === "md",
        // " transition-text duration-500 ease-in-out text-lg hover:text-x4l ":
        //   transition === "size",
      })}
      onClick={onClick}
    >
      {svg}
      {title && <p className=" pl-4  max-desktop:hidden ">{title}</p>}
    </button>
  );
}
