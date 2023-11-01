import React from "react";

type Props = {
  svg: React.ReactNode;
  onClick: () => void;
  title: string;
  id?: string;
};
export default function SvgButton({ title, svg, onClick, id }: Props) {
  return (
    <button
      id={id}
      className="flex w-full p-3 my-1 rounded-md items-center justify-start hover:bg-secondary cursor-pointer "
      onClick={onClick}
    >
      {svg}
      <p className=" pl-4  max-desktop:hidden ">{title}</p>
    </button>
  );
}
