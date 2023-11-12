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
    <div className=" justify-center items-center bg-[#000000] overflow-hidden pr-[1px]">
      <Image
        onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          console.log(e.currentTarget.height)
        }
        id="ModalImage"
        alt=""
        width={500}
        height={500}
        src={image}
        className="  object-contain w-full h-full"
      ></Image>
    </div>
  );
}

{
  /*  */
}
