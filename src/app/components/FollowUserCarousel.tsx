import React from "react";
import { Follower } from "../type/user";
import Avatar from "./Avatar";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import LeftArrow from "@/image/LeftArrow.svg";
import RightArrow from "@/image/RightArrow.svg";
type Props = {
  user: Follower[];
};

const CustomLeftArrow = ({ onClick }: ArrowProps): React.ReactNode => {
  return (
    <button
      className="mb-3 right-[590px] absolute text-2xl  rounded-full cursor-pointer"
      onClick={onClick}
    >
      <LeftArrow className=" fill-white h-6 w-6" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }: ArrowProps): React.ReactNode => {
  return (
    <button
      className="mb-3 left-[590px] absolute text-2xl  rounded-full cursor-pointer"
      onClick={onClick}
    >
      <RightArrow className=" fill-white h-6 w-6" />
    </button>
  );
};
export default function FollowUserCarousel({ user }: Props) {
  const responsive = {
    all: {
      breakpoint: { max: 1000000, min: 0 },
      items: 8,
    },
  };
  return (
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      containerClass="h-full w-full relative"
      responsive={responsive}
    >
      {user.map((item: Follower) => {
        return (
          <Link
            href={`/user/${item.username}`}
            key={item.username}
            className="flex-col h-20 flex justify-around items-center cursor-pointer"
          >
            <Avatar big={true} border={true} image={item.image} />
            <p className=" text-xs">{item.username}</p>
          </Link>
        );
      })}
    </Carousel>
  );
}
