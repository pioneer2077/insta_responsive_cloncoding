import { urlFor } from "@/app/service/sanityImage";
import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  priority?: boolean;
};
export default function PostContent({ image, priority = false }: Props) {
  return (
    <div className=" w-full h-auto flex justify-center ">
      <div className="w-[468px]">
        <Image
          alt="post image"
          src={image}
          width={468}
          height={500}
          priority={priority}
          className=" w-full h-auto object-cover rounded-[4px] shadow-sm"
        />
      </div>
    </div>
  );
}
