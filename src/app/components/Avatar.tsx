import React from "react";
import clsx from "clsx";

type Props = {
  image?: string | null;
  big: boolean;
  border: boolean;
};
export default function Avatar({ image, big, border }: Props) {
  return (
    <div className={getBigCircleStyle(big, border)}>
      <div className={getSmallCircleStyle(big)}>
        <img src={image ?? undefined} alt="user profile" />
      </div>
    </div>
  );
}

function getBigCircleStyle(big: boolean, border: boolean): string {
  return clsx({
    "w-12 h-12": big === false,
    "w-56px h-56px": big === true,
    "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300":
      border === true,
    "rounded-full overflow-hidden flex justify-center items-center": true,
  });
}

function getSmallCircleStyle(big: boolean): string {
  return clsx({
    "w-11 h-11": big === false,
    "w-52px h-52px": big === true,
    "rounded-full overflow-hidden": true,
  });
}
