import React, { useEffect } from "react";
import Image from "next/image";
import gun from "@/image/gun.png";
import cow from "@/image/cow.jpeg";

export default function DetailModalContents() {
  return (
    <div className=" flex justify-center items-center   bg-primary box-border overflow-hidden">
      <Image
        onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          console.log(e.currentTarget.height)
        }
        id="ModalImage"
        alt=""
        src={cow}
        className=" object-contain w-full h-full"
      ></Image>
    </div>
  );
}
