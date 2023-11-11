import React from "react";
type Props = {
  onClose: () => void;
  isOpen: boolean;
};
export default function Modal({ onClose, isOpen }: Props) {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div
      onClick={onClose}
      className=" w-screen h-screen bg-primary/70 absolute z-10"
    ></div>
  );
}
