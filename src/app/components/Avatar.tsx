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
        <div className="rounded-full overflow-hidden h-[58px] w-[58px]">
          <img
            className="object-cover h-full w-full"
            src={image ?? undefined}
            alt="user profile"
          />
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
    "flex justify-center items-center rounded-full overflow-hidden w-11 h-11 bg-white":
      big === false,
    "flex justify-center items-center rounded-full overflow-hidden w-[61px] h-[61px] bg-white":
      big === true,
  });
}
