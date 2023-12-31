import React, { useEffect } from "react";
import Image from "next/image";
import gun from "@/image/gun.png";
import cow from "@/image/cow.jpeg";
import mon from "@/image/mon.jpeg";
type Props = {
  image: string;
};
export default function DetailModalContents({ image }: Props) {
  return (
    <div className=" h-full max-tablet:h-auto justify-center items-center bg-[#000000] overflow-hidden basis-3/5  flex">
      <Image
        id="ModalImage"
        alt="postImage"
        src={image}
        width={500}
        height={500}
        className=" object-contain w-full h-full"
      ></Image>
    </div>
  );
}
