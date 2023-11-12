import React from "react";
import Exit from "@/image/post/Exit.svg";
type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ children, onClose }: Props) {
  return (
    <section
      className=" fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-10 bg-[#1c1e21]/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className=" fixed top-0 right-0 p-4 text-white font-bold"
        onClick={() => {
          onClose();
        }}
      >
        <Exit />
      </button>
      {children}
    </section>
  );
}
