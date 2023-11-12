"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, []);

  const node = document.getElementById("portal") as Element;

  if (!node) {
    return null;
  }

  return ReactDOM.createPortal(children, node);
}
