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
        <div className="rounded-full overflow-hidden flex items-center justify-center">
          <img src={image ?? undefined} alt="user profile" />
        </div>
      </div>
    </div>
  );
}

function getBigCircleStyle(big: boolean, border: boolean): string {
  return clsx({
    "w-12 h-12": big === false,
    "w-[66px] h-[66px]": big === true,
    "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300":
      border === true,
    "rounded-full overflow-hidden flex justify-center items-center": true,
  });
}

function getSmallCircleStyle(big: boolean): string {
  return clsx({
    "w-11 h-11": big === false,
    "w-[61px] h-[61px] bg-white": big === true,
    "rounded-full overflow-hidden": true,
  });
}
