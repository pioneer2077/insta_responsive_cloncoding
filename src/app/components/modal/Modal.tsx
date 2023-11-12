import React from "react";
type Props = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

export default function Modal({ onClose, isOpen, children }: Props) {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  }
  const exitModal = () => {
    onClose();
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };
  return (
    <div
      onClick={exitModal}
      className=" w-screen h-screen bg-[#1c1e21]/70 fixed z-10"
    >
      <div>{children}</div>
    </div>
  );
}
